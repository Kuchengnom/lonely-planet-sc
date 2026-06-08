# Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update existing Astro components to match the Travel Guide Design System sample — full-bleed heroes, image-first attraction cards, wider layout, and token-only colors.

**Architecture:** Four file edits, no new files, no MDX changes. Changes propagate to all existing pages automatically. Execution order: tokens first (Task 1), then components that use them (Tasks 2–5), then verification (Task 6).

**Tech Stack:** Astro 6, Tailwind CSS v4, MDX, TypeScript, `npm run dev` (port 4321), `npm run build`

---

### Task 1: Add design tokens to design-system.css

**Files:**
- Modify: `src/styles/design-system.css` (after line 45, inside `:root`)

- [ ] **Step 1: Open `src/styles/design-system.css` and locate the Accent Colors block (around line 39–45). Add the following block immediately after `--color-accent-lavender`:**

```css
    /* POI Category Colors */
    --color-category-wonder:      #059669;
    --color-category-hidden:      #7c3aed;
    --color-category-settlement:  var(--color-primary-600);
    --color-category-practical:   var(--color-secondary-600);
    --color-category-urban:       #0891b2;

    /* Difficulty Colors */
    --color-difficulty-easy:      #059669;
    --color-difficulty-moderate:  #d97706;
    --color-difficulty-hard:      var(--color-secondary-500);
    --color-difficulty-extreme:   #7c3aed;

    /* UI Accent */
    --color-star:                 #f59e0b;
```

- [ ] **Step 2: Run build to confirm no syntax errors**

```bash
npm run build
```
Expected: build completes, no CSS parse errors.

- [ ] **Step 3: Commit**

```bash
git add src/styles/design-system.css
git commit -m "feat: add category, difficulty, and star color tokens to design system"
```

---

### Task 2: Rewrite AttractionEntry.astro — image-first card

**Files:**
- Modify: `src/components/AttractionEntry.astro` (full rewrite)

- [ ] **Step 1: Replace the entire contents of `src/components/AttractionEntry.astro` with:**

```astro
---
const { number, title, category, image, imageAlt, href } = Astro.props;

const base = import.meta.env.BASE_URL + (import.meta.env.BASE_URL.endsWith('/') ? '' : '/');
function resolveImagePath(path: string) {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
const imageUrl = resolveImagePath(image);

const CATEGORY_CONFIG = {
  'natural-wonder': { label: 'Natural Wonder', color: 'var(--color-category-wonder)' },
  'hidden-find':    { label: 'Hidden Find',    color: 'var(--color-category-hidden)' },
  'settlement':     { label: 'Settlement',     color: 'var(--color-category-settlement)' },
  'practical':      { label: 'Getting Around', color: 'var(--color-category-practical)' },
  'urban-sight':    { label: 'Urban Sight',    color: 'var(--color-category-urban)' },
} as const;

const cat = CATEGORY_CONFIG[category];
---

<article class="attraction" style={`--cat-color: ${cat.color};`}>
  <div class="attraction__image-wrap">
    {imageUrl
      ? <img
          src={imageUrl}
          alt={imageAlt ?? title}
          class="attraction__image"
          loading="lazy"
          onerror="this.style.display='none';this.closest('.attraction__image-wrap').classList.add('attraction__image-wrap--error')"
        />
      : null
    }
    <div class="attraction__badges">
      <span class="attraction__num">{number}</span>
      <span class="attraction__category">{cat.label}</span>
    </div>
  </div>
  <div class="attraction__body">
    {href
      ? <h2 class="attraction__title"><a href={href} class="attraction__title-link">{title}</a></h2>
      : <h2 class="attraction__title">{title}</h2>
    }
    <div class="attraction__text">
      <slot />
    </div>
  </div>
</article>

<style>
  .attraction {
    background: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    transition: box-shadow var(--duration-normal) var(--ease-out),
                transform var(--duration-normal) var(--ease-out);
  }

  .attraction:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px);
  }

  .attraction__image-wrap {
    position: relative;
    height: 220px;
    overflow: hidden;
    background: var(--color-neutral-200);
  }

  .attraction__image-wrap--error {
    background: var(--color-neutral-200);
  }

  .attraction__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .attraction__badges {
    position: absolute;
    top: var(--space-3);
    left: var(--space-3);
    display: flex;
    gap: var(--space-2);
    align-items: center;
  }

  .attraction__num {
    width: 28px;
    height: 28px;
    border-radius: var(--radius-full);
    background: var(--color-primary-600);
    color: white;
    font-family: var(--font-display);
    font-size: var(--text-body-sm);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    flex-shrink: 0;
    line-height: 1;
  }

  .attraction__category {
    background: var(--cat-color);
    color: white;
    font-family: var(--font-display);
    font-size: var(--text-body-xs);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-full);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  }

  .attraction__body {
    padding: var(--space-5) var(--space-6);
  }

  .attraction__title {
    font-family: var(--font-display);
    font-size: var(--text-heading-xs);
    font-weight: var(--font-weight-bold);
    color: var(--color-neutral-900);
    margin: 0 0 var(--space-3);
    line-height: var(--line-height-snug);
  }

  .attraction__title-link {
    color: inherit;
    text-decoration: none;
  }

  .attraction__title-link:hover {
    text-decoration: underline;
    color: var(--color-primary-600);
  }

  .attraction__text {
    font-family: var(--font-body);
    font-size: var(--text-body-sm);
    line-height: var(--line-height-relaxed);
    color: var(--color-neutral-700);
  }

  .attraction__text :global(p) {
    margin: 0 0 var(--space-3);
  }

  .attraction__text :global(p:last-child) {
    margin-bottom: 0;
  }

  .attraction__text :global(strong) {
    color: var(--color-neutral-900);
  }
</style>
```

