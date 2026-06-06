# PHDS — Curated Search Queries & Candidate Thread Tracking

This document is your primary lookup sheet for gathering community sources (Reddit/RSI Spectrum) that provide coordinates/navigation breadcrumbs for prioritized locations. Use the console-friendlyReddit search URLs and browser_console workflow to pull candidate thread links, then log them in the Candidate Thread sections below for me to validate before MDX writing.

=== CONSOLE-FRIENDLY REDDIT SEARCH URLS (TARGETED) ===

New Babbage — Frozen Canal Ice Walls (upgrade needed)
- URL: https://old.reddit.com/r/starcitizen/search/?q=New%20Babbage%20ice%20wall%20canal&restrict_sr=on&sort=relevance&t=all
- Console evaluation: `Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`
- Key breadcrumb types to look for: lat/lon coordinates, OM ranges, landmark-anchored routes (e.g., “head north from Station I toward bridge at lat -19.4, lon 81.7”)
- What to note: frozen canal position relative to New Babbage landmarks (stations, bridges, tram lines), ice elevation/height, visual notes (color, translucency)

Port Tressler — Under-Hangar Catwalks (upgrade needed)
- URL: https://old.reddit.com/r/starcitizen/search/?q=Port%20Tressler%20catwalk%20under%20hangar&restrict_sr=on&sort=relevance&t=all
- Console evaluation: `Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`
- Key breadcrumb types: altitude approximations (e.g., “~12–20 m above deck”), specific door label/hatch (e.g., MAINT-XX), route from terminal (which lift/elevator)
- What to note: vantage angles over main tarmac, busy hours/traffic patterns, EVA steps to reach exterior walkways

MicroTech — Surface Ice Caves (create new entry)
- URL: https://old.reddit.com/r/starcitizen/search/?q=MicroTech%20ice%20cave%20northern%20wastes&restrict_sr=on&sort=relevance&t=all
- Console evaluation: `Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`
- Key breadcrumb types: OM ranges, surface coordinates, or landmark-using routes (e.g., “from The River head 2.1 km bearing 290°, cave on glacier flank”)
- What to note: entrance visibility from ground or required altitude/canyon approach; interior ice formations; structural/safety notes

Pyro — System Anomalies (create new entry)
- Pyro I wreck/crash: https://old.reddit.com/r/starcitizen/search/?q=Pyro%20I%20wreck%20crash&restrict_sr=on&sort=relevance&t=all
- Pyro II anomaly: https://old.reddit.com/r/starcitizen/search/?q=Pyro%20II%20anomaly%20surface&restrict_sr=on&sort=relevance&t=all
- Pyro III oddity: https://old.reddit.com/r/starcitizen/search/?q=Pyro%20III%20volcano%20oddity&restrict_sr=on&sort=relevance&t=all
- General: https://old.reddit.com/r/starcitizen/search/?q=Pyro%20system%20hidden%20site&restrict_sr=on&sort=relevance&t=all
- Console evaluation: `Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`
- Key breadcrumb types: OM waypoints for wreck/oddity; canyon/corridor approaches; altitudes or crater positions
- What to note: planet-specific (I, II, III, VI), visual description of anomaly, corroboration by multiple users

General Discoverability — Photo Spots & Hidden Locations (cross-system expansion)
- URL: https://old.reddit.com/r/starcitizen/search/?q=photo%20spot%20screenshot%20location%20hidden&restrict_sr=on&sort=top&t=year
- Console evaluation: `Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`
- Key breadcrumb types: specific vantage points (e.g., “catwalk near Pump 3 in Orison”), elevation notes (e.g., “~75.2 m altitude”), landmark anchors (“north of station, near power plant”)
- What to note: system/planet focus, type (natural/industrial/urban), date recency (ideally last 12–24 months)

=== CANDIDATE THREAD TRACKING (LOG FOUND SOURCES HERE) ===

Use this section to capture each confirmed thread after running the searches. Fill one entry per thread.

