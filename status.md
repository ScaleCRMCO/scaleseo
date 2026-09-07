# Scale SEO — Project Status

Last updated: 2026-09-07

## What This Project Is

Next.js 14.2.5 App Router site for **Scale SEO** (scaleseo.co), Corbin Jensen's
independent SEO/growth-marketing consultancy, based in Calgary, Alberta, serving
Canadian professional service businesses (accounting firms, legal practices,
corporate advisors). Solo-freelancer brand positioning throughout — copy is
written in first person ("I"), not agency "we" voice.

- **Repo:** `ScaleCRMCO/scaleseo` on GitHub
- **Branch to develop on:** `claude/codebase-review-dark-redesign-h4iz5y`
  (also mirrored to `main` on every push — `main` is connected to Vercel and
  auto-deploys on push)
- **Stack:** Next.js 14 App Router, TypeScript, CSS Modules (no Tailwind/CSS-in-JS),
  Resend for contact-form email, Google Tag Manager + Google Ads conversion tracking
- **Git workflow established this whole project:** always `git fetch origin main`
  and merge before pushing (something else sometimes pushes directly to `main`);
  push to both the feature branch and `main`; run `npm run build` before every
  push to catch errors; commits end with a `Co-Authored-By`/`Claude-Session` trailer.

## Recently Installed / Added

1. **`motion` (Framer Motion)** — just added via `npm install motion`. Not yet
   used anywhere in the codebase — available for future animation work
   (page transitions, scroll reveals, hover effects). `npm audit` reported
   3 pre-existing vulnerabilities (2 high, 1 critical) in the dependency tree
   at install time — not caused by this install, but not yet triaged.

2. **UI/UX Pro Max Claude Code skill** (`ui-ux-pro-max-cli` on npm, installed
   globally, then `uipro init --ai claude` scaffolded local skill files into
   `.claude/skills/` in this repo). This is a **third-party, unverified**
   package — flagged that risk to the user before installing; they chose to
   proceed anyway. Gives Claude Code sessions access to searchable local
   datasets: UI styles, color palettes, font pairings, UX/accessibility
   guidelines, icons, and stack-specific implementation guidance. Committed
   to git (172 files). `__pycache__` files it generated were accidentally
   committed once and then removed + added to `.gitignore`.
   - Related skill bundles also installed alongside it: `design-system`,
     `brand`, `ui-styling`, `banner-design`, `design`, `slides` — only
     `ui-ux-pro-max` has been used so far (for the color-palette pass below).

## Site Structure (as of last session)

### Pages
- `/` — homepage (Hero, About, Services, CaseStudy, Marquee, IndustriesTeaser,
  Process, FAQ, BlogTeaser, Contact)
- `/services` — hub page linking to all service pages
- `/services/seo` — recently rebuilt with a "What You Get" icon strip, process
  timeline, and FAQ section (see below)
