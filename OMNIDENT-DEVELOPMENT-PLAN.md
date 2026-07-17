# OMNIDENT Website — Development Plan

> **Purpose of this document:** Master plan for building the OMNIDENT dental clinic website.
> Written to be read by a future agent (or human developer) picking up this project.
> Maintained by: Zoran (project owner, technical, comfortable with Python/CLI, edits files himself).
> Last updated: 2026-07-17. Update the Decision Log and Status sections as work progresses.

---

## 1. Project context

- **Client:** OMNIDENT — Dental Esthetic Center, Скопје (Skopje, North Macedonia).
  - Address: Чедомир Миндеровиќ 30, Скопје 1000
  - Phone: 072 260 022
  - Hours: Понеделник–Петок 10:00–19:00
  - Instagram: @omnident_ · Facebook: facebook.com/omnidentskopje
  - Google rating: 4.2 / 5.0 · "1.8K+ задоволни пациенти"
- **Reference mockup (visual + content source of truth):**
  `https://saddlebrown-parrot-769727.hostingersite.com/`
  The goal is to closely replicate this mockup's structure and elegance, with improvements listed in §5.
- **Secondary reference (services style only):** premierartsdental.com — each service has a real,
  substantive description and sub-services. We build a *lighter* version of this (see §5.2).
  Do NOT copy their complexity (no mega-menu with 30 subpages at launch).
- **Hosting:** GitHub repo + Netlify (free tier). Git-push deploy — Netlify builds the Astro
  site on every push, no manual FTP/file-manager uploads. Custom domain + free HTTPS via Netlify.
- **Branding:** An OMNIDENT logo lockup already exists from prior brand work (owner has the files).
  Ask the owner for: logo SVG/PNG (light + dark variants), exact brand colors, brand fonts.
  If unavailable, derive palette/typography from the mockup (dark + gold, elegant serif display).

## 2. Scope by phase

### Phase 1 (CURRENT) — Static marketing site
- One-page landing (with anchor navigation) replicating the mockup, MK + EN.
- No login, no payments, no real-time reservations.
- Contact form with **two user-selectable channels**: Email (automatic send) and Viber (deep link).
- Improved services section (see §5.2) — no empty "Contact us" placeholders.

### Phase 2 — Content
- "Новости / Актуелно" section: articles + promotions as Markdown files (owner edits files himself — decided).
- Optional promo banner slot on the landing page, toggleable via one config/frontmatter flag.

### Phase 3 — Future (do not build now, but do not block)
- Staff-friendly CMS (Decap CMS on top of the same Markdown content) if staff ever need it.
- Real appointment booking, patient login, AI receptionist widget.
- Architecture rule: keep front-end static and content in Markdown so these bolt on without a rewrite.

## 3. Stack (Decision)

**Chosen: Astro** (static site generator) + Netlify Forms for the contact form's email path.

Rationale:
- Outputs pure static files → Netlify builds and deploys straight from the GitHub repo.
- Content collections: articles/promotions = folder of `.md` files with frontmatter. Matches
  the owner's "I edit files myself" decision exactly.
- Built-in i18n routing for MK/EN.
- Netlify Forms needs no backend code (no PHP, no serverless function) — form submissions are
  captured at build time via a static HTML form and routed to email/dashboard notifications.
- Clean upgrade path: Decap CMS, or a serverless function (Netlify Functions) if form needs
  grow beyond what Netlify Forms offers, attach later without redesign.
- Fallback considered and rejected for now: pure vanilla HTML/CSS/JS (fastest to start, but
  articles and i18n become manual); Next.js (overkill until a real app with login exists).

Local toolchain: Node.js ≥ 20, `npm create astro@latest`. Build with `npm run build` locally
for iteration; production builds run on Netlify on every push to the main branch.

## 4. Site structure

```
/ (mk default)          One-page landing: sections below
/en/                    English version, same structure
/uslugi/<slug>/         (Phase 1.5/2) individual service pages, grown from landing cards
/novosti/               (Phase 2) article index
/novosti/<slug>/        (Phase 2) article page
```
The contact form posts directly to Netlify Forms (`data-netlify="true"` on the `<form>`) —
no separate API route or endpoint file needed.

Landing page sections, in order (mirrors the mockup):
1. **Preloader** — logo + 0→100% counter. Keep it fast (<1.5 s) and respect `prefers-reduced-motion`.
2. **Sticky nav** — Почетна · Услуги · За нас · Контакт · CTA "Закажи преглед" + MK/EN toggle.
3. **Hero** — eyebrow "Дентална Естетика · Скопје"; headline "Насмевка што *зборува* за вас"
   (italic accent word, as in mockup); subline; CTAs "Закажи термин" / "Нашите услуги";
   floating badges: ★ 4.2/5.0 Google оценка, 1.8K+ задоволни пациенти; patient avatar row;
   large clinic image; scroll indicator.
4. **За нас** — "Грижа со *смирен* пристап", philosophy paragraph ("Останете смирени и
   насмевнете се"), animated counters (patients / rating / years — GET REAL NUMBERS from owner,
   the mockup shows 0s), "Запознајте го тимот" link.
