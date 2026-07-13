import type { Metadata } from 'next';
import Link from 'next/link';
import { sortedPosts } from './posts';
import { formatPostDate } from './posts/shared';

export const metadata: Metadata = {
  title: 'Blog — Stridemind: Fall Prevention',
  description:
    'Plain-language articles on dual-task training, walking, balance, and staying sharp after 55, grounded in peer-reviewed research.',
  alternates: {
    canonical: 'https://stridemind.app/blog',
    types: { 'application/rss+xml': 'https://stridemind.app/feed.xml' },
  },
  openGraph: {
    title: 'The Stridemind Blog',
    description:
      'Plain-language articles on dual-task training, walking, balance, and staying sharp after 55.',
    url: 'https://stridemind.app/blog',
  },
};

export default function BlogIndexPage() {
  const posts = sortedPosts();

  // Blog node lists every post so crawlers can discover the archive from the
  // index page's structured data alone; each post page carries its own full
  // BlogPosting node with the same @id, and consumers merge on that @id.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://stridemind.app/blog#blog',
    name: 'The Stridemind Blog',
    url: 'https://stridemind.app/blog',
    description:
      'Plain-language articles on dual-task training, walking, balance, and staying sharp after 55.',
    publisher: { '@id': 'https://stridemind.app/#organization' },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `https://stridemind.app/blog/${post.slug}#article`,
      headline: post.title,
      url: `https://stridemind.app/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-24">
        {/* Header, matching the /science hero pattern */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              The Stridemind Blog
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              Notes on walking and thinking
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Plain-language articles on dual-task training, balance, and staying sharp after 55.
              Everything here is grounded in the peer-reviewed research you can read on our{' '}
              <Link href="/science" className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors">
                science page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Post list, newest first */}
        <section className="bg-brand-muted py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-2xl border border-brand-light shadow-sm p-8 hover:shadow-md hover:border-brand/30 transition-all"
              >
                <p className="text-sm text-gray-400 mb-3">
                  {formatPostDate(post.datePublished)} · {post.readingMinutes} minute read
                </p>
                <h2 className="font-display text-2xl sm:text-3xl text-gray-900 leading-snug mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{post.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Read the article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
