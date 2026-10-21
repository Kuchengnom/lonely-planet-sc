# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

An unofficial "Lonely Planet" travel guide for Star Citizen, published as a static Astro site at `https://kuchengnom.github.io/lonely-planet-sc/`. The site is editorial content — narrative guide pages for in-game locations — not a database or app. There is no backend, no auth, no client-side data fetching, no content collections.

Astro 6 + MDX + Tailwind v4, deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Commands

```bash
npm run dev            # dev server at http://localhost:4321
npm run build          # static build → dist/
npm run preview        # serve dist/ (run build first)
npm run test:scripts   # node --test over scripts/*.test.js (17 tests)
npm run build:od       # build + inline CSS/JS into self-contained pages in od-export/
npm run sync:tokens -- <exported.html>   # patch src/styles/design-system.css from an Open Design export
```

The only tests in the repo are for the two build scripts. Run one file, or one test:

```bash
node --test scripts/inline-pages.test.js
node --test scripts/sync-tokens.test.js
node --test --test-name-pattern="flattens nested" scripts/inline-pages.test.js
```

Type checking (not wired into a script — invoke directly):

```bash
npx astro check
```

**`astro check` does not currently pass** — it reports ~86 pre-existing errors (missing `@types/node`, `EventTarget`/`Element` narrowing in client scripts, MDX-in-`tsc` parse noise, unused vars). It is not a CI gate. Don't read its output as a regression signal, and don't fix all of it incidentally — scope any cleanup to what you touched. `@types/node` is missing from `devDependencies`, which is the root of several errors.

There is no linter and no formatter configured. `git diff --check` is used to catch whitespace errors.

**CI runs `npm run build` and nothing else** — no tests, no typecheck. `npm run test:scripts` is a local convention (~50 ms) that the TODO.md "Review" sections cite as the verification step, but nothing enforces it. Run it yourself before committing.

## Architecture

### There is no data layer. Routes are files on disk.

`grep -rn "getStaticPaths\|getCollection"` across `src/` returns zero hits. There is no `src/content.config.ts`. Every route is a hand-authored file, and Astro's default file-based routing does everything. `src/pages/` mirrors the URL tree exactly:

```
src/pages/stanton/index.mdx                              → /stanton/                    (system / "Edition")
src/pages/stanton/microtech/index.mdx                     → /stanton/microtech/          (planet guide)
src/pages/stanton/microtech/northern-wastes/the-river.mdx → /stanton/microtech/northern-wastes/the-river/
src/pages/stanton/phds/locations/daymar-biodome/index.mdx → /stanton/phds/locations/daymar-biodome/
```

Adding a page means adding a file. There is no registry to update.

### Three unconnected data paths — know which one you're in

**Path A — YAML frontmatter (POI pages).** `src/pages/stanton/microtech/northern-wastes/the-river.mdx` frontmatter is the single source of truth for that page:

```yaml
layout: '../../../../layouts/POILayout.astro'
title: "The River"
system: "Stanton"
planet: "MicroTech"
region: "Equatorial Tundra"
type: "natural-wonder"
difficulty: "Easy"
coordinates: "808.662 / 417.866 / 415.655"
required_gear: ["Cold Weather Suit"]
vibe: "Serene"
rating: 5
hero_image: "/images/microtech/ships-on-lake.jpeg"
```

The schema is **hand-duplicated** as a TS `interface Frontmatter` inside each layout — `POILayout.astro` and `SystemHeader.astro` each declare their own `type` union and **they already disagree**. `POIBadge.astro` holds the real 10-value map; `POILayout` still lists only 4. Changing a layout's contract means editing the interface at the top of that layout, and the unions are out of sync with real content today (PHDS pages use `mystery`, `observation-point`, `anomaly`, `photo-spot`).

**Path B — inline component props (guide pages).** Planet and system guides don't use a registry. Each sight is an inline `<AttractionEntry>` with its own props:

```mdx
<AttractionEntry number={1} title="The First River" category="natural-wonder"
  image="/images/microtech/ships-on-lake.jpeg" imageAlt="Ships parked at the edge...">
```

`AttractionEntry` maps `category` → label + color via a local `CATEGORY_CONFIG` of **5** values (`natural-wonder`, `hidden-find`, `settlement`, `practical`, `urban-sight`) — a different, smaller taxonomy than `POIBadge`'s 10, using a different name for the same idea (`settlement` vs `urban-sight`).

**Path C — a hardcoded array in the page (PHDS catalog).** `src/pages/phds/index.astro` holds a literal `const entries = [...]` (~16 objects: `href`, `name`, `system`, `planet`, `region`, `type`, `difficulty`, `teaser`, `heroImage`). `PHDSIndex.astro` serialises it into the DOM and derives its filter pills from the data itself, so a new `type`/`difficulty` auto-adds a filter. **Adding a PHDS location requires three edits**: the `.mdx` file, the `entries` array in `src/pages/phds/index.astro`, and the same array in the per-system index page (`src/pages/stanton/phds/index.mdx`, `src/pages/pyro/phds/index.mdx`).

### Two layouts, each owning a full HTML document

There is no shared `BaseLayout`. `src/layouts/` has exactly two, and each renders its own `<!doctype html>` with its own `<head>`. The standalone `.astro` pages (`/`, `/phds/`, `/design-system/`) duplicate that boilerplate a third time.

- **`PlanetLayout.astro`** — system, planet, moon, and station guides. Requires frontmatter: `title`, `system`, `hero_image`, `lead`, `vitals_best_for`, `vitals_climate`, `vitals_hub`, `vitals_currency`, `vitals_ship`, `getting_there`. Optional `region`. Renders a hero, a 4-item facts rail, a 2fr/1fr grid, and a named `explorer` slot.
- **`POILayout.astro`** — individual POIs and PHDS entries. Requires `title`, `system`, `planet`, `region`, `type`, `difficulty`, `coordinates`, `required_gear[]`, `vibe`, `rating`, `hero_image`. Renders a hero plus the `FastFactSidebar`.

Both destructure `Astro.props.frontmatter` — Astro 6 MDX does **not** flatten frontmatter into props. The `layout:` frontmatter path is relative to the MDX file.

**Named-slot composition (currently broken — see below):** `PlanetLayout` checks `Astro.slots.has('explorer')` and renders `<slot name="explorer" />` in the sidebar only when present. MDX pages are written to opt in with `<ExplorerView slot="explorer" author="...">`. **This does not work**: a `slot="explorer"` attribute on a component instance inside the layout's *default* slot does not register a named slot on the layout, so `Astro.slots.has('explorer')` is always false and the Explorer Note never renders. 25 pages are affected. Tracked in TODO.md under "Explorer Note is missing from every guide page".

**Known bug — `ExplorerView`'s `quote`/`name` props don't exist.** The component's `Props` interface declares only `{ author: string }` and renders `<slot />` inside a `<blockquote>`. Three pages use a self-closing `<ExplorerView category="explorer" name="..." quote="..." />` form — `src/pages/stanton/hurston/arial.mdx`, `src/pages/stanton/hurston/aberdeen.mdx`, `src/pages/stanton/arccorp/wala.mdx` — so their quotes render as an empty blockquote with an empty author. If you touch `ExplorerView`, fix this; don't copy the broken usage.

### The badge vocabulary is a closed set, duplicated in three places

`type`/`category` values are string unions checked at build time by the hand-written `Frontmatter` interfaces and mapped to colors in local `X_CONFIG` maps. **There is no shared config module** — the maps are copied across `POIBadge.astro`, `AttractionEntry.astro`, `ActivityEntry.astro`, `WhereToDock.astro`, and `FastFactSidebar.astro`. A value outside a component's local map silently loses its badge color.

`POIBadge` (canonical, 10): `natural-wonder`, `easter-egg`, `urban-sight`, `technical`, `photo-spot`, `anomaly`, `hidden-find`, `mystery`, `abandoned-site`, `observation-point`.

`AttractionEntry` (5): `natural-wonder`, `hidden-find`, `settlement`, `practical`, `urban-sight`.

### Components are prop-driven, not slot-driven

Most content components in `src/components/` take explicit props and render their children as a slot: `AttractionEntry` (`number`, `title`, `category`, `image`, `imageAlt`, `href`), `TouristTip`, `ExplorerView` (`author`), `PHDSIndex` (`entries[]`), `EatingDrinking` (`number`), `WhereToDock` (`title`, `category`, `image`, `imageAlt`), `ActivityEntry`, `TourSchedule`, `TourStop`, `TourTabs`, `CoordinateDisplay`, `VitalStats`, `YouTubeEmbed`.

`TourTabs.astro` is a **CSS-only** tabbed itinerary system (hidden radio inputs + sibling selectors) and hardcodes exactly five slot names: `tab-1`, `tab-2`, `tab-3`, `tab-moon`, `tab-hop`.

MDX pages import components explicitly via the `@components` alias; `.astro` files use relative imports. Both work — `@components` → `/src/components` and `@styles` → `/src/styles` are Vite aliases in `astro.config.mjs`.

### Base path is a live footgun

`astro.config.mjs` sets `base: '/lonely-planet-sc'`. The site is served under that prefix, so **every internal link and image must include it**. Three competing idioms exist in the tree:

