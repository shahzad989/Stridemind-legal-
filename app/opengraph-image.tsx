import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Stridemind — Walk Sharper. Think Faster. Age Better.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#166534',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          padding: '80px',
        }}
      >
        {/* Background decoration */}
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

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 50,
            padding: '8px 24px',
            marginBottom: 40,
          }}
        >
          <span style={{ color: '#dcfce7', fontSize: 18, fontFamily: 'sans-serif' }}>
            🧠 Backed by 30+ clinical studies
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Walk Sharper.{'\n'}Think Faster.{'\n'}
          <span style={{ color: '#86efac' }}>Age Better.</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 28,
            color: '#bbf7d0',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.5,
            fontFamily: 'sans-serif',
          }}
        >
          Audio-guided dual-task training for adults 55+
        </div>

        {/* Bottom brand */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
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
            Free to download on iOS
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
