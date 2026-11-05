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

**Astro 5** (static output) + **React islands** (`@astrojs/react`) + **Tailwind v4** (`@tailwindcss/vite`) + **shadcn/ui** (Base UI primitives, `base-nova` style; components in `src/components/ui/`). Prerendered to static HTML by `astro build`; ships **zero JS except the contact-form island** (the header mobile menu + scroll-state use a small inline vanilla `<script>`, not React). Deployed on Vercel (framework preset: Astro, output `dist`).

> This stack **overrides Decision Log D8** (previously zero-dependency static HTML/CSS/JS). See the newest Decision Log entry. Brand colors/tokens live in `src/styles/global.css` (`@theme` + shadcn CSS variables remapped to red/black/white), not a hand-written stylesheet.

### Design direction — Red / Black / White (brand identity)
- From the owner's logo sheet `brand/Red Oak Monogram Concepts.png` (**Concept 1 chosen**). Logo mark extracted to `public/assets/logo-mark.png` (R + red oak leaf, transparent); favicons `favicon-64.png` + `apple-touch-icon.png`; social card `og.png`.
- Colors (CSS vars in `src/styles/global.css`): `--paper #F7F6F4`, `--sand #EEECE8`, `--ink #17161A`, `--char #161419` (hero/header), `--char-800 #1F1C24` (care-plan dark), `--oxblood #2A0E14` (contact dark), `--brand #D81E2C` (brand red, actions), `--brand-300 #F2616B` (red on dark). Also mapped onto shadcn tokens (`--primary` = brand red, etc.). White text on brand red = 5:1.
- Type: **Archivo** (display/headings) + **Inter** (body). No serif.
- Follow the vault's anti-slop list. Judge the 390px phone view first. The call action is the most visible thing on a phone; phone number is a `tel:` link.
- **Design engine:** the **ui-ux-pro-max** skill is installed at `.claude/skills/` (run `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system`). Its output is a recommendation only — the vault's anti-slop rules and the owner's explicit choices win on conflict.

## Layout

```
src/pages/index.astro        landing page — composes the section components below
src/pages/insights/          index.astro (hub) + [...slug].astro (renders articles)
src/pages/404.astro
src/content/insights/*.md    the 3 articles (Astro content collection; see src/content.config.ts)
src/components/sections/     Hero, HowItWorks, WhatYouGet, Pricing, CarePlan,
                             FoundingOffer, About, Insights, Contact (.astro)
src/components/              Header, Footer, CallBar, Container, SectionHead,
                             PageHero, Icon, RingMark (.astro)
src/components/islands/      ContactForm.tsx  (the only React island — Web3Forms + sonner toast)
src/components/ui/           shadcn components (button, card, input, textarea, label, badge, sonner…)
src/layouts/Base.astro       HTML shell: head/meta/OG/JSON-LD + Header/Footer/CallBar
src/lib/site.ts              site constants + all section content (phone, pricing, steps, posts…)
src/styles/global.css        Tailwind v4 theme: brand tokens + shadcn vars + type/space/elevation
public/                      static assets served as-is: logo-mark.png, favicons, og.png,
                             robots.txt, sitemap.xml (NO HTML — pages come from src/)
brand/                       source brand art — NOT served
.claude/skills/              ui-ux-pro-max design engine — NOT served
astro.config.mjs             react() + tailwindcss() vite plugin, output: 'static'
vercel.json                  framework=astro, outputDirectory=dist, cleanUrls, headers, caching
```

To edit copy or pricing, change `src/lib/site.ts` (most content) or the relevant section component; article text lives in `src/content/insights/*.md`.

## Run locally

```
npm install
npm run dev        # http://localhost:4321  (astro dev, hot reload)
npm run build      # → dist/  (static output that actually deploys)
npm run preview    # serve the built dist/ locally
```

## Quality gates (before deploy)

1. `npm run build` must pass clean (no type/content errors).
2. Phone (390px) + desktop screenshots of the built site — read them, fix anything generic/broken.
3. Playwright browser check: nav (mobile menu toggle), `tel:`/`mailto:` links, contact-form hydration, console errors, keyboard focus, reduced-motion, phone + desktop widths.
4. Score against the vault Design Playbook rubric (8+/10 to ship).

## Deploy

Push to `main` on `github.com/redoaktechllc/website` → Vercel builds (`astro build`) and deploys `dist/`. Custom domain `redoakllc.tech` connected in the Vercel project (set DNS at the registrar). Verify HTTPS + domain resolve before calling it live.
