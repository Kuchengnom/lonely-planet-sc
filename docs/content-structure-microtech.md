# Lonely Planet SC — Planet Destination Content Structure

Derived from analysis of Lonely Planet's city guide format ("The Best Things in Life Are Free", Cape Town chapter) and adapted for Star Citizen planet destination pages.

---

## LP Format Analysis

### Cape Town chapter structure (observed)

| Element | Description |
|---|---|
| Full-width map | Illustrative map with numbered POI pins |
| Destination headline | Massive display type, all-caps |
| Italic lead | 2–3 sentences; character of the place, not facts |
| Category legend bar | Colour-coded: Arts & Culture, Sports & Leisure, Music & Film, Food & Drink, Festivals & Events |
| Numbered attractions | 9–12 per destination; numbered circle badge + category colour pin |
| Per-attraction body | 2–3 paragraphs; bold for proper nouns, italic for times/prices/addresses |
| "The Local's View" | Pull-quote sidebar from a named resident; personal, opinionated |
| Deep-dive callout | Boxed section on one topic (e.g. "Iziko Museums") |
| Vital Statistics | Medallion-style bubble: population, best for, currency, price index |

### Voice and tone (LP)
- **Personal over factual** — opens with an anecdote or feeling, not statistics
- **Honest about trade-offs** — mentions challenges (crowds, cost, weather) without apology
- **Punchy and short** — no paragraph over 5 sentences; names bolded to aid skim-reading
- **Practical woven in** — hours, prices, navigation tips embedded in prose, not listed separately
- **Celebrates the unexpected** — the unofficial, the hidden, the seasonal are often the lead attraction

---

## Adapted Structure for SC Planets

### Page types

| Page type | Template | Route pattern |
|---|---|---|
| Planet destination guide | `PlanetLayout.astro` | `/stanton/microtech` |
| Single POI | `POILayout.astro` | `/stanton/microtech/northern-wastes/the-river` |

---

## Planet Page Structure

### 1. System Header (inherited)
Sticky cobalt nav from `SystemHeader.astro`. Shows system name, breadcrumb, and planet-type badge.

### 2. Hero
- Full-width image, 560px tall on desktop
- Planet name overlaid at bottom-left in display type
- System · region sub-label above the name

### 3. Lead Section
Two-column on desktop (2/3 + 1/3):
- **Left (2/3):** Italic lead paragraph — 3–5 sentences on the character and feel of the planet. No facts. Ends with the reason to come.
- **Right (1/3):** `VitalStats` component — compact facts box with coloured left border

### 4. Attraction Entries
Numbered list of 6–10 attractions. Each `AttractionEntry` contains:
- Number badge (01, 02…) in category colour
- Category tag (Natural Wonder, Hidden Find, Settlement, Getting Around)
- Title in display type
- 2–4 paragraphs of editorial body
- Optional image (floated right on desktop, full-width below on mobile)

### 5. Explorer's View
`ExplorerView` component placed inline in the MDX, typically after attraction 3 or 4. Equivalent to LP's "The Local's View" — a pull-quote from a named pilot/explorer with an opinionated take.

### 6. Getting There
Frontmatter-driven section rendered by the layout at the bottom of the content column. Practical navigation info: spawn point, ship class recommendation, quantum targets, timing advice.

---

## Category System

| Category | Colour | Used for |
|---|---|---|
| `natural-wonder` | Emerald `#059669` | Rivers, lakes, ice formations, aurora, biomes |
| `hidden-find` | Violet `#7c3aed` | Easter eggs, caves, undocumented anomalies |
| `settlement` | Cobalt `var(--color-primary-600)` | Cities, outposts, stations |
| `practical` | Amber `#d97706` | Navigation tips, routes, logistics |

---

## Content Guidelines

### Writing the lead
Do not open with facts. Open with atmosphere: what does it feel like to arrive? What is the first thing that surprises a visitor? The vital stats handle the data — the lead handles the emotional case for visiting.

**Bad:** "MicroTech is Stanton IV, a sub-arctic planet owned by the microTech corporation, with a surface temperature of…"

**Good:** "MicroTech is the coldest world in the Stanton system with the least reason to be interesting — and somehow the most reasons to stay."

### Writing attraction entries
- Lead with the **why** (what is remarkable about this place), not the **what** (physical description)
- Practical navigation info goes in the **second paragraph**, not the first
- Bold key proper nouns on first use: **New Babbage**, **MT DataCenter E2Q-NSG-Y**
- One TouristTip component per page maximum (use ExplorerView instead for broader tips)

### The Explorer's View
Written as a direct first-person quote. Should:
- Sound like a real person, not a press release
- Include a specific detail (a bearing, a time of day, a visual cue) that only someone who's been there would know
- End on a note that makes the reader want to go

### Vital Statistics fields
| Field | Notes |
|---|---|
| Best For | 2–3 short phrases, comma-separated |
| Climate | One sentence max |
| Hub | Primary landing/spawn point |
| Currency | Always UEC in Stanton |
| Ship Class | What kind of ship is appropriate |
