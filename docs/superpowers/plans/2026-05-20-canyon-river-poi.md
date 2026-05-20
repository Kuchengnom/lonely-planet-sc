# Canyon River POI Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a standalone POI page for the Canyon River at `/stanton/microtech/northern-wastes/canyon-river`.

**Architecture:** A single MDX file using the existing `POILayout.astro` layout and one `TouristTip` component. No new components, no layout changes. Content follows the same structure as `the-river.mdx` with a split Getting There section (Primary Route + If You Lose It) to handle the Canyon River's three-method navigation complexity.

**Tech Stack:** Astro 6, MDX, existing `POILayout.astro`, existing `TouristTip` component.

---

## File Map

| Action | Path | Purpose |
|---|---|---|
| **Create** | `src/pages/stanton/microtech/northern-wastes/canyon-river.mdx` | The entire POI page |
| Reference | `src/pages/stanton/microtech/northern-wastes/the-river.mdx` | Structural template to follow |
| Reference | `src/layouts/POILayout.astro` | Layout — no changes |
| Reference | `src/components/TouristTip.astro` | Component — no changes |
| Reference | `docs/superpowers/specs/2026-05-20-canyon-river-poi-design.md` | Approved spec |

---

### Task 1: Scaffold the file with frontmatter and verify it renders

**Files:**
- Create: `src/pages/stanton/microtech/northern-wastes/canyon-river.mdx`

- [ ] **Step 1: Start the dev server (if not already running)**

```bash
npx astro dev
```

Expected: server starts at `http://localhost:4321`

- [ ] **Step 2: Create the file with frontmatter only**

Create `src/pages/stanton/microtech/northern-wastes/canyon-river.mdx` with this exact content:

```mdx
---
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
---

import TouristTip from '../../../../components/TouristTip.astro';

Placeholder content.
```

- [ ] **Step 3: Verify the page loads**

Open `http://localhost:4321/stanton/microtech/northern-wastes/canyon-river` in a browser.

Expected:
- Hero image (`canyon-river-aerial.jpeg`) fills the top of the page
- Title "The Canyon River" overlaid at the bottom of the hero
- Subtitle "MicroTech · Northern Wastes" below the title
- FastFactSidebar visible on the right: rating 4, vibe "Wild", difficulty "Moderate", gear "Cold Weather Suit", coordinates shown
- "Placeholder content." in the main column

If the page 404s: check the file path depth — the layout import is `../../../../layouts/POILayout.astro` (4 levels up from `northern-wastes/`).

- [ ] **Step 4: Commit the scaffold**

```bash
git add src/pages/stanton/microtech/northern-wastes/canyon-river.mdx
git commit -m "scaffold: Canyon River POI page with frontmatter"
```

---

### Task 2: Write the intro and primary route

**Files:**
- Modify: `src/pages/stanton/microtech/northern-wastes/canyon-river.mdx`

- [ ] **Step 1: Replace the placeholder with the intro and Getting There — Primary Route**

Replace `Placeholder content.` with:

```mdx
MicroTech's snowfields are monotonous by design — flat white from horizon to horizon, interrupted by nothing interesting until you find the canyon. The drop is sudden. Snow gives way to exposed rock, the rock falls into walls, and at the bottom there is a river in autumn-coloured forest with no business being here. It is one of the more startling things Stanton puts in your way without announcing it.

The canyon is harder to find than the planet's first river. There is no overhead visual cue — no dark patch in the snow to aim for — just a heading and a distance and the patience to maintain both while the terrain below looks identical for 400 km. Pilots who fly it slowly and stay at altitude come back with screenshots. Pilots who rush it fly home empty.

## Getting There — Primary Route

1. Quantum to **MT DataCenter KH3-AAE-L**
2. Set heading **027°**
3. Fly approximately **440 km** at altitude — high enough to see the ground shape rather than individual trees
4. Watch for ridgelines, cuts, and shadow that breaks the flat snowfield. When the canyon profile is visible from above, reduce speed and descend along the canyon walls
5. Fly the canyon at low speed before landing — it is navigable in a small ship and the views from inside are different from the aerial approach
```

- [ ] **Step 2: Check the section in browser**

Reload `http://localhost:4321/stanton/microtech/northern-wastes/canyon-river`.

