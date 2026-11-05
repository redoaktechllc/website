# Red Oak — Edit Map

Your click-to-jump guide to the site. Open this file in VS Code's **Markdown Preview** (⇧⌘V) and click any link to jump straight to that line.

> ⚠️ **Line numbers drift** as you add/remove lines. If a link lands a little off, use the “find” hint next to it. This file is a dev note at the repo root — it is **not** part of the live site.

---

## 🚀 Redeploy (the whole loop)

After any edit, from the project folder:

```bash
git add -A
git commit -m "describe your change"
git push
```

→ Vercel auto-builds and **https://www.redoakllc.tech** updates in ~20–40 seconds. That's it.

Preview locally first (optional): `node scripts/serve.mjs` → http://localhost:4321

---

## 🏔️ Hero (top of the page)

| What | Where | Notes |
|---|---|---|
| Headline text | [public/index.html:89](public/index.html#L89) | the big `<h1>`. `&mdash;` = long dash |
| Headline **size** | [public/assets/styles.css:22](public/assets/styles.css#L22) | `--step-hero: clamp(min, grows, max)` — raise/lower the 1st & 3rd numbers |
| Headline weight/color | [public/assets/styles.css:132](public/assets/styles.css#L132) | `.hero h1` — `font-weight` 700/800/900, add `letter-spacing` |
| Sub-headline | [public/index.html:90](public/index.html#L90) | the `hero-lede` paragraph |
| Hero buttons | [public/index.html:91](public/index.html#L91) | “See a free preview” / “View pricing” |
| 3 trust blurbs | [public/index.html:95](public/index.html#L95) | “Free preview first”, etc. |
| Hero background color | [public/assets/styles.css:130](public/assets/styles.css#L130) | `.hero` → uses `--char` |
| The faint ring graphic | [public/assets/styles.css:140](public/assets/styles.css#L140) | opacity/color of the rings |

---

## 📄 Page sections (all in `public/index.html`)

| Section | Jump | 
|---|---|
| How it works (4 steps) | [public/index.html:113](public/index.html#L113) |
| What you get (feature list) | [public/index.html:154](public/index.html#L154) |
| Pricing | [public/index.html:191](public/index.html#L191) |
| Care plan (what's included) | [public/index.html:247](public/index.html#L247) |
| Founding offer | [public/index.html:281](public/index.html#L281) |
| About (founders' story) | [public/index.html:296](public/index.html#L296) |
| Insights teaser (3 cards) | [public/index.html:324](public/index.html#L324) |
| Contact (form + phone/email) | [public/index.html:352](public/index.html#L352) |
| Footer | [public/index.html:398](public/index.html#L398) |

---

## 💲 Prices

> Keep these in sync with the Obsidian vault's `02 Business Model/Offer & Pricing.md` — that note is the source of truth. Don't invent prices.

| Price | Jump |
|---|---|
| Launch `$997` | [public/index.html:203](public/index.html#L203) |
| Growth `$1,997` | [public/index.html:217](public/index.html#L217) |
| Subscription `$199` | [public/index.html:231](public/index.html#L231) |
| Monthly figures ($79/$99/$129) | in each tier's `tier-term` line, just below each price |
| Founding offer `$497` | [public/index.html:281](public/index.html#L281) |
| Care-plan details | [public/index.html:247](public/index.html#L247) |

---

## ☎️ Contact details (appear on EVERY page)

Phone and email are repeated in the header, footer, and call bar of **every** page (`public/index.html` + the 4 files in `public/insights/`). To change them everywhere, do a project-wide find & replace (⇧⌘H in VS Code):

| Change | Find → Replace |
|---|---|
| Phone (link) | `tel:+12342378715` → your new `tel:+1...` |
| Phone (shown) | `(234) 237-8715` **and** `(234)&nbsp;237-8715` → new number |
| Email | `redoakllc@proton.me` → new email |

First phone instance (nav button): [public/index.html:60](public/index.html#L60) · Form inbox key: [public/index.html:365](public/index.html#L365) (`access_key` — the Web3Forms key; messages go to the email registered with it).

Legal name “Red Oak LLC” appears at: [public/index.html:28](public/index.html#L28) (search data), [public/index.html:309](public/index.html#L309) (About), [public/index.html:427](public/index.html#L427) (footer).

---

## 🎨 Brand & theme — `public/assets/styles.css`

All colors are variables at the top (`:root`) — change one value, it updates everywhere.

| Token | Jump | Is |
|---|---|---|
| Brand red | [public/assets/styles.css:12](public/assets/styles.css#L12) | `--brand` (buttons, accents, featured tier) |
| Red hover | [public/assets/styles.css:13](public/assets/styles.css#L13) | `--brand-700` |
| Dark sections/hero/footer | [public/assets/styles.css:10](public/assets/styles.css#L10) | `--char` / [L11](public/assets/styles.css#L11) `--char-900` |
| Page background | [public/assets/styles.css:6](public/assets/styles.css#L6) | `--paper` / [L7](public/assets/styles.css#L7) `--sand` |
| Body text color | [public/assets/styles.css:8](public/assets/styles.css#L8) | `--ink` |
| Heading font | [public/assets/styles.css:19](public/assets/styles.css#L19) | `--font-display` (Archivo) |
| Body font | [public/assets/styles.css:20](public/assets/styles.css#L20) | `--font-body` (Inter) |
| Section-title size | [public/assets/styles.css:23](public/assets/styles.css#L23) | `--step-h2` |
| Primary button | [public/assets/styles.css:92](public/assets/styles.css#L92) | `.btn--primary` |
| Featured pricing tier | [public/assets/styles.css:188](public/assets/styles.css#L188) | `.tier--featured` |
| Footer | [public/assets/styles.css:280](public/assets/styles.css#L280) | `.site-footer` |

**Changing a font:** update the `<link>` at [public/index.html:21](public/index.html#L21) (and on each `public/insights/*.html`) to load the new Google Font, then set `--font-display` / `--font-body`.

---

## 🖼️ Logo & images — `public/assets/`

Replace a file with a new one of the **same name** and it swaps everywhere (nav, footer, favicon).

| File | Used for |
|---|---|
| `logo-mark.png` | the R+leaf mark in the nav & footer |
| `favicon-64.png` | browser-tab icon |
| `apple-touch-icon.png` | icon when saved to a phone home screen |
| `og.png` | preview image when the link is shared |

Logo is referenced as `<img src="/assets/logo-mark.png">` in the nav/footer of `index.html` and each `public/insights/*.html`.

---

## 🔎 SEO & sharing — `public/index.html` head

| What | Jump |
|---|---|
| Browser-tab / Google title | [public/index.html:6](public/index.html#L6) |
| Meta description | [public/index.html:7](public/index.html#L7) |
| Canonical URL | [public/index.html:8](public/index.html#L8) |
| Social preview image | [public/index.html:16](public/index.html#L16) |

Also: `public/sitemap.xml` (list of pages) and `public/robots.txt`.

---

## 📰 The Insights pages

Each is its own file; they **repeat** the header/footer, so nav/footer wording changes must be made in each:

- Hub: `public/insights/index.html`
- Articles: `public/insights/why-your-business-needs-a-website.html`, `what-the-free-preview-is.html`, `what-a-care-plan-covers.html`

To add a new article: copy an existing article file, change the text, then add a card on the hub + a link in [public/index.html:324](public/index.html#L324), and a line in `public/sitemap.xml`.

---

## ⚙️ Config & deploy

| What | Where |
|---|---|
| Headers / cleanUrls / serve `public/` | `vercel.json` |
| Local preview server | `scripts/serve.mjs` |
| Project rules & facts (for AI/future-you) | `CLAUDE.md` |

Hosting: Vercel project **website** (team *read-oak-website*). Push to `main` → auto-deploys. Domain `redoakllc.tech` (apex → `www`).
