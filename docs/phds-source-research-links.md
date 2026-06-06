# PHDS Source Research - Identifiable Links and Next Steps

Documented links accessible during this session via browser, and clear next actions to retrieve direct community sources (coordinates/breadcrumbs) for reserved locations.

=== IDENTIFIED WIKI LINKS (via starcitizen.tools) ===

New Babbage
- Wiki (general city info, environmental context; no direct canal/ice navigation here)
  https://starcitizen.tools/New_Babbage

Port Tressler
- Wiki (space station overview; does not include under-hangar catwalk navigation)
  https://starcitizen.tools/Port_Tressler

MicroTech Surface (planet overview for environmental context)
- Wiki (covers tundra, geothermal anomalies)
  https://starcitizen.tools/MicroTech_(planet)

=== NEXT STEPS TO GATHER COMMUNITY SOURCES (coordinates/breadcrumbs) ===

NOTE: Reddit searches via browser in this session encountered validation challenges; to avoid placeholder URLs, we will use targeted search queries and browser-accessible pages. Below are console-friendly URL patterns and console evaluation Steps.

1) New Babbage Frozen Canal Ice Walls (reserved: needs direct source(s) with coordinates/approach)

Suggested console-friendlyReddit search URL (old.reddit; locator-oriented):

https://old.reddit.com/r/starcitizen/search/?q=New%20Babbage%20ice%20wall%20canal&restrict_sr=on&sort=relevance&t=all

Suggested console evaluation on that page to find thread links:
- Expression (run in browser_console):
  `	Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`

What to capture in results:
- For each thread link, open it and look for either:
  a) Coordinates (lat/long) or OM ranges
  b) Clear approach description (e.g., “go north from X station and walk near Y bridge, lat -19.4, lon 81.7”, “follow frozen canal east from Z”)
- If a thread mentions navigation/access but lacks numbers, keep it for cross-check; still prioritize threads with numeric breadcrumbs or unambiguous route steps.

2) Port Tressler Under-Hangar Catwalks (reserved: needs a concrete source with altitude and access hatch/method)

Suggested console-friendlyReddit search URL:

https://old.reddit.com/r/starcitizen/search/?q=Port%20Tressler%20catwalk%20under%20hangar&restrict_sr=on&sort=relevance&t=all

Suggested console evaluation on that page:
- Expression:
  `	Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`

What to capture in results:
- Elevation approximations (e.g., “~12–20 m above deck”)
- Practical access method: specific door label (e.g., MAINT-XX), route from terminal, or sequence of lifts/hatches
- Any screenshots showing catwalks from under-deck perspective

3) MicroTech Surface Ice Caves (create new entry first; needs source with entrance approach)

Suggested console-friendlyReddit search URL:

https://old.reddit.com/r/starcitizen/search/?q=MicroTech%20ice%20cave%20northern%20wastes&restrict_sr=on&sort=relevance&t=all

Suggested console evaluation on that page:
- Expression:
  `	Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`

What to capture in results:
- Near entries visible from ground or from altitudes/approaches
- OM ranges or surface coordinates, or landmark-anchored routes (e.g., “from The River head 2.1 km bearing 290°, look for cave on glacier flank”)
- Safety notes (avalanche/structural risks) if present in thread OP or comments

4) Pyro System Anomalies (create new entry first; focus on specific planets)

For Pyro I, II, III, or VI/etc., discover PII threads with anomaly/breadcrumbs. Example URL patterns:

https://old.reddit.com/r/starcitizen/search/?q=Pyro%20I%20wreck%20crash&restrict_sr=on&sort=relevance&t=all
https://old.reddit.com/r/starcitizen/search/?q=Pyro%20II%20anomaly%20surface&restrict_sr=on&sort=relevance&t=all
https://old.reddit.com/r/starcitizen/search/?q=Pyro%20III%20volcano%20oddity&restrict_sr=on&sort=relevance&t=all
https://old.reddit.com/r/starcitizen/search/?q=Pyro%20system%20hidden%20site&restrict_sr=on&sort=relevance&t=all

Suggested console evaluation on any of the above pages (same pattern):
- Expression:
  `	Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`

What to capture in results:
- Coordinates or OM waypoints for wreck/oddity
- Canyon/corridor descriptions, altitudes, or landmark bearings
- Multiple-user corroboration (e.g., “confirmed at [coords] by [user]”)

5) General discoverability queries (for cross-system expansion)

Template console-friendlyReddit search URL:

https://old.reddit.com/r/starcitizen/search/?q=photo%20spot%20screenshot%20location%20hidden&restrict_sr=on&sort=top&t=year

