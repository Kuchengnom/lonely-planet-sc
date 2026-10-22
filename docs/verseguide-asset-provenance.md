# VerseGuide image provenance gate

Reviewed: 2026-10-22

Images pulled from verseguide.com are **not** cleared for new pages by default.
This file records the assets that have been through clearance, and the assets
that are on disk but still blocked.

VerseGuide is a third-party community map, not official CIG content. It does
not publish a per-image licence statement, so the credit line below is
mandatory wherever these images appear, and the repository-redistribution
question is answered by the site's terms rather than by a per-asset licence.

## Clearance rule

Before a VerseGuide asset is used on a new page, record all of the following:

1. Direct source-page URL for the specific location.
2. The direct file URL and the credited photographer.
3. Whether the site terms permit repository redistribution.
4. The local file hash after any optimisation.

If the source-page URL cannot be recorded, or the terms have not been
reviewed, the asset is **Blocked** for new-page use and must not be reused.

## Cleared assets

| Local asset | Source page | Direct file URL | Credit | SHA-256 | Status |
| --- | --- | --- | --- | --- | --- |
| `public/images/pyro/from-verseguide/sacrens-plot.jpg` | https://verseguide.com/location/PYRO/IV#poi\|hG2bQ5w4IWjWsljqHhRBk9OeIQzYoSSe50Ai8ypiIcEej6duAimAhSZwRLqfa7ZIdrSrQ5MgNT | `https://firebasestorage.googleapis.com/v0/b/verseguide/o/images%2Flocations%2Flg%2Flg_d61919b4-82db-4420-833a-6eb8122e2b3b.jpg?alt=media&token=9f793981-0d4e-4b71-994a-7c2fe07c73ce` | Photography by **lov3pixel**, via VerseGuide | `b8c634ceed83368d1f7f3d033d0a87981648d241d1ea16d47b09cf06c3f4de6d` | **Provisional** — used on the Sacren's Plot page with `ImageAttribution`. Terms of use not yet reviewed; see the legal item in TODO.md. |

## Blocked assets

None yet — this file only tracks assets deliberately pulled for a page.

## Standing caveats

- **The credit line is not optional.** The `ImageAttribution` component
  implements the required full credit: photograph, photographer, source. Do not
  crop the credit out of the rendered page.
- **Provisional means provisional.** The `sacrens-plot.jpg` asset is cleared on
  the condition that the attribution components are used and that the
  VerseGuide terms-of-use review in TODO.md is completed. If that review
  concludes redistribution is not permitted, this asset and its page come down
  together.
- A source-page URL alone is not sufficient evidence of provenance. Where a
  file was found through a search or collection listing rather than a specific
  location page, record it as Blocked.
