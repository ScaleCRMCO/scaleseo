# Scale SEO — Project Status

Last updated: 2026-09-25

## What This Project Is

Next.js 14.2.5 App Router site for **Scale SEO** (scaleseo.co), Corbin Jensen's
independent SEO / Google Ads / GEO (AI-search) consultancy, based in Calgary,
Alberta, serving Canadian professional service businesses (accounting firms,
legal practices, corporate advisors). Solo-freelancer brand positioning
throughout — copy is written in first person ("I"), not agency "we" voice.

- **Repo:** `ScaleCRMCO/scaleseo` on GitHub
- **Deploys:** `main` is connected to Vercel and auto-deploys on push. Feature
  work happens on a `claude/*` branch and is merged into `main`.
- **Stack:** Next.js 14 App Router, TypeScript, CSS Modules (no Tailwind/CSS-in-JS),
  `motion` for animation, Resend for contact-form email, Google Tag Manager +
  Google Ads conversion tracking
- **Git workflow:** always `git fetch origin main` and merge before pushing
  (other processes sometimes push directly to `main`); run `npm run build`
  before every push; commits end with a `Co-Authored-By`/`Claude-Session` trailer.

## Site Structure

### Pages
- `/` — homepage, in this order: Hero → ServicesGrid (3×3 cards) → Comparison
  (Scale SEO vs. generalist agencies) → About → CaseStudy → Process → FAQ →
  BlogTeaser → Contact
- `/services` — hub page: black hero, 3×3 service grid (lime highlight card
  last), comparison, process, proof, FAQ (`ServicesList`, `ServicesComparison`,
  `ServicesProof`, `ServicesFaq`)
- `/services/seo` — black hero with floating GSC image, trust bar, 4-way
  comparison matrix, alternating rounded sections
- `/services/geo` — GEO / AI-search optimization
- `/services/web-development`
- `/services/google-ads-management`
- `/services/seo-audits` — pricing tiers; free audits are exclusive to monthly
  SEO retainer clients
- `/industries` — hub page (black hero, rounded cards, shared contact CTA)
- `/industries/accounting-firms` — only industry page built so far
- `/results` — all client case studies (data in `src/app/data/caseStudies.ts`:
  Kinsmen Consulting, MSV Plumbing Services, Empire Accountants)
- `/blog` + `/blog/[slug]` — posts in `src/app/blog/posts.ts` (one post live)
- `/corbin-jensen` — full bio/author page (ProfilePage + Person schema)
- `/about` — agency story page
- `/contact` — two-column split layout form (Resend email delivery)
- `/thank-you` — post-submission confirmation (noindexed), used for Google Ads
  conversion tracking
- `/llm-info` — plain-text page for AI crawlers (linked from footer bottom bar)
- `/sitemap.xml` (`sitemap.ts`, manual list — add every new page), `/robots.txt`
- Redirect: `/brisbane` → `/` (in `next.config.js`)

### Navigation
- **Nav:** Case Studies (`/results`) · Services (hover mega-menu: SEO, Google
  Ads, Web Development, GEO + featured "All Services" tile) · Industries ·
  About · Contact · "Book a call" button. Inverts itself over any section
  marked `data-nav-theme="dark"`.
- **Footer:** link groups (site pages, all six services incl. SEO Audits,
  contact, social/profiles incl. Clutch + Google Business), giant lime
  rounded wordmark bubble with the X logo, LLM Info in the bottom bar.

### Shared components (`src/app/components/`)
- `Nav.tsx`, `Footer.tsx`, `Logo.tsx`
- `SellingHero.tsx` — hero pattern for service/industry pages (portrait +
  checklist + dual CTA)
- `ServicePage.tsx` — shared template for service pages
  (problem/included/proof/CTA + Service schema)
- `Breadcrumbs.tsx` — visual trail + BreadcrumbList schema
- `RevealOnScroll.tsx` — scroll-reveal animations
- `PageTransition.tsx` — route-change transition
- Standard CTA pattern site-wide: primary "Book a call" (→ Cal.com,
  `https://cal.com/corbinjensen-scaleseo/30min`) + secondary "Send a Message"
  (→ `/contact`)

