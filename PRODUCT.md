# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + MDX, Tailwind CSS, deployed to GitHub Pages

## Users

Casual Star Citizen players — self-described "space tourists" — who want curated, narrative-driven location guides before jumping into the universe. They have limited play time and need actionable, scannable information that maps directly to in-game navigation.

## Product Purpose

Deliver Lonely Planet–quality travel guides for Star Citizen systems and POIs: rich narrative descriptions paired with operational data (getting there, landmarks, warnings, tips). Success means a player reads a guide, jumps in with confidence, and feels prepared for what they'll encounter.

## Positioning

Not a wiki or encyclopedia. Each guide is a standalone editorial piece — written, curated, and structured like a professional travel publication — with real-world navigational logic mapped onto Star Citizen's systems. The differentiator is editorial quality over raw data accumulation.

## Operating Context

- Content lives in MDX pages under system → region/edition → POI hierarchy
- Deployed to GitHub Pages via automated build
- Mobile-first reading experience — guides consumed on desktop and phone during pre-jump prep
- PHDS (Project Hidden Discovery Sites) for undocumented, coordinate-only locations
- Image assets in `/public/phds/[location-{hero|thumb}.jpg]`

## Capabilities and Constraints

- Navigation must support finding unmapped locations via **coordinate triangulation** (e.g., "23km from OM1 and 14000km from OM2") — this is a first-class search/discovery method, not an afterthought
- Content must be scannable and structured with consistent headings
- All external data (Star Citizen wiki, lore, coordinates) must be verified, not fabricated
- Color scheme: paper (#f4f1ea), ink (#2c1810), accent (#c45d38)
- No auth, no dynamic backend, no user accounts

## Brand Commitments

- Lonely Planet editorial tone and aesthetic — high-fidelity "print magazine" quality
- Star Citizen setting authenticity — no fanfiction, no speculation presented as fact
- Coordinate-based discovery as a core navigation method, not hidden in documentation

## Evidence on Hand

- System guide pages with sights, highlights, tours, and getting-around sections
- PHDS embeds for undocumented coordinates
- Image assets for systems and locations
- No user testimonials, benchmarks, or pricing data — do not invent these

## Product Principles

1. Editorial quality over completeness — better to have 10 guides that are excellent than 100 that are mediocre
2. Navigation serves the player — coordinate triangulation, region browsing, and search all need to work without friction
3. Facts, not fiction — narrative flair is welcome, but lore and operational data must be grounded in verified sources
4. Mobile-first reading — guides are consumed on the phone before a jump, not in a browser at a desk

## Accessibility & Inclusion

Mobile-first responsive layout; content readable on phones during pre-jump preparation. No accessibility audit has been performed.
