# TODO

Everything outstanding, in the order it should be tackled. Nothing here is broken — it is
work not yet done, plus content only the owner can supply.

Companion documents: **CONFIGURATION.md** (how to change things) ·
**METHODOLOGY.md** (why things are the way they are) · **IMAGES.md** (image slots and shot list)

---

## A. Blocks launch

These must be resolved before the site goes public.

### A1. The contact form does not deliver
The Cloudflare Function is written and verified, but no destination is configured, so a
submission returns an error telling the visitor to phone instead. Viber works.

- [ ] Create a Resend account
- [ ] Verify the sending domain (DNS records at your DNS host)
- [ ] Set `RESEND_API_KEY` (as a **secret**), `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in
      Cloudflare Pages → Settings → Environment variables
- [ ] Redeploy, submit the live form once, confirm arrival (check spam on first send)

Full walkthrough in **CONFIGURATION.md §1**.

### A2. Placeholder content is live and visibly marked
Pages showing invented data carry an amber banner. Replacing the content and deleting
`placeholder: true` removes it.

- [ ] **Team** — three invented dentists (Јован Јовановски and colleagues) in
      `src/content/team/{mk,en}/`. Real names, titles, degrees, education with institutions
      and years, languages. Photos optional; initials show until then.
- [ ] **Prices** — six services in `src/content/services/{mk,en}/` carrying typical Skopje
      market rates, **not OMNIDENT's**. Replace `priceFrom`/`priceTo`, `visits`, `duration`
      and the body text.
- [ ] **Guarantee periods** — the table in `src/i18n/tourism.ts` uses typical market figures.
      Replace `guaranteeItems`, then set `guaranteePlaceholder = false`.

### A3. Privacy policy is missing
The contact form collects a name, phone, email, an optional clinical photograph and a consent
checkbox — **and the consent checkbox currently links to nothing.** For health-adjacent data
this is the most exposed gap on the site.

- [ ] Write a privacy policy (what is collected, why, where it goes, retention, contact)
- [ ] Build `/politika-na-privatnost/` and `/en/privacy-policy/`
- [ ] Link it from the consent checkbox and the footer

Needs your input on retention and on whether submissions are stored anywhere beyond the
destination inbox. Currently nothing is stored server-side — the Function forwards and forgets,
which is the simplest position to defend.

### A4. Confirm remaining clinic details
- [ ] Final domain (`src/config/site.ts` still says `omnident.mk` — marked placeholder)
- [ ] `email` in `site.ts` (schema markup only, not the form destination)
- [ ] Opening hours still correct?

---

## B. Should be done before launch

### B1. Social share image and favicon
- [ ] `public/og-image.svg` is an **SVG**; most social platforms reject it. Regenerate as
      1200×630 PNG or JPG and update the reference in `src/layouts/Layout.astro`
- [ ] `public/favicon.ico` is still the **default Astro icon**

### B2. Performance and accessibility verification
Never run — no browser was available in the build environment.

- [ ] Lighthouse on `/`, a service page and the tourism hub; target ≥ 95 across the board
- [ ] Check 360px, 768px, 1440px
- [ ] Keyboard-only traversal with visible focus
- [ ] Validate schema in Google Rich Results Test
- [ ] Validate `hreflang`

### B3. Per-page SEO metadata
Every page currently inherits the same title and description from `t.meta`. Each needs its own,
per locale — this is most of the organic-search value the multi-page structure was built for.

### B4. Analytics
- [ ] Cloudflare Web Analytics (server-side, no client script, no cookie banner needed)

---

## C. Content pages not yet built

The collections and schemas exist; these need content before the pages are worth building.

- [ ] **`/za-nas/`** — the practice: story, philosophy, standards, technology. Currently only a
      section on the home page.
- [ ] **`/edukacija/`** — courses attended, taught, certifications. **This is where Zero Bone
      Loss (Linkevičius) and ImplantSwiss Octa belong.** They are the rarest claim available
      and currently appear nowhere on the site.
- [ ] **`/rezultati/`** — before/after cases as patient stories. The `cases` collection is
      empty by design: the schema **fails the build** if `consent` is not `true`. Needs
      consented cases with matched before/after photography.
- [ ] **`/novosti/`** — articles index and article pages, plus RSS per locale.
- [ ] **`/promocii/`** — promotions, with the home banner slot driven by `banner: true`.
- [ ] **Per-service detail pages** (`/uslugi/<slug>/`) — currently one index page with cards.
      Detail pages need real clinical depth: what the visit involves, how long, how many
      appointments, FAQ.
- [ ] **`HOWTO.md`** — how to add an article or promotion by dropping a Markdown file.

---

## D. Later

- [ ] **Italian and Greek locales.** Architecture supports four; Greek font subsets already
      load. Priority order: tourism hub → services → team → prices. Add a column in
      `src/i18n/routes.ts`, a locale in `astro.config.mjs`, a block in `src/i18n/ui.ts`, and
      `it/` / `el/` folders in each collection.
- [ ] **Real photography** to replace the eight licensed stock clinic images. `IMAGES.md` is
      the shot list. Original photography is the single clearest differentiator between
      high-converting dental sites and the rest.
- [ ] **Google rating** — decide: publish a real rating with a genuine `reviewCount`, or omit
      ratings permanently. Do not restore the old figures.
- [ ] **Price comparison against DE/CH/IT/GR/UK** — dropped deliberately. If restored it needs
      a stated sourcing date and an annual refresh; see METHODOLOGY.md §4.
- [ ] **Legal review of facial-aesthetics treatments** that may be advertised in North
      Macedonia — open since the original project plan, and the reason that service category
      is absent.
- [ ] **Form hardening** — no length caps on text fields, no check that the environment
      variables exist (a missing key yields a 502 rather than a clear error), `channel` not
      validated against an allowlist. Consider Turnstile if spam appears.

---

## E. Known cosmetic issues

- [ ] Commit `9fc14a2` on `main` reads "contract form" instead of "contact". Already pushed;
      not worth rewriting history.
- [ ] The build prints six `glob-loader` warnings for the empty content directories. Harmless;
      they disappear as content is added.
- [ ] `IMAGES.md` describes the hero image as "multiple chairs"; it shows one chair and a stool.
