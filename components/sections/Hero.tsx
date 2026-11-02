// Server component on purpose: the hero owns the LCP element, and the old
// framer-motion version server-rendered everything at opacity 0, hiding the
// headline until the JS bundle hydrated. The entrance animation now lives in
// globals.css (.animate-fade-up), which paints and animates before any JS.
import ListeningRibbon from '@/components/ListeningRibbon';

const AppleIcon = () => (
  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// The mockup is a hand-built copy of the app's real own-audio walk screen
// (app/own-audio.tsx in the app repo): dark background, a ring filling toward
// the next task, the walker's audio as a ribbon, and one quiet button. WHY the
// headline beside it doesn't mention this walk (owner, 2026-11-02): it's a
// feature, not the headline, and the section below the hero explains it. It
// replaced a copy of the stride player, which before that replaced a raw
// screenshot of an empty account that made the app look unused. Keep it
// hand-built, and keep it truthful if the walk screen changes.
function PhoneMockup() {
  const size = 168;
  const stroke = 5;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none"
        style={{ background: '#dcfce7', filter: 'blur(56px)', opacity: 0.6 }}
      />
      <div
        className="relative w-64 h-[540px] rounded-[2.75rem] overflow-hidden shadow-2xl bg-cockpit flex flex-col"
        style={{
          border: '3px solid #1a2e45',
          boxShadow: '0 32px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-28 h-7 rounded-b-2xl bg-black" />

        {/* Header: back, title */}
        <div className="flex items-center justify-between px-4 pt-12">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <p className="text-white text-sm font-semibold">Your Own Audio</p>
          <div className="w-5 h-5" />
        </div>

        {/* Ring filling toward the next task */}
        <div className="relative mx-auto mt-9" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="absolute inset-0" aria-hidden="true">
            <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.10)" strokeWidth={stroke} fill="none" />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              stroke="#8FC27E"
              strokeWidth={stroke}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${c} ${c}`}
              strokeDashoffset={c * 0.72}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white text-4xl font-bold leading-none tabular-nums">2:10</p>
            <p className="text-cockpit-muted text-[11px] mt-2">until the next task</p>
          </div>
        </div>

        <p className="text-white text-[13px] leading-snug text-center mt-7 px-7">
          Your audio is playing. You can put your phone away now.
        </p>

        <div className="mt-6">
          <ListeningRibbon barColor="rgba(143,168,200,0.45)" barsPerRun={7} height={44} />
        </div>
        <p className="text-cockpit-muted text-[11px] text-center mt-2 px-6">
          You have walked 9 minutes and heard 2 tasks.
        </p>

        <div className="mt-auto px-6 mb-8">
          <div className="h-11 rounded-full border border-white/25 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">End the walk</span>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center z-20">
          <div className="w-24 h-1 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}

function FadeUp({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <div className="animate-fade-up" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <div
        className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: '#f0fdf4', filter: 'blur(80px)', opacity: 0.8 }}
      />
      <div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: '#dcfce7', filter: 'blur(60px)', opacity: 0.5 }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeUp delay={0}>
              {/* "44 studies" is verbatim from the verified Khan et al. 2025
                  EGM meta-analysis (44 studies, 2,782 participants) cited on
                  /science; earlier "30+" and "28+" badge counts were wrong. */}
              <div className="inline-flex items-center gap-2 bg-brand-light text-brand px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-brand-light">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Backed by a 44-study meta-analysis</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              {/* A complete sentence, per design/voice.md; the line break keeps
                  hero scale without resorting to fragment copy. */}
              <h1 className="font-display text-5xl sm:text-6xl text-gray-900 leading-[1.1] tracking-tight mb-6">
                Train your body and your mind<br />
                <span style={{ color: '#166534' }}>on the same walk.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              {/* hero-description is a marker class referenced by the speakable
                  schema selector in app/page.tsx; keep them in sync. */}
              <p className="hero-description text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                Put in your earbuds and walk, and Stridemind keeps your mind working the whole
                way. A short monthly check-in shows your progress. Built on peer-reviewed
                dual-task research and made for adults 55 and over.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <a
                href="https://apps.apple.com/app/id6761288997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-colors shadow-lg"
              >
                <AppleIcon />
                <span>
                  <span className="block text-xs text-gray-400 leading-none mb-1">Download on the</span>
                  <span className="block text-xl font-bold leading-none">App Store</span>
                </span>
              </a>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base text-gray-500">
                {['The first strides are free', 'No equipment beyond earbuds', 'Made for iPhone'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#166534" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          <div
            className="hidden lg:flex items-center justify-center animate-fade-in-right"
            style={{ animationDelay: '0.3s' }}
          >
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
