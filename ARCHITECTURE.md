     1|# Project Architecture: Lonely Planet Star Citizen
     2|
     3|## 🏗️ Technical Stack
     4|- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
     5|- **Content**: [MDX](https://mdxjs.com/) (Markdown + Components)
     6|- **Styling**: Tailwind CSS (for rapid asymmetric grid implementation)
     7|- **Deployment**: GitHub Pages via GitHub Actions (Automatic Build & Deploy)
     8|- **Data Input**: 
     9|    - Manual: `.mdx` files for high-quality guides.
    10|    - Community: GitHub Issues $\rightarrow$ PRs (via a "Submission" workflow).
    11|    - Automated: GitHub Action $\rightarrow$ Patch Note Scraper (to notify of new POIs).
    12|
    13|## 📂 Information Hierarchy (The "Drill-Down")
    14|To maintain the "Edition" feel, the site follows a strict spatial hierarchy:
    15|
    16|`Home` $\rightarrow$ `System (Edition)` $\rightarrow$ `Planet/Moon` $\rightarrow$ `Region` $\rightarrow$ `POI (Point of Interest)`
    17|
    18|### 1. System Level (e.g., Stanton Edition)
    19|- **Purpose**: The "Cover" and "Table of Contents".
    20|- **Content**: System map, general travel tips, "Top 10" system-wide sights, and links to planets.
    21|- **Design**: High-impact imagery, distinct system-color theme.
    22|
    23|### 2. Planet/Moon Level (e.g., MicroTech)
    24|- **Purpose**: The "Regional Overview".
    25|- **Content**: Planetary characteristics (weather, gravity), major hubs, and a list of regions/sectors.
    26|- **Design**: Geographic summaries and "At a Glance" icons.
    27|
    28|### 3. Region Level (e.g., North Pole / Frozen Wastes)
    29|- **Purpose**: Grouping nearby sights for efficient "Touring".
    30|- **Content**: A localized map and a curated "Itinerary" (e.g., "The Winter Wonderland Loop").
    31|- **Design**: Map-centric layout with call-outs to specific POIs.
    32|
    33|### 4. POI Level (e.g., The River)
    34|- **Purpose**: The "Detailed Guide".
    35|- **Content**: 
    36|    - **Story**: Descriptive, atmospheric text.
    37|    - **Technical**: Coordinates, landing requirements.
    38|    - **Tourist Tips**: "Best time to visit", "Hidden detail to look for".
    39|- **Design**: The "Lonely Planet" asymmetric layout (Main content + Fast-Fact Sidebar).
    40|
    41|## 🛠️ Data Model (Frontmatter Schema)
    42|Every POI file will use a standardized YAML frontmatter for consistency:
    43|
    44|```yaml
    45|title: "The River"
    46|system: "Stanton"
    47|planet: "MicroTech"
    48|region: "Northern Wastes"
    49|type: "Natural Wonder" # [Natural Wonder, Urban, Easter Egg, Technical]
    50|difficulty: "Easy"    # [Easy, Moderate, Hard, Extreme]
    51|coordinates: "X, Y, Z"
    52|required_gear: ["Cold Weather Suit", "Small Ship"]
    53|vibe: "Serene"
    54|rating: 5             # 1-5 Star Rating
    55|```
    56|
    57|## 🔄 Community Workflow
    58|1. **Discovery**: User finds a new sight.
    59|2. **Submission**: User opens a GitHub Issue using the `POI Submission` template.
    60|3. **Verification**: Maintainer (or community) verifies the location.
    61|4. **Drafting**: A new `.mdx` file is created in the appropriate `system/planet/region/` directory.
    62|5. **Publishing**: Merge to `main` $\rightarrow$ GitHub Action $\rightarrow$ Live Site.
    63|