Expected:
- Two intro paragraphs render in the main column with correct typography
- `## Getting There — Primary Route` heading appears in the cobalt display type (matching The River's `h2` style)
- Numbered list renders correctly
- Bold text on `MT DataCenter KH3-AAE-L`, `027°`, `440 km` renders as expected

---

### Task 3: Write the TouristTip and If You Lose It section

**Files:**
- Modify: `src/pages/stanton/microtech/northern-wastes/canyon-river.mdx`

- [ ] **Step 1: Add the TouristTip after the numbered steps**

After the numbered list, add:

```mdx
<TouristTip>
  Cloud cover and storms can hide the canyon silhouette completely. Stay at altitude until the terrain reads clearly — if you're flying into weather, climb above it before descending. The canyon walls are only visible when you can see the ground shape from above; descending too early puts you inside the storm with nothing to navigate by.
</TouristTip>
```

- [ ] **Step 2: Add the If You Lose It section**

After the TouristTip, add:

```mdx
## If You Lose It

Two fixes if you fly past the canyon or lose the bearing mid-flight:

**OM-6 / OM-3 method:** Search the planet-facing midpoint between orbital markers **OM-6** and **OM-3**. Approach from orbit and scan the surface at the midpoint — the canyon terrain is visible at moderate altitude in clear weather.

**Dunboro shortcut:** Quantum directly to **Dunboro** settlement, then fly heading **265°** for approximately **60 km**. Dunboro is the closest named landmark to the canyon and the fastest recovery point if you've already overshot the primary route.
```

- [ ] **Step 3: Verify in browser**

Reload the page.

Expected:
- `TouristTip` renders as a styled callout box (matching The River's tourist tip style)
- `## If You Lose It` heading appears in the same cobalt display type
- Bold on `OM-6`, `OM-3`, `Dunboro`, `265°`, `60 km`
- Two paragraphs under bold labels, not a bulleted list

---

### Task 4: Write What You'll Find, Video Guides, and Sources

**Files:**
- Modify: `src/pages/stanton/microtech/northern-wastes/canyon-river.mdx`

- [ ] **Step 1: Add What You'll Find**

After the If You Lose It section, add:

```mdx
## What You'll Find

The canyon itself is the attraction — walls deep enough to put your ship in shadow, a river channel at the bottom with open water, and the autumn forest biome that lines both sides. MicroTech's forest latitudes run orange-red rather than the snow-green of the higher elevations, and inside the canyon the colour contrast is sharper than anywhere else on the planet. This is not a hostile environment by MicroTech standards. It is, briefly, somewhere you might actually want to stay.

**Dunboro** is a working settlement roughly 60 km from the canyon on heading 085° — useful for respawn, refuel, and a navigation anchor on the return leg to New Babbage. Between Dunboro and the canyon, unnamed crash sites appear in the tree line with no nav markers: look for antenna arrays above the pines and land next to whatever remains. The tundra along this route is worth flying slowly even when you are not lost.
```

- [ ] **Step 2: Add Video Guides**

After What You'll Find, add:

```mdx
## Video Guides

The RSI Community Hub hosts a longform canyon river exploration post from Star Citizen 3.18 PTU — the best visual reference for recognising the canyon terrain and the feel of the approach once you are in the right area. Search for **"New Canyon River Exploration"** on the RSI Community Hub if the direct link has rotated.
```

- [ ] **Step 3: Add Sources**

After Video Guides, add:

```mdx
## Sources

- [Rivers — Star Citizen Wiki](https://starcitizen.tools/Rivers) — primary route data for the canyon river, including headings and distances. Page last edited April 19, 2026
- [MicroTech — Star Citizen Wiki](https://starcitizen.tools/MicroTech_(planet)) — planet environment, atmosphere, and landmark list
- [New Canyon River Exploration — RSI Community Hub](https://robertsspaceindustries.com/community-hub) — longform canyon-river video reference from Star Citizen 3.18 PTU
```

- [ ] **Step 4: Verify the full page in browser**

Reload `http://localhost:4321/stanton/microtech/northern-wastes/canyon-river`.

Expected:
- All five sections present: two intro paragraphs, Getting There — Primary Route, TouristTip, If You Lose It, What You'll Find, Video Guides, Sources
- Section headings consistently styled (cobalt, uppercase, display font)
- No broken component imports or layout errors in the terminal

- [ ] **Step 5: Commit**

```bash
git add src/pages/stanton/microtech/northern-wastes/canyon-river.mdx
git commit -m "feat: add Canyon River POI page content"
```

---

### Task 5: Final visual check

**Files:** None — read-only verification pass.

- [ ] **Step 1: Check the hero image**

At `http://localhost:4321/stanton/microtech/northern-wastes/canyon-river`:
- Hero image `canyon-river-aerial.jpeg` should fill the top 400px — aerial river view with autumn-coloured forest
- Title "The Canyon River" overlaid at bottom-left
- "MicroTech · Northern Wastes" subtitle below

- [ ] **Step 2: Check the sidebar**

FastFactSidebar should show:
- Rating: 4 filled stars (out of 5)
- Vibe: Wild
- Difficulty: Moderate
- Required Gear: Cold Weather Suit
- Coordinates: `~440 km from MT DataCenter KH3-AAE-L on heading 027°`

- [ ] **Step 3: Check against The River for consistency**

Open `http://localhost:4321/stanton/microtech/northern-wastes/the-river` in a second tab.

Verify Canyon River matches on: hero height, heading/subtitle style, h2 styling, body text size and line height, TouristTip callout appearance, sidebar layout.

- [ ] **Step 4: Check the MicroTech planet page links to this page**

Open `http://localhost:4321/stanton/microtech`.

The Canyon River is Attraction #2. If the planet page has a link to the POI page, verify it resolves. If it does not yet have a link, that is out of scope for this plan.

- [ ] **Step 5: Final commit**

```bash
git add src/pages/stanton/microtech/northern-wastes/canyon-river.mdx
git commit -m "feat: Canyon River POI page — complete"
```

If no changes since the Task 4 commit, skip this step.