5. **Услуги** — improved, see §5.2.
6. **Како тече / Вашата посета** — 4 steps: Закажување → Преглед → Третман → Насмевка.
7. **Наша приказна / Дрво на прогресија** — 5-node timeline: Основање → Естетска стоматологија →
   Имплантологија → Континуирано усовршување → 1.8K+ доверливи пациенти.
8. **Зид со спомени** — polaroid-style gallery ("Полароиди од нашата секојдневна работа").
   Needs real clinic photos from owner; use tasteful stock placeholders meanwhile.
9. **Контакт / Закажи термин** — contact info cards (phone, address, hours, socials),
   embedded Google Map (Чедомир Миндеровиќ 30), and the form (see §6).
10. **Footer** — logo, nav, socials, © year.
11. **Chat widget ("Omnident Асистент")** — Phase 3. For Phase 1 either omit or ship a static
    button that opens the contact section. Do NOT ship a fake AI chat.

## 5. Improvements over the mockup (owner-requested)

### 5.1 General
- No dead links, no empty sections, no "0" counters — every element ships with real content
  or is cut.

### 5.2 Services section (key improvement)
The mockup's services cards are empty shells with a bare "Contact us". Replace with
**substantive, expandable service cards** in the style (but not the scale) of premierartsdental.com:

