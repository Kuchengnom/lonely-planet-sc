# Planet Guide Layout — TravelGuidePage Pattern

**Date:** 2026-05-20
**Status:** Approved

## Goal

Rework `PlanetLayout.astro` (and the components it uses) to match the structural and visual pattern of `TravelGuidePage` from the design system (`Design System for Travel Blog/src/app/components/DesignSystemOverview.tsx`).

---

## Decisions Made

| # | Decision |
|---|----------|
| 1 | **Full adoption** — no hero banner; use TravelGuidePage page-header + full 2/3 + 1/3 grid |
| 2 | **AttractionEntry** becomes a horizontal card: thumbnail left, prose right |
| 3 | **ExplorerView** moves from inline MDX to the sidebar via a named Astro slot |
| 4 | **Max-width 1024px** container; larger-breakpoint reflow deferred |

---

## Page Structure

### 1. Container

All page content below `<SystemHeader>` wraps in a `max-width: 1024px; margin: 0 auto; padding: 0 1.5rem` container.

### 2. Page Header (replaces hero banner)

White background, `3px solid var(--color-primary-600)` bottom border. Two-column flex row:

- **Left:** MapPin icon (24px, primary-600) + planet title (heading-xl, extrabold, uppercase) + system/body line below (body-sm, neutral-600, indented to align with title)
- **Right:** pill box — amber background (`secondary-50`), `Best For` label (body-xs, uppercase, neutral muted), value from `vitals_best_for` frontmatter (heading-sm, secondary-700)

### 3. Main Grid

`display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem` at ≥ 768px. Single column on mobile (sidebar stacks below main column).

#### Main column (2/3)

In order:

1. **Planet hero image** — `src={hero_image}`, 16:9 aspect ratio, `border-radius: var(--radius-lg)`, `object-fit: cover`. Alt: `"{title}, {system} system"`.
2. **Lead text** — `{lead}` from frontmatter. `font-style: italic`, body-lg, neutral-700, `line-height: relaxed`.
3. **Section heading** — "Sights & Highlights", body-xs, uppercase, letter-spacing wide, primary-700, with a 1px neutral-200 bottom border.
4. **AttractionEntry cards** — one per MDX `<AttractionEntry>` slot, in source order (see AttractionEntry spec below).

#### Sidebar (1/3)

Three stacked cards, top to bottom:

| Card | Background | Left border | Content |
|------|------------|-------------|---------|
| **Planet Vitals** | white | 4px solid primary-600 | Label "Planet Vitals" (body-xs, uppercase, primary-700). Five rows: Best For, Climate, Hub, Currency, Ship — each with a small uppercase label and value below. |
| **Getting There** | secondary-50 | 4px solid secondary-600 (amber) | Label "Getting There" (body-xs, uppercase, secondary-800). `{getting_there}` prose paragraph (body-sm, neutral-700). |
| **Explorer Note** | `#065f46` (dark emerald) | none | Star icon + "Explorer Note" label (body-xs, uppercase, white/70%). Italic quote text (body-sm, white/90%). Author attribution below (body-xs, white/50%). Populated via the named `explorer` slot. |

The Explorer Note card is only rendered when the `explorer` slot has content. If no `<ExplorerView slot="explorer">` is present in the MDX, the card is omitted entirely.

---

## Component Specs

### AttractionEntry (reworked)

**Props (unchanged):** `number`, `title`, `category`, `image`, `imageAlt`

**New layout — horizontal card:**

```
┌─────────────────────────────────────────────────────┐
│ [thumbnail]  Title           [Category badge]       │
│ [72×60px ]  ─────────────────────────────────────  │
│ [w/ badge]  Body text (slot content, full prose).   │
│             TouristTip box if present (inline).     │
└─────────────────────────────────────────────────────┘
```

- **Thumbnail:** 72px wide × 60px tall, `object-fit: cover`, `border-radius: var(--radius-sm)`. Number badge: 18px circle, absolutely positioned top-left of thumbnail, filled with the category accent colour.
- **Card frame:** white background, `border-left: 3px solid {category-colour}`, `border-radius: var(--radius-sm)`, subtle box-shadow.
- **Category colours** (same as existing `POIBadge` scheme):
  - `natural-wonder` → `#059669`
  - `hidden-find` → `#7c3aed`
  - `settlement` → `var(--color-primary-600)` (cobalt)
  - `getting-around` → `#d97706`
- **Category badge:** coloured pill next to title (same colour as border/badge).
- **Slot content** renders as-is, including any nested `<TouristTip>` components.

### ExplorerView (restyled for sidebar)

The component moves from an inline MDX element to the layout's sidebar via a named Astro slot. The MDX author adds `slot="explorer"`:

```mdx
<ExplorerView slot="explorer" author="Survey Pilot, New Babbage">
  The trick on microTech is patience…
</ExplorerView>
```

`PlanetLayout` places `<slot name="explorer" />` inside the sidebar column. `ExplorerView.astro` still renders its own full card (keeping the `author` prop), but its styles change to match the dark emerald Explorer Note card described above (dark green background, white text, star icon). The existing `author` prop and `<slot />` for quote content are unchanged.

`PlanetLayout` conditionally renders the sidebar slot area only when the `explorer` slot has content (using `Astro.slots.has('explorer')`).

### VitalStats (unchanged)

No changes to the component itself. It is now rendered inside the sidebar Planet Vitals card rather than in the intro section. The `PlanetLayout` renders it directly using frontmatter props.

### Category Legend (removed)

The `.planet-category-legend` element and its styles are deleted. Category identity is now communicated per-card via the colour-coded left border and badge on each `AttractionEntry`.

---

## Responsive Behaviour

| Breakpoint | Behaviour |
|------------|-----------|
| < 768px | Single column — sidebar stacks below main content |
| 768px – 1024px | 2/3 + 1/3 grid, constrained to 1024px |
| > 1024px | Centred at max-width 1024px, no grid reflow |

**Deferred:** how content reflows or expands at large viewports (> 1024px) is a future decision. For now the layout is capped and centred.

---

## Files to Change

| File | Change |
|------|--------|
| `src/layouts/PlanetLayout.astro` | Major rework — remove hero, add page-header, add 2-col grid with sidebar cards, add named `explorer` slot handling |
| `src/components/AttractionEntry.astro` | Rework to horizontal card layout |
| `src/components/ExplorerView.astro` | Restyle to dark emerald card; keep `author` prop and inner slot unchanged |
| `src/pages/stanton/microtech/index.mdx` | Add `slot="explorer"` to the `<ExplorerView>` call; no other content changes |

`VitalStats.astro`, `TouristTip.astro`, `POIBadge.astro`, `SystemHeader.astro`, `Breadcrumb.astro` — no changes.

---

## Out of Scope

- `POILayout.astro` and POI-level pages — not touched
- Large-viewport reflow (> 1024px) — deferred
- Any new pages or content
