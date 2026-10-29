# VerseGuide Components Documentation

This document describes the three VerseGuide integration components: `ImageAttribution`, `TextAttribution`, and `CoordinateDisplay`.

## Overview

These components provide proper attribution to VerseGuide data throughout the site, ensuring compliance with attribution requirements while maintaining the Lonely Planet editorial voice.

## Components

### ImageAttribution

**Location:** `src/components/ImageAttribution.astro`

Displays attribution information for images sourced from VerseGuide or other third-party sources.

#### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `imageSource` | `string` | Yes | - | Name of the image source (e.g., "VerseGuide", "lov3pixel") |
| `locationName` | `string` | Yes | - | Name of the location being attributed |
| `imageUrl` | `string` | No | `null` | URL to the original image on the source site |
| `showOnHover` | `boolean` | No | `true` | Whether to show attribution only on hover (desktop) |
| `photographer` | `string` | No | `null` | Photographer's name if credited by the source |

#### Usage

```astro
---
import ImageAttribution from '../components/ImageAttribution.astro';
---

<ImageAttribution
  imageSource="VerseGuide"
  locationName="Serpent's Rest Outpost"
  imageUrl="https://verseguide.com/location/..."
  photographer="lov3pixel"
  showOnHover={true}
/>
```

#### Visual Behavior

- **Desktop (hover):** Attribution is hidden by default and appears when hovering over the image
- **Mobile:** Attribution is always visible with a simplified layout
- **Styling:** Semi-transparent dark background with white text, positioned at top-right of image container

---

### TextAttribution

**Location:** `src/components/TextAttribution.astro`

Displays inline attribution for coordinates, navigation info, and other text-based VerseGuide data.

#### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `dataType` | `'coordinates' \| 'navigation' \| 'description'` | Yes | - | Type of data being attributed |
| `locationName` | `string` | No | `null` | Name of the location (for context) |
| `showIcon` | `boolean` | No | `true` | Whether to show the data type icon |

#### Data Types

- `coordinates`: Shows "📍 Location Data from VerseGuide"
- `navigation`: Shows "🧭 Route Information from VerseGuide"
- `description`: Shows "ℹ️ Enhanced with VerseGuide content"

#### Usage

```astro
---
import TextAttribution from '../components/TextAttribution.astro';
---

<TextAttribution
  dataType="coordinates"
  locationName="The River"
  showIcon={true}
/>
```

#### Visual Behavior

- **Inline:** Appears as a link with underline on hover
- **Mobile:** Simplified to hide the icon for space efficiency
- **Styling:** Primary color text with dotted underline

---

### CoordinateDisplay

**Location:** `src/components/CoordinateDisplay.astro`

Displays coordinates in a styled card format with VerseGuide attribution.

#### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `x` | `number` | Yes | - | X coordinate |
| `y` | `number` | Yes | - | Y coordinate |
| `z` | `number` | Yes | - | Z coordinate |
| `showAttribution` | `boolean` | No | `true` | Whether to show VerseGuide attribution |
| `showPrecision` | `boolean` | No | `false` | Whether to show full coordinate precision (3 decimal places) |

#### Usage

```astro
---
import CoordinateDisplay from '../components/CoordinateDisplay.astro';
---

<CoordinateDisplay
  x={808.662}
  y={417.866}
  z={415.655}
  showAttribution={true}
  showPrecision={false}
/>
```

#### Visual Behavior

- **Card format:** Light background with left border accent
- **Three-column layout:** X, Y, Z coordinates displayed in separate columns
- **Attribution:** TextAttribution appears at the bottom of the card
- **Mobile:** Adjusted for vertical stacking and smaller text

#### Coordinate Formatting

- **Default (`showPrecision=false`):** Rounds to 2 decimal places (e.g., `808.66`)
- **Precise (`showPrecision=true`):** Shows 3 decimal places (e.g., `808.662`)

---

## Integration Examples

### Example 1: POI Page with Image Credit

```astro
---
import ImageAttribution from '../components/ImageAttribution.astro';
---

<div class="poi-hero">
  <img src={heroImage} alt={title} />
  <div class="poi-hero__overlay"></div>
  <ImageAttribution
    imageSource="VerseGuide"
    locationName={title}
    imageUrl={imageCreditUrl}
    photographer={photographer}
    showOnHover={false}
  />
</div>
```

### Example 2: Fast Facts Sidebar with Coordinates

```astro
---
import FastFactSidebar from '../components/FastFactSidebar.astro';
---

<FastFactSidebar
  rating={5}
  vibe="Serene"
  difficulty="Easy"
  required_gear={['Cold Weather Suit']}
  coordinates="808.662 / 417.866 / 415.655"
  showAttribution={true}
/>
```

### Example 3: In-Body Text with Attribution

```astro
---
import TextAttribution from '../components/TextAttribution.astro';
---

<figure>
  <img src={locationImage} alt={locationName} />
  <figcaption>
    <TextAttribution
      dataType="coordinates"
      locationName={locationName}
      showIcon={true}
    />
  </figcaption>
</figure>
```

## Component Architecture

