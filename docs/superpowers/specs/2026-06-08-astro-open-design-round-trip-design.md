# Astro + Open Design Round-Trip

**Date:** 2026-06-08
**Status:** Approved

## Goal

Make every page of the Lonely Planet SC Astro site visually editable in Open Design with real Star Citizen content visible. Token changes made in Open Design round-trip back to `src/styles/design-system.css` automatically. Component structure edits are explored in Open Design and translated back to Astro templates manually.

## Constraints

- `npm run build` stays exactly `astro build` — GitHub Actions CI is untouched
- `./dist` output is unchanged — GitHub Pages deploy continues to work
- No new runtime npm dependencies (scripts use Node.js built-ins only)
- `od-export/` is gitignored — CI never sees it

## Architecture

```
Source of truth          Build pipeline             Open Design
──────────────           ──────────────             ────────────
src/
  pages/**.mdx     →   astro build (unchanged)  →  dist/**/*.html
  styles/                                           (external CSS/JS refs)
    design-system.css
  components/**.astro   scripts/inline-pages.js  →  od-export/**/*.html
                                                    (self-contained,
                                                     importable into OD)
                                                           ↓
                                                    [edit visually in OD]
                                                           ↓
                                                    [export from OD]
                                                           ↓
                         scripts/sync-tokens.js  ←  <od-exported-file.html>
                                  ↓
                         src/styles/design-system.css  (tokens patched)
```

## What Round-Trips Automatically

**Token values only** — CSS custom properties in `src/styles/design-system.css`:
- Colors (`--color-primary-600`, `--color-neutral-900`, etc.)
- Typography (`--font-display`, `--text-heading-xl`, etc.)
- Spacing (`--space-4`, `--space-8`, etc.)
- Shadows, radii, durations

**Out of scope for automation:** structural changes (reordered sections, new components, markup edits). Make them in Open Design to explore, then manually translate to the Astro templates.

## New Files

### `scripts/inline-pages.js`

Post-processes `dist/` output to produce `od-export/` with self-contained HTML files.

**Inputs:** `dist/` (Astro build output)
**Output:** `od-export/` (mirrored page structure)

**Process per HTML file:**
1. Find all `<link rel="stylesheet" href="/_astro/...">` → read `dist/_astro/<file>` → replace with `<style>...</style>`
2. Find all `<script ... src="/_astro/...">` → read `dist/_astro/<file>` → replace with `<script>...</script>`
3. Leave external URLs untouched (Unsplash images, Google Fonts CDN)
4. Write to `od-export/` with path mirroring `dist/`, flattening `index.html` → `<parent-dir>.html` for clean Open Design filenames

**Example path mapping:**
```
dist/stanton/microtech/northern-wastes/the-river/index.html
  → od-export/stanton/microtech/northern-wastes/the-river.html

dist/index.html
  → od-export/index.html
```

### `scripts/sync-tokens.js`

Extracts CSS variable changes from an Open Design-exported HTML and patches `src/styles/design-system.css`.

**Usage:**
```
node scripts/sync-tokens.js <path-to-od-exported-file.html>
```

**Process:**
1. Parse `<style>` blocks in the exported HTML for `:root { ... }` CSS variable declarations
2. Read `src/styles/design-system.css`, extract current variable values
3. Diff the two sets — only changed variables are considered
4. Patch `design-system.css` in-place, preserving all comments, whitespace, and `@layer theme` wrapper
5. Print a diff to stdout listing every changed variable with old → new values
6. Exit with code 1 if no CSS variables found in the input (guards against wrong file)

**One page is sufficient** — all pages share the same design tokens, so any single exported page has the full `:root` block.

## New `package.json` Scripts

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "build:od": "astro build && node scripts/inline-pages.js",
    "sync:tokens": "node scripts/sync-tokens.js"
  }
}
```

## `.gitignore` Addition

```
od-export/
```

## Developer Workflow

### Design iteration cycle

```
1. npm run build:od
2. Import od-export/<page>.html into Open Design
3. Edit visually — real content visible
4. Export from Open Design
5. node scripts/sync-tokens.js <exported-file.html>
6. Review the printed diff
7. Commit src/styles/design-system.css
8. npm run build  (CI also runs this — site is live)
```

### Adding new pages

New MDX pages in `src/pages/` are picked up automatically by `build:od` on the next run — no script changes needed.

### Future: Open Design Automations

The sync-tokens script is designed to be invokable from any automation. If Open Design Automations supports GitHub webhooks or CI triggers, step 5 above can be replaced with an automated run on export.

## Out of Scope

- The "Design System for Travel Blog" Vite app is a separate design development environment for the token system itself. It is not modified by this work.
- Component structure sync (beyond tokens) is manual by design.
- Image assets are external URLs and do not need inlining.