Suggested console evaluation on that page:
- Expression:
  `	Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`

Then filter returned links by spatial keywords (system/planet) and type (ice, cave, vantage, anomaly, ruin).

=== HOW TO PROCEED IN PRACTICE (browser_console WORKFLOW) ===

For each target:
- In-browser, navigate to an old.reddit search URL from the list above.
- Navigate the browser to the URL, then issue a console evaluation:
  `	Array.from(document.querySelectorAll('a[href*="/r/starcitizen/comments/"]')).slice(0,20).map(a => ({title: a.innerText, url: a.href}))`
- From the tool output (list of {title, url}), identify promising threads, click via browser_click on specific link refs if needed, or copy link IDs to open and read.
- In each thread, search the page (console: `document.body.innerHTML.search(/coordinate/i)`, `/lat/i`, `/lon/i`, `/OM-[0-9]/i`) for numeric breadcrumbs/waypoints.
- When a source thread provides coordinates or clear route/instructions, record the URL and the breadcrumb into a markdown the Candidate Thread Format (see template below in the doc) so I can validate before MDX writing.

=== CANDIDATE THREAD FORMAT (for approval before MDX writing) ===

Template for each confirmed source (to be filled during research):

- Title: [Thread title]
- Platform: Reddit / RSI Spectrum / Wiki summary
- Link: [Direct URL]
- Key content snippet: what it establishes (coordinate/AP, navigation, visual notes)
  - Example: “Posts mention following frozen canal north from Station I; lat -19.4, lon 81.7 near bridge crossing.”
- Corroboration: Yes/No
  - If Yes: reference other confirmations (e.g., “confirmed by [user] on Reddit link B; repeated navigation A in Spectrum thread C”)
  - If No: treat as primary source; prefer at least one more reference (different thread or different platform) before publishing MDX.

=== DELIVERABLES REQUESTED FOR MDX WRITING ===

For each Reserved location (New Babbage, Port Tressler), provide Candidate Thread entries with direct links and coordinate/path snippets.

For Create New locations (MicroTech ice caves, Pyro anomalies), provide Candidate Thread entries meeting same criteria (coordinates/breadcrumbs + corroboration).

I will then write or upgrade the MDX entries using only the confirmed sources you approve.

=== QUICK REFERENCE: CONSOLE-FRIENDLY REDDIT SEARCH URLS (REFRESHABLE) ===

- New Babbage ice wall/canal:
  https://old.reddit.com/r/starcitizen/search/?q=New%20Babbage%20ice%20wall%20canal&restrict_sr=on&sort=relevance&t=all

- Port Tressler catwalk under-hangar:
  https://old.reddit.com/r/starcitizen/search/?q=Port%20Tressler%20catwalk%20under%20hangar&restrict_sr=on&sort=relevance&t=all

- MicroTech ice caves/tundra anomalies:
  https://old.reddit.com/r/starcitizen/search/?q=MicroTech%20ice%20cave%20northern%20wastes&restrict_sr=on&sort=relevance&t=all

- Pyro anomalies (wrecks, surface oddities):
  https://old.reddit.com/r/starcitizen/search/?q=Pyro%20wreck%20crash%20anomaly&restrict_sr=on&sort=relevance&t=all

- General photo spots/hidden locations:
  https://old.reddit.com/r/starcitizen/search/?q=photo%20spot%20screenshot%20location%20hidden&restrict_sr=on&sort=top&t=year

=== BACKUP: WIKI PAGES ALREADY BROWSED FOR CONTEXT (no direct coordinates) ===

- New Babbage background: https://starcitizen.tools/New_Babbage
- Port Tressler station overview: https://starcitizen.tools/Port_Tressler
- MicroTech surface environmental overview: https://starcitizen.tools/MicroTech_(planet)

These wiki pages provide environmental/geographic context useful for frontmatter and “What You’ll Find” sections, but do NOT serve as primary sources for coordinates/breadcrumbs for PHDS navigation.

=== NEXT ACTION (YOUR CHOICE) ===

1) Use the console-friendlyReddit search URLs and the console evaluation pattern to gather concrete thread links with coordinate breadcrumbs and return the Candidate Thread formats for each Reserved or New target.
2) Pick a subset to validate first (e.g., New Babbage ice walls and Port Tressler catwalks), supply Candidate Thread entries, and I’ll compile combined validation before MDX writing.
3) Approve proceeding with generalized examples (e.g., “写出带有通OM导航abbr的MDX草案 while maintaining Sources section with领头店 link placeholders”). I would then mark those entries as SOURCES-TBD and upgrade with real links once found.
