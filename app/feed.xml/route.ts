import { sortedPosts } from '../blog/posts';

// The feed is fully known at build time; force-static makes Next prerender
// it once instead of running a serverless function per request.
export const dynamic = 'force-static';

// Post titles contain apostrophes and could one day contain & or <, so
// everything interpolated into the XML goes through this.
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const posts = sortedPosts();
  const newest = posts[0];

  const items = posts
    .map((post) => {
      const url = `https://stridemind.app/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${post.datePublished}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <author>appstridemind@gmail.com (Ibrahim Shahzad)</author>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Stridemind Blog</title>
    <link>https://stridemind.app/blog</link>
    <description>Plain-language articles on dual-task training, walking, balance, and staying sharp after 55.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(`${newest.dateModified}T00:00:00Z`).toUTCString()}</lastBuildDate>
    <atom:link href="https://stridemind.app/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
