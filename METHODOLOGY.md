# METHODOLOGY

Why this site is built the way it is. Every non-obvious decision, the alternatives that were
rejected, and the evidence behind the call — so a future decision can be made on the same
basis, or overturned knowingly.

Research was gathered September 2026 from published teardowns of high-performing dental
practice sites and from dental-tourism operators in Turkey, Hungary and the Balkans. Sources
are linked inline.

---

## 1. The governing principle: specificity beats polish

Across every source, the strongest dental sites are **anxiety reducers**, not showrooms. They
show the actual doctor, explain what the first visit feels like, and address cost openly.
Sites doing this convert at 12–16% against a **4.3% industry baseline** — Atlanta Center for
Advanced Periodontics at 16%, Village Dental at 12%
([Delmain teardown of 20 dental sites](https://delmain.co/blog/best-dental-websites/)).

Everything below follows from this. When a choice is between *looking impressive* and *being
specific*, specific wins — it measurably converts better, and it is also the version that
survives contact with a sceptical patient comparing four clinics.

---

## 2. Vague social proof was removed, not improved

**What we did:** deleted "4.2 Google rating" and "1.8K+ satisfied patients" entirely, along
with the JSON-LD `aggregateRating`.

**Why:** three reasons, in order of weight.

1. **Aggregate numbers underperform named credentials.** Vivid Dental and Heritage House win
   on named practitioners and real case stories, not counters. "Dr. X, DMD, implantology,
   Zero Bone Loss protocol, 12 years" is checkable; "1.8K+ patients" is not.
2. **It was technically invalid.** The `aggregateRating` carried no `reviewCount`, which
   Google treats as an incomplete rating claim — at best ignored, at worst a structured-data
   penalty.
3. **It was unverifiable.** Neither figure could be traced to a source.

**Alternatives considered:**
- *Keep it and add a real `reviewCount`* — viable, and still available. Requires the real
  Google review count, and the rating must then track reality.
- *Embed live Google reviews* — strongest version, but adds a third-party script, a cookie
  consideration, and a performance cost on a site currently loading nothing external.
- *Keep the numbers as-is* — rejected. Unverifiable claims on a health site are the exact
  category of content that damages trust when a patient checks.

**Weakest-to-strongest:** invented figures < no figures < real figures with source < named
credentials and real cases.

---

## 3. Placeholder content is allowed, but never invisible

**What we did:** invented staff and indicative prices are permitted, but any entry carrying
`placeholder: true` renders a visible amber banner on its page. Removing the flag removes the
banner.

**Why:** the realistic failure mode on a project like this is not "we lied" — it is "we
forgot". Placeholder content that looks finished gets shipped. A build-visible marker makes
forgetting impossible without also seeing the warning.

**The three-tier rule for stand-in content**, in descending order of acceptable fakery:

| Tier | Stand-in allowed | Reasoning |
|---|---|---|
| **Ambient imagery** — interiors, equipment, article covers | Licensed stock | Clearly decorative. No claim is made. |
| **Team faces** | Initials avatar, **never a stock face** | A stranger's photo under a named dentist is a false statement about a real, identifiable person — and reverse-image-searchable. |
| **Before/after cases** | **Nothing at all** | Fabricated clinical outcomes are deceptive health advertising. The schema makes an unconsented case **fail the build**. |

**Alternative considered:** generated solid-colour placeholders everywhere. Safer, but you
cannot judge whether a design works with real photography in it, which was the point.

---

## 4. Prices are published as ranges

**What we did:** per-treatment EUR ranges, with "the final plan follows an examination".

**Why:** cost is the first filter for a tourism patient and they apply it *before* making
contact. A clinic with no published prices is skipped, not enquired with. The Gleamery's
standout move in the Delmain teardown is grouping services into clear upfront packages; Zen
Dental Studio leads with financing clarity.

**Alternatives, strongest to weakest:**
1. **Ranges + "final plan after exam"** ← chosen. Converts, while staying honest about
   clinical variability.
2. *Fixed prices* — highest trust, but dentistry genuinely varies per case; you would be
   defending a number you cannot always honour.
3. *"Contact for a quote"* — safest commercially, loses every patient who filters on price
   without contacting you. This is most tourism patients.

**Deliberately dropped: the home-country price comparison table** (your call, 2026-09-26).
Worth knowing what was given up: a comparison against DE/CH/IT/GR/UK prices is the single
highest-converting element on competitor tourism sites, because it does the patient's
arithmetic for them. It was dropped because it requires sourcing and dating foreign price
data, and stale figures are worse than none. **If revisited, it needs a stated sourcing date
and an annual refresh**, or it becomes a liability.

---

## 5. The guarantee table is the strongest single asset on a tourism page

**What we did:** a per-item table of guarantee periods, plus what "covered" means, the
conditions, and what voids it.

**Why this is commercially very strong:** the foreign patient's real, unspoken question is
*"I'll be back in Milan — what happens if this fails in year two?"* Every tourism clinic
claims quality; very few answer that question in writing. Answering it concretely converts the
patient who has already decided the price is good and is looking for a reason not to worry.

A per-item table also does something a paragraph cannot: it signals that the terms **exist as
a document**, which is itself the trust signal. "We guarantee our work" reads as evasion.

**Alternatives, strongest to weakest:**
1. **Per-item table with durations** ← chosen. Maximum trust; commits you to honouring it.
2. *Typical market figures as flagged placeholders* — what is live now, until the real periods
   are supplied. Structurally identical, so swapping in real numbers changes nothing else.
3. *Principle only, no durations* — safest legally, noticeably weaker. A patient comparing
   clinics reads missing numbers as "there are none".
4. *No guarantee section* — worst. Competitors have one; its absence is conspicuous.

### The remote-failure policy

**Chosen: free redo in Skopje, patient pays travel.** The industry norm, and the easiest to
state without ambiguity.

**Alternatives:**
- *Contribute to travel* — converts better, needs a hard cap or it becomes unbounded.
- *Reimburse a local dentist for an emergency fix* — used by Turkish and Hungarian clinics,
  strong for urgent cases the patient cannot fly for, and the most operationally complex.
- *Case by case* — honest but weak; it reads as "no policy".

**The wording matters as much as the terms.** A guarantee page that lists what *voids* the
guarantee is read as more credible than one that only lists what is covered, because it shows
the terms were written to be used rather than to market.

---

## 6. Logistics are described as "we organise", never "our partners"

**What we did:** "we arrange accommodation and airport transfers", "we work with places to
stay in Skopje", plus an explicit line that travel and accommodation costs are the patient's.

**Why:** this is the one place a tourism page can actively destroy trust. Claiming formal
partnerships, naming hotels, or implying an all-inclusive package that does not exist
operationally produces a patient who arrives expecting something they were promised. The
recovery cost of that is far higher than the conversion gained.

"Mediated / organised by us" is true regardless of how formal the arrangement is, and it reads
as service rather than as a marketing claim. **Rule: never let the site promise something the
clinic has not operationally committed to delivering.**

---

## 7. One form, one destination

**What we did:** exactly one `<form>` in the codebase, rendered only on the contact page.
Everything else links to it, service cards passing `?service=<id>`.

**Why:** four entry points to one form is four places to maintain, four places to break, and a
diluted call to action. It also made the single most important conversion surface impossible
to reason about.

**The real lesson from this codebase:** the form had `data-netlify="true"` while deploying to
Cloudflare Pages. It returned HTTP 200, showed the patient "Message sent!", and discarded the
submission. **A form that fails loudly is strictly better than one that fails silently** — the
rewrite returns a real error rather than a false success, even before an inbox is configured.

---

## 8. Colour: light blue on white

**What we did:** replaced a dark charcoal-and-gold theme with white surfaces and a
trust-blue primary, sage held back as a restricted secondary.

**Why:** blue tests **+34% on perceived trustworthiness**; green **−21% on perceived wait
anxiety** ([O360](https://o360.com/blogs/color-psychology-in-medical-and-dental-websites/),
[Progress](https://www.progress.com/blogs/using-color-psychology-healthcare-web-design)).
Deeper blue reads as competence and authority; lighter blue as approachable. For implant and
surgical work, authority matters more than spa-calm, which is why blue leads and sage is
secondary rather than co-equal.

**Alternative considered:** sage-led palette. Calmer and more wellness-coded, slightly less
authoritative for surgical content — the wrong trade for a clinic selling implantology.

**Why the dark theme was wrong here:** dark-and-gold reads as luxury and nightlife. It is a
perfectly good register for a bar. For medicine it fights the message, and it is harder to
read for older patients — a meaningful share of an implant and prosthetics audience.

---

## 9. Depth, not a longer home page

**What we did:** moved from a single scrolling page to separate indexed pages.

**Why:** organic search is where the best practices get their patients — Heritage House draws
**over 50% of bookings from organic search**, and Thrive Family Dental's blog converts at
**5x** typical. That traffic lands on specific pages answering specific questions. One page
cannot rank for "dental implants Skopje price" and "dental tourism Macedonia guarantee"
simultaneously.

Secondary reason: content the owner maintains (articles, promotions, prices) needs somewhere
to live that is not "wedged into the home page".

---

## 10. Structural decisions that keep future options open

- **Locale-keyed route map** (`src/i18n/routes.ts`) — adding a language is two columns, not a
  routing rewrite. Italian and Greek were the stated priority markets, so the architecture
  assumed four locales from day one. **Those locales were subsequently dropped (2026-09-26)**;
  the structure is kept because it costs nothing and makes the decision reversible. The
  tourism pages address those markets in English instead.
- **Greek font subsets loaded now** — so adding the Greek locale later never becomes a
  typography change.
- **Content in Markdown collections, not a CMS** — the owner is technical and edits files. A
  CMS can be layered on later without moving the content.
- **Consent enforced in the schema, not in review** — process fails; builds do not.

---

## 11. Open questions this document cannot answer

1. Real guarantee periods (the table is live with market placeholders).
2. Whether to restore the price comparison, and who refreshes the foreign figures annually.
3. Whether to publish a real Google rating with a review count, or omit ratings permanently.
4. Real team credentials — the differentiator most likely to be under-used. Zero Bone Loss
   (Linkevičius) and ImplantSwiss Octa are genuinely rare claims and currently appear nowhere.
