# Planet Guide TravelGuidePage Layout — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the MicroTech planet guide to match the TravelGuidePage structural pattern: page-header with blue underline, 2/3+1/3 content grid, horizontal attraction cards, and a 3-card sidebar.

**Architecture:** `PlanetLayout.astro` is fully rewritten (hero removed, page-header + grid added). `AttractionEntry.astro` switches to a horizontal thumbnail-left card. `ExplorerView.astro` is restyled to a dark-emerald sidebar card and moved into the layout's named `explorer` slot. No logic changes — purely structural HTML/CSS.

**Tech Stack:** Astro 6, MDX, Tailwind CSS (unused here — plain CSS in `<style>` blocks), CSS custom properties from `src/styles/design-system.css`.

**Spec:** `docs/superpowers/specs/2026-05-20-planet-guide-traveleguidepage-layout.md`

---

## File Map

| File | Action | What changes |
|------|--------|-------------|
| `src/components/ExplorerView.astro` | Rewrite styles | Dark emerald card; keep `author` prop + `<slot />` |
| `src/components/AttractionEntry.astro` | Rewrite layout | Horizontal card: thumbnail left, content right |
| `src/layouts/PlanetLayout.astro` | Rewrite | Page-header, 2/3+1/3 grid, sidebar cards, named slot |
| `src/pages/stanton/microtech/index.mdx` | One-line edit | Add `slot="explorer"` to `<ExplorerView>` |

---

## Task 1: Restyle ExplorerView to dark-emerald sidebar card

**Files:**
- Modify: `src/components/ExplorerView.astro`

The component stops rendering a purple left-border aside and becomes a self-contained dark-green card. The `author` prop and inner `<slot />` are unchanged — only the wrapping element and all CSS change.

- [ ] **Replace `src/components/ExplorerView.astro` with:**

```astro
---
interface Props {
  author: string;
}
const { author } = Astro.props;
---

<div class="explorer-note">
  <div class="explorer-note__header">
    <svg class="explorer-note__star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
    Explorer Note
  </div>
  <blockquote class="explorer-note__quote">
    <slot />
  </blockquote>
  <cite class="explorer-note__author">— {author}</cite>
</div>

<style>
  .explorer-note {
    background: #065f46;
    border-radius: var(--radius-md, 0.5rem);
    padding: 1.25rem 1.5rem;
  }

  .explorer-note__header {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-family: var(--font-display);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.75rem;
  }

  .explorer-note__star {
    width: 14px;
    height: 14px;
    color: rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }

  .explorer-note__quote {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-style: italic;
    line-height: var(--line-height-relaxed);
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 0.625rem;
  }

  .explorer-note__author {
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    font-style: normal;
    display: block;
  }
</style>
```

- [ ] **Commit:**

```bash
git add src/components/ExplorerView.astro
git commit -m "feat: restyle ExplorerView as dark-emerald sidebar card"
```

---

## Task 2: Rework AttractionEntry to horizontal card

**Files:**
- Modify: `src/components/AttractionEntry.astro`

The current layout stacks the number-badge header above a body (text + optional right-column image). The new layout is a single horizontal row: 72×60px thumbnail on the left (with numbered badge overlaid), title + category pill + prose on the right. The `TouristTip` component renders inside the slot content as before.

Note: the `category` prop type includes `'practical'` (not `'getting-around'`) — that is the existing value in the codebase and must be preserved.

- [ ] **Replace `src/components/AttractionEntry.astro` with:**