- [ ] **Step 2: Run build to confirm no TypeScript or Astro errors**

```bash
npm run build
```
Expected: build succeeds.

- [ ] **Step 3: Start dev server and visually verify**

```bash
npm run dev
```
Open `http://localhost:4321/lonely-planet-sc/stanton/microtech/`

Check:
- Each attraction entry shows a full-width ~220px tall photo
- Number badge (blue circle) and category pill are overlaid top-left on the image
- Card lifts on hover
- Entry with a link (Canyon River, entry #2) still links correctly

- [ ] **Step 4: Commit**

```bash
git add src/components/AttractionEntry.astro
git commit -m "feat: redesign AttractionEntry as image-first card matching design system"
```

---

### Task 3: Rewrite PlanetLayout.astro — full-bleed hero + wider container

**Files:**
- Modify: `src/layouts/PlanetLayout.astro` (full rewrite)

- [ ] **Step 1: Replace the entire contents of `src/layouts/PlanetLayout.astro` with:**

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
  region?: string;
}

interface Props {
  frontmatter: Frontmatter;
}

const {
  title, system, hero_image, lead,
  vitals_best_for, vitals_climate, vitals_hub, vitals_currency, vitals_ship,
  getting_there, region,
} = Astro.props.frontmatter;

const base = import.meta.env.BASE_URL + (import.meta.env.BASE_URL.endsWith('/') ? '' : '/');
const heroUrl = hero_image && !hero_image.startsWith('http')
  ? `${base}${hero_image.startsWith('/') ? hero_image.slice(1) : hero_image}`
  : hero_image;

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
      planet=""
      region=""
      title={title}
      type="urban-sight"
    />

    <div class="planet-hero">
      <img src={heroUrl} alt={`${title}, ${system} system`} class="planet-hero__image" />
      <div class="planet-hero__overlay" aria-hidden="true"></div>
      <div class="planet-hero__text">
        <h1 class="planet-hero__title">{title}</h1>
        <p class="planet-hero__subtitle">{system}{region ? ` · ${region}` : ''}</p>
      </div>
    </div>

    <div class="page-container">
      <div class="page-grid">

        <main class="page-main">
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
  /* ── Planet Hero ──────────────────────────────── */

  .planet-hero {
    position: relative;
    height: 500px;
    overflow: hidden;
  }

  .planet-hero__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .planet-hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.15) 50%,
      transparent 100%
    );
  }

  .planet-hero__text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--space-8);
  }

  .planet-hero__title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: white;
    margin: 0 0 var(--space-1);
    line-height: var(--line-height-tight);
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  .planet-hero__subtitle {
    font-family: var(--font-body);
    font-size: var(--text-body-md);
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }

  /* ── Container ──────────────────────────────── */

  .page-container {
    max-width: var(--container-xl);
    margin: 0 auto;
    padding: 0 var(--space-6);
  }

  /* ── Main Grid ──────────────────────────────── */

  .page-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: start;
    padding-top: var(--space-8);
    padding-bottom: 3rem;
  }

  /* ── Main Column ──────────────────────────────── */

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
    gap: 1.5rem;
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
    border-radius: var(--radius-md);
    padding: 1rem 1.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .sidebar-card--getting-there {
    background: var(--color-secondary-50);
    border-left: 4px solid var(--color-secondary-600);
  }

  .sidebar-card__label {
    font-family: var(--font-display);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-secondary-800);
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
    .planet-hero {
      height: 320px;
    }

    .page-container {
      padding: 0 var(--space-4);
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

- [ ] **Step 2: Run build**

```bash
npm run build
```
Expected: build succeeds.

- [ ] **Step 3: Visually verify the planet page**

Open `http://localhost:4321/lonely-planet-sc/stanton/microtech/`

Check:
- Full-width hero image spans edge-to-edge at ~500px tall
- "MICROTECH" title is overlaid in white at the bottom-left of the hero
- "Stanton" subtitle appears below the title in italic
- No separate title row above the attractions grid
- Sidebar shows Vital Statistics with "Best For" as the first row
- Getting There card uses the Pyro red accent (not amber) — this is intentional, the project's DS secondary is red/magma
- Attractions grid has more breathing room between cards (1.5rem gap vs old 0.75rem)

- [ ] **Step 4: Check two more planet pages to confirm no regressions**

Open `http://localhost:4321/lonely-planet-sc/stanton/hurston/`
Open `http://localhost:4321/lonely-planet-sc/stanton/crusader/`

Check: hero renders, title overlays correctly, no layout breaks.

- [ ] **Step 5: Commit**

```bash
git add src/layouts/PlanetLayout.astro
git commit -m "feat: full-bleed hero and 1280px container on planet pages"
```

---

### Task 4: Update POILayout.astro — hero height 400px → 500px

**Files:**
- Modify: `src/layouts/POILayout.astro` (two CSS values only)

- [ ] **Step 1: In `src/layouts/POILayout.astro`, find the `.poi-hero` rule (around line 81) and change height from `400px` to `500px`:**

```css
  .poi-hero {
    position: relative;
    height: 500px;   /* changed from 400px */
    overflow: hidden;
  }
```

- [ ] **Step 2: Find the mobile media query rule for `.poi-hero` (around line 165) and change height from `250px` to `320px`:**

```css
    .poi-hero {
      height: 320px;   /* changed from 250px */
    }
```

- [ ] **Step 3: Run build**

```bash
npm run build
```
Expected: build succeeds.

- [ ] **Step 4: Visually verify the POI hero**

Open `http://localhost:4321/lonely-planet-sc/stanton/microtech/northern-wastes/the-river/`

Check: hero image is noticeably taller than before (~500px), title and subtitle still overlay at the bottom.

- [ ] **Step 5: Commit**

```bash
git add src/layouts/POILayout.astro
git commit -m "feat: increase POI hero height from 400px to 500px"
```

---

### Task 5: Update FastFactSidebar.astro — replace hardcoded difficulty colors

**Files:**
- Modify: `src/components/FastFactSidebar.astro`

- [ ] **Step 1: In `src/components/FastFactSidebar.astro`, replace the `DIFFICULTY_COLORS` object (lines 13–17) with:**

```typescript
const DIFFICULTY_COLORS = {
  Easy:     'var(--color-difficulty-easy)',
  Moderate: 'var(--color-difficulty-moderate)',
  Hard:     'var(--color-difficulty-hard)',
  Extreme:  'var(--color-difficulty-extreme)',
} as const;
```

- [ ] **Step 2: In the same file, find the `.fact-stars` CSS rule (around line 103) and replace the hardcoded color:**

```css
  .fact-stars {
    color: var(--color-star);
    font-size: 0.9375rem;
    letter-spacing: 0.05em;
  }
```

- [ ] **Step 3: Run build**

```bash
npm run build
```
Expected: build succeeds.

- [ ] **Step 4: Visually verify the POI sidebar**

Open `http://localhost:4321/lonely-planet-sc/stanton/microtech/northern-wastes/the-river/`

Check: Fast Facts sidebar shows star rating in amber, difficulty in its appropriate color (green for Easy).

- [ ] **Step 5: Commit**

```bash
git add src/components/FastFactSidebar.astro
git commit -m "feat: replace hardcoded difficulty and star colors with design tokens"
```

---

### Task 6: Final verification — no hardcoded hex values remain

**Files:** (read-only verification)

- [ ] **Step 1: Grep for any remaining hardcoded hex values that should be tokens**

```bash
grep -rn '#fffbeb\|#b45309\|#92400e\|#d97706\|#059669\|#7c3aed\|#0891b2\|#f59e0b\|#dc2626' src/
```
Expected: **no output**. If any lines appear, fix them by replacing with the corresponding `--color-*` token.

- [ ] **Step 2: Run full build one final time**

```bash
npm run build
```
Expected: build succeeds with no warnings or errors.

- [ ] **Step 3: Smoke-test four pages in the dev server**

```bash
npm run dev
```

| URL | Check |
|-----|-------|
| `http://localhost:4321/lonely-planet-sc/stanton/microtech/` | Full-bleed hero, image-first attraction cards, 1280px container |
| `http://localhost:4321/lonely-planet-sc/stanton/hurston/` | Same — no regressions |
| `http://localhost:4321/lonely-planet-sc/stanton/microtech/northern-wastes/the-river/` | 500px POI hero, difficulty colors in sidebar |
| `http://localhost:4321/lonely-planet-sc/stanton/phds/locations/microtech-ice-caves/` | PHDs POI page — hero height correct |

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: design system gap closure — verify all tokens and pages consistent"
```
