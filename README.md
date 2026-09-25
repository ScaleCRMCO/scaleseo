# Scale SEO

The site for Scale SEO — Corbin Jensen's independent SEO, Google Ads, and AI-search (GEO) practice in Calgary, serving Canadian professional service businesses (accounting firms, legal practices, advisors).

Live at: [scaleseo.co](https://scaleseo.co)

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** CSS Modules + CSS variables in `src/app/globals.css` (no Tailwind, no CSS-in-JS)
- **Animation:** `motion` (Framer Motion) for hero/nav/grid animations
- **Hosting:** Vercel — auto-deploys on every push to `main`
- **Email:** Resend (contact form)
- **Tracking:** Google Tag Manager + Google Ads conversion tag (in `layout.tsx`)
- **DNS:** Cloudflare

## Where to edit things

**Homepage** — `src/app/page.tsx` sets the section order. Sections live in `src/app/sections/home/`:
- `Hero.tsx` — H1, intro, floating Search Console image
- `ServicesGrid.tsx` — 3×3 service card grid
- `Comparison.tsx` — Scale SEO vs. generalist agencies table
- `About.tsx`
- `CaseStudy.tsx`
- `Process.tsx`
- `FAQ.tsx`
- `BlogTeaser.tsx`
- `Contact.tsx`

**Site-wide bits:**
- Nav + Services dropdown: `src/app/components/Nav.tsx`
- Footer: `src/app/components/Footer.tsx`
- Colors, fonts, shared utility classes: `src/app/globals.css`
- Default SEO title/description, social previews, LocalBusiness schema, GTM/Ads tags: `src/app/layout.tsx`
- Sitemap (manual list — add new pages here): `src/app/sitemap.ts`

**Content data:**
- Case studies: `src/app/data/caseStudies.ts`
- Blog posts: `src/app/blog/posts.ts`

**Adding a new page:** create a folder under `src/app/` named after the URL — e.g. `src/app/services/seo/page.tsx` becomes `/services/seo`. Service pages can use the shared template in `src/app/components/ServicePage.tsx`. Then add the URL to `sitemap.ts` (and to the Nav/Footer if it should be linked there).

## Local dev (optional)

You don't need this to use the site — Vercel rebuilds automatically on every push to `main`. To preview locally:

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # run before pushing — catches type/build errors
```

## Environment variables

Resend needs an API key. In Vercel → Project → Settings → Environment Variables, set:

- `RESEND_API_KEY` — from resend.com/api-keys
- `CONTACT_TO_EMAIL` — where form submissions go (e.g. `corbin@scaleseo.co`)
- `CONTACT_FROM_EMAIL` — sending address on your verified Resend domain (e.g. `hello@send.scaleseo.co`)

For local dev, create a `.env.local` file in the project root with the same three variables.

See `status.md` for the full site map, design system, and project history.
