import type { Metadata, Viewport } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import MotionProvider from '@/components/MotionProvider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

// GA4 measurement ID (property created 2026-08-22). Loaded via next/script
// instead of a raw <script> tag in <head> (Google's default snippet) because
// Next.js's Script component defers/optimizes third-party scripts and is
// already the pattern used here for Vercel Analytics/Speed Insights.
const GA_MEASUREMENT_ID = 'G-620ZLVL5P2';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

// Brand green browser chrome on mobile instead of default gray.
export const viewport: Viewport = {
  themeColor: '#166534',
};

export const metadata: Metadata = {
  title: 'Stridemind: Fall Prevention — Train Your Brain While Walking',
  // Kept under 160 characters so search and answer engines show it untruncated.
  description:
    'Audio-guided dual-task walking for adults 55 and over, built on clinical research linking dual-task training to better balance and lower fall risk.',
  metadataBase: new URL('https://stridemind.app'),
  // Child pages that set alternates.canonical replace this whole object
  // (Next merges metadata shallowly), so the blog pages redeclare the feed
  // alongside their canonicals.
  alternates: {
    types: { 'application/rss+xml': 'https://stridemind.app/feed.xml' },
  },
  // No explicit image URLs here: a hardcoded /og-image.png used to 404 (the
  // file never existed). app/opengraph-image.tsx generates the real og:image,
  // and X/Twitter falls back to og:image when twitter:image is absent.
  openGraph: {
    title: 'Stridemind: Fall Prevention — Train Your Brain While Walking',
    description:
      'Cognitive dual-task training designed for adults 55+. Backed by a 44-study meta-analysis.',
    url: 'https://stridemind.app',
    siteName: 'Stridemind: Fall Prevention',
    type: 'website',
  },
  // Card type only, no title/description: child pages inherit the layout's
  // twitter object wholesale (Next merges metadata shallowly), and X prefers
  // twitter:title over og:title, so a hardcoded homepage title here used to
  // stamp itself onto every blog post and /science share. With only the card
  // type set, X falls back to each page's own og:title/description/image.
  twitter: {
    card: 'summary_large_image',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://stridemind.app/#website',
      url: 'https://stridemind.app',
      name: 'Stridemind: Fall Prevention',
      description:
        'Audio-guided dual-task walking training to reduce fall risk and improve cognition in adults 55+.',
      publisher: { '@id': 'https://stridemind.app/#organization' },
      // No SearchAction here on purpose: the site has no search, and schema
      // pointing at a nonexistent search endpoint is a structured-data error.
    },
    {
      '@type': 'Organization',
      '@id': 'https://stridemind.app/#organization',
      // The organization is "Stridemind" the maker; the ": Fall Prevention"
      // suffix is the App Store listing title and belongs on the app node only.
      name: 'Stridemind',
      url: 'https://stridemind.app',
      // Full Person node lives on /about; the @id ties them together.
      founder: {
        '@type': 'Person',
        '@id': 'https://stridemind.app/about#founder',
        name: 'Ibrahim Shahzad',
      },
      logo: {
        '@type': 'ImageObject',
        url: 'https://stridemind.app/app-icon.png',
      },
      sameAs: ['https://apps.apple.com/app/id6761288997'],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'appstridemind@gmail.com',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'MobileApplication',
      '@id': 'https://stridemind.app/#app',
      name: 'Stridemind: Fall Prevention',
      operatingSystem: 'iOS',
      applicationCategory: 'HealthApplication',
      author: { '@id': 'https://stridemind.app/#organization' },
      installUrl: 'https://apps.apple.com/app/id6761288997',
      description:
        'Stridemind uses dual-task walking training, combining audio-guided cognitive exercises with physical movement, to support balance and cognition in adults 55+. Backed by a 2025 meta-analysis of 44 studies with 2,782 participants.',
      // The download itself is free (freemium with a premium subscription), so
      // a price-0 offer leads; the paid offers mirror StrideMind.storekit and
      // Pricing.tsx and must change in the same breath as App Store pricing.
      offers: [
        {
          '@type': 'Offer',
          name: 'Free download',
          price: '0',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          name: 'Premium Monthly',
          price: '9.99',
          priceCurrency: 'USD',
          billingIncrement: 'P1M',
        },
        {
          '@type': 'Offer',
          name: 'Premium Annual',
          price: '79.99',
          priceCurrency: 'USD',
          billingIncrement: 'P1Y',
        },
      ],
      // No aggregateRating on purpose: the site's hard rule bans social proof
      // that is not visible and verifiable on the page, and Google treats
      // schema ratings with no on-page evidence as structured-data spam. If
      // real App Store ratings are ever surfaced on the page itself, the
      // rating can return alongside that visible block.
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="qjXQUwFUkucJ9hPibIva1I1vghLWQouBRtNmFJepr2E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${dmSerif.variable} font-sans bg-white text-gray-900 antialiased`}>
        {/* Keyboard users get a way past the fixed nav on every page; the
            link is invisible until focused. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-brand focus:font-semibold focus:px-4 focus:py-3 focus:rounded-xl focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Nav />
        <MotionProvider>
          <main id="main-content">{children}</main>
        </MotionProvider>
        <Footer />
        <StickyCTA />
        <Analytics debug={process.env.NODE_ENV !== 'production'} />
        <SpeedInsights />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        {/* Google's "Preferred Sources" widget (2026-08 feature). As of
            2026-08-22 stridemind.app returns "No results" in
            google.com/preferences/source, so this button won't do anything
            for readers yet. Shipped anyway: it's inert until Google surfaces
            the domain there, which today's sitemap resubmission and indexing
            requests are aimed at, and there's no cost to having it ready. */}
        <Script
          async
          src="https://news.google.com/swg/js/v1/publisher.js"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
