# Design: Astro Scaffold + POI Page Proof-of-Concept

**Date:** 2026-05-19
**Scope:** Scaffold the Astro site, wire in the design system, build The River (MicroTech) as the first real POI page.

---

## Goals

- Validate the Astro + Tailwind v4 + design-system.css stack works end-to-end
- Prove the print-inspired POI layout (hero + 2/3 story + 1/3 FastFact sidebar) renders correctly
- Establish the MDX content model and component contracts for all future POI pages
- Result: one fully navigable URL (`/stanton/microtech/northern-wastes/the-river`) with real content

## Out of Scope

- Parent pages (Home, System, Planet, Region) — stub breadcrumb nav only
- Real Star Citizen screenshots — placeholder Unsplash images for now
- Community submission workflow, GitHub Actions, deployment

---

## 1. Project Structure

```
/
├── public/
│   └── images/                  # placeholder hero images
├── src/
│   ├── styles/
│   │   ├── design-system.css    # copied verbatim from "Design System for Travel Blog"
│   │   └── global.css           # @import design-system.css + @import tailwindcss
│   ├── components/
│   │   ├── SystemHeader.astro   # sticky cobalt bar: edition name + breadcrumb + badge
│   │   ├── Breadcrumb.astro     # Stanton › MicroTech › Northern Wastes › The River
│   │   ├── FastFactSidebar.astro # paper-bg sidebar: rating, vibe, difficulty, gear, coords
│   │   ├── TouristTip.astro     # 💡 yellow dashed callout box (slot-based)
│   │   └── POIBadge.astro       # pill badge: Natural Wonder / Easter Egg / Urban Sight / Technical
│   ├── layouts/
│   │   └── POILayout.astro      # 2/3 + 1/3 CSS grid; passes frontmatter to child components
│   └── pages/
│       └── stanton/
│           └── microtech/
│               └── northern-wastes/
│                   └── the-river.mdx
├── astro.config.mjs
└── package.json
```

**Route:** `/stanton/microtech/northern-wastes/the-river`

---

## 2. Tech Stack

| Concern | Choice |
|---|---|
| Framework | Astro (SSG) |
| Content | MDX (`@astrojs/mdx`) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) + design-system.css tokens |
| Fonts | Archivo Narrow (headings) + Merriweather (body) + JetBrains Mono (coords) via Google Fonts |
| Deployment | GitHub Pages (future) |

**Tailwind config:** None needed. Tailwind v4 is CSS-first — configured via `@import 'tailwindcss'` in `global.css`. All brand tokens live in `design-system.css`.

---

## 3. Design System Wiring

**`astro.config.mjs`:**
```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] },
});
```

**`src/styles/global.css`:**
```css
@import './design-system.css';
@import 'tailwindcss';
```

**Usage pattern:** Brand tokens (`var(--color-primary-600)`, `var(--font-display)`, `var(--color-surface-paper)`) via CSS custom properties. Layout utilities (`flex`, `grid`, `gap`, `container`, `mx-auto`, responsive prefixes) via Tailwind classes. The two systems do not overlap.

---

## 4. MDX Content Model

Every POI page uses this frontmatter schema:

```yaml
---
title: "The River"
system: "Stanton"
planet: "MicroTech"
region: "Northern Wastes"
type: "natural-wonder"       # natural-wonder | easter-egg | urban-sight | technical
difficulty: "Easy"           # Easy | Moderate | Hard | Extreme
coordinates: "MicroTech · North Pole Region"
required_gear:
  - "Cold Weather Suit"
vibe: "Serene"
rating: 5                    # 1–5
hero_image: "/images/the-river-hero.jpg"
---
```

Body is prose markdown with `<TouristTip>` MDX components embedded inline. No other custom components in body — all structure comes from the layout.

---

## 5. Component Contracts

### `POILayout.astro`
Receives the full MDX frontmatter as props. Renders:
1. `<SystemHeader>` at top (sticky)
2. Hero image (full-width)
3. 2/3 + 1/3 CSS grid: `<slot />` (MDX body) on the left, `<FastFactSidebar>` on the right

Props: all frontmatter fields spread in.

### `SystemHeader.astro`
Props: `system`, `planet`, `region`, `title`, `type`
Renders: sticky cobalt bar with system edition name left, breadcrumb center, `<POIBadge>` right.

### `Breadcrumb.astro`
Props: `system`, `planet`, `region`, `title`
Renders: `Stanton › MicroTech › Northern Wastes › The River` in the header (no links for PoC — plain text).

### `FastFactSidebar.astro`
Props: `rating`, `vibe`, `difficulty`, `required_gear[]`, `coordinates`
Renders: paper-background (`var(--color-surface-paper)`) card with cobalt left border. Rows for each fact. Coordinates in JetBrains Mono.

### `TouristTip.astro`
Props: none (slot-based)
Renders: yellow dashed-border callout with 💡 icon. Used inline in MDX body.

### `POIBadge.astro`
Props: `type` (`natural-wonder` | `easter-egg` | `urban-sight` | `technical`)
Renders: colored pill badge with emoji icon per the design system variants.

---

## 6. POI Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│  [SYSTEM HEADER — Cobalt — sticky]                          │
│  STANTON EDITION    Stanton › MicroTech › ... › The River  🏔️│
├─────────────────────────────────────────────────────────────┤
│  [HERO IMAGE — full width, 400px tall, gradient overlay]    │
│  The River                                                  │
│  A miracle of liquid water on a frozen world                │
├─────────────────────────────────────┬───────────────────────┤
│  MAIN CONTENT (66%)                 │  FAST FACTS (33%)     │
│                                     │  ┌─────────────────┐  │
│  Atmospheric prose...               │  │ Rating  ★★★★★   │  │
│                                     │  │ Vibe    Serene  │  │
│  💡 TouristTip callout              │  │ Diff.   Easy    │  │
│                                     │  │ Gear    Cold    │  │
│  [optional: detail image grid]      │  │         suit    │  │
│                                     │  │ Coords  MicroT. │  │
│                                     │  └─────────────────┘  │
└─────────────────────────────────────┴───────────────────────┘
```

Sidebar background: `var(--color-surface-paper)` (#E5E2D9), left border 4px solid `var(--color-primary-600)`.
Hero image: placeholder Unsplash frozen/arctic landscape (e.g. `photo-1464822759023-fed622ff2c3b`) until real SC screenshot is sourced.
On mobile: sidebar stacks below the main content.

---

## 7. The River — Seed Content

```markdown
title: "The River"
vibe: Serene / Impossible
difficulty: Easy
required_gear: Cold Weather Suit
coordinates: MicroTech · North Pole Region (exact TBD)
rating: 5/5

Story: On a planet defined by perpetual ice storms and sub-zero temperatures,
the discovery of a flowing liquid water river is one of MicroTech's most
improbable — and peaceful — sights. The river cuts through the Northern Wastes
with a serenity that belies the hostility of everything around it.

Tourist Tip: Land at dusk. Stanton's light catches the water at a low angle
and turns the whole valley amber — one of the most photographed moments in
the Stanton system.
```

---

## 8. Success Criteria

- `npm run dev` starts Astro and `http://localhost:4321/stanton/microtech/northern-wastes/the-river` loads without errors
- Fonts render as Archivo Narrow (headings) and Merriweather (body)
- SystemHeader is cobalt, sticky, shows correct breadcrumb and Natural Wonder badge
- FastFactSidebar has paper background (#E5E2D9) with cobalt left border
- TouristTip renders with yellow background and dashed border
- Layout is 2/3 + 1/3 on desktop, stacked on mobile (< 768px)
- `git status` is clean after each component is built
