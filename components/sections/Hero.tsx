'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AppleIcon = () => (
  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none"
        style={{ background: '#dcfce7', filter: 'blur(56px)', opacity: 0.6 }}
      />
      <div
        className="relative w-64 h-[540px] rounded-[2.75rem] overflow-hidden shadow-2xl"
        style={{
          background: '#07101E',
          border: '3px solid #1a2e45',
          boxShadow: '0 32px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-28 h-7 rounded-b-2xl"
          style={{ background: '#07101E' }}
        />
        <div className="absolute inset-0 pt-7">
          <Image
            src="/app-screenshot.png"
            alt="StrideMind app home screen showing daily walk goals and cognitive training"
            fill
            className="object-cover object-top"
            priority
            sizes="256px"
          />
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center z-10">
          <div className="w-24 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
        </div>
      </div>
    </div>
  );
}

function FadeUp({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
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
              <div className="inline-flex items-center gap-2 bg-brand-light text-brand px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-brand-light">
                <span aria-hidden="true">🧠</span>
                <span>Backed by 30+ clinical studies</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-display text-5xl sm:text-6xl text-gray-900 leading-[1.1] tracking-tight mb-6">
                Walk Sharper.<br />
                Think Faster.<br />
                <span style={{ color: '#166534' }}>Age Better.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                StrideMind pairs cognitive challenges with your daily walk — clinically-backed
                dual-task training designed for adults 55+.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
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
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base text-gray-500">
                {['Free to start', 'No equipment needed', 'iOS app'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="font-bold" style={{ color: '#166534' }}>✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