```astro
---
interface Props {
  number: number;
  title: string;
  category: 'natural-wonder' | 'hidden-find' | 'settlement' | 'practical';
  image?: string;
  imageAlt?: string;
}

const { number, title, category, image, imageAlt } = Astro.props;

const CATEGORY_CONFIG = {
  'natural-wonder': { label: 'Natural Wonder', color: '#059669' },
  'hidden-find':    { label: 'Hidden Find',    color: '#7c3aed' },
  'settlement':     { label: 'Settlement',     color: 'var(--color-primary-600)' },
  'practical':      { label: 'Getting Around', color: '#d97706' },
} as const;

const cat = CATEGORY_CONFIG[category];
---

<article class="attraction" style={`--cat-color: ${cat.color};`}>
  <div class="attraction__inner">
    <div class="attraction__thumb">
      {image
        ? <img src={image} alt={imageAlt ?? title} class="attraction__image" loading="lazy" />
        : <div class="attraction__image attraction__image--placeholder" />
      }
      <span class="attraction__badge">{number}</span>
    </div>
    <div class="attraction__content">
      <div class="attraction__header">
        <h2 class="attraction__title">{title}</h2>
        <span class="attraction__category">{cat.label}</span>
      </div>
      <div class="attraction__text">
        <slot />
      </div>
    </div>
  </div>
</article>

<style>
  .attraction {
    background: white;
    border-left: 3px solid var(--cat-color);
    border-radius: var(--radius-sm, 0.25rem);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    overflow: hidden;
  }

  .attraction__inner {
    display: flex;
    gap: 0.875rem;
    padding: 0.75rem;
    align-items: flex-start;
  }

  .attraction__thumb {
    position: relative;
    flex-shrink: 0;
    width: 72px;
  }

  .attraction__image {
    width: 72px;
    height: 60px;
    object-fit: cover;
    border-radius: var(--radius-sm, 0.25rem);
    display: block;
  }

  .attraction__image--placeholder {
    background: var(--color-neutral-200);
  }

  .attraction__badge {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--cat-color);
    color: white;
    font-family: var(--font-display);
    font-size: 0.5625rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  .attraction__content {
    flex: 1;
    min-width: 0;
  }

  .attraction__header {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-bottom: 0.375rem;
  }

  .attraction__title {
    font-family: var(--font-display);
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--color-neutral-900);
    margin: 0;
    line-height: 1.2;
  }

  .attraction__category {
    flex-shrink: 0;
    background: var(--cat-color);
    color: white;
    font-family: var(--font-display);
    font-size: 0.5625rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.125rem 0.375rem;
    border-radius: var(--radius-sm, 0.25rem);
  }

  .attraction__text {
    font-family: var(--font-body);
    font-size: 0.875rem;
    line-height: var(--line-height-relaxed);
    color: var(--color-neutral-700);
  }

  .attraction__text :global(p) {
    margin: 0 0 0.625rem;
  }

  .attraction__text :global(p:last-child) {
    margin-bottom: 0;
  }

  .attraction__text :global(strong) {
    color: var(--color-neutral-900);
  }

  @media (max-width: 480px) {
    .attraction__thumb {
      width: 56px;
    }

    .attraction__image {
      width: 56px;
      height: 48px;
    }
  }
</style>
```

- [ ] **Commit:**

```bash
git add src/components/AttractionEntry.astro
git commit -m "feat: rework AttractionEntry to horizontal thumbnail card"
```

---

## Task 3: Rewrite PlanetLayout

**Files:**
- Modify: `src/layouts/PlanetLayout.astro`

The hero banner is removed entirely. A `page-container` (max-width 1024px, centred) wraps everything. The page-header is a flex row: planet title + system line on the left, Best For pill on the right, with a 3px `--color-primary-600` bottom border. Below that, a two-column CSS grid (2fr 1fr) holds the main column and sidebar. The sidebar is sticky (`align-self: start; position: sticky`).

`VitalStats` renders directly in the sidebar — it already carries its own background, border-left, and padding. `Getting There` is a new amber card built inside the layout. The `explorer` named slot renders when the MDX provides an `<ExplorerView slot="explorer">` (checked via `Astro.slots.has('explorer')`).

- [ ] **Replace `src/layouts/PlanetLayout.astro` with:**

