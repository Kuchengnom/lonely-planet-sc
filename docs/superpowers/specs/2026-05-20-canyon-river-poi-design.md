# Design: Canyon River POI Page

Date: 2026-05-20
Status: Approved

---

## Overview

A standalone POI page for the Canyon River on MicroTech, following the same template as the existing The River page (`src/pages/stanton/microtech/northern-wastes/the-river.mdx`). The key structural difference is a split Getting There section that separates the primary route from two alternate recovery methods, reflecting the Canyon River's greater navigation complexity.

---

## File

**Path:** `src/pages/stanton/microtech/northern-wastes/canyon-river.mdx`
**URL:** `/stanton/microtech/northern-wastes/canyon-river`
**Layout:** `../../../../layouts/POILayout.astro` (existing, no changes)

---

## Frontmatter

```yaml
layout: '../../../../layouts/POILayout.astro'
title: "The Canyon River"
system: "Stanton"
planet: "MicroTech"
region: "Northern Wastes"
type: "natural-wonder"
difficulty: "Moderate"
coordinates: "~440 km from MT DataCenter KH3-AAE-L on heading 027°"
required_gear:
  - "Cold Weather Suit"
vibe: "Wild"
rating: 4
hero_image: "/images/microtech/canyon-river-aerial.jpeg"
```

**Difficulty rationale:** Moderate (vs Easy for The River) — requires maintaining heading and altitude over ~440 km, reading terrain transitions rather than a single overhead approach, and knowing at least one of three alternate fixes if the primary fails.

**Rating rationale:** 4 (vs 5 for The River) — the canyon is more dramatic scenically but harder to reach reliably; The River's near-impossible water anomaly earns the extra point.

---

## Content Sections

### Intro (two paragraphs)

Paragraph 1: The contrast between MicroTech's uniform white snowfields and arriving at a canyon — colour, depth, a river channel at the bottom, autumn forest walls. Lead with atmosphere, not navigation facts.

Paragraph 2: This one is harder to find than The River and rewards the patience it demands. It's a route that rewards pilots who fly slowly, read terrain, and don't turn back at the first failed pass.

### Getting There — Primary Route

Numbered steps:
1. Quantum to **MT DataCenter KH3-AAE-L**
2. Set heading **027°**
3. Fly approximately **440 km** at altitude — high enough to see the ground shape shift
4. Watch for ridgelines, cuts, and deeper shadow; when the canyon profile becomes clear, slow down and descend along its length
5. Fly the canyon at low speed before landing

TouristTip placed after the numbered steps: microTech storms and cloud cover can hide the canyon from above. Stay high until the terrain silhouette reads clearly — descending too early into a storm layer means losing the canyon shape. If clouds are present, climb until you can see the ground outline, then descend along the cut.

### Getting There — If You Lose It

Framed as recovery methods, not equal alternatives:

- **OM-6 / OM-3 method:** Search the planet-facing midpoint between orbital markers OM-6 and OM-3. Useful if you've lost the bearing mid-flight.
- **Dunboro shortcut:** Quantum to **Dunboro** settlement, then fly heading **265°** for approximately **60 km**. Fastest recovery if you've already overshot.

### What You'll Find

Paragraph 1: The canyon itself — walls, river channel at the bottom, the autumn forest biome that frames it. The forest is the visual contrast that makes the canyon different from any other part of MicroTech: orange-red undergrowth instead of snow, pine canopy instead of open sky.

Paragraph 2: **Dunboro** as a practical waypoint on the return leg — reachable from KH3-AAE-L on heading 265° / 60 km, useful for refuel/respawn. Unnamed crash sites appear throughout the tundra along the route with no nav markers; worth a landing if you spot antenna arrays in the tree line.

### Video Guides

Link to the RSI Community Hub longform canyon-river exploration post (Star Citizen 3.18 PTU). Source: `docs/reference-rivers-lakes.html` — "Canyon River: Longform Visual Reference" section.

### Sources

- Star Citizen Wiki: Rivers — primary route data (headings, distances), last edited April 19, 2026
- Star Citizen Wiki: MicroTech — planet environment and landmark list
- RSI Community Hub: New Canyon River Exploration — longform canyon-river video, Star Citizen 3.18 PTU
- StarZen: Canyon River Guide Post — community pointer to 3.18 PTU canyon-river video

---

## Component Usage

- `TouristTip` — one instance, after the Primary Route numbered steps (weather/visibility guidance)
- No new components required
- No changes to POILayout.astro

---

## What Is Not In Scope

- Inline images in the body (Option C was not selected)
- Changes to FastFactSidebar or POILayout
- New CSS beyond what the existing layout provides