- `/services/geo` — GEO/AI-search-optimization service page
- `/services/web-development`
- `/services/google-ads-management` (renamed from `/services/google-ads`)
- `/industries` — hub page
- `/industries/accounting-firms` — only industry page built so far
- `/results` — all client case studies (filtered view of homepage's Canada-only teaser)
- `/blog` + `/blog/[slug]` — one post live
- `/corbin-jensen` — full bio/author page (ProfilePage + Person schema)
- `/about` — agency story page
- `/contact` — contact form (Resend email delivery, confirmed working)
- `/thank-you` — post-submission confirmation page (noindexed), used for Google
  Ads conversion tracking
- `/llm-info` — plain-text page for AI crawlers
- `/sitemap.xml`, `/robots.txt`

### Shared components worth knowing about
- `Nav.tsx` / `Nav.module.css` — has a hover mega-menu dropdown under "Services"
  (icon grid + featured "All Services" tile), modeled on a competitor's nav
- `SellingHero.tsx` — hero pattern used across service/industry pages (portrait +
  checklist + dual CTA)
- `ServicePage.tsx` — shared template for service pages (problem/included/proof/CTA)
- `Breadcrumbs.tsx` — visual trail + BreadcrumbList schema
- Standard CTA pattern site-wide: primary "Book a call" (→ Cal.com,
  `https://cal.com/corbinjensen-scaleseo/30min`) + secondary "Send a Message" (→ `/contact`)

### Design system (CSS custom properties in `src/app/globals.css`)
**Just went through a full palette redesign** (twice — see below). Current state:

```css
--bg: #FBF6E3        /* warm cream background */
--bg-elev: #F4EDD3   /* elevated surfaces, cards, nav dropdown */
--ink: #0E0B1A       /* near-black primary text */
--ink-dim: #52505E   /* secondary text */
--ink-faint: #9B98A3 /* tertiary text, numbers */
--accent: #5B2AF2    /* vibrant violet — CTAs, links, highlights */
--on-accent: #FFFFFF /* text/icons on top of solid accent fills */
--line / --line-strong /* hairline borders, dark-based rgba */
--bg-dark: #14102B   /* always-dark sections (About page, mobile nav, stat bands) */
--ink-on-dark / --ink-dim-on-dark / --line-on-dark / --line-strong-on-dark
--display: 'Playfair Display', 'Merriweather', Georgia, serif
--sans: 'Inter', system-ui, sans-serif
--mono: 'JetBrains Mono', monospace
```

**History of this palette (in case it needs revisiting):**
1. Site was originally a dark charcoal theme (`--bg: #1a1a1a`, orange accent
   `#fa4c15`, Space Grotesk display font).
2. First redesign pass: flipped to a light off-white/gold theme (`--bg: #FDFDFB`,
   accent `#D97706`, Playfair Display swapped in for headlines). This required
   fixing ~33 CSS rules that assumed dark-bg-as-button-text-color, plus giving
   the "-on-dark" tokens real light-on-dark values since they used to just
   mirror the main (dark) theme.
3. **User wasn't excited about that gold/off-white result** — wanted something
   "bright and vibrant" like the reference site https://www.meaningfulagency.com.au/
   (cream background, bold violet accent, black text, editorial serif hero,
   bold sans nav). Second pass (current state, above) kept Playfair
   Display/Inter (confirmed as the right pairing via the ui-ux-pro-max skill's
   typography data) but repainted the palette to cream + violet.
4. **Not yet done:** a full visual QA pass against the meaningfulagency.com.au
   reference — this environment's network egress proxy blocks fetching that
   domain directly (confirmed multiple times across sessions), so all matching
   has been done from user-provided screenshots/descriptions, not live
   inspection of the reference site. If something still looks off compared to
   the reference, it's likely because of this constraint.

## Outstanding / Requested but Not Yet Done

These were explicitly requested and are **not finished**:

1. **Homepage restructure** — user wants the homepage reoriented to foreground:
   - what Corbin does / the brand
   - case studies
   - metrics/proof of revenue generated for clients
   (Currently the homepage has this content but not necessarily in the
   priority/prominence the user now wants after seeing the reference site.)

2. **Dedicated industry pages, expanded like meaningfulagency.com.au's** — their
   site has a full "Industries +" nav dropdown with pages for Software, Travel &
   Tourism, Automotive, Health & Beauty, Construction & Trades, Professional
   Services, etc. Scale SEO currently only has `/industries/accounting-firms`
   built out. User wants this expanded into a proper industries section
   mirroring that structure/depth (adapted to Scale SEO's actual target
   industries — professional services firms, not literally copying their
   industry list).

3. **General visual polish pass** — user said "polish the website visuals and
   we will expand the site like theirs" — implies more than just the color
   swap; likely wants component-level layout/spacing polish too, especially
   once the industries + homepage restructure work starts, to visually match
   the reference site's confident, whitespace-heavy, icon-driven editorial style.

4. **`motion` package is installed but unused** — if animations come up as part
   of the visual polish pass, this is the library to reach for (scroll reveals,
   hover states, page transitions).

## Known Constraints / Gotchas for Future Sessions

- **Network egress is blocked to most external domains** (confirmed blocked:
  meaningfulagency.com.au, davidkloeber.com, bcrlawllp.com, brandedagency.com).
  `WebFetch` will fail with `EGRESS_BLOCKED`. Work from user-supplied
  screenshots/descriptions instead, and say so explicitly rather than
  pretending to have fetched a page.
- **Always run `npm run build` before pushing** — this has caught real errors
  every time it's been skipped-then-run.
- **Always `git fetch origin main` + merge before pushing** — other processes
  push directly to `main` mid-session sometimes.
- **CSS variables are the lever for site-wide color/font changes** — everything
  cascades from `src/app/globals.css`'s `:root` block, so a palette change is a
  small diff there but needs a careful check for hardcoded hex/rgba literals
  elsewhere that don't derive from the variables (Nav.module.css's `.scrolled`
  backdrop color has bitten this twice now — it's fixed but keep an eye out for
  similar hardcoded literals elsewhere as more pages get built).
- **`color: var(--bg)` on top of `background: var(--accent)`** was a recurring
  pattern for CTA button text that broke when the theme flipped light/dark —
  now uses a dedicated `--on-accent` token instead. Follow that same pattern
  (dedicated `--on-*` token) for any new solid-fill component rather than
  reusing `--bg`/`--ink` directly.