- `const base = import.meta.env.BASE_URL.replace(/\/?$/, '/')` — 6 uses
- `const base = import.meta.env.BASE_URL + (import.meta.env.BASE_URL.endsWith('/') ? '' : '/')` — 4 uses
- hardcoded `href="/lonely-planet-sc/stanton/hurston/"` — ~16 in MDX props and prose

All three work today, but `AttractionEntry` passes `href` straight through with **no** prefixing, so a hardcoded one is load-bearing. Match the convention of the file you're editing. This is the #1 place to produce a broken link.

Note the inconsistency in image handling: `PlanetLayout` prefixes `hero_image` with `base`; `POILayout` uses it raw.

### Design tokens

`src/styles/design-system.css` holds ~140 CSS custom properties inside `@layer theme { :root { ... } }`: color scales (`--color-primary-*` = Stanton Cobalt, `--color-secondary-*` = Pyro Magma), POI category colors, difficulty colors, spacing, radii, shadows, z-index. `src/styles/global.css` imports it, then imports `tailwindcss`.

**Tailwind v4 is installed but nearly unused** — there is no `@theme` block anywhere, so Tailwind utilities don't see the tokens. Real styling is hand-written CSS custom properties consumed through scoped `<style>` blocks in each component. Tailwind utilities appear mainly in `src/pages/index.astro` and `src/pages/design-system/index.astro`. Follow the surrounding style of the file you're editing rather than introducing utilities into a CSS-driven component.

**The docs disagree with the tokens.** `DESIGN_SYSTEM.md` and `README.md` both state the fonts are Archivo Narrow / Merriweather / JetBrains Mono. The actual tokens are `--font-display: 'Poppins'`, `--font-body: 'Inter'`, `--font-mono: 'JetBrains Mono'`. Trust the tokens, not the prose docs.

`design-system.css` is the file the Open Design round-trip patches. Change the token, not the component CSS that consumes it.

### Open Design round-trip

