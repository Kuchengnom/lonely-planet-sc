# Astro Scaffold + POI Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold an Astro site wired to the existing design system, with The River on MicroTech as the first fully built POI page at `/stanton/microtech/northern-wastes/the-river`.

**Architecture:** Astro SSG with MDX for content. Design tokens come from `design-system.css` (CSS custom properties). Tailwind CSS v4 via `@tailwindcss/vite` handles layout utilities. Components are built bottom-up — primitive → composite → layout → page. Each component is committed as soon as it passes `astro check`.

**Tech Stack:** Astro v5, `@astrojs/mdx`, Tailwind CSS v4 (`@tailwindcss/vite`), TypeScript (strict mode).

---

## File Map

| File | Purpose |
|---|---|
| `astro.config.mjs` | Astro config — registers MDX integration + Tailwind v4 Vite plugin |
| `package.json` | Project dependencies |
| `tsconfig.json` | TypeScript strict config |
| `src/env.d.ts` | Astro type references |
| `src/styles/design-system.css` | Copied verbatim from `Design System for Travel Blog/src/styles/design-system.css` |
| `src/styles/global.css` | `@import` chain: design-system.css → tailwindcss + base resets |
| `src/components/POIBadge.astro` | Colored pill badge by POI type (natural-wonder / easter-egg / urban-sight / technical) |
| `src/components/TouristTip.astro` | Yellow dashed callout box — slot-based, no props |
| `src/components/Breadcrumb.astro` | Text breadcrumb path rendered inside SystemHeader |
| `src/components/FastFactSidebar.astro` | Paper-background sidebar: rating, vibe, difficulty, gear, coordinates |
| `src/components/SystemHeader.astro` | Sticky cobalt header — composes Breadcrumb + POIBadge |
| `src/layouts/POILayout.astro` | Full HTML document — 2/3 main + 1/3 sidebar grid, imports global.css |
| `src/pages/stanton/microtech/northern-wastes/the-river.mdx` | The River content page |

**Modified:** `.gitignore` — verified after scaffold that `node_modules/` and `.superpowers/` are present.

---

## Task 1: Scaffold Astro project

**Files:**
- Create: `astro.config.mjs`, `package.json`, `tsconfig.json`, `src/env.d.ts`, `public/`

- [ ] **Step 1: Run create-astro in the project root**

```bash
npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict
```

If prompted to overwrite existing files: allow overwriting `README.md` and `.gitignore` (we restore `.gitignore` in the next step). Choose `strict` TypeScript if asked interactively.

Expected: scaffold files appear — `astro.config.mjs`, `package.json`, `tsconfig.json`, `src/env.d.ts`, `src/pages/index.astro`.

- [ ] **Step 2: Restore .gitignore**

Open `.gitignore`. Ensure all three lines are present. The file must contain exactly:

```
.DS_Store
node_modules/
.superpowers/
```

Add any that are missing.

- [ ] **Step 3: Install dependencies**

```bash
npm install
npm install @astrojs/mdx @tailwindcss/vite tailwindcss
```

Expected: installs complete with no errors.

- [ ] **Step 4: Verify Astro works**

```bash
npx astro check
```

Expected: no errors (a warning about the default index page is fine).

- [ ] **Step 5: Commit**

```bash
git add astro.config.mjs package.json package-lock.json tsconfig.json src/env.d.ts src/pages/index.astro .gitignore
git commit -m "Scaffold Astro project with MDX and Tailwind v4"
```

---

## Task 2: Wire the design system

**Files:**
- Create: `src/styles/design-system.css`, `src/styles/global.css`
- Modify: `astro.config.mjs`

- [ ] **Step 1: Copy design-system.css from the reference implementation**

```bash
cp "Design System for Travel Blog/src/styles/design-system.css" src/styles/design-system.css
```

- [ ] **Step 2: Create global.css**

Create `src/styles/global.css`:

```css
@import './design-system.css';
@import 'tailwindcss';

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--color-white);
  color: var(--color-neutral-800);
}
```

- [ ] **Step 3: Replace astro.config.mjs**

Replace the entire contents of `astro.config.mjs` with:

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

