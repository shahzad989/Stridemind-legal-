import { MetadataRoute } from 'next';
import { POSTS } from './blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://stridemind.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://stridemind.app/science',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://stridemind.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Post lastModified comes from the post's own dateModified so the
    // sitemap only signals a change when an article actually changes.
    ...POSTS.map((post) => ({
      url: `https://stridemind.app/blog/${post.slug}`,
      lastModified: new Date(`${post.dateModified}T00:00:00Z`),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: 'https://stridemind.app/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://stridemind.app/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
