# Scale SEO

The personal site of Corbin Jensen — specialist SEO freelancer for trade contractors and accounting firms.

Live at: [scaleseo.co](https://scaleseo.co)

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** plain CSS with CSS variables (no Tailwind, no CSS-in-JS)
- **Hosting:** Vercel
- **Email:** Resend (contact form)
- **DNS:** Cloudflare

## Where to edit things

**Homepage sections** (the most common edits):
- `src/app/sections/home/Hero.tsx`
- `src/app/sections/home/Marquee.tsx`
- `src/app/sections/home/CaseStudy.tsx`
- `src/app/sections/home/Services.tsx`
- `src/app/sections/home/ForWhom.tsx`
- `src/app/sections/home/Process.tsx`
- `src/app/sections/home/About.tsx`
- `src/app/sections/home/Contact.tsx`

**Site-wide bits:**
- Nav: `src/app/components/Nav.tsx`
- Footer: `src/app/components/Footer.tsx`
- Global styles, colors, fonts: `src/app/globals.css`
- Page metadata (SEO title/description, social previews): `src/app/layout.tsx`

**Adding new pages:** create a folder under `src/app/` named after the URL — e.g. `src/app/about/page.tsx` becomes `/about`. Pull sections from `src/app/sections/<page-name>/`.

## Local dev (optional)

You don't need this to use the site — Vercel rebuilds automatically on every GitHub commit. But if you want to preview changes on your machine first:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables

Resend needs an API key. In Vercel → Project → Settings → Environment Variables, set:

- `RESEND_API_KEY` — from resend.com/api-keys
- `CONTACT_TO_EMAIL` — where form submissions go (e.g. `corbin@scaleseo.co`)
- `CONTACT_FROM_EMAIL` — sending address on your verified Resend domain (e.g. `hello@send.scaleseo.co`)

For local dev, copy `.env.local.example` to `.env.local` and fill it in.
