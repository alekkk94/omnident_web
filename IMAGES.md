# OMNIDENT — Image inventory & photography brief

This file tracks every image slot on the site: where the file lives, what size it must be,
what currently fills it, and — for interim stock placeholders — exactly what the real
photograph needs to show. When real photography arrives, swap the file at the same path and
the layout does not change.

**Placeholder policy (do not deviate — see the WO-3b spec):**

| Slot type | Placeholder | Rule |
|---|---|---|
| Ambient (clinic interior, equipment, hands, reception, article covers, tourism imagery) | Real stock photos (Unsplash / Pexels, license-checked below) | Fine as interim imagery — clearly decorative. |
| Team faces | Neutral initial-avatar (`src/components/Avatar.astro`) | **Never a stock face.** A stranger's photo captioned with a real dentist's name is a false statement about that person. |
| Before/after cases | Nothing. The `cases` collection stays empty. | Fabricated clinical outcomes are deceptive health advertising. `consent` is refined to fail the build if not `true`. |

All Unsplash images below are free-tier (Unsplash License, no Unsplash+ lock icon) and all
Pexels images are under the Pexels License — both permit commercial use, no attribution
legally required, but photographer credit is recorded anyway for traceability.

## Live slots (currently rendered on `/` and `/en/`)

| # | Component / path | Required dimensions | Aspect ratio | `loading` | Current placeholder | Source | Shot list (what the real photo must show) |
|---|---|---|---|---|---|---|---|
| 1 | `Hero.astro` → `src/assets/images/clinic/hero-treatment-room-wide.jpg` | 1800×1200 px (source); rendered ~4:5 crop | 4 / 5 | `eager` | Wide, bright treatment room with multiple chairs, teal accent, large windows | Unsplash, photographer: Ozkan Guner — https://unsplash.com/photos/aFqSRokmw2E | OMNIDENT's main treatment room, wide angle, lights on, no patient or staff visible, daylight through the windows, tidy counters |
| 2 | `About.astro` → `src/assets/images/clinic/about-treatment-chair-blue.jpg` | 1400×935 px | 1 / 1 (center-cropped) | `lazy` | Empty treatment room, blue-upholstered dental chair, bright daylight | Unsplash, photographer: Benyamin Bohlouli — https://unsplash.com/photos/LQ698TTvGpA | A single treatment chair at OMNIDENT, close-up, no patient or staff visible, natural light, calm framing |
| 3 | `Gallery.astro` slot 1 → `src/assets/images/clinic/gallery-treatment-room-1.jpg` | 1200×802 px | 1 / 1 (center-cropped) | `lazy` | Bright white/blue treatment room | Unsplash, photographer: Benyamin Bohlouli — https://unsplash.com/photos/e7MJLM5VGjY | A treatment room corner: sink, cabinetry, chair — no patient or staff, daylight |
| 4 | `Gallery.astro` slot 2 → `src/assets/images/clinic/gallery-treatment-room-2.jpg` | 1200×800 px | 1 / 1 (center-cropped) | `lazy` | Bright, neutral-toned treatment room, wood floor | Unsplash, photographer: Kari Bjorn Photography — https://unsplash.com/photos/Fdku_oMrDvk | A second treatment room or angle, empty, tidy, bright |
| 5 | `Gallery.astro` slot 3 → `src/assets/images/clinic/gallery-treatment-chair-teal.jpg` | 1200×800 px | 1 / 1 (center-cropped) | `lazy` | Teal-upholstered dental chair beside a pink accent wall, bright | Unsplash, photographer: Ozkan Guner — https://unsplash.com/photos/Pc8lpKJwecM | A treatment chair with personality/color accent consistent with OMNIDENT's real interior, empty, bright |
| 6 | `Gallery.astro` slot 4 → `src/assets/images/clinic/gallery-waiting-area.jpg` | 1200×779 px | 1 / 1 (center-cropped) | `lazy` | Bright waiting area with teal sofas | Unsplash, photographer: Benyamin Bohlouli — https://unsplash.com/photos/B_sK_xgzwVA | OMNIDENT's actual reception/waiting area, empty of visible patients, tidy, daylight |
| 7 | `Gallery.astro` slot 5 → `src/assets/images/clinic/gallery-equipment-closeup.jpg` | 1200×1800 px | 1 / 1 (center-cropped) | `lazy` | Close-up of dental equipment (monitor/instrument tray), bright | Unsplash, photographer: Jonathan Borba — https://unsplash.com/photos/Lov8B73hEl0 | A close-up of OMNIDENT's own equipment — sterile tray, unit, or monitor — no identifying patient data on any screen |
| 8 | `Gallery.astro` slot 6 → `src/assets/images/clinic/gallery-instruments-macro.jpg` | 1200×1600 px | 1 / 1 (center-cropped) | `lazy` | Macro shot of dental instruments on a bright surface | Unsplash, photographer: Caroline LM — https://unsplash.com/photos/ux18C551ghI | Clean, sterilized instruments laid out, macro/top-down, bright neutral background |

All eight are decorative ("ambient") per the policy above — none depict an identifiable person,
so none risk misattributing a face to OMNIDENT staff or a patient.

## Not-yet-live slots (directories exist for upcoming work orders)

These directories were created in WO-3b so later units (WO-6 team pages, WO-9 cases/articles)
have a place to put assets without a structural change. No component references them yet.

| Directory | Populated by | Placeholder today | Dimensions to shoot for | Shot list |
|---|---|---|---|---|
| `src/assets/images/team/` | WO-6 team pages, via `team.photo` in `src/content.config.ts` | None — `Avatar.astro` renders a tinted initials circle until a real `photo` is supplied per dentist | 800×800 px, square, headshot crop | Professional headshot, neutral background, consistent lighting/framing across the whole team for a coherent `/tim/` grid |
| `src/assets/images/cases/` | WO-9 `/rezultati/`, via `cases.before` / `cases.after` | None — the `cases` collection is empty; `consent` is refined to fail the build unless `true`, so no case can publish without recorded consent | 1200×900 px, 4:3, matched before/after framing | Identical camera angle and lighting for the before and after shot of the same case; written patient consent must be on file before the entry is added |
| `src/assets/images/articles/` | WO-9 `/novosti/`, via `articles.cover` | None yet — no article entries exist | 1200×630 px, 1.91:1 (standard OG/article-cover ratio) | Topical cover image per article; stock is acceptable here since articles are editorial, not clinical claims |
| `src/assets/images/tourism/` | WO-8 dental tourism hub | None yet — hub not built | 1600×900 px, 16:9 | Skopje cityscape / travel-adjacent imagery for the tourism hub; stock acceptable, same bright/calm criteria as clinic ambient shots |

## Components

- `src/components/Figure.astro` — thin wrapper over `astro:assets` `<Picture>`. Emits AVIF +
  WebP with a JPG fallback. Requires a non-empty `alt`; throws at build time if `alt` is
  missing or blank rather than silently rendering an unlabeled image.
- `src/components/Avatar.astro` — neutral initials circle for team slots. Accepts an optional
  `photo` prop; when supplied, renders the real photo through `Figure` instead. No call-site
  change needed when WO-6 adds real team photos.