```astro
---
import '../styles/global.css';
import SystemHeader from '../components/SystemHeader.astro';
import VitalStats from '../components/VitalStats.astro';

interface Frontmatter {
  title: string;
  system: string;
  hero_image: string;
  lead: string;
  vitals_best_for: string;
  vitals_climate: string;
  vitals_hub: string;
  vitals_currency: string;
  vitals_ship: string;
  getting_there: string;
}

interface Props {
  frontmatter: Frontmatter;
}

const {
  title, system, hero_image, lead,
  vitals_best_for, vitals_climate, vitals_hub, vitals_currency, vitals_ship,
  getting_there,
} = Astro.props.frontmatter;

const hasExplorer = Astro.slots.has('explorer');
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} — {system} Edition</title>
  </head>
  <body>
    <SystemHeader
      system={system}
      planet={title}
      region=""
      title={title}
      type="urban-sight"
    />

    <div class="page-container">

      <header class="page-header">
        <div class="page-header__left">
          <div class="page-header__title-row">
            <svg class="page-header__pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <h1 class="page-header__title">{title}</h1>
          </div>
          <p class="page-header__sub">{system} System · Stanton IV</p>
        </div>
        <div class="page-header__best-for" aria-label={`Best for: ${vitals_best_for}`}>
          <div class="page-header__best-for-value">{vitals_best_for}</div>
          <div class="page-header__best-for-label">Best For</div>
        </div>
      </header>

      <div class="page-grid">

        <main class="page-main">
          <div class="main-hero">
            <img src={hero_image} alt={`${title}, ${system} system`} class="main-hero__image" />
          </div>
          <p class="main-lead">{lead}</p>
          <h2 class="main-section-heading">Sights &amp; Highlights</h2>
          <div class="main-attractions">
            <slot />
          </div>
        </main>

        <aside class="page-sidebar">

          <VitalStats
            best_for={vitals_best_for}
            climate={vitals_climate}
            hub={vitals_hub}
            currency={vitals_currency}
            ship_class={vitals_ship}
          />

          <div class="sidebar-card sidebar-card--getting-there">
            <h3 class="sidebar-card__label">Getting There</h3>
            <p class="sidebar-card__body">{getting_there}</p>
          </div>

          {hasExplorer && (
            <slot name="explorer" />
          )}

        </aside>

      </div>
    </div>
  </body>
</html>

<style>
  /* ── Container ──────────────────────────────── */

  .page-container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* ── Page Header ──────────────────────────────── */

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 0 0.875rem;
    border-bottom: 3px solid var(--color-primary-600);
    margin-bottom: 1.5rem;
  }

  .page-header__title-row {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 0.25rem;
  }

  .page-header__pin {
    width: 22px;
    height: 22px;
    color: var(--color-primary-600);
    flex-shrink: 0;
  }

  .page-header__title {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    font-weight: 800;
    color: var(--color-neutral-900);
    margin: 0;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  .page-header__sub {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    color: var(--color-neutral-600);
    margin: 0;
    padding-left: calc(22px + 0.625rem);
  }

  .page-header__best-for {
    flex-shrink: 0;
    background: #fffbeb;
    border-radius: var(--radius-lg, 0.75rem);
    padding: 0.625rem 1rem;
    text-align: center;
  }

  .page-header__best-for-value {
    font-family: var(--font-display);
    font-size: 0.875rem;
    font-weight: 700;
    color: #b45309;
    line-height: 1.3;
  }

  .page-header__best-for-label {
    font-family: var(--font-body);
    font-size: 0.625rem;
    color: #78716c;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 0.125rem;
  }

  /* ── Main Grid ──────────────────────────────── */

  .page-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: start;
    padding-bottom: 3rem;
  }

  /* ── Main Column ──────────────────────────────── */

  .main-hero {
    margin-bottom: 1.25rem;
    border-radius: var(--radius-lg, 0.75rem);
    overflow: hidden;
    aspect-ratio: 16 / 9;
  }

  .main-hero__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .main-lead {
    font-family: var(--font-body);
    font-size: 1.0625rem;
    font-style: italic;
    line-height: var(--line-height-relaxed);
    color: var(--color-neutral-700);
    margin: 0 0 1.25rem;
  }

  .main-section-heading {
    font-family: var(--font-display);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-primary-600);
    margin: 0 0 0.875rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-neutral-200);
  }

  .main-attractions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  /* ── Sidebar ──────────────────────────────── */

  .page-sidebar {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    position: sticky;
    top: 1rem;
    align-self: start;
  }

  .sidebar-card {
    border-radius: var(--radius-md, 0.5rem);
    padding: 1rem 1.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .sidebar-card--getting-there {
    background: #fffbeb;
    border-left: 4px solid #d97706;
  }

  .sidebar-card__label {
    font-family: var(--font-display);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #92400e;
    margin: 0 0 0.625rem;
  }

  .sidebar-card__body {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    line-height: var(--line-height-relaxed);
    color: var(--color-neutral-700);
    margin: 0;
  }

  /* ── Responsive ──────────────────────────────── */

  @media (max-width: 768px) {
    .page-container {
      padding: 0 1rem;
    }

    .page-header {
      flex-wrap: wrap;
    }

    .page-header__best-for {
      display: none;
    }

    .page-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .page-sidebar {
      position: static;
    }
  }
</style>
```

