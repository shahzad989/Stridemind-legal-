import { ImageResponse } from 'next/og';
import { getPost } from '../posts';
import { formatPostDate } from '../posts/shared';

export const alt = 'Stridemind blog article';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Visual language mirrors the site-wide app/opengraph-image.tsx (brand green,
// soft circles, serif headline, bottom brand row) so shares from any page of
// the site look like one family.
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  // dynamicParams=false on the page means this should never miss, but a
  // fallback beats a broken share image if that ever changes.
  const title = post?.title ?? 'The Stridemind Blog';
  const meta = post
    ? `${formatPostDate(post.datePublished)} · ${post.readingMinutes} minute read`
    : 'Plain-language articles on dual-task training';

  // Long titles drop a size step so they stay inside the frame.
  const fontSize = title.length > 60 ? 54 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#166534',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-start',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 50,
            padding: '8px 24px',
            marginBottom: 36,
          }}
        >
          <span style={{ color: '#dcfce7', fontSize: 18, fontFamily: 'sans-serif' }}>
            The Stridemind Blog
          </span>
        </div>

        <div
          style={{
            fontSize,
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.15,
            marginBottom: 28,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 24,
            color: '#bbf7d0',
            fontFamily: 'sans-serif',
          }}
        >
          {meta}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 48,
            left: 80,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{ color: '#86efac', fontSize: 24, fontWeight: 700, fontFamily: 'sans-serif' }}>
            Stridemind
          </span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 24 }}>•</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 20, fontFamily: 'sans-serif' }}>
            stridemind.app/blog
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
