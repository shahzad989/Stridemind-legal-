import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StrideMind — Cognitive Training for Active Aging',
  description:
    'Audio-guided dual-task walking exercises clinically backed to improve balance, cognition, and reduce fall risk in adults 55+.',
  metadataBase: new URL('https://stridemind.app'),
  openGraph: {
    title: 'StrideMind — Walk Sharper. Think Faster. Age Better.',
    description:
      'Cognitive dual-task training designed for adults 55+. Backed by 30+ clinical studies.',
    url: 'https://stridemind.app',
    siteName: 'StrideMind',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