```
TextAttribution.astro (base attribution component)
    └── Used by:
        ├── CoordinateDisplay.astro (shows coords with attribution)
        └── Manual usage in MDX/MD (inline text attribution)

ImageAttribution.astro (separate image-specific component)
    └── Used by:
        ├── POILayout.astro (for hero image credits)
        └── Manual usage in MDX/MD (image credit overlays)
```

## Testing

A demonstration page is available at:
`src/pages/stanton/microtech/northern-wastes/verseguide-demo.mdx`

This page showcases all three components with various configurations.

## Future Enhancements
### Future Enhancements
- [ ] Add performance optimizations (lazy loading, reduced motion support)

## Attribution Compliance

All components link to `https://verseguide.com` and properly credit the source. The `TextAttribution` and `ImageAttribution` components use `noopener noreferrer` for security.

When using VerseGuide data:
1. Always include attribution via the appropriate component
2. Keep the link to verseguide.com intact
3. Credit photographers when available via `ImageAttribution.photographer`
4. Do not modify the attribution text

---

## New Components (2026-10-28)

### POICollection.astro

**Location:** `src/components/POICollection.astro`

Displays a collection of Points of Interest with metadata including category, difficulty, and coordinates.

#### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | `'Points of Interest'` | Section heading |
| `pois` | `POI[]` | Yes | - | Array of POI objects |
| `showAttribution` | `boolean` | No | `true` | Whether to show VerseGuide attribution at the bottom |

#### POI Interface

```typescript
interface POI {
  title: string;
  category: 'natural-wonder' | 'hidden-find' | 'settlement' | 'practical' | 'urban-sight';
  coordinates: string;  // "808.662 / 417.866 / 415.655" format
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  href: string;
}
```

#### Usage

```astro
---
import POICollection from '../components/POICollection.astro';
---

<POICollection
  title="Top Attractions on MicroTech"
  pois={[
    {
      title: 'The River',
      category: 'natural-wonder',
      coordinates: '808.662 / 417.866 / 415.655',
      difficulty: 'Easy',
      href: '/stanton/microtech/northern-wastes/the-river/'
    },
    {
      title: 'Ice Caves',
      category: 'hidden-find',
      coordinates: '812.456 / 420.789 / 418.321',
      difficulty: 'Moderate',
      href: '/stanton/microtech/phds/locations/microtech-ice-caves/'
    }
  ]}
/>
```

---

### NavigationInfo.astro

**Location:** `src/components/NavigationInfo.astro`

Displays route planning information with step-by-step guidance, duration, distance, and landmarks.

#### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | `'Navigation Guide'` | Section heading |
| `summary` | `string` | No | - | Brief route overview |
| `steps` | `Step[]` | No | `[]` | Array of navigation steps |
| `showAttribution` | `boolean` | No | `true` | Whether to show VerseGuide attribution |
| `showDifficulty` | `boolean` | No | `true` | Whether to display difficulty badge |
| `difficulty` | `'Easy' \| 'Moderate' \| 'Hard'` | No | - | Route difficulty level |
| `estimatedTime` | `string` | No | - | Total travel time (e.g., "30 minutes") |
| `totalDistance` | `string` | No | - | Total route distance (e.g., "5 km") |
| `startLandmark` | `string` | No | - | Starting point reference |
| `endLandmark` | `string` | No | - | Ending point reference |

#### Step Interface

```typescript
interface Step {
  title: string;
  description: string;
  duration?: string;
  distance?: string;
  coordinates?: string;
  landmark?: string;
}
```

#### Usage

```astro
---
import NavigationInfo from '../components/NavigationInfo.astro';
---

<NavigationInfo
  title="Route to The River"
  summary="From the northern landing zone, follow the river path through the frozen valley."
  difficulty="Easy"
  estimatedTime="20 minutes"
  totalDistance="3 km"
  startLandmark="Northern Landing Zone"
  steps={[
    {
      title: "Head south from the landing zone",
      description: "Follow the main path toward the mountain range.",
      duration: "5 min",
      distance: "1 km"
    },
    {
      title: "Enter the protected valley",
      description: "The River is hidden in this sheltered valley.",
      duration: "10 min",
      distance: "1.5 km",
      landmark: "River Viewpoint"
    }
  ]}
/>
```

---

### VerseGuideCite.astro

**Location:** `src/components/VerseGuideCite.astro`

Inline citation component for linking to VerseGuide locations, systems, stations, or planets.

#### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | `string` | Yes | - | VerseGuide resource ID (e.g., location slug) |
| `title` | `string` | No | - | Resource title (uses resource type if omitted) |
| `type` | `'location' \| 'system' \| 'station' \| 'planet'` | No | `'location'` | Resource type |
| `showIcon` | `boolean` | No | `true` | Whether to show the type icon |
| `linkText` | `string` | No | - | Custom link text (defaults to title or resource type) |

#### Usage

```astro
---
import VerseGuideCite from '../components/VerseGuideCite.astro';
---

<p>
  For more information, see the 
  <VerseGuideCite id="the-river" title="The River" type="location" />
  on VerseGuide.
</p>

<p>
  Browse all 
  <VerseGuideCite id="stanton" type="system" linkText="Stanton system locations" />
  for planning your visit.
</p>
```

---

## Attribution Compliance
- [VerseGuide Data Extraction Guide](../docs/verseguide-data/README.md) - Data format and schema