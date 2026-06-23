# Lovable App Brief — Local Business / Salon Style Website

Copy this entire file into a new Lovable project chat as your first prompt.
Fill in the `{{PLACEHOLDERS}}` in the "CLIENT DETAILS" section at the top.
Everything below it is the build spec — do not change unless you want a different feature set.

---

## CLIENT DETAILS (fill these in)

- Business name: `{{BUSINESS_NAME}}` (e.g. LOVE LIVE UNISEX)
- Business type: `{{BUSINESS_TYPE}}` (e.g. Unisex Salon, Dental Clinic, Cafe, Gym)
- Tagline / short description: `{{TAGLINE}}`
- Phone: `{{PHONE}}` (with country code, e.g. +91 8890497015)
- WhatsApp number: `{{WHATSAPP}}` (digits only with country code, e.g. 918890497015)
- Email: `{{EMAIL}}`
- Full address: `{{ADDRESS}}`
- City / Region / Country: `{{CITY}}`, `{{REGION}}`, `{{COUNTRY}}`
- Google Maps link: `{{MAP_LINK}}`
- Opening hours: `{{HOURS}}` (e.g. Mon–Sun, 9:00 AM – 9:00 PM)
- Rating + review count (optional): `{{RATING}}` ★ from `{{REVIEW_COUNT}}` reviews
- Brand color palette: `{{COLORS}}` (e.g. charcoal #1a1a1a, gold #c8a96a, cream #f5efe3)
- Logo style preference: `{{LOGO_STYLE}}` (e.g. minimal gold monogram, art-deco, modern sans)
- Service list (8–10 items, each with title + 1-line description): `{{SERVICES}}`
- Areas served / nearby localities: `{{AREAS_SERVED}}`
- Social links (optional): `{{INSTAGRAM}}`, `{{FACEBOOK}}`, `{{GOOGLE_BUSINESS}}`
- Published Lovable URL slug (after first publish): `{{PUBLISH_SLUG}}.lovable.app`

---

## BUILD THIS APP

Build a fast, SEO-optimized, mobile-first marketing website for the business
described above. Use the Lovable default stack — **TanStack Start (React 19)
+ Vite 7 + Tailwind v4 + shadcn/ui**. No backend / no Lovable Cloud needed
unless I explicitly ask later (it's a pure static marketing site).

### Pages / Routes (file-based, under `src/routes/`)

1. `index.tsx` — Home: hero, highlights, featured services, why-choose-us, testimonials, FAQ teaser, contact CTA.
2. `about.tsx` — About: brand story, values, team blurb.
3. `services.tsx` — Services: full grid of all services with icons + descriptions, "Book on WhatsApp" CTA.
4. `gallery.tsx` — Gallery: image grid (placeholder images OK; use Unsplash or generated).
5. `reviews.tsx` — Reviews: testimonial cards + rating summary.
6. `contact.tsx` — Contact: address, phone, WhatsApp, hours, embedded Google Map, FAQ accordion.
7. `sitemap[.]xml.ts` — XML sitemap server route.
8. `__root.tsx` — Root layout with `<SiteHeader />`, `<Outlet />`, `<SiteFooter />`, `<FloatingCTAs />`, plus `<HeadContent />` and global font/style links.

### Shared components (`src/components/`)

- `SiteHeader.tsx` — sticky navbar with logo image (from `src/assets/logo.png`), brand name, nav links from a shared `NAV` array, "Call Now" + "WhatsApp" buttons on desktop, hamburger sheet on mobile.
- `SiteFooter.tsx` — logo, brand, quick links, contact info, copyright with current year.
- `FloatingCTAs.tsx` — fixed bottom-right floating Call + WhatsApp buttons (visible on all pages, mobile-priority).
- `PageHero.tsx` — reusable hero section with title + subtitle.
- `Reveal.tsx` — scroll-reveal wrapper using IntersectionObserver for subtle fade-up animations.

### Shared data (`src/lib/salon.ts` or `src/lib/business.ts`)

Export typed constants used everywhere:
- `BUSINESS` — name, phone, `tel:` link, `wa.me/` link, address, map, hours, rating, reviews.
- `NAV` — array of `[label, path]` tuples.
- `SERVICES` — array of `{ icon (lucide), title, desc }`.
- `REASONS` — array of `{ icon, title, desc }` for "Why choose us".
- `TESTIMONIALS` — array of `{ name, role, text }`.
- `FAQS` — array of `{ q, a }`.
- `SITE_URL` — published URL.
- `abs(path)` helper for absolute URLs.
- `salonJsonLd` / `businessJsonLd` — schema.org `LocalBusiness` (or appropriate subtype like `BeautySalon`, `Dentist`, `Restaurant`) with address, geo, hours, rating, makesOffer from SERVICES.
- `faqJsonLd` — schema.org `FAQPage`.
- `breadcrumb(items)` — BreadcrumbList generator.

### Design system

- Tailwind v4 with semantic tokens defined in `src/styles.css` using `@theme` (colors, fonts, radii, shadows). **Never hardcode colors** like `text-white` or `bg-[#...]` in components — always use semantic tokens (`bg-background`, `text-foreground`, `bg-primary`, `text-gold`, etc.).
- Color palette from `{{COLORS}}`. Default to a warm premium feel (deep charcoal, gold accent, cream) unless `{{COLORS}}` says otherwise.
- Typography: pair a display serif/elegant font with a clean sans (e.g. Playfair Display + Inter, or Cormorant + DM Sans). Load via `<link>` in `__root.tsx` head — never `@import` remote fonts in `styles.css`.
- Generous spacing, soft shadows, rounded-2xl cards, subtle gradient/ring accents.
- Mobile-first; test at 375px width.
- Reject generic AI aesthetics (no default Inter-only, no purple gradients on white).

### Logo

Generate a simple, attractive logo matching the brand palette and style preference in `{{LOGO_STYLE}}`. Save to `src/assets/logo.png` with transparent background. Use the logo image in `SiteHeader` and `SiteFooter` (48x48, `object-contain`, inside a circular ring container).

### SEO (non-negotiable — apply on every shareable route)

Every route file must export `head()` with route-specific:
- `<title>` (< 60 chars, includes business name + keyword)
- meta `description` (< 160 chars)
- `og:title`, `og:description`, `og:type`, `og:url`
- `twitter:card`, `twitter:title`, `twitter:description`
- canonical `<link rel="canonical">`
- JSON-LD `<script type="application/ld+json">` — `salonJsonLd` on home/contact, `faqJsonLd` where FAQs appear, `breadcrumb()` on inner pages.

Also:
- Single `<h1>` per page, semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
- All images have meaningful `alt` text.
- `public/robots.txt` allowing all + pointing to sitemap.
- `public/site.webmanifest` with name, short_name, theme/background color, icons.
- `public/favicon.svg` derived from the logo.
- `public/llms.txt` summarizing the business for AI crawlers.
- `src/routes/sitemap[.]xml.ts` server route generating XML from `NAV`.
- `og-cover.jpg` in `public/` (generate one) referenced from JSON-LD `image`.

### Interactions / UX

- All "Call" buttons → `tel:{{PHONE}}`.
- All "WhatsApp" / "Book Now" buttons → `https://wa.me/{{WHATSAPP}}` with a prefilled `?text=` message like "Hi, I'd like to book at {{BUSINESS_NAME}}".
- Contact page embeds Google Map iframe using the address.
- Floating CTAs always visible (call + whatsapp) on bottom-right with subtle pulse animation.
- Smooth scroll, reveal-on-scroll animations, hover states on cards.

### Out of scope (do NOT add unless asked)

- No auth, no database, no Lovable Cloud, no payment integration, no booking system backend, no admin panel, no blog CMS. Pure static marketing site.

### Deliverables checklist (verify before saying "done")

- [ ] All 6 pages render with unique content + unique SEO metadata
- [ ] Header + Footer + Floating CTAs mounted in `__root.tsx` and visible on every route
- [ ] Logo generated and used in header + footer + favicon
- [ ] Tailwind tokens defined in `src/styles.css`; no hardcoded colors in components
- [ ] JSON-LD valid for LocalBusiness + FAQ + Breadcrumbs
- [ ] `robots.txt`, `sitemap.xml`, `site.webmanifest`, `llms.txt`, `og-cover.jpg` all present
- [ ] Mobile tested at 375px — nothing overflows, CTAs reachable
- [ ] `tel:` and `wa.me/` links work on all CTAs

After the first publish, remind me to share the Lovable URL so you can update
`SITE_URL`, sitemap, robots, llms.txt and all canonical/OG URLs to the real
published domain.
