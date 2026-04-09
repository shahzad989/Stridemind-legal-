const AppleIcon = () => (
  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const WAVEFORM_HEIGHTS = [28, 48, 36, 60, 44, 72, 52, 40, 64, 32, 56, 44, 36, 52, 40];

function PhoneMockup() {
  const circumference = 2 * Math.PI * 34;
  const dashOffset = circumference * 0.25; // 75% filled

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow behind phone */}
      <div
        className="absolute w-72 h-72 rounded-full pointer-events-none"
        style={{ background: '#dcfce7', filter: 'blur(48px)', opacity: 0.7 }}
      />

      {/* Phone outline */}
      <div className="relative w-60 h-[500px] rounded-[2.75rem] border-4 border-brand bg-white shadow-2xl overflow-hidden flex flex-col">
        {/* Status bar */}
        <div className="flex-shrink-0 h-10 bg-brand-muted flex items-center justify-center">
          <div className="w-20 h-5 bg-gray-900 rounded-full" />
        </div>

        {/* Screen content */}
        <div className="flex-1 px-5 py-4 space-y-4 overflow-hidden">

          {/* App label */}
          <div className="text-center">
            <p className="text-xs font-bold text-brand uppercase tracking-widest">StrideMind</p>
          </div>

          {/* Waveform */}
          <div className="bg-brand-muted rounded-2xl p-3">
            <p className="text-[10px] text-gray-400 mb-2 font-medium">NOW PLAYING</p>
            <div className="flex items-end gap-0.5 h-10 justify-center">
              {WAVEFORM_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="w-2 rounded-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i < 9 ? '#166534' : '#dcfce7',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Progress ring */}
          <div className="flex flex-col items-center gap-1">
            <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#dcfce7" strokeWidth="7" />
              <circle
                cx="40" cy="40" r="34"
                fill="none"
                stroke="#166534"
                strokeWidth="7"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
              />
              <text x="40" y="45" textAnchor="middle" fontSize="13" fontWeight="700" fill="#166534">
                75%
              </text>
            </svg>
            <p className="text-[10px] text-gray-400 font-medium">Weekly Goal</p>
          </div>

          {/* Placeholder text lines */}
          <div className="space-y-2">
            <div className="h-2.5 bg-gray-200 rounded-full w-4/5" />
            <div className="h-2.5 bg-gray-100 rounded-full w-3/5" />
            <div className="h-2.5 bg-gray-200 rounded-full w-2/3" />
          </div>

          {/* Start button */}
          <div className="h-10 bg-brand rounded-2xl w-full flex items-center justify-center">
            <div className="w-3 h-3 border-l-4 border-t-4 border-b-4 border-transparent border-l-white ml-1" />
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex-shrink-0 h-6 flex items-center justify-center">
          <div className="w-24 h-1 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Decorative blurred circles */}
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

          {/* Left — text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-light text-brand px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-brand-light">
              <span aria-hidden="true">🧠</span>
              <span>Backed by 30+ clinical studies</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Walk Sharper.<br />
              Think Faster.<br />
              <span style={{ color: '#166534' }}>Age Better.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              StrideMind pairs cognitive challenges with your daily walk — clinically‑backed
              dual‑task training designed for adults 55+.
            </p>

            {/* App Store button */}
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              <AppleIcon />
              <span>
                <span className="block text-xs text-gray-400 leading-none mb-1">Download on the</span>
                <span className="block text-xl font-bold leading-none">App Store</span>
              </span>
            </a>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base text-gray-500">
              {['Free to start', 'No equipment needed', 'iOS app'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="font-bold" style={{ color: '#166534' }}>✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
