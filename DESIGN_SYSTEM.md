# Design System: Lonely Planet Star Citizen

## 🎨 Visual Identity
This system bridges the gap between high-end print travel guides and a modern static website.

### 1. The "Book" Color Palette
We avoid pure white/black to reduce eye strain and mimic physical paper.

| Element | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | Paper White | `#F9F7F2` | Main page background |
| **Primary Text** | Ink Charcoal | `#2D2D2D` | Body copy and headings |
| **Secondary Text** | Slate Grey | `#666666` | Captions and utility text |
| **Accent 1** | Stanton Cobalt | `#1E3A8A` | Stanton Edition accent / Primary buttons |
| **Accent 2** | Pyro Magma | `#B91C1C` | Pyro Edition accent / Warnings |
| **Border** | Page Edge | `#E5E2D9` | Subtle dividers and card borders |

### 2. Typography Scale
We use a "Hybrid" stack: Impactful Sans for navigation, Elegant Serif for storytelling.

- **H1 (Edition Title)**: `Archivo Narrow` / Bold / 3rem $ightarrow$ High impact, condensed.
- **H2 (POI Name)**: `Archivo Narrow` / Semi-Bold / 2rem $ightarrow$ Authoritative.
- **Body (Travel Story)**: `Merriweather` / Regular / 1.1rem $ightarrow$ High readability, "Book" feel.
- **Utility (Coords/Data)**: `JetBrains Mono` / Regular / 0.9rem $ightarrow$ Technical and precise.

### 3. Component Blueprints

#### A. The `FastFact` Sidebar
A narrow vertical column that sticks to the side of the POI story.
- **Style**: Background `#E5E2D9`, left-border 4px solid `[System Color]`.
- **Content**: 
    - `Rating`: ⭐⭐⭐⭐⭐
    - `Vibe`: "Serene"
    - `Difficulty`: "Easy"
    - `Coords`: `X, Y, Z`

#### B. The `TouristTip` Box
A call-out box embedded in the body text.
- **Style**: Light yellow background (`#FEFCE8`), dashed border.
- **Icon**: 💡 (Lightbulb)
- **Content**: Short, punchy advice.

#### C. The `POI_Badge`
- **Style**: Small rounded pill.
- **Variants**: 
    - `Easter Egg`: Purple bg, white text.
    - `Natural Wonder`: Green bg, white text.
    - `Urban Sight`: Blue bg, white text.

## 📏 Layout Patterns

### The "Asymmetric Guide" (POI Page)
```
_______________________________________________________
| [ SYSTEM HEADER - Cobalt Theme ]                    |
|_____________________________________________________|
|                                                     |
|  [ MAIN STORY COLUMN (66%) ]      [ SIDEBAR (33%) ]  |
|                                   |                 |
|  # The River                      | [FastFact Card]  |
|                                   | - Rating: 5/5    |
|  The river on MicroTech is a       | - Vibe: Eerie    |
|  miracle of nature...             | - Diff: Easy     |
|                                   |                 |
|  [ Hero Image ]                   | [Coords Card]    |
|                                   | X: 123, Y: 456   |
|  💡 Pro Tip: Land at dusk...      |                 |
|                                   | [Related POIs]   |
|  [Detail Image 1] [Detail Image 2]| -> The Tree      |
|___________________________________|_________________|
```
