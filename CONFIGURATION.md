# OMNIDENT — configuration & content guide

Everything you are likely to want to change, and exactly where to change it.

---

## 1. Where contact-form messages go

**Current status: nowhere.** The email destination is not yet configured, so the form shows
the visitor an error and tells them to call instead. The Viber option does work.

The destination address is **deliberately not in this repository** — it lives in a Cloudflare
environment variable, so the inbox and the API key are never in public source control.

### What I need from you to switch it on

| # | Thing | Where you get it |
|---|---|---|
| 1 | A **Resend** account | resend.com — free tier covers a clinic's volume |
| 2 | A **verified sending domain** | In Resend: Domains → Add `omnident.mk` → it gives you DNS records (SPF/DKIM) to add at whoever hosts your DNS. Sending from an unverified domain is not possible. |
| 3 | The **Resend API key** | Resend → API Keys → Create. Starts with `re_`. Treat it like a password. |
| 4 | The **destination inbox** | Whichever mailbox should receive patient enquiries. |

Send me nothing — you set these yourself in the Cloudflare dashboard, and the key never has to
leave your hands.

### Setting them (Cloudflare Pages → your project → Settings → Environment variables)

| Variable | Example | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxx` | **Mark as a secret**, so it is write-only afterwards |
| `CONTACT_TO_EMAIL` | `ordinacija@omnident.mk` | Where enquiries arrive. Change this any time — no code change, no redeploy of content. |
| `CONTACT_FROM_EMAIL` | `noreply@omnident.mk` | Must be on the **verified** domain |

Add them for **both** Production and Preview if you want the form working on preview builds.
Then **redeploy** — environment variables are read at request time, but the deployment must
exist after they are set.

**To change the destination inbox later:** edit `CONTACT_TO_EMAIL` only. Nothing else.

### Testing it locally

`astro dev` does **not** run the form endpoint — `functions/` is a Cloudflare convention and
Astro's dev server ignores it. A POST to `/api/contact` returns 404 there. To test for real:

```bash
npm run build
npx wrangler pages dev dist
```

and create a **`.dev.vars`** file in the project root (already gitignored):

```
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=noreply@omnident.mk
```

Resend has no sandbox — it sends genuinely, so test against your own inbox.

### Verifying it works

1. Submit the form on the live site with the Email channel selected.
2. The message should arrive within seconds. Check spam on the first send.
3. Reply-to is set to the patient's address, so hitting Reply answers them directly.

If it fails, the visitor sees a generic error and the real reason is in
Cloudflare → your project → Functions → Logs (usually: unverified domain, or a bad key).

---

## 2. Clinic details

All in **`src/config/site.ts`**.

| Field | Current value | Status |
|---|---|---|
| `phone.display` / `phone.href` | `072 260 022` / `tel:+38972260022` | Change **both** together |
| `viber.number` / `viber.href` | `+389 76 278 552` / `viber://chat?number=%2B38976278552` | Confirmed 2026-09-26. Change **both** together — the `href` has no spaces and `%2B` is the encoded `+` |
| `email` | `info@omnident.mk` | **Schema markup only.** Not the form destination — see §1 |
| `address.*` | Чедомир Миндеровиќ 30, Скопје 1000 | `mapQuery` drives the embedded Google Map |
| `hours.mk` / `hours.en` | Пон–Пет 10:00–19:00 | Free text, both languages |
| `social.instagram` / `social.facebook` | @omnident_ / omnidentskopje | |
| `domain` | `omnident.mk` | Still marked placeholder — confirm the final domain |

Changing any of these needs a commit and push; Cloudflare rebuilds automatically.

---

## 3. Placeholder content that MUST be replaced before launch

Pages showing invented data display a **visible amber warning banner**. It disappears by
itself once you remove `placeholder: true` from the content files — so the warning cannot be
forgotten, and fake data cannot go live quietly.

### Team — `src/content/team/mk/` and `src/content/team/en/`

Three invented people: **Јован Јовановски**, **Марија Петровска**, **Стефан Стојановски**
(the Macedonian equivalent of "John Smith"). Every education entry is prefixed `ПРИМЕР` /
`EXAMPLE`.

For each real dentist, edit the matching file in **both** language folders:

```yaml
name: "Real name"
role: "Title"
credentials: ["Degree", "Specialisation"]
education:
  - institution: "University"
    year: "2010"
    title: "Degree awarded"
focus: ["Implantology"]
languages: ["Macedonian", "English"]
order: 1
placeholder: true   # ← delete this line once the entry is real
```

Rename the files to match the real names (the filename becomes the URL slug) and keep the
`mk` and `en` filenames identical.

**Photos are optional.** Without one, a neutral circle with the person's initials is shown —
never a stock face, because a stranger's photo under a real dentist's name is a false claim
about that person. To add a real photo: drop it in `src/assets/images/team/`, then add
`photo: "../../../assets/images/team/filename.jpg"` to the frontmatter.

### Prices — `src/content/services/mk/` and `src/content/services/en/`

Six services with **indicative Skopje market rates gathered on 2026-09-26** from public dental
tourism listings. **These are not OMNIDENT's prices.** Replace `priceFrom` / `priceTo` with
your own, then delete `placeholder: true`.

| Service | Placeholder range |
|---|---|
| Превентива и хигиена | €30–50 |
| Општа стоматологија | €10–60 |
| Ендодонција | €100–200 |
| Естетска стоматологија | €140–265 |
| Протетика | €200–300 |
| Имплантологија | €600–800 |

`visits` and `duration` are also invented. The body text below the frontmatter is a
placeholder paragraph and should become the real description of that service.

### Still entirely absent (by design)

- **Before/after cases** — `src/content/cases/` is empty. The schema **refuses to build** a
  case whose `consent` is not `true`, because publishing a patient's clinical photographs
  without recorded consent is not something a build should allow.
- **Articles, promotions, education entries** — empty collections, so those pages render
  nothing rather than an empty shell.
- **Dental tourism pages** — not built yet; they need your written guarantee terms.

---

## 4. Images

`IMAGES.md` lists every image slot: file path, required dimensions, aspect ratio, what is
currently in it, and what the real photograph must show. It doubles as a brief you can hand a
photographer.

The eight clinic photos in use are licensed stock (Unsplash), used as ambient decoration only.
To replace one, overwrite the file at the same path — the layout does not change.

---

## 5. Adding a language later

`src/i18n/routes.ts` holds the URL segment per language. Adding Italian or Greek means adding a
column there, a locale to `astro.config.mjs`, a block in `src/i18n/ui.ts`, and an `it/` or
`el/` folder inside each content collection. No routing logic changes.

---

## 6. Quick reference

| I want to change… | File |
|---|---|
| Where form messages arrive | Cloudflare env var `CONTACT_TO_EMAIL` (§1) |
| Viber number | `src/config/site.ts` → `viber` (both fields) |
| Phone, address, hours, socials | `src/config/site.ts` |
| A dentist's details | `src/content/team/{mk,en}/*.md` |
| A price | `src/content/services/{mk,en}/*.md` |
| Any on-page wording | `src/i18n/ui.ts` (`mk` and `en` blocks) |
| Colours, fonts, spacing | `src/styles/global.css` (`:root`) |
| A page URL | `src/i18n/routes.ts` |