Template (copy for each find):
- Title: [thread title]
- Platform: Reddit / RSI Spectrum
- Link: [URL]
- Key breadcrumb: [coordinate/OM range/landmark route]
- Additional visual/context notes: [short excerpt]
- Corroboration link: [URL] (optional, if you found second source)
- PHDS target: [New Babby/Port Tressler/MicroTech Caves/Pyro/other]

NEW BABBAGE — FROZEN CANAL ICE WALLS
- Title: [pending]
- Platform: [Reddit/Spectrum]
- Link: [pending]
- Key breadcrumb: [pending]
- Additional visual/context notes: [pending]
- Corroboration link: [optional]
- PHDS target: New Babby

PORT TRESSLER — UNDER-HANGAR CATWALKS
- Title: [pending]
- Platform: [Reddit/Spectrum]
- Link: [pending]
- Key breadcrumb: [pending]
- Additional visual/context notes: [pending]
- Corroboration link: [optional]
- PHDS target: Port Tressler

MICROTECH — SURFACE ICE CAVES
- Title: [pending]
- Platform: [Reddit/Spectrum]
- Link: [pending]
- Key breadcrumb: [pending]
- Additional visual/context notes: [pending]
- Corroboration link: [optional]
- PHDS target: MicroTech caves

PYRO — SYSTEM ANOMALIES (track per planet/thread)
- Title: [pending]
- Platform: [Reddit/Spectrum]
- Link: [pending]
- Key breadcrumb: [pending]
- Additional visual/context notes: [pending]
- Corroboration link: [optional]
- PHDS target: Pyro [I/II/III/V/anomalous location]

GENERAL DISCOVERABILITY — PHOTO SPOTS (track cross-system finds)
- Title: [pending]
- Platform: [Reddit/Spectrum]
- Link: [pending]
- Key breadcrumb: [pending]
- Additional visual/context notes: [pending]
- Corroboration link: [optional]
- PHDS target: [system/planet/type]

=== QUALITY GATES FOR EACH THREAD LOGGED ===

Before logging, confirm the thread provides:
- EITHER explicit coordinates (lat/lon) OR OM/waypoint ranges OR clear landmark/heading routes with distances
- At least one visual/contextual note describing what the location looks like
- (Optional but preferred) a second corroboration thread (different platform or different post)

=== NEXT STEP AFTER COLLATING CANDIDATE THREADS ===

Once Candidate Thread entries are populated (even just 1–2 per desired target), share them back via this doc. I will:
- Validate sources and check that coordinates/breadcrumbs are clear enough for navigation
- Write or upgrade MDX entries with POILayout frontmatter
- Include direct, real URLs (no placeholders) in the Sources sections

=== WIKI PAGES FOR CONTEXT (NOT AUTHORITY FOR COORDINATES) ===
- New Babbage general: https://starcitizen.tools/New_Babbage
- Port Tressler station: https://starcitizen.tools/Port_Tressler
- MicroTech planet overview: https://starcitizen.tools/MicroTech_(planet)

Use wiki pages as background for environment/district context. Do NOT rely on them as coordinate sources; they do not provide navigation breadcrumbs for our reserved locations.

=== HOW I WILL USE THE LOGGED TARGETS ===

When you return Candidate Thread entries, I will:
- Review each for breadcrumb clarity and corroboration
- Draft/upgrade the MDXs with:
  - Introduction
  - Getting There (with clear navigation from your breadcrumbs)
  - What You’ll Find
  - Photographic Opportunities
  - Safety/Etiquette
  - Sources (direct Reddit/RSI Spectrum links, no placeholder URLs)

The logged Candidate Thread entries are the approval cue before I publish MDXs. As soon as we have at least one high-quality source per target (preferably two for corroboration), we’ll proceed.

=== END OF DOCUMENT ===

Use this doc as your research hub. Populate Candidate Thread sections as you run the searches, and share the completed entries back for MDX production.