### Unused files
`src/app/sections/home/Services.tsx`, `Marquee.tsx`, and `IndustriesTeaser.tsx`
(+ their `.module.css`) are no longer imported anywhere — superseded by
`ServicesGrid` / removed from the homepage. Safe to delete or reuse.

## Design System (`src/app/globals.css`)

**Luxury brutalist-minimalist:** cream paper canvas, stark near-black ink,
hairline borders, monochrome by design — with a single high-vibrancy lime
green as the one accent (hover states, highlight cards, footer wordmark).

```css
--bg: #FCFBFA            /* cream paper background */
--bg-elev: #F5F3F0       /* elevated surfaces, cards, dropdowns */
--ink: #0A0A0A           /* primary text */
--ink-dim: #4A4A4A       /* secondary text */
--ink-faint: #7A7A7A     /* tertiary text, numbers */
--accent: #0A0A0A        /* solid fills (buttons, badges) — black, not a color */
--on-accent: #FCFBFA     /* text on --accent fills */
--highlight: #99FF00     /* lime — THE shared hover color for buttons/pills */
--on-highlight: #0A0A0A  /* text on lime */
--line / --line-strong   /* hairline borders */
--bg-dark: #0A0A0A       /* inverted "dark" sections (heroes, contrast bands) */
--ink-on-dark / --ink-dim-on-dark / --line-on-dark / --line-strong-on-dark
```

**Typography:**
- `--display` / `--sans`: **Manrope** (self-hosted variable font, 200–800) —
  all headings and body copy
- `--brand`: **Archivo Black** (self-hosted) — Scale SEO wordmark and
  brand-level lockups only (nav, footer)
- `--mono`: **JetBrains Mono** (Google Fonts) — bracketed index/eyebrow labels
  like `[ SCALE SEO · … ]`

**Recurring visual patterns:**
- Black (`--bg-dark`) hero sections on inner pages, content sections with
  large rounded top corners (`48px 48px 0 0`) stacking over each other
- Rounded cards (24–28px radius), pill buttons (`999px`), lime hover
- Bold, compact H1s; a boxed/highlighted closing phrase in the homepage H1
- Floating 3D Google Search Console mockup as proof imagery (homepage +
  `/services/seo`), with a proof-metric badge
- Dark sections: add `data-nav-theme="dark"` so the nav inverts and text
  selection switches to lime automatically

**Design history (for context):** dark charcoal/orange → light off-white/gold →
cream/violet with Playfair/Inter (modeled on meaningfulagency.com.au) →
current monochrome + lime with Manrope/Archivo Black (layouts modeled on a
"Rise"-style reference for the services grid, contact page, and comparison
table).

## Outstanding / Possible Next Work

1. **More industry pages** — only `/industries/accounting-firms` exists. Goal
   is a fuller industries section (e.g. legal practices, corporate advisors,
   other professional services) with an Industries nav dropdown like Services.
2. **More blog content** — only one post is live.
3. **Dependency audit** — `npm audit` reported pre-existing high/critical
   vulnerabilities in the dependency tree (Next 14.2.5 is pinned); not yet
   triaged.
4. **Cleanup** — delete the unused homepage sections listed above.

## Known Constraints / Gotchas for Future Sessions

- **Network egress is blocked to most external domains** (e.g. reference
  agency sites). Work from user-supplied screenshots/descriptions instead, and
  say so explicitly rather than pretending to have fetched a page.
- **Always run `npm run build` before pushing** — it has caught real errors
  every time it's been skipped-then-run.
- **Always `git fetch origin main` + merge before pushing.**
- **CSS variables are the lever for site-wide color/font changes** — but check
  for hardcoded hex/rgba literals in module CSS that don't derive from the
  variables (Nav.module.css's `.scrolled` backdrop has bitten this before).
- **Solid-fill components use dedicated `--on-*` tokens** (`--on-accent`,
  `--on-highlight`) for their text color — never reuse `--bg`/`--ink` directly.
- **New pages must be added to `sitemap.ts` manually**, and to Nav/Footer if
  they should be linked.
- `.claude/skills/` contains third-party design skill bundles (`ui-ux-pro-max`,
  `design-system`, `brand`, `ui-styling`, `banner-design`, `design`, `slides`)
  installed from an unverified npm package — usable for design reference data.
