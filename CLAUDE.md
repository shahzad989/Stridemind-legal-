# Stridemind Website
Marketing site + legal pages for Stridemind, the audio-first cognitive training app for Active Agers 55+. Despite the repo name (`stridemind-legal`), this is the full public website at https://stridemind.app.

Deployed on **Vercel from `origin/main`** (Analytics + Speed Insights are wired in). Pushing to main is deploying. ALWAYS `git fetch` and check you are working on top of `origin/main` before editing; a stale local checkout here once caused a full session of edits against an outdated tree.

The companion mobile app lives in a separate repo (`stridemindcc` on this machine, React Native Expo). Website copy must stay truthful to what the app actually does. Do not invent features, claims, or pricing the app does not have.

**App name spelling on the site is "Stridemind"** (lowercase m, deliberate correction from 2026-04). The app repo still uses "StrideMind" internally; the website follows "Stridemind".

---

## Tech Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS 3.4 (brand + cockpit colors in `tailwind.config.ts`)
- framer-motion (scroll/entrance animations throughout sections)
- lucide-react (icons; inline SVG where already used)
- @vercel/analytics + @vercel/speed-insights
- Fonts via CSS variables: `font-display` (serif headings) and `font-sans`
- No backend, no API routes — fully static content

## Key Commands

```
npm run dev     # dev server
npm run build   # production build (must pass before marking any task done)
npm run lint    # next lint
```

---

## File Structure

```
app/
  layout.tsx                → Root layout — fonts, Nav/Footer/StickyCTA, site metadata,
                              MobileApplication + FAQPage JSON-LD schemas
  page.tsx                  → Landing page — sections + WebPage/ScholarlyArticle/HowTo schemas
                              (the HowTo schema copy must match the app: strides, think-along)
  globals.css
  opengraph-image.tsx       → Generated OG image
  robots.ts / sitemap.ts
  science/page.tsx          → /science — evidence page (4 verified citations + EGM 2025 meta-analysis)
  science/ScienceContent.tsx
  blog/page.tsx             → /blog — post index (newest first) + Blog JSON-LD
  blog/[slug]/page.tsx      → post template — BlogPosting JSON-LD (Person author:
                              Ibrahim Shahzad), CTA, more-posts links
  blog/[slug]/opengraph-image.tsx → per-post OG image (brand green, serif title)
  feed.xml/route.ts         → RSS 2.0 feed built from the post registry (force-static)
  blog/posts/shared.tsx     → BlogPost type + shared article typography (P, H2, Finding, Sources…)
  blog/posts/index.ts       → post registry; add new posts here AND they appear in sitemap
  blog/posts/*.tsx          → one file per post (metadata + Content component, plain TSX, no MDX)
  privacy-policy/page.tsx   → Privacy policy (uses LegalLayout)
  terms-of-service/page.tsx → Terms of service (uses LegalLayout)

components/
  Nav.tsx                   → Fixed top nav — logo + App Store CTA, mobile hamburger
  Footer.tsx
  StickyCTA.tsx             → Mobile-only sticky download bar after hero scroll
  LegalLayout.tsx           → Shared wrapper for legal pages + LegalSection export
  sections/                 → Landing sections, rendered in this order:
    Hero.tsx                →   hand-built mockup of the app's real Cockpit screen
    HowItWorks.tsx          →   step 3 is "think along", never "respond to prompts"
    WhyDualTask.tsx         →   comparison table vs walking / brain games
    TheScience.tsx          →   28+ RCTs / EGM 2025 stats (citations verified 2026)
    WhoItsFor.tsx
    Pricing.tsx             →   free vs premium; see Hard Rules below
    FAQ.tsx
    CallToAction.tsx

public/
  llms.txt / ai.txt         → AI-crawler descriptions; keep claims in sync with the site
  app-icon.png
  app-screenshot.png        → currently unused (old empty-state screenshot; hero is hand-built now)

privacy-policy.html         → LEGACY root copies from the GitHub Pages era; until that
terms-of-service.html       → deployment is confirmed dead, mirror any legal change into them
```

---

## Brand Colors (in `tailwind.config.ts` — use Tailwind classes, not raw hex, in new code)

```
brand:         #166534   (primary green)
brand-dark:    #14532d   brand-light: #dcfce7   brand-muted: #f0fdf4
cockpit:       #07101E   (app Cockpit bg — phone mockup only)
cockpit-muted: #8FA8C8   (app Cockpit muted text)
sage:          #3D6B35   (app primary green — mockup controls)
```

---

## Voice & Copy Rules

**Before writing or editing ANY user-facing copy, read `design/voice.md` and follow it.** It is duplicated from the app repo so the website and the app speak with one voice; if either copy changes, update both.

The short version (the file is canonical): calm, kind, explanatory narrator. Complete sentences, never fragments, even in headlines. No em dashes in narrative copy. No jargon, no hype, dignified beats cheery. Never placeholder text.

## Hard Rules

- `npm run build` must pass before any task is marked done.
- **Pricing.tsx is truth-constrained** (see the comment block at the top of that file):
  the monthly check-in, Progress, history, and weekly goal are FREE in the app; there is
  NO free trial; "personalized difficulty", "session analytics", and "offline mode" are
  not app features. Prices ($9.99/mo, $79.99/yr) must match `StrideMind.storekit` in the
  app repo; if App Store pricing changes, change them here in the same breath.
- The app's sessions are **"strides", never "protocols"** — in copy, FAQ, and JSON-LD schemas.
- The app is **iPhone-only** (no iPad build, no Android yet). Never claim otherwise.
- Never add testimonials, reviews, ratings, or "most popular" style social proof until they
  come from real, verifiable users. Fabricated testimonial/social-proof components were
  deleted twice (2026-04 from the page, 2026-06 the files); do not recreate them.
- Science claims: the falls claim is "leading cause of unintentional injury among older
  adults" (or "leading cause of injury death in adults 65+" where already cited on
  /science). Trial counts are "28+ randomized controlled trials" per the EGM 2025
  meta-analysis. Do not strengthen any claim.
- Legal pages: any content change updates the `lastUpdated` prop AND the legacy root
  `.html` copies. The privacy policy must reflect the app's real data flows: Supabase
  account/usage data, cognitive check-in results, session motion (pedometer) data,
  RevenueCat subscription status. These are App Store compliance documents.
- The live App Store URL is `https://apps.apple.com/app/id6761288997`. Every download
  link on the site uses it: Nav, Hero, StickyCTA, Pricing, CallToAction, the /science
  CTA, llms.txt, ai.txt, and the JSON-LD in `app/layout.tsx`. New download links must
  use this exact URL, never a vanity slug like `/app/stridemind` (that form 404s).
- Hero phone mockup mirrors the app's real Cockpit screen — keep it truthful if the
  Cockpit changes, and never swap in raw screenshots of empty accounts.
- Blog posts: every research claim must restate the verified citations recorded in
  /science (never from memory). The 2022 review's primary finding is balance
  improvement (23/30 studies, 76.6%); falls reduction is the downstream consequence.
  NEVER quote the 17.8% falls figure as an effect size — it is a vote count of 5/30
  studies. Posts end with a visible Sources list. New posts register in
  app/blog/posts/index.ts (that feeds the sitemap) and follow design/voice.md.
- When making a non-obvious decision, add a brief `//` comment explaining WHY.