- [ ] **Step 4: Verify**

```bash
npx astro check
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/styles/design-system.css src/styles/global.css astro.config.mjs
git commit -m "Wire design system: CSS tokens + Tailwind v4"
```

---

## Task 3: POIBadge component

**Files:**
- Create: `src/components/POIBadge.astro`

- [ ] **Step 1: Create POIBadge.astro**

Create `src/components/POIBadge.astro`:

```astro
---
interface Props {
  type: 'natural-wonder' | 'easter-egg' | 'urban-sight' | 'technical';
}

const { type } = Astro.props;

const BADGE_CONFIG = {
  'natural-wonder': { label: 'Natural Wonder', emoji: '🏔️', bg: '#059669' },
  'easter-egg':     { label: 'Easter Egg',     emoji: '🎄', bg: '#7c3aed' },
  'urban-sight':    { label: 'Urban Sight',    emoji: '🏢', bg: 'var(--color-primary-600)' },
  'technical':      { label: 'Technical',      emoji: '🛸', bg: '#d97706' },
} as const;

const config = BADGE_CONFIG[type];
---

<span class="poi-badge" style={`background-color: ${config.bg};`}>
  {config.emoji} {config.label}
</span>

<style>
  .poi-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ffffff;
    white-space: nowrap;
  }
</style>
```

- [ ] **Step 2: Run type check**

```bash
npx astro check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/POIBadge.astro
git commit -m "Add POIBadge component"
```

---

## Task 4: TouristTip component

**Files:**
- Create: `src/components/TouristTip.astro`

- [ ] **Step 1: Create TouristTip.astro**

Create `src/components/TouristTip.astro`:

```astro
---
// Slot-based. Usage in MDX: <TouristTip>Your tip here.</TouristTip>
---

<div class="tourist-tip">
  <span class="tourist-tip__icon" aria-hidden="true">💡</span>
  <p class="tourist-tip__text"><slot /></p>
</div>

<style>
  .tourist-tip {
    background: #FEFCE8;
    border: 1px dashed #ca8a04;
    border-radius: 0.5rem;
    padding: 0.875rem 1rem;
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    margin: 1.5rem 0;
  }

  .tourist-tip__icon {
    font-size: 1.125rem;
    flex-shrink: 0;
    line-height: 1.6;
  }

  .tourist-tip__text {
    font-family: var(--font-body);
    font-size: 0.9375rem;
    line-height: var(--line-height-relaxed);
    color: #78350f;
    margin: 0;
  }
</style>
```

- [ ] **Step 2: Run type check**

```bash
npx astro check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/TouristTip.astro
git commit -m "Add TouristTip component"
```

---

## Task 5: Breadcrumb component

**Files:**
- Create: `src/components/Breadcrumb.astro`

- [ ] **Step 1: Create Breadcrumb.astro**

Create `src/components/Breadcrumb.astro`:

```astro
---
interface Props {
  system: string;
  planet: string;
  region: string;
  title: string;
}

const { system, planet, region, title } = Astro.props;
const crumbs = [system, planet, region];
---

<nav class="breadcrumb" aria-label="Location breadcrumb">
  {crumbs.map((crumb) => (
    <>
      <span class="breadcrumb__item">{crumb}</span>
      <span class="breadcrumb__sep" aria-hidden="true">›</span>
    </>
  ))}
  <span class="breadcrumb__item breadcrumb__item--current">{title}</span>
</nav>

<style>
  .breadcrumb {
    font-family: var(--font-display);
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.65);
    display: flex;
    align-items: center;
    gap: 0.3rem;
    flex-wrap: wrap;
  }

  .breadcrumb__sep {
    opacity: 0.45;
  }

  .breadcrumb__item--current {
    color: rgba(255, 255, 255, 0.95);
    font-weight: 600;
  }
</style>
```

- [ ] **Step 2: Run type check**

```bash
npx astro check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Breadcrumb.astro
git commit -m "Add Breadcrumb component"
```

---

## Task 6: FastFactSidebar component

**Files:**
- Create: `src/components/FastFactSidebar.astro`