`npm run build:od` builds the site then inlines every `_astro/*.css` and `_astro/*.js` into each page as `<style>`/`<script>` blocks, writing self-contained HTML to `od-export/` (flat: `dist/a/b/index.html` → `od-export/a/b.html`). Those files are imported into [Open Design](https://opendesign.dev/) for visual editing; the edited export is read back by `npm run sync:tokens -- <file>`, which diffs the exported CSS variables against `design-system.css` and patches only what changed, printing a before/after diff.

`sync-tokens.js` is the one script that **writes into tracked source**. `od-export/` is gitignored. Structural changes (markup, layout) are made in Astro source, never in the Open Design export.

### PHDS (Project Hidden Discovery Sites)

The cross-system hidden-location database at `src/pages/phds/index.astro`. Filter/visit/bookmark state is client-side `localStorage` (keys `phds_bookmarks`, `phds_visited`). Visited state must only ever be set by an explicit user action, never inferred from hover — `tasks/lessons.md` records this as a durable rule.

### `src/data/` and `data/` are records, not runtime data

Nothing imports them. `src/data/nyx.json` and `src/data/verseguide/{stanton,pyro}.json` are provenance/extraction records — the source-backed fact base the editorial pages were written from. `src/data/nyx.json` is the record of which Nyx destinations are confirmed playable and against which CIG source URLs. Edit it when the underlying fact changes; don't expect a page to update because of it.

`src/data/verseguide/` is the partially-extracted output of an **unfinished** integration (TODO.md → "VerseGuide integration"). The attribution components it was meant to feed (`ImageAttribution`, `TextAttribution`, `VerseGuideCredit`) exist and build, but **none is referenced by any page**. `src/data/verseguide/*.json` declares `"$schema": "../../schemas/verseguide-system.json"` and that schema file **does not exist**.

Root `data/star_citizen_hidden_locations.{json,md}` is orphaned research scratch with no consumer.

### VerseGuide is a third-party data source, not a product feature

verseguide.com is an unofficial community map being scraped for coordinates and photos, with mandatory attribution. `docs/VERSEGUIDE_EXTRACTION_GUIDE.md` documents the extraction technique (Firebase Storage image URLs, Vue/Nuxt SPA internals). The attribution components implement a three-tier policy: `ImageAttribution` (full credit required), `TextAttribution` (subtle inline link), `VerseGuideCredit` (footer credit required).

**Attribution and terms compliance is the sharpest open risk** in the backlog — `TODO.md` still carries "Review VerseGuide terms of use; write attribution guidelines; legal compliance review" unchecked.

## Editorial constraints (these are real, not stylistic preferences)

- **Facts, not fiction.** Coordinates, difficulty, gear, and lore must be sourced. `PRODUCT.md` states this as a product principle. Don't invent a POI, a coordinate, or a patch status.
- **Image provenance gate.** Nyx assets are currently *blocked* for new pages until their source URL, licence, and local hash are recorded in `docs/nyx-asset-provenance.md`. Reusing an unverified image on a new destination page violates the project's own clearance rule. Other systems don't yet have an equivalent recorded gate, but the rule is the standard.
- **Availability honesty.** Nyx is "partially playable"; only destinations confirmed live by CIG sources are presented as visitable. Castra is marked `coming-soon` on the homepage. Don't present planned content as playable.
- **Lonely Planet voice.** Narrative, atmospheric, second-person traveller-facing prose — not a wiki dump. Each occurrence must add a distinct purpose; `tasks/lessons.md` records the rule that a destination covered by attractions, tours, and a practical section must not repeat its narrative in the dining section.
- **No fabricated sources.** `PRODUCT.md` lists "no user testimonials, benchmarks, or pricing data — do not invent these."

## Working notes

- **TODO.md is the canonical checklist** (root, ~29 KB). `tasks/todo.md` is a pointer to it. `tasks/lessons.md` holds short durable lessons — read it before starting work. Most `docs/*-complete.md` and `docs/phds-*.md` files are **stale completion reports** — treat `docs/` as an archive, not a spec.
- **Commit after every meaningful change**, one logical unit per commit. Commit message style is mixed: conventional prefixes (`feat:`, `fix:`, `docs:`, `test:`) and emoji prefixes (`📝`, `🎨`, `✨`) are both in use.
- **Branch for anything non-trivial.** `main` is the deploy branch — every push to it publishes. Feature branches in use: `codex/nyx-delivery`, `feature/pyro-overview-page`.
- **Leave untracked workspace material alone.** There is a meaningful amount of untracked material in the tree — `src/data/verseguide/`, `docs/verseguide-data/stanton-extracted.json`, `WEEKLY_GOALS.md`, `dogfood-output/`, `.od-skills/`, and root copies of the VerseGuide docs (one with a `VERESGUIDE` filename typo). TODO.md explicitly instructs: "leave unrelated untracked workspace material untouched."
- **Verify in a browser, not just a build.** `npm run build` passing is not evidence a page renders. Use `agent-browser` (see `~/.claude/skills/agent-browser/SKILL.md`; load `agent-browser skills get core` for the current command reference). Check at 1440×1000 and 390×844, confirm no console errors and no horizontal overflow, and exercise keyboard paths. Screenshots from prior passes live in `dogfood-output/screenshots/`.
- **The `impeccable` skill is vendored in-repo** at `.github/skills/impeccable/` (skill v4.5.0, binary 0.1.11) with four agents in `.github/agents/`. It is a **GitHub Copilot** harness — the `*.agent.md` format and `.github/hooks/impeccable.json` are Copilot's conventions, and `.github/copilot-instructions.md` does not exist. Claude Code loads the *global* `~/.claude/skills/impeccable` (v4.3.1) instead, so the repo copy and the installed plugin drift.
- **The design-detector hook is NOT active in Claude Code here.** `.github/hooks/impeccable.json` is the Copilot manifest. Claude Code's manifest is `.claude/settings.local.json`, which currently has only a `permissions` key and no `hooks`. To enable it for Claude Code, run `.github/skills/impeccable/scripts/impeccable hooks on` (the binary is a linux-x64 build; it does report a version on macOS, but confirm it launches before relying on it). `impeccable hooks status` reports `state: enabled` — that reflects the Copilot manifest, not Claude Code.
- `PRODUCT.md` exists with an `impeccable:product-schema` marker; `DESIGN.md` does not — `impeccable document` can generate one from the shipped code. The four agents expect a `.impeccable/` build directory that does not exist yet, so they are inert until a build runs.

## Reference docs

Read the relevant one before working in that area — they are more specific than this file:

| Doc | Use for |
| --- | --- |
| `PRODUCT.md` | Product purpose, principles, constraints, brand commitments |
| `ARCHITECTURE.md` | The original hierarchy and frontmatter-schema design (note: describes a region tier that was never built as navigable pages) |
| `DESIGN_SYSTEM.md` / `VISUAL_LANGUAGE.md` | Palette, type scale, component blueprints, "Fast-Fact" sidebar and "asymmetric guide" layout intent (fonts here are stale — see above) |
| `docs/content-structure-microtech.md` | The reference for what a full planet guide contains |
| `docs/lp-enhancement-guide.md` | Props and usage for the editorial components |
| `docs/nyx-asset-provenance.md` | Image clearance rule and per-asset provenance table |
| `docs/VERSEGUIDE_EXTRACTION_GUIDE.md` | VerseGuide.com scraping technique |
| `docs/superpowers/plans/` + `docs/superpowers/specs/` | Feature plans and specs from prior work, paired by filename |
| `manual-deployment-guide.md` | GitHub Actions deploy + `deploy.sh` manual fallback |
