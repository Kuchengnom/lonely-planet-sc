# Design System Implementation — Gap Closure

**Date:** 2026-06-08
**Scope:** Update existing components in place (Option A) so all pages match the Travel Guide Design System sample (`Design System for Travel Blog/sample/travel-design-system.html`)

---

## Background

The project has a complete design system (`src/styles/design-system.css`) with tokens for color, typography, spacing, shadows, and radius. A new reference implementation was placed in `Design System for Travel Blog/sample/travel-design-system.html`. The existing location pages diverge from that sample in four measurable ways:

1. `AttractionEntry` images are 72×60px thumbnails — the DS uses immersive image-first cards
2. `PlanetLayout` hero image sits inside the 2/3 main column — the DS uses full-bleed heroes
3. `POILayout` hero is 400px tall — the DS sample hero is 500px
4. Hardcoded hex values are scattered throughout layouts and components, bypassing the DS tokens

---

## Changes

### 1. `src/components/AttractionEntry.astro`

**Replace** the horizontal flex layout (72×60px thumb + text beside it) with a vertical image-first card.

**New structure:**
```
<article class="attraction">
  <div class="attraction__image-wrap">       ← full width, 220px tall
    <img ... />
    <div class="attraction__badges">         ← overlaid top-left
      <span class="attraction__num">{number}</span>    ← circle badge, --color-primary-600
      <span class="attraction__category">{cat.label}</span>  ← rounded pill
    </div>
  </div>
  <div class="attraction__body">
    <h2 class="attraction__title">{title}</h2>
    <div class="attraction__text"><slot /></div>
  </div>
</article>
```

**Key styles:**
- `.attraction__image-wrap`: `height: 220px`, `overflow: hidden`, `border-radius: var(--radius-lg) var(--radius-lg) 0 0`
- `.attraction__image-wrap img`: `width: 100%`, `height: 100%`, `object-fit: cover`
- `.attraction__num`: `28px` circle, `background: var(--color-primary-600)`, white text, `box-shadow: 0 2px 6px rgba(0,0,0,.3)`
- `.attraction__category`: rounded pill (`var(--radius-full)`), color from `--cat-color`, white text, small uppercase
- `.attraction`: `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-md)`, hover → `var(--shadow-xl)` + `translateY(-4px)`, `transition: var(--duration-normal)`
- Remove the `border-left` accent line (replaced by image dominance)
- `.attraction__title`: `var(--font-display)`, `1.125rem`, `font-weight: 700`
- `.attraction__body`: padding `var(--space-5) var(--space-6)`

**Category colors** — use new tokens (see Section 4):
- `natural-wonder` → `var(--color-category-wonder)`
- `hidden-find` → `var(--color-category-hidden)`
- `settlement` → `var(--color-category-settlement)`
- `practical` → `var(--color-category-practical)`
- `urban-sight` → `var(--color-category-urban)`

---

### 2. `src/layouts/PlanetLayout.astro`

**Move the hero to full-bleed** (outside the `.page-container`), matching the DS sample hero treatment.

**New page structure:**
```
<body>
  <SystemHeader ... />

  <div class="planet-hero">              ← NEW: full-bleed, outside container
    <img src={heroUrl} ... />
    <div class="planet-hero__overlay" />
    <div class="planet-hero__text">
      <h1>{title}</h1>
      <p>{system}{region}</p>
    </div>
  </div>

  <div class="page-container">          ← container starts after hero
    <div class="page-grid">
      <main>
        <p class="main-lead">{lead}</p>
        <h2>Sights & Highlights</h2>
        <div class="main-attractions"><slot /></div>
      </main>
      <aside>
        <VitalStats ... />
        <div class="sidebar-card sidebar-card--getting-there">...</div>
        <slot name="explorer" />
      </aside>
    </div>
  </div>
</body>
```

**Remove:** the `.page-header` block entirely (title row + best-for chip). The title is now on the hero. The best-for value is already present inside `VitalStats`.

**Hero styles:**
- `.planet-hero`: `position: relative`, `height: 500px`, `overflow: hidden`
- `.planet-hero img`: `width: 100%`, `height: 100%`, `object-fit: cover`
- `.planet-hero__overlay`: `position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.65) 0%, rgba(0,0,0,.15) 50%, transparent 100%)`
- `.planet-hero__text`: `position: absolute; bottom: 0; left: 0; right: 0; padding: var(--space-8) var(--space-8)`
- `h1` in hero: `var(--font-display)`, `clamp(2rem, 5vw, 3rem)`, `font-weight: 800`, `color: white`, `text-transform: uppercase`
- subtitle `p`: `var(--font-body)`, `1rem`, `font-style: italic`, `color: rgba(255,255,255,.8)`
- Mobile (`max-width: 768px`): hero height `320px`

**Container width:**
- `.page-container`: `max-width: var(--container-xl)` (1280px, was 1024px)

---

### 3. `src/layouts/POILayout.astro`

**Increase hero height only:**
- `.poi-hero`: `height: 400px` → `height: 500px`
- Mobile `.poi-hero`: `height: 250px` → `height: 320px`

No other structural changes to POILayout.

---

### 4. `src/styles/design-system.css`

**Add category color tokens** under the Accent Colors block:
```css
/* POI Category Colors */
--color-category-wonder:     #059669;
--color-category-hidden:     #7c3aed;
--color-category-settlement: var(--color-primary-600);
--color-category-practical:  var(--color-secondary-600);
--color-category-urban:      #0891b2;
```

---

### 5. Token cleanup — replace hardcoded hex values

| File | Hardcoded value | Replace with |
|------|----------------|--------------|
| `PlanetLayout.astro` | `#fffbeb` (getting-there bg) | `var(--color-secondary-50)` |
| `PlanetLayout.astro` | `#d97706` (getting-there border) | `var(--color-secondary-600)` |
| `PlanetLayout.astro` | `#92400e` (getting-there label) | `var(--color-secondary-800)` |
| `PlanetLayout.astro` | `#b45309` (best-for value) | `var(--color-secondary-700)` — or remove with page-header |
| `PlanetLayout.astro` | `#78716c` (best-for label) | `var(--color-neutral-500)` — or remove with page-header |
| `AttractionEntry.astro` | `#059669` | `var(--color-category-wonder)` |
| `AttractionEntry.astro` | `#7c3aed` | `var(--color-category-hidden)` |
| `AttractionEntry.astro` | `#d97706` | `var(--color-category-practical)` |
| `AttractionEntry.astro` | `#0891b2` | `var(--color-category-urban)` |

---

## Files Changed

1. `src/components/AttractionEntry.astro` — full layout rewrite
2. `src/layouts/PlanetLayout.astro` — full-bleed hero, wider container, remove page-header
3. `src/layouts/POILayout.astro` — hero height only
4. `src/styles/design-system.css` — add category color tokens

## Files NOT Changed

- All `.mdx` content files — zero content changes required
- `src/styles/global.css`
- `src/components/FastFactSidebar.astro`, `VitalStats.astro`, `TouristTip.astro`, `SystemHeader.astro` — these already use tokens correctly
- `src/pages/index.astro` — separate home page, not in scope

## Success Criteria

- `AttractionEntry` images fill the top of each card at full width, ~220px tall
- Planet pages open with a full-bleed hero image with title overlaid
- POI pages have a 500px hero
- `grep -r '#fffbeb\|#b45309\|#92400e\|#d97706\|#059669\|#7c3aed\|#0891b2' src/` returns no results
- No MDX files need changes
- All pages render without layout regressions
