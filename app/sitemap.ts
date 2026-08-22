import { MetadataRoute } from 'next';
import { POSTS, sortedPosts } from './blog/posts';

// Real content dates, maintained by hand. The old sitemap stamped new Date()
// on every static page at build time, so every deploy told crawlers every
// page had just changed; a signal that is always "today" carries no
// information and erodes trust in the sitemap. Bump the matching constant
// when a page's content meaningfully changes.
const HOME_UPDATED = '2026-07-17'; // monthly check-in section added
const SCIENCE_UPDATED = '2026-08-22'; // citation re-verification pass, four figures corrected
const LEGAL_UPDATED = '2026-06-11'; // privacy policy sensor-data disclosure
const FAMILIES_UPDATED = '2026-08-22'; // Cochrane figure corrected
const ABOUT_UPDATED = '2026-07-17'; // page launched
const SUPPORT_UPDATED = '2026-07-17'; // page launched
const SCREENING_UPDATED = '2026-08-22'; // page launched
const ALTERNATIVES_UPDATED = '2026-08-22'; // page launched
const EVIDENCE_RECORD_UPDATED = '2026-08-22'; // page launched

function utc(date: string): Date {
  return new Date(`${date}T00:00:00Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  // The blog index legitimately changes whenever its newest post does.
  const newestPost = sortedPosts()[0];

  return [
    {
      url: 'https://stridemind.app',
      lastModified: utc(HOME_UPDATED),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://stridemind.app/science',
      lastModified: utc(SCIENCE_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://stridemind.app/for-families',
      lastModified: utc(FAMILIES_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Both of these answer a whole question cluster on one page rather than
    // being split into thin per-question pages, which is the shape that
    // actually gets retrieved.
    {
      url: 'https://stridemind.app/fall-risk-screening',
      lastModified: utc(SCREENING_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://stridemind.app/brain-training-alternatives',
      lastModified: utc(ALTERNATIVES_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://stridemind.app/evidence-record',
      lastModified: utc(EVIDENCE_RECORD_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://stridemind.app/about',
      lastModified: utc(ABOUT_UPDATED),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://stridemind.app/support',
      lastModified: utc(SUPPORT_UPDATED),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://stridemind.app/blog',
      lastModified: utc(newestPost.dateModified),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Post lastModified comes from the post's own dateModified so the
    // sitemap only signals a change when an article actually changes.
    ...POSTS.map((post) => ({
      url: `https://stridemind.app/blog/${post.slug}`,
      lastModified: utc(post.dateModified),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: 'https://stridemind.app/privacy-policy',
      lastModified: utc(LEGAL_UPDATED),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://stridemind.app/terms-of-service',
      lastModified: utc(LEGAL_UPDATED),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
