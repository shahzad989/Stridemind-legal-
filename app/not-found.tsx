import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found — Stridemind',
  description: 'That page could not be found. Find your way back to the Stridemind homepage, blog, or science page.',
  // A 404 should never enter the index.
  robots: { index: false, follow: false },
};

// Branded 404: before this file existed, a dead link landed on Next's bare
// default screen with no way back. Copy follows design/voice.md: complete
// sentences, calm, no blame on the visitor.
export default function NotFound() {
  return (
    <div className="pt-24 min-h-[70vh] flex items-center bg-white px-6">
      <div className="max-w-xl mx-auto text-center py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Error 404
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
          We could not find that page.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-10">
          The link may be out of date, or the address may have a small typo in it. Nothing is
          lost. The pages below will take you where you need to go.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-brand text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-brand-dark transition-colors"
          >
            Go to the homepage
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-7 py-3 rounded-xl text-sm font-semibold hover:border-gray-400 transition-colors"
          >
            Read the blog
          </Link>
          <Link
            href="/science"
            className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-7 py-3 rounded-xl text-sm font-semibold hover:border-gray-400 transition-colors"
          >
            See the science
          </Link>
        </div>
      </div>
    </div>
  );
}
