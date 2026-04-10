import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Stridemind: Fall Prevention — Train Your Brain While Walking',
  description:
    'Audio-guided dual-task walking exercises clinically backed to improve balance, cognition, and reduce fall risk in adults 55+.',
  metadataBase: new URL('https://stridemind.app'),
  openGraph: {
    title: 'Stridemind: Fall Prevention — Train Your Brain While Walking',
    description:
      'Cognitive dual-task training designed for adults 55+. Backed by 30+ clinical studies.',
    url: 'https://stridemind.app',
    siteName: 'Stridemind: Fall Prevention',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stridemind: Fall Prevention — Train Your Brain While Walking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stridemind: Fall Prevention — Train Your Brain While Walking',
    description: 'Cognitive dual-task training designed for adults 55+. Backed by 30+ clinical studies.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://stridemind.app/#organization',
      name: 'Stridemind: Fall Prevention',
      url: 'https://stridemind.app',
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
      description:
        'Audio-guided dual-task walking exercises clinically backed to improve balance, cognition, and reduce fall risk in adults 55+.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '3',
      },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${dmSerif.variable} font-sans bg-white text-gray-900 antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  );
}
