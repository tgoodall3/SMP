# Simple Man Plumbing

Production-ready marketing site for Simple Man Plumbing (SMP) built with Next.js 14 App Router, Tailwind CSS, and shadcn/ui. The experience is tuned for fast lead capture, strong local SEO, and WCAG 2.2 AA accessibility.

## Highlights

- **UX first:** Sticky nav, floating mobile call button, schema-driven content, and multi-step request form with inline validation.
- **SEO & content:** `next-seo`, JSON-LD (LocalBusiness, Service, FAQ), sitemap/robots via `next-sitemap`, and structured JSON content in `src/content` for services, FAQs, reviews, and service areas.
- **Forms that deliver:** `react-hook-form` + `zod` validation, honeypot spam trap, in-memory rate limiting, and SMTP delivery fallback to console logging when env vars are missing.
- **Accessible & fast:** Semantic structure, focus management, visible focus states, aria-live messaging, and lazy/lite assets (Next/Image, optimized SVGs).
- **Testing:** Vitest unit tests for critical UI and Playwright E2E that confirms the request service flow.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3 + shadcn/ui + lucide-react
- react-hook-form · zod
- next-seo · next-sitemap · nodemailer
- Vitest · Testing Library · Playwright

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

- Requires Node.js **20.19+** (aligns with Vite/Vitest engine requirement).
- Update `.env.local` with live phone/email/site URL. SMTP configuration is optional but enables email delivery.
- Visit `http://localhost:3000` and you’re live.

## Environment Variables

| Key | Purpose |
| --- | --- |
| `NEXT_PUBLIC_PHONE` | Public phone number (display + tel link) |
| `NEXT_PUBLIC_EMAIL` | Public email fallback |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO/sitemap |
| `NEXT_PUBLIC_MAP_EMBED_URL` | Optional Google Maps embed |
| `RATE_LIMIT_REQUESTS`, `RATE_LIMIT_WINDOW_MS` | API throttle controls |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` | SMTP delivery (logs when unset) |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js locally |
| `npm run build` | Production build (auto-runs `next-sitemap`) |
| `npm run start` | Serve production build |
| `npm run lint` | `next lint` |
| `npm run typecheck` | TypeScript diagnostics |
| `npm run test` | Alias for `test:unit` |
| `npm run test:unit` | Vitest suite (`vitest run`) |
| `npm run test:watch` | Vitest in watch mode |
| `npm run test:e2e` | Playwright flow (ensure `npm run prepare` once to install browsers) |
| `npm run prepare` | Installs Playwright browsers/deps |

## Testing Notes

- Unit tests live under `src/**/*.test.tsx` and cover the hero, header, and contact form submission.
- End-to-end spec (`tests/e2e/request-service.spec.ts`) launches the full app, completes the multi-step request form, and stubs the API response.
- Coverage reports land in `coverage/` when running Vitest with `--coverage`.

## Content & Customisation

- Update marketing copy via JSON files in `src/content/` (`services.json`, `service-details.json`, `faqs.json`, `reviews.json`, `service-areas.json`). These feed all grids and detail pages.
- Branding, navigation, and contact details live in `src/config/site.ts`.
- Tailwind theme, fonts, and utility settings are in `tailwind.config.ts` and `src/app/globals.css`.

## Forms & Email Delivery

- Contact form posts to `/api/contact`; request form posts to `/api/request-service`.
- Both routes use `zod` validation, honeypot (`_company`), and IP-based rate limiting. Missing SMTP credentials simply log the message server-side without throwing.

## Deployment

1. Set required environment variables on your host (Vercel recommended).
2. Build with `npm run build` – sitemap and robots are generated automatically.
3. Start with `npm run start` or let your hosting provider manage the process.

### Vercel Tips

- Add `npm run prepare` as a one-time local step (not required for Vercel build).
- Configure `NEXT_PUBLIC_*` and SMTP variables in the Vercel dashboard.
- Preview deployments inherit the sitemap/robots output per environment.

## Accessibility Checklist

- Skip-to-content link, visible focus states, and ARIA labelling on custom controls.
- Forms announce validation errors via `aria-live` regions.
- Full keyboard support for dialogs, selects, and navigation (Radix primitives).

## Project Structure (abridged)

```
src/
  app/                # App Router route segments + pages
  components/         # UI primitives, layout, forms, SEO helpers
  config/site.ts      # Global site settings
  content/*.json      # Editable marketing content
  lib/                # Utilities, env, validators, rate limiting, email
  types/              # Shared TypeScript types
tests/e2e/            # Playwright specs
public/               # Static assets (logo, images, icons)
```

---
Need help extending the site? Add services, update copy, or hook up SMTP credentials and you’re good to go. Happy plumbing! 🚰
