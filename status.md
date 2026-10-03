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
- Homepage CaseStudy section (`sections/home/CaseStudy.tsx`) is a pinned
  scroll scene: a ~420vh-tall section whose sticky stage holds the heading
  centred while 4 brand-gradient cards (Jensen CPA, Empire, Kinsmen, MSV)
  rise past it via `motion` `useScroll`/`useTransform`, alternating left and
  right. Uses `overflow: clip` (not hidden) so sticky works. Falls back to a
  static grid under prefers-reduced-motion. MSV links to its /results card
  until it has its own page.
- Homepage colour: CaseStudy cards use the secondary highlight colours
  (Jensen blue, Empire purple, Kinsmen yellow, MSV pink); the Contact
  section is a solid lime CTA block (dot grid top-right) with the dark form
  card on the right.
- `/` — homepage, in this order: Hero → ServicesGrid (3×3 cards) → Comparison
  (Scale SEO vs. generalist agencies) → About → CaseStudy → CampaignAreas
  ("What Goes Into a Scale SEO Campaign?") → IndustriesTeaser ("SEO for
  Professional Service & B2B Businesses") → Process → FAQ (FAQPage schema) →
  BlogTeaser → Contact
- `/services` — hub page (all in `services/page.tsx` + `ServicesFaq.tsx`):
  dark hero → 5 detailed service cards (copy + "can include" checklist) →
  "SEO Is at the Core" → "How These Services Work Together" (4 combos) →
  "Who Scale SEO Works With" → results (3 proof cards) → "What Working With
  Scale SEO Looks Like" (5 principles) → FAQ (FAQPage schema) → CTA
- `/services/seo` — main commercial SEO page. Original dark hero + trust bar,
  then (reusing the /services section styles via `../page.module.css`):
  "More Than Rankings" (flow diagram) → What's Included (8 service-area cards
  with checklists) → How I Decide Each Month → Local/National/B2B →
  featured accounting-firm result (GSC screenshot) → First 90 Days → Good
  Fit / Not a Fit → Pricing → FAQ (shared `ServicesFaq` with its own items)
  → CTA
- `/services/geo` — AI Search Optimization / GEO, rebuilt on the new design
  (own page, no longer the ServicePage template): hero (lime title block +
  platform jump list) → Search Is Changing → What Is GEO → GEO Doesn't
  Replace SEO (flow) → What's Included (6 service cards) → AI Platforms →
  Professional Services → Accounting Firms → Measurement → Can You
  Guarantee Citations → Without the Hype → light Get Started CTA
- `/services/web-development`
- `/services/google-ads-management`
- `/services/seo-audits` — standalone audit page (starting from $500 / $1,500 + GST). Dark
  hero → "What's Holding Your Website Back" (3 questions) → two-tier audit
  cards (kept design) → What an Audit Covers (8 cards) → When to Get an
  Audit → The Deliverable → Audit vs Ongoing SEO → Standalone vs Free
  Assessment → Process (5 steps) → FAQ (shared `ServicesFaq`) → CTA
- `/industries` — hub page: full-width hero (lime title block + industry jump
  list) → Expertise-Led Businesses → 4 industry cards (Accounting featured,
  links to /industries/accounting-firms) → Why SEO Works Differently → One
  Strategy Adapted to Your Market → light "Don't See Your Industry?" CTA
- `/industries/accounting-firms` — rebuilt on the new design: full-width hero
  (lime title block + Page 5→Page 1 / +125% stat cards) → clients you want →
  how accounting clients search → what accounting SEO includes (6 cards) →
  website structure diagram → single/multi-location → featured result →
  firm types → content clusters → why Scale SEO → one firm per market →
  FAQ (9, shared `ServicesFaq`) → CTA
- `/results` — case study hub rebuilt on the new design (content lives in
  `results/page.tsx`): hero (lime title block + client/metric jump list) →
  one large card per case study (Empire Accountants featured, then Kinsmen
  Consulting, MSV Plumbing) → Results Built Through Hands-On SEO → light
  CTA. Each card has a `caseStudyHref` slot; until an individual case study
  page exists its "Read the … Case Study" button shows as "Coming soon".
- `/results/empire-accountants` — first individual case study (own
  `page.tsx` + `page.module.css`, reusing `hub`/`ind`/`about`): hero with
  browser-framed site screenshot + 3 stat cards → client → challenge →
  strategy (5 rows) → the work (content journey) → results (3 cards + GSC
  screenshot) → why it worked → ongoing → accounting SEO → specialist → CTA.
  In the sitemap; the hub card's button links here. Styles shared with the
  other case studies in `results/caseStudy.module.css`.
