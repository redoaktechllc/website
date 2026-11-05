# CLAUDE.md — Red Oak company website

This repo is **Red Oak's own marketing site** (the site that sells Red Oak's services). It is **not** a client site.

## Source of truth: the Obsidian vault

Red Oak's business model, pricing, and brand are the source of truth in the Obsidian vault at:

```
/Users/giancarlo/Desktop/Website Design
```

**Before changing copy or pricing, read** that vault's `CLAUDE.md` and `02 Business Model/Offer & Pricing.md`. Other key notes: `02 Business Model/Ownership & Hosting Models.md`, `08 Roadmap/Decision Log.md` (newest decision wins), `10 AI Team/Design Playbook.md` + `Niche Design Recipes.md` (design taste + anti-slop list).

**Hard rule — never invent facts** about the business: no fake reviews, ratings, review counts, stats, "years in business", awards, or clients. If something is unknown, leave a visible `TODO:` or ask. Quote prices **only** from `Offer & Pricing.md`.

## Confirmed facts (from the owner, 2026-11-04)

| Field | Value |
|---|---|
| Legal name (footer) | **Red Oak LLC** *(owner wrote "Read Oak LLC" — treated as a typo; confirm vs "Red Oak Tech LLC" given the `redoaktechllc` GitHub org)* |
| Domain | `redoakllc.tech` |
| Email | `redoakllc@proton.me` (display + Web3Forms destination) |
| Phone | (234) 237-8715 → `tel:+12342378715` |
| Social | none yet (skipped — no footer icons) |
| Founders | Giancarlo Zaccaudelli (founder, raised in Cleveland, OH) + Will Ryan; launched Fall 2026 |
| Market | Northeast Ohio |
| Proof assets | none yet — do NOT fabricate testimonials/portfolio |
| Founding offer | featured: $497 setup (first 3 clients) + $79/mo, for a testimonial + 2 referrals |
| Repo | `github.com/redoaktechllc/website` |
| Host | Vercel (owner's existing/"already built" project) |
| Form backend | Web3Forms (public access key `3c1c8805-9c09-4215-b9ce-2c5383b1d6e6`) |

### Pricing shown on the site (from `Offer & Pricing.md` — "starting at" framing)
- **Launch** (most popular): from **$997** setup + **$79/mo** care plan — 1-page site, 2 revisions.
- **Growth**: from **$1,997** setup + **$99/mo** — up to 5 pages, 3 revisions.
- **Subscription**: from **$199** setup + **$129/mo** (12-month min; studio-owned until ~$500 buyout).
- Care plan ($79/mo): hosting + SSL, domain/DNS management, up to 30 min edits/mo, uptime + broken-link checks, support within 1 business day, quarterly health check.

## Tech stack

Bespoke, zero-dependency **static site** (HTML + CSS + a little vanilla JS) — matches the vault's Decision Log D8 (static unless a blog/CMS needs Astro). No framework, no build step. Deployed as static files on Vercel.

### Design direction — Red / Black / White (brand identity)
- From the owner's logo sheet `brand/Red Oak Monogram Concepts.png` (**Concept 1 chosen**). Logo mark extracted to `public/assets/logo-mark.png` (R + red oak leaf, transparent); favicons `favicon-64.png` + `apple-touch-icon.png`; social card `og.png`.
- Colors (CSS vars in `public/assets/styles.css`): `--paper #F7F6F4`, `--sand #EEECE8`, `--ink #17161A`, `--char #161419` (dark sections/hero/footer), `--brand #D81E2C` (brand red, actions), `--brand-300 #F2616B` (red on dark). White text on brand red = 5:1.
- Type: **Archivo** (display/headings) + **Inter** (body). No serif.
- Follow the vault's anti-slop list. Judge the 390px phone view first. The call action is the most visible thing on a phone; phone number is a `tel:` link.
- **Design engine:** the **ui-ux-pro-max** skill is installed at `.claude/skills/` (run `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system`). Its output is a recommendation only — the vault's anti-slop rules and the owner's explicit choices win on conflict.

## Layout

```
public/                 the ONLY thing deployed (Vercel outputDirectory = public)
public/index.html       landing page (hero, how it works, what you get, pricing,
                        care plan, founding offer, about, insights teaser, contact, footer)
public/insights/        content hub (index.html) + individual articles
public/assets/          styles.css, main.js, logo-mark.png, favicon-64.png,
                        apple-touch-icon.png, og.png
public/{robots.txt, sitemap.xml, 404.html}
brand/                  source brand art (monogram concepts) — NOT served
.claude/skills/         ui-ux-pro-max design engine — NOT served
scripts/serve.mjs       zero-dep local server (serves public/), node scripts/serve.mjs → :4321
vercel.json             outputDirectory=public, cleanUrls, security headers, asset caching
```

## Run locally

```
node scripts/serve.mjs          # http://localhost:4321  (zero dependencies)
# or: python3 -m http.server 4321
```

## Quality gates (before deploy)

1. Phone (390px) + desktop screenshots — read them, fix anything generic/broken.
2. Playwright browser check: nav, `tel:`/`mailto:` links, form submit, console errors, keyboard focus, phone + desktop widths.
3. Score against the vault Design Playbook rubric (8+/10 to ship).

## Deploy

Push to `main` on `github.com/redoaktechllc/website` → Vercel auto-deploys. Custom domain `redoakllc.tech` connected in the Vercel project (set DNS at the registrar). Verify HTTPS + domain resolve before calling it live.
