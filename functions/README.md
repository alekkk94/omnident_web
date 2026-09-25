# Cloudflare Pages Functions

`functions/api/contact.ts` handles the contact form (`POST /api/contact`). Cloudflare Pages
auto-detects this root-level `functions/` directory alongside the static `dist/` build — see
https://developers.cloudflare.com/pages/functions/api-reference/.

## Required environment variables

Set these in **Cloudflare Pages → Settings → Environment variables** (Production and Preview).
All three are secrets — never commit real values to this repo.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key for https://resend.com, used to send the enquiry email. |
| `CONTACT_TO_EMAIL` | The real destination inbox for enquiries. This is the actual form destination — deliberately kept out of the repo. It is **not** the same as the placeholder `site.email` in `src/config/site.ts`, which is used only for the JSON-LD schema markup and is never read by the form. |
| `CONTACT_FROM_EMAIL` | The verified "from" address for outgoing mail. Must be on a domain verified with Resend. |

Until all three are set, `functions/api/contact.ts` is deployable but will return `502
{ok:false, error:'send'}` on every submission — a visible failure, not a silent discard.

## Local development

`npx wrangler pages dev dist` serves the built site plus this Functions directory locally. Pass
the three variables via `--binding` or a local `.dev.vars` file (gitignored) if you need to test
an actual send against Resend.