- [ ] **Commit:**

```bash
git add src/layouts/PlanetLayout.astro
git commit -m "feat: rework PlanetLayout to TravelGuidePage pattern"
```

---

## Task 4: Update MDX to use named explorer slot

**Files:**
- Modify: `src/pages/stanton/microtech/index.mdx`

One attribute added to the existing `<ExplorerView>` call: `slot="explorer"`. This routes the component into the layout's named slot rather than the default slot (which is the main content column).

- [ ] **Open `src/pages/stanton/microtech/index.mdx` and change line 39:**

From:
```mdx
<ExplorerView author="Survey Pilot, New Babbage">
```

To:
```mdx
<ExplorerView slot="explorer" author="Survey Pilot, New Babbage">
```

No other changes to the file.

- [ ] **Commit:**

```bash
git add src/pages/stanton/microtech/index.mdx
git commit -m "feat: move ExplorerView into named explorer sidebar slot"
```

---

## Task 5: Visual verification

**Files:** none

- [ ] **Start the dev server:**

```bash
npm run dev
```

Expected output: `astro dev` starts on `http://localhost:4321` (or similar port). Leave running.

- [ ] **Open the MicroTech page in a browser and verify:**

Navigate to `http://localhost:4321/stanton/microtech`

Check each of these in order:

1. **No hero banner** — the page should open directly to the page-header (no full-bleed image at the top)
2. **Page-header** — "MICROTECH" title with MapPin icon on left; amber "Best For" pill on right; 3px cobalt bottom border
3. **Hero image** — panoramic lake image in the main column, 16:9 aspect ratio, rounded corners
4. **All 7 attraction cards** — horizontal layout (thumbnail left with number badge, title + category pill, prose right); verify category colours:
   - Natural Wonder entries (1, 2, 3, 7): green left border + badge
   - Hidden Find entry (4, Bioluminescent Caves): purple left border + badge
   - Settlement entries (5 New Babbage, 6 Surface Outposts): cobalt left border + badge
5. **TouristTip** — entry #4 (Bioluminescent Caves) has a yellow dashed tip box below the prose
6. **Sidebar** — three stacked cards visible: Vital Statistics (warm paper bg, cobalt border), Getting There (amber bg, amber border), Explorer Note (dark green bg, white text, star icon)
7. **No category legend** — the colour dot legend from the old layout should not appear
8. **Mobile** — resize to under 768px: grid collapses to single column, Best For pill hides, sidebar is no longer sticky

- [ ] **If any check fails, fix the specific issue and commit the fix before marking this task done.**

- [ ] **Stop the dev server** (`Ctrl+C`) once all checks pass.