- `/results/kinsmen-consulting` — second case study, same template: hero
  (site screenshot + $400K+ / 6 Months / Residential + Commercial) → client
  → challenge (two goals) → strategy (5 rows, service chips) → approach
  (search-to-revenue journey) → results → why it worked → ongoing →
  specialist (dark) → light CTA. In the sitemap; hub card links here.
- `/results/jensen-cpa` — third case study (newest client), same template.
  Images: homepage screenshot (hero + hub card), GSC graph (results) and the
  bookkeeping service page (after the strategy rows). The query/ranking
  visual is still a dashed "Image coming soon" placeholder.
  Client site: https://www.jensencpa.ca/. Hub card added (neutral tint, second
  position, image placeholder). In the sitemap.
- `/blog` + `/blog/[slug]` — posts in `src/app/blog/posts.ts` (two posts live: seo-cost-canada, accounting firms)
  Post cards use the shared template `blog/PostCard.tsx` (soft lime panel:
  category, title, description, then a barred footer with date · read time
  and "Read article"). Used on /blog and the homepage BlogTeaser — new posts
  in posts.ts get it automatically.
- `/corbin-jensen` — bio/author page rebuilt on the new design (reuses `hub`,
  `ind` + `about` styles): hero (bio + portrait) → SEO Experience →
  Areas of Expertise (7 rows) → Industry Experience (2 cards) → Selected
  Results → How Corbin Works → My Approach (centred manifesto) → Tools &
  Platforms (chips) → Articles → Professional Information (fact sheet) →
  CTA. Schema: ProfilePage + Person (`#corbin-jensen`) + BreadcrumbList.
- `/about` — rebuilt on the new design (`about/page.tsx` + `page.module.css`,
  reusing `hub` + `ind`): full-width hero (lime title block + fact list) →
  The Business (sticky heading, 2025 mark) → What Scale SEO Does (5
  editorial rows) → Who I Work With (2 audience cards) → Approach (5-step
  alternating timeline) → Meet Corbin Jensen (portrait + bio) → Experience
  (result card) → Why Kept Small (5 rows) → Location → At a Glance (fact
  sheet) → CTA
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
- **Footer:** black with a lime radial glow + grain rising from the
  bottom-right (rounded top, overlaps the section above). Big two-line
  "Scale / SEO" wordmark top-left, five link groups (site pages, all six
  services incl. SEO Audits, contact, service area, social/profiles) with the
  X mark on the right, then the bottom bar (© line, LLM Info + tagline,
  Google Preferred Sources button).

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
`src/app/sections/home/Services.tsx` and `Marquee.tsx`
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

**Secondary highlight palette (trial on /services):** `--pop-blue #0089FC`,
`--pop-pink #FC0089`, `--pop-purple #7300FC`, `--pop-yellow #FCF100`.
Card/panel backgrounds on LIGHT sections only; ink text on blue/pink/yellow,
cream text on purple; lime pills turn black on these cards. Applied via
`.pastel` + `.tintBlue/Pink/Purple/Yellow` in `services/page.module.css`
(each tint sets its own text/panel colours). Earlier pastel and neon trials
were rejected.

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
5. **Homepage case study 02** — add the strongest accounting-firm SEO result as
   a second homepage case study once the data is cleared for publishing.

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

## Homepage palette test (Oct 2026)
- Test #3 (current, Think Company-inspired): Carbon #121212, Soft White #FAFAFA, Midnight #0B132B, lime (existing --highlight), Cyan #B6FFFF, Pink #FF86EB (+ pale blush #FFE3FA for full sections). Tests #1 (Midnight/Mist/Powder/Stone) and #2 (Carbon/Warm White/Pink/Sky) were rejected.
- All overrides live in `src/app/palette-test.css`, applied by `className="palette-test"` on `<main>` in `src/app/page.tsx` (nav/footer via `body:has(main.palette-test)`). Components keep their old colours as CSS-variable fallbacks, so other pages are unchanged.
- Section rhythm: Hero White → Services Midnight → Comparison White → About Midnight → Case studies White → Campaign Midnight → Industries Blush → Process Cyan → FAQ White → Blog Midnight → Contact Lime → Footer Midnight. No black backgrounds anywhere on the homepage (Carbon dropped; text, buttons and dark sections all Midnight, cards inside dark sections #16204A).
- Case-study cards (solid, no gradients/fades): Jensen CPA cyan + midnight text, Empire midnight + lime text, Kinsmen lime + midnight text, MSV pink + midnight text with lime chip/arrow (lime text on pink was unreadable).
- Revert: remove the import + class in page.tsx; restore old CaseStudy card themes from git.