- [ ] **Step 1: Create FastFactSidebar.astro**

Create `src/components/FastFactSidebar.astro`:

```astro
---
interface Props {
  rating: number;
  vibe: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  required_gear: string[];
  coordinates: string;
}

const { rating, vibe, difficulty, required_gear, coordinates } = Astro.props;

const DIFFICULTY_COLORS = {
  Easy:     '#059669',
  Moderate: '#d97706',
  Hard:     '#dc2626',
  Extreme:  '#7c3aed',
} as const;

const filledStars = '★'.repeat(rating);
const emptyStars  = '☆'.repeat(5 - rating);
---

<aside class="fast-facts">
  <h2 class="fast-facts__title">Fast Facts</h2>

  <div class="fast-facts__list">
    <div class="fact-row">
      <span class="fact-label">Rating</span>
      <span class="fact-stars" aria-label={`${rating} out of 5 stars`}>
        {filledStars}{emptyStars}
      </span>
    </div>
    <div class="fact-row">
      <span class="fact-label">Vibe</span>
      <span class="fact-value">{vibe}</span>
    </div>
    <div class="fact-row">
      <span class="fact-label">Difficulty</span>
      <span
        class="fact-value"
        style={`color: ${DIFFICULTY_COLORS[difficulty]};`}
      >
        {difficulty}
      </span>
    </div>
    <div class="fact-row">
      <span class="fact-label">Gear</span>
      <span class="fact-value">{required_gear.join(', ')}</span>
    </div>
  </div>

  <div class="fast-facts__coords">
    <span class="coords-label">Location</span>
    <code class="coords-value">{coordinates}</code>
  </div>
</aside>

<style>
  .fast-facts {
    background: var(--color-surface-paper);
    border-left: 4px solid var(--color-primary-600);
    padding: 1.25rem;
  }

  .fast-facts__title {
    font-family: var(--font-display);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-primary-600);
    margin: 0 0 1rem;
  }

  .fast-facts__list {
    display: flex;
    flex-direction: column;
  }

  .fact-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    gap: 0.5rem;
  }

  .fact-label {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: var(--color-neutral-600);
    flex-shrink: 0;
  }

  .fact-value {
    font-family: var(--font-body);
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--color-neutral-800);
    text-align: right;
  }

  .fact-stars {
    color: #f59e0b;
    font-size: 0.9375rem;
    letter-spacing: 0.05em;
  }

  .fast-facts__coords {
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .coords-label {
    display: block;
    font-family: var(--font-body);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-neutral-500);
    margin-bottom: 0.25rem;
  }

  .coords-value {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-neutral-700);
    word-break: break-all;
  }
</style>
```

- [ ] **Step 2: Run type check**

```bash
npx astro check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/FastFactSidebar.astro
git commit -m "Add FastFactSidebar component"
```

---

## Task 7: SystemHeader component

**Files:**
- Create: `src/components/SystemHeader.astro`

- [ ] **Step 1: Create SystemHeader.astro**

Create `src/components/SystemHeader.astro`:

```astro
---
import Breadcrumb from './Breadcrumb.astro';
import POIBadge from './POIBadge.astro';

interface Props {
  system: string;
  planet: string;
  region: string;
  title: string;
  type: 'natural-wonder' | 'easter-egg' | 'urban-sight' | 'technical';
}

const { system, planet, region, title, type } = Astro.props;
---

<header class="system-header">
  <div class="container mx-auto px-6">
    <div class="system-header__inner">
      <div class="system-header__left">
        <span class="system-header__edition">{system} Edition</span>
        <Breadcrumb
          system={system}
          planet={planet}
          region={region}
          title={title}
        />
      </div>
      <POIBadge type={type} />
    </div>
  </div>
</header>

<style>
  .system-header {
    position: sticky;
    top: 0;
    z-index: var(--z-sticky);
    background-color: var(--color-primary-600);
    padding: 0.625rem 0;
  }

  .system-header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .system-header__left {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .system-header__edition {
    font-family: var(--font-display);
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
  }
</style>
```

- [ ] **Step 2: Run type check**