Service categories (from the mockup's form dropdown — confirm with owner):
1. **Општа стоматологија** (General dentistry) — прегледи и дијагностика, чистење забен камен
   и полирање, пломби, ендодонција (лекување на коренски канали), екстракции.
2. **Естетска стоматологија** (Esthetic dentistry) — белење, фасети/виниры (veneers),
   композитни реставрации / bonding, smile makeover.
3. **Протетика** (Prosthetics) — коронки, мостови, протези; имплантолошки протетски решенија.
4. **Имплантологија** — appears in the clinic's timeline; confirm whether it is its own
   category or lives under Протетика.
5. **Фацијална естетика** (Facial esthetics) — ботулин/филери if legally applicable, PRX-T33,
   PRP терапија. NOTE: owner has researched MK legal limits on injectable aesthetics — confirm
   with owner which treatments may legally be advertised before publishing this section.

Card anatomy (each category):
- Icon / small image, category name (MK + EN), 2–3 sentence *specific* description
  (what the patient gets, not marketing fluff), list of 3–6 concrete sub-services,
  and ONE clear action: "Закажи преглед" scrolling to the form with the service pre-selected
  (the form's `Избрана услуга` field already supports this in the mockup).
- Cards expand in place (accordion or expanding panel) — no navigation away in Phase 1.
- Write copy in a warm, precise, clinical-but-human register. Owner is dentally literate
  (endodontics, implantology — Linkevičius Zero Bone Loss concepts, ImplantSwiss Octa) and
  will review all clinical copy. Draft in MK first, then EN.

### 5.3 Language toggle
- MK is default (`/`), EN under `/en/`. Toggle in nav. `hreflang` tags. All strings in
  per-locale content files — never hardcode text in components.

## 6. Contact form (Phase 1 backend, minimal)

Channel selector in the form: **Е-маил** or **Viber** (user picks).
- **Email path:** Static HTML form with `data-netlify="true"` → Netlify Forms captures the
  submission at build/runtime and forwards it to the clinic inbox via a Netlify notification
  (Settings → Forms → Form notifications → email notification). Built-in honeypot field
  (`data-netlify-honeypot`) for spam; Netlify's own spam filtering (Akismet) can be enabled too.
  Success/error states in the UI in the user's language.
- **Viber path:** build a `viber://chat?number=%2B389XXXXXXXX` deep link (confirm the clinic's
  Viber number with owner) with the message body pre-composed from the form fields; on click,
  the user's Viber opens with the clinic chat and they tap send themselves. On desktop without
  Viber, show a fallback: the number + QR code.
- Fields (from mockup): име и презиме, телефон, е-маил, услуга (dropdown, pre-fillable from
  service cards), порака, прикачи слика (опционо — email path only; skip attachment on Viber).
- No data stored server-side in Phase 1 (privacy simplicity). Note GDPR-style consent checkbox
  anyway — health-adjacent inquiries.

## 7. Content model (Phase 2, design for it now)

```
src/content/
  services/    <slug>.md   (per locale: services/mk/, services/en/)
  articles/    <slug>.md   frontmatter: title, date, cover, excerpt, lang, tags, draft
  promotions/  <slug>.md   frontmatter: title, validFrom, validUntil, banner (bool), lang
```
- Landing promo banner renders the newest non-expired promotion with `banner: true`; renders
  nothing when none — no empty state visible.
- Owner adds an article by dropping a `.md` file, running `npm run build`, uploading `dist/`.
  Provide a one-page HOWTO.md for this when Phase 2 ships.

## 8. Design direction

- Follow the mockup's register: dark, elegant, gold-accented, serif display with italic accent
  words in headlines, generous whitespace, subtle scroll animations.
- Obtain the actual OMNIDENT brand assets (logo lockup, palette, fonts) from the owner before
  finalizing tokens. Owner's related brands (Anathéa, Verve) use Cormorant Garamond +
  Montserrat and champagne/gold palettes — OMNIDENT likely has its own defined pair; ask.
- If building in an environment with the `frontend-design` skill available, read it first.
- Quality floor: fully responsive to 360 px, visible keyboard focus, `prefers-reduced-motion`
  honored, Lighthouse ≥ 90 across the board, images as optimized WebP/AVIF with proper `alt`
  text in the active language.
- Cyrillic support is mandatory in every font chosen (display AND body). Verify glyph coverage
  for МК Cyrillic (ѓ, ќ, љ, њ, џ, ѕ) before committing to a typeface.

## 9. SEO & analytics

- Titles/descriptions per locale; landing title pattern:
  "OMNIDENT — Дентална Естетика Скопје" / "OMNIDENT — Dental Esthetic Center Skopje".
- LocalBusiness/Dentist JSON-LD schema (name, address, phone, hours, geo, rating optional).
- Open Graph images (brand-styled, 1200×630 — owner can produce these with his PIL pipeline).
- sitemap.xml + robots.txt (Astro integrations).
- Analytics: privacy-light option (e.g., self-hosted Plausible-style or Netlify Analytics —
  server-side, no client script); decide with owner — no decision yet.

## 10. Deployment

1. Push the Astro project to a GitHub repo.
2. Connect the repo to Netlify (New site from Git); set build command `npm run build` and
   publish directory `dist/`. Every push to `main` triggers an automatic deploy + preview URL
   for branches/PRs.
3. Enable Netlify Forms (auto-detected from the static form markup) and configure a form
   notification to the clinic's inbox.
4. Point the real domain (owner to confirm final domain — Netlify provides a free
   `*.netlify.app` preview URL until then) and let Netlify provision HTTPS (Let's Encrypt,
   automatic).
5. Test: form email delivery, Viber deep link on a real phone, both locales, mobile widths.

## 11. Open questions for the owner (ask before/while building)

1. Real counter numbers: patients, years of experience, rating to display.
2. Final list + legal review of Фацијална естетика treatments that can be advertised.
3. Clinic's Viber number for the deep link; destination email for the form.
4. OMNIDENT brand assets: logo files, palette, fonts.
5. Real photos: team, ordinacija, polaroid wall material.
6. Final domain name.
7. Team section: names/titles/photos of doctors to feature ("Запознајте го тимот" must lead somewhere real or be cut in v1).

## 12. Decision log

| Date | Decision | Why |
|------|----------|-----|
| 2026-07-17 | Articles managed as files by owner (no CMS at launch) | Owner is technical; zero infra; CMS attaches later via Decap if staff need it |
| 2026-07-17 | Languages: MK + EN | Owner decision |
| 2026-07-17 | Form: dual channel — auto email + Viber deep link (user selects) | Viber-first patient habits in MK; deep link avoids paid Viber bot |
| 2026-07-17 | Stack: Astro static + Netlify Forms | Markdown content; i18n; upgrade path |
| 2026-07-17 | Hosting: GitHub + Netlify (replaces Hostinger) | Owner chose git-push deploys over FTP/hPanel; Netlify Forms removes the need for a PHP mail endpoint entirely |
| 2026-07-17 | Services: substantive expandable cards, premierartsdental-inspired but lighter | Owner rejected empty "Contact us" cards |
| 2026-07-17 | No login/payments/reservations/AI chat in Phase 1 | Owner decision; architecture keeps them possible later |

## 13. Status

- [x] Plan initialized
- [ ] Brand assets collected — site currently uses a placeholder dark/gold palette,
      Cormorant Garamond + Montserrat, and abstract line-icon art panels in place of
      real clinic photos (see §11.4, §11.5)
- [x] Astro project scaffolded
- [x] Landing page built (MK) — all sections in §4 implemented and running locally
- [x] EN locale — full translation at `/en/`, language toggle wired
- [x] Form (email + Viber) wired — Netlify Forms (email) + Viber deep link with
      composed message and phone-number fallback; **not yet verified end-to-end**
      since that requires a live Netlify deploy (see §11.3 for pending Viber number/email)
- [ ] Services copy drafted & owner-reviewed — draft MK+EN copy shipped for
      Општа стоматологија / Естетска стоматологија / Протетика / Имплантологија;
      Фацијална естетика intentionally omitted pending legal review (§11.2)
- [ ] Deployed to Netlify preview
- [ ] Owner sign-off → production domain

### Known gaps vs. this plan (for the next work session)
- Viber fallback shows the phone number only — no QR code image yet (§6).
- OG image (`/public/og-image.svg`) is an SVG; most social platforms need PNG/JPG —
  regenerate as a raster image before launch (§9).
- "Запознајте го тимот" link was cut per §11.7 — no team section exists yet since
  there's no real staff data.
- Content collections for articles/promotions (§7) are not built — Phase 1 only.
