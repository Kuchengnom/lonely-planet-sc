# Galactapedia Citation Guidelines

**Reviewed:** 2026-10-24  
**Purpose:** Standardize the use of RSI Galactapedia as a source for Star Citizen travel guide content while maintaining provenance verification.

---

## Overview

The [RSI Galactapedia](https://robertsspaceindustries.com/galactapedia) is the official Star Citizen encyclopedia, maintained by Cloud Imperium Games. It provides authoritative information about locations, systems, lore, vehicles, factions, and in-game mechanics. This guide documents how to properly cite Galactapedia content while maintaining the project's provenance verification gate.

---

## Provenance Verification Gate

### What is a provenance gate?

A provenance gate is a verification mechanism that ensures all content added to the site can be traced back to an official or community-verified source. For Galactapedia content, this means:

1. **Direct source citation** — Every factual claim from Galactapedia must link to the specific article used
2. **Article URL permanence** — Use Galactapedia's stable article URLs (not search results)
3. **Content recency** — Note the Galactapedia last-updated date for factual accuracy tracking

### Why provenance matters

- **Accuracy** — Ensures guide content reflects actual game state, not assumptions
- **Credibility** — Maintains the site's reputation as a reliable travel resource
- **Maintenance** — When game updates change locations, we can identify affected pages
- **Attribution** — Gives proper credit to RSI for official lore and descriptions

---

## Galactapedia Article URLs

### URL Format

Galactapedia articles use this format:

```
https://robertsspaceindustries.com/galactapedia/article/{article-id}-{slug}
```

**Example:**
```
https://robertsspaceindustries.com/galactapedia/article/RMNKXwe51E-valakkar
```

### How to Find the Stable Article URL

1. **Search Galactapedia** — Use the search bar at the top
2. **Click the article** — The URL in your browser's address bar is the stable link
3. **Copy the full URL** — Include the full path, including the article ID

### What NOT to Use

- ❌ Search result URLs
- ❌ Category or index pages
- ❌ URLs with query parameters
- ❌ URLs that change after page reload

---

## Citation Format in MDX Files

### Location in Document

Citations appear in a dedicated `## Sources` section at the end of guide pages, after `## Video Guides` if present.

### Format Template

```md
---
## Sources

- [Article Title — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/{article-id}-{slug}) — Brief description of what this source covers
- [Another Article — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/{article-id}-{slug}) — How this source supports the content above
```

### Example (from `pyro-1/index.mdx`)

```md
## Sources

- [Valakkar — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/RMNKXwe51E-valakkar) — Official source for the creature's biology, life stages, invasive status in the Pyro system, and the irradiated variant found on Pyro I
- [Pyro System — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/0ODxJM917N-pyro-system) — System overview, planet order, and the lawless status of Pyro that the creature's persistence depends on
- [Monox (Pyro II) — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/0jGdgLEjqJ-monox-pyro-ii) — The Pyro II entry, referenced here for the planet-name and system-context notes
```

---

## Provenance Checklist for New Content

Before publishing new guide content that cites Galactapedia:

- [ ] **All factual claims have Galactapedia citations**
  - System overview facts (discovery date, affiliation, star type)
  - Planet facts (temperature, atmosphere, notable features)
  - Lore entries (history, factions, significant events)
  - Location coordinates (if directly quoted from Galactapedia)
- [ ] **Each citation uses a stable Galactapedia article URL**
  - Verified URL format: `https://robertsspaceindustries.com/galactapedia/article/{article-id}-{slug}`
  - No search results, category pages, or URLs with query params
- [ ] **The description after each URL explains what content from that article was used**
  - Not just the title — what specific facts came from this source
- [ ] **The `## Sources` section appears after `## Video Guides` (if present)**
  - Consistent ordering across all guide pages
- [ ] **The source information is specific to the guide's content**
  - Not a generic Galactapedia link without context

---

## When Galactapedia Isn't Sufficient

Galactapedia provides official lore and system facts, but it doesn't cover:

| What You Need | Use This Instead |
|---------------|------------------|
| Player-tested navigation coordinates | Community sources (Reddit, YouTube, dedicated forums) |
| First-hand visitor descriptions | Personal experiences (with verification) |
| Image provenance | `docs/verseguide-asset-provenance.md` or `docs/nyx-asset-provenance.md` |
| Up-to-date patch notes | [CIG Patch Notes](https://robertsspaceindustries.com/en/patch-notes) |

### Mixed Sources

When content combines Galactapedia facts with community-verified information:

```md
---
## Sources

- [Stanton System — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/...) — System overview, discovery, and corporate ownership
- [Community coordinates verified via multiple Reddit reports](https://old.reddit.com/r/starcitizen/comments/...) — Navigation approach and landing zone confirmation
```

---

## Maintenance and Updates

### When Galactapedia Updates

1. **Check for URL changes** — Rare, but article IDs can change during major overhauls
2. **Review content updates** — Galactapedia may add/clarify facts that affect guide content
3. **Update citations** — If the article URL changes, update all references in affected pages

### When Game Patches Change Locations

1. **Identify affected pages** — Use `grep -r "galactapedia" src/pages/` to find all citations
2. **Review patch notes** — Check what changed (new locations, removed features, modified descriptions)
3. **Update guide content** — Revise factual claims to match current game state
4. **Update source descriptions** — Add patch-specific notes to citations

---

## Examples

### Example 1: Planet Overview

**Content:**
> microTech is the coldest world in the Stanton system, with surface temperatures that regularly drop below -100°C.

**Citation:**
```md
## Sources

- [microTech (planet) — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/...) — Planet overview, temperature range, and environmental conditions
```

### Example 2: System History

**Content:**
> The Stanton system was discovered in SEY 2851 by navjumper Toshi Aaron.

**Citation:**
```md
## Sources

- [Stanton System — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/...) — Discovery history and Toshi Aaron's role
```

### Example 3: Corporate Ownership

**Content:**
> All planets in the Stanton system were sold by the UEE government to four major corporations soon after their discovery.

**Citation:**
```md
## Sources

- [Stanton System — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/...) — Corporate ownership history and planet allocation
```

### Example 4: Multiple Sources for One Fact

**Content:**
> The valakkar on Pyro I has adapted to radiation, with tumour-like growths between protective plates and the ability to expel radioactive saliva.

**Citations:**
```md
## Sources

- [Valakkar — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/RMNKXwe51E-valakkar) — Biology, life stages, and invasive status in the Pyro system
- [Pyro I — RSI Galactapedia](https://robertsspaceindustries.com/galactapedia/article/...) — Specific details about the irradiated variant on Pyro I (if available)
```

---

## Related Documentation

- `docs/verseguide-asset-provenance.md` — VerseGuide image provenance and citation requirements
- `docs/nyx-asset-provenance.md` — Nyx-specific image clearance and provenance rules
- `docs/phds-source-research-links.md` — Community research methodology and source verification

---

## Questions or Improvements?

This document is a living guide. If you identify gaps in the provenance verification process or have suggestions for improving Galactapedia citation standards, document them here for review.