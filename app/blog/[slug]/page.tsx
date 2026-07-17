import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, sortedPosts, POSTS } from '../posts';
import { formatPostDate } from '../posts/shared';

// Next 15+ delivers params as a Promise; both consumers below await it.
interface Props {
  params: Promise<{ slug: string }>;
}

// All posts are known at build time; anything else is a real 404 rather
// than an on-demand render attempt.
export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Stridemind`,
    description: post.description,
    alternates: {
      canonical: `https://stridemind.app/blog/${post.slug}`,
      types: { 'application/rss+xml': 'https://stridemind.app/feed.xml' },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://stridemind.app/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ['Ibrahim Shahzad'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = sortedPosts().filter((p) => p.slug !== post.slug);

  // Named Person authorship, adopted at the owner's say-so on 2026-07-13
  // (it was an anonymous Organization at launch). A real human author is a
  // stronger authorship signal for search and answer engines than an org.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://stridemind.app/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Person',
      // Same @id as the Person node on /about, so consumers can merge the
      // byline with the fuller author page.
      '@id': 'https://stridemind.app/about#founder',
      name: 'Ibrahim Shahzad',
      url: 'https://stridemind.app/about',
      jobTitle: 'Founder, Stridemind',
    },
    publisher: { '@id': 'https://stridemind.app/#organization' },
    image: 'https://stridemind.app/app-icon.png',
    url: `https://stridemind.app/blog/${post.slug}`,
    mainEntityOfPage: `https://stridemind.app/blog/${post.slug}`,
    isPartOf: { '@id': 'https://stridemind.app/blog#blog' },
  };

  // Breadcrumbs give search results the Home > Blog > Article trail and give
  // answer engines an explicit statement of where the article sits.
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stridemind.app' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://stridemind.app/blog' },
      { '@type': 'ListItem', position: 3, name: post.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="pt-24">
        {/* Article header */}
        <header className="bg-white pt-14 pb-10 px-6">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All articles
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              {formatPostDate(post.datePublished)} · {post.readingMinutes} minute read · By
              Ibrahim Shahzad, maker of Stridemind
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-gray-900 leading-tight">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Article body */}
        <article className="bg-white pb-16 px-6">
          <div className="max-w-2xl mx-auto">
            <post.Content />
          </div>
        </article>

        {/* CTA */}
        <section className="bg-brand-muted py-16 px-6 border-t border-brand-light">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-3xl text-gray-900 mb-4">
              Try dual-task training on your next walk
            </h2>
            <p className="text-gray-600 mb-7 leading-relaxed">
              Stridemind turns the research in this article into guided audio sessions for your
              iPhone. It is free to start, with no equipment needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/app/id6761288997"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
              <Link
                href="/science"
                className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                Read the science
              </Link>
            </div>
          </div>
        </section>

        {/* More from the blog */}
        {otherPosts.length > 0 && (
          <section className="bg-white py-14 px-6 border-t border-gray-100">
            <div className="max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
                More from the blog
              </p>
              <ul className="space-y-5">
                {otherPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group block">
                      <p className="font-display text-xl text-gray-900 group-hover:text-brand transition-colors leading-snug">
                        {p.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatPostDate(p.datePublished)} · {p.readingMinutes} minute read
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
