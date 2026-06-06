# Project Hidden Discovery Sites — Research Priorities and Deliverables

=== WHAT’S COMPLETE ===

Definitions and methodology (docs/hidden-oddities-content.md)
- Requirements: at least one direct community source with coordinates/OM ranges or reliable land-to approach; at least one corroborating source for visual/contextual notes.
- Platforms: Reddit r/starcitizen, RSI Spectrum (Community Hub or forum route), starcitizen.tools (environmental/geographic context only, not primary source for coordinates).

Recent and corrected entries (each includes Community Sources section with direct links):
- Daymar Bio-Dome Remnants — corrected
- Orison’s Secret Cloud-Layer Catwalks — corrected (Orison-based navigation)
- Area18 Transit Tram Vistas — new (Reddit list thread, RSI Spectrum seed thread)
- Yela Cryo-Asteroid Formations — new (Star Citizen Tools + Reddit tips thread)

Reserved/Placeholder (upgrades or creates needed with sources):
- New Babbage Frozen Canal Ice Walls — placeholder (explicitly marked); upgrade pending sources with coordinates/approach.
- Port Tressler Under-Hangar Catwalks — reserved; upgrade pending sources with altitude and specific maintenance hatch/method.
- Pyro System Anomalies — reserved; create new entries pending sources with coordinates/waypoints.

Supporting docs
- Main PHDS overview (src/pages/stanton/phds/index.mdx) — updated to reflect current database and mark reserved entries.
- Research methodology and delivery notes (docs/hidden-oddities-content.md) — updated with detailed methodology, completion notes, and next steps.

=== RESEARCH RESOURCES FOR THE NEXT ROUND ===

Quick search queries prepared (console-friendlyReddit oldreddit URLs and browser_console evaluation expression)
- New Babbage ice walls: https://old.reddit.com/r/starcitizen/search/?q=New%20Babbage%20ice%20wall%20canal&restrict_sr=on&sort=relevance&t=all
- Port Tressler catwalks: https://old.reddit.com/r/starcitizen/search/?q=Port%20Tressler%20catwalk%20under%20hangar&restrict_sr=on&sort=relevance&t=all
- Pyro anomalies: https://old.reddit.com/r/starcitizen/search/?q=Pyro%20wreck%20crash%20anomaly&restrict_sr=on&sort=relevance&t=all
- General discoverability: https://old.reddit.com/r/starcitizen/search/?q=photo%20spot%20screenshot%20location%20hidden&restrict_sr=on&sort=top&t=year

Console-friendly workflow
- Navigate to one of the search pages above.
- Issue a console evaluation: `Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`
- From the tool output, open promising thread links, and search each page for coordinate/AP breadcrumbs: lat/lon, OM ranges, headings, bearings, landmark-anchored steps.

Candidate Thread Template (for you to provide to me)
- Title:
- Platform:
- Link:
- Key content snippet:
- Corroboration: Yes/No

Wiki pages already browsed for environmental context (not coordinate sources)
- New Babbage: https://starcitizen.tools/New_Babbage
- Port Tressler: https://starcitizen.tools/Port_Tressler
- MicroTech (planet): https://starcitizen.tools/MicroTech_(planet)

=== ACTIONABLE PRIORITIES — WHAT’S NEEDED NEXT ===

1. Upgrade New Babbage Frozen Canal Ice Walls from placeholder
   - Requirements: at least one Reddit or Spectrum thread with coordinates or a clear walk-to approach. Provide a Candidate Thread entry with direct link and key snippet.
   - Once approved, I will replace the placeholder MDX with a fully sourced entry.

2. Upgrade Port Tressler Under-Hangar Catwalks
   - Requirements: at least one thread with altitude approximations and specific maintenance hatch/method. Provide a Candidate Thread entry.
   - Once approved, I will upgrade the reserved entry (or replace if the existing page is too thin on details).

3. Create new entries for MicroTech Ice Caves and/or Pyro System Anomalies
   - Requirements: at least one thread per entry with OM/waypoint breadcrumbs or landmark-anchored routes. Provide Candidate Thread entries.
   - Once approved, I will create the new MDX entries using POILayout schema and include direct sources.

4. (Optional) Expand with additional Stanton/Pyro spots
   - Provide Candidate Thread entries for any favorite locations; I’ll write MDXs upon approval.

=== OUTPUTS EXPECTED FROM SOURCE RESEARCH (for me to write MDXs) ===

For each Candidate Thread Bundle (e.g., per location):
- URL of the primary thread (Reddit or Spectrum)
- Coordinates or OM range / AP breadcrumbs from the thread
- If available: corroborating thread link (title + URL) or Wiki reference for environmental context

I will use those to:
- Write or upgrade MDX(s) with POILayout frontmatter
- Include introduction, navigation (breadcrumbs), “What You’ll Find,” photographic and photographic-safety notes, and Sources (direct links)

=== WHERE TO START (YOU CHOOSE THE NEXT STEP) ===

Option A
- Gather Candidate Thread entries for New Babbage ice walls and Port Tressler catwalks first (upgrade priorities).
- Provide direct URLs and coordinate/approach snippets.

Option B
- Create new entries first: MicroTech Ice Caves + one Pyro anomaly (to increase PHDS diversity across systems).
- Provide direct URLs and coordinate/approach snippets.

Option C
- Run the console-friendlyReddit search URLs and console evaluation pattern yourself, then share back a list of Candidate Thread entries for all prioritized targets.

=== QUICK REMINDERS (quality gates)
- Don’t use placeholder URLs in Sources; only real, navigable Reddit/RSI Spectrum links.
- Require at least numeric coordinate/AP breadcrumbs or a clear step-by-step approach (e.g., “head 2.5 km bearing 320° from [landmark]”) for each MDX navigation section.
- For every entry, include at least one corroborating post/source (different platform or thread).
- If a location has no coordinate/approach sources yet, mark it as reserved (as done for New Babby/Tressler/Pyro) and defer publication.

=== FILES TO REFERENCE
- Main PHDS index: src/pages/stanton/phds/index.mdx
- Methodology docs: docs/hidden-oddities-content.md and docs/phds-source-research-links.md
- MDX locations (for quick review): see the directory tree under src/pages/stanton/phds/locations/

This system is ready for source gathering. Once Candidate Threads arrive, I’ll write/upgrade MDX entries and keep Sources sections strictly traceable to real community links.