```bash
npx astro check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/SystemHeader.astro
git commit -m "Add SystemHeader component"
```

---

## Task 8: POILayout layout

**Files:**
- Create: `src/layouts/POILayout.astro`

- [ ] **Step 1: Create POILayout.astro**

Create `src/layouts/POILayout.astro`:

```astro
---
import '../styles/global.css';
import SystemHeader from '../components/SystemHeader.astro';
import FastFactSidebar from '../components/FastFactSidebar.astro';

interface Props {
  title: string;
  system: string;
  planet: string;
  region: string;
  type: 'natural-wonder' | 'easter-egg' | 'urban-sight' | 'technical';
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  coordinates: string;
  required_gear: string[];
  vibe: string;
  rating: number;
  hero_image: string;
}

const {
  title, system, planet, region, type,
  difficulty, coordinates, required_gear,
  vibe, rating, hero_image,
} = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} — {planet}, {system}</title>
  </head>
  <body>
    <SystemHeader
      system={system}
      planet={planet}
      region={region}
      title={title}
      type={type}
    />

    <div class="poi-hero">
      <img
        src={hero_image}
        alt={`${title} on ${planet}`}
        class="poi-hero__image"
      />
      <div class="poi-hero__overlay" aria-hidden="true"></div>
      <div class="poi-hero__text container mx-auto px-6">
        <h1 class="poi-hero__title">{title}</h1>
        <p class="poi-hero__subtitle">{planet} · {region}</p>
      </div>
    </div>

    <div class="container mx-auto px-6 py-10">
      <div class="poi-grid">
        <main class="poi-grid__main">
          <slot />
        </main>
        <div class="poi-grid__sidebar">
          <FastFactSidebar
            rating={rating}
            vibe={vibe}
            difficulty={difficulty}
            required_gear={required_gear}
            coordinates={coordinates}
          />
        </div>
      </div>
    </div>
  </body>
</html>

<style>
  .poi-hero {
    position: relative;
    height: 400px;
    overflow: hidden;
  }

  .poi-hero__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .poi-hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.15) 50%,
      transparent 100%
    );
  }

  .poi-hero__text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 2rem;
  }

  .poi-hero__title {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin: 0 0 0.25rem;
    line-height: var(--line-height-tight);
  }

  .poi-hero__subtitle {
    font-family: var(--font-body);
    font-size: 1rem;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }

  .poi-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2.5rem;
    align-items: start;
  }

  .poi-grid__main {
    font-family: var(--font-body);
    font-size: 1.0625rem;
    line-height: var(--line-height-relaxed);
    color: var(--color-neutral-800);
  }

  .poi-grid__main :global(p) {
    margin: 0 0 1.25rem;
  }

  .poi-grid__main :global(h2) {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary-700);
    margin: 2rem 0 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  @media (max-width: 768px) {
    .poi-grid {
      grid-template-columns: 1fr;
    }

    .poi-grid__sidebar {
      order: -1;
    }

    .poi-hero {
      height: 250px;
    }

    .poi-hero__title {
      font-size: 2rem;
    }
  }
</style>
```

- [ ] **Step 2: Run type check**

```bash
npx astro check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/POILayout.astro
git commit -m "Add POILayout: asymmetric 2/3+1/3 grid with hero"
```

---

## Task 9: The River MDX page

**Files:**
- Create: `src/pages/stanton/microtech/northern-wastes/the-river.mdx`

- [ ] **Step 1: Create directory**

```bash
mkdir -p src/pages/stanton/microtech/northern-wastes
```

- [ ] **Step 2: Create the-river.mdx**

Create `src/pages/stanton/microtech/northern-wastes/the-river.mdx`:

```mdx
---
layout: '../../../../layouts/POILayout.astro'
title: "The River"
system: "Stanton"
planet: "MicroTech"
region: "Northern Wastes"
type: "natural-wonder"
difficulty: "Easy"
coordinates: "MicroTech · North Pole Region"
required_gear:
  - "Cold Weather Suit"
vibe: "Serene"
rating: 5
hero_image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"
---

import TouristTip from '../../../../components/TouristTip.astro';

On a planet defined by perpetual ice storms and temperatures that would kill an unprotected pilot in minutes, the discovery of flowing liquid water is nothing short of impossible. And yet, cutting through the Northern Wastes with absolute serenity, the River exists.

Nobody in the game's lore has a satisfying explanation. The geological anomaly that keeps this stretch of water liquid — surrounded by kilometres of permafrost in every direction — remains one of MicroTech's enduring mysteries. For travellers, that mystery is the entire point.

## Getting There

The River sits in the northern polar region of MicroTech. Set your nav target to the North Pole and descend low once you've crossed into the tundra biome. You're looking for a dark ribbon against the white — easy to spot from altitude, invisible until you're almost on top of it at ground level.

A small ship or hover bike is ideal. Ground vehicles struggle with the terrain; larger ships have nowhere clean to land nearby.

<TouristTip>
  Land at dusk. Stanton's light catches the water at a low angle and turns the whole valley amber — the most photographed moment in the Northern Wastes. Give yourself 20 minutes of buffer before the ice storms typically roll in.
</TouristTip>

## What You'll Find

The river itself is roughly 40 metres wide where it's most accessible. The banks are dark stone, worn smooth, completely free of ice — which makes no physical sense given what surrounds them. The water is deep and still-looking despite clearly flowing.

There's nothing to interact with, no loot, no mission objective. It is purely a place to stand and look at something that shouldn't be there.

That's the point.
```

- [ ] **Step 3: Run type check**

```bash
npx astro check
```

Expected: no errors. If you see `Cannot find module '../../../../layouts/POILayout.astro'` verify the relative path: from `src/pages/stanton/microtech/northern-wastes/`, four `../` levels = `src/`.

- [ ] **Step 4: Start dev server and verify the page loads**

```bash
npx astro dev
```

Open `http://localhost:4321/stanton/microtech/northern-wastes/the-river`. Expected: page loads without console errors.

- [ ] **Step 5: Commit**

```bash
git add src/pages/stanton/microtech/northern-wastes/the-river.mdx
git commit -m "Add The River POI page — first content page"
```

---

## Task 10: Visual verification with agent-browser

**Files:** none (verification only — fix any rendering issues found, then commit)

- [ ] **Step 1: Ensure dev server is running**

```bash
npx astro dev
```

Expected: `http://localhost:4321` is live.

- [ ] **Step 2: Screenshot the full page**

```bash
agent-browser open http://localhost:4321/stanton/microtech/northern-wastes/the-river && agent-browser screenshot --full
```

Visually check the screenshot for:
- SystemHeader is cobalt blue (`#1e3a8a`), sticky at top
- "STANTON EDITION" dim label above the breadcrumb
- Breadcrumb reads `Stanton › MicroTech › Northern Wastes › The River`
- `🏔️ Natural Wonder` badge in header (green pill)
- Hero image fills full width with "The River" title overlaid in white
- Body text is Merriweather serif
- FastFact sidebar on the right with warm paper background and cobalt left border
- TouristTip box is yellow with dashed border and 💡 icon

- [ ] **Step 3: Verify Archivo Narrow loaded for headings**

```bash
agent-browser eval "getComputedStyle(document.querySelector('h1')).fontFamily"
```

Expected: output contains `Archivo Narrow`.

- [ ] **Step 4: Verify Merriweather loaded for body**

```bash
agent-browser eval "getComputedStyle(document.querySelector('.poi-grid__main p')).fontFamily"
```

Expected: output contains `Merriweather`.

- [ ] **Step 5: Verify sidebar paper background**

```bash
agent-browser eval "getComputedStyle(document.querySelector('.fast-facts')).backgroundColor"
```

Expected: `rgb(229, 226, 217)` (which is `#E5E2D9`).

- [ ] **Step 6: Verify mobile layout**

```bash
agent-browser set viewport 375 812 && agent-browser screenshot --full
```

Expected: single column layout — sidebar stacked above main content.

- [ ] **Step 7: Commit any fixes**

If you adjusted any styles during verification:

```bash
git add -A
git commit -m "Fix rendering issues found during visual verification"
```
