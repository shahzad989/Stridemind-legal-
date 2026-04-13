'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface StatConfig {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
}

const FALL_STATS: StatConfig[] = [
  {
    value: 1,
    suffix: ' in 4',
    label: 'Older adults fall every year',
    sublabel: 'Source: CDC, 2023',
  },
  {
    value: 1,
    suffix: '',
    prefix: '#',
    label: 'Leading cause of injury death in adults 65+',
    sublabel: 'Source: CDC, 2023',
  },
  {
    value: 50,
    suffix: 'B+',
    prefix: '$',
    label: 'Annual medical cost of falls in the US',
    sublabel: 'Source: CDC, 2022',
  },
];

function FallStat({ value, suffix, prefix = '', decimals = 0, label, sublabel }: StatConfig) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * value).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [inView, value, decimals]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col"
    >
      <p className="text-5xl font-extrabold text-white mb-3">
        {prefix}{count.toFixed(decimals)}{suffix}
      </p>
      <p className="text-red-100 text-lg leading-snug flex-1">{label}</p>
      {sublabel && <p className="text-xs text-red-200/60 mt-3 italic">{sublabel}</p>}
    </motion.div>
  );
}

export default function TheScience() {
  return (
    <section id="science">

      {/* The Problem — dark, urgent */}
      <div className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-red-900/50 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-red-800/50">
              The Problem
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Falls are the{' '}
              <span className="text-red-400">leading cause of injury death</span>{' '}
              in older adults.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              They&apos;re not just accidents. They&apos;re the predictable result of undertrained
              brain-body coordination — and they&apos;re largely preventable.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {FALL_STATS.map((stat) => (
              <FallStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Evidence teaser — bridge to /science */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              The Solution
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              Not just a wellness app.{' '}
              <span className="text-brand">Evidence-backed fall prevention.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Dual-task walking training — performing a cognitive challenge while walking — is one
              of the most studied interventions in geriatric medicine. The results are consistent
              across decades of research.
            </p>
          </motion.div>

          {/* Two headline stats */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { value: '28+', label: 'Randomized controlled trials', sub: 'European Geriatric Medicine, 2025' },
              { value: '76.6%', label: 'Of participants improved balance and cognition', sub: 'IJERPH, 2022' },
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="text-center p-8 bg-brand-muted rounded-2xl border border-brand-light"
              >
                <p className="text-5xl font-extrabold text-brand mb-2">{stat.value}</p>
                <p className="text-gray-700 text-lg leading-snug">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-2 italic">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Single citation teaser */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-gray-50 rounded-2xl p-7 border-l-4 border-brand mb-10"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              &ldquo;Dual-task training — combining physical movement with simultaneous cognitive
              challenge — consistently outperforms exercise-only interventions for fall prevention
              in older adults.&rdquo;
            </p>
            <p className="text-sm text-gray-400 italic">Cochrane Database of Systematic Reviews, 2019</p>
          </motion.div>

          {/* CTA to /science */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-center"
          >
            <Link
              href="/science"
              className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-brand-dark transition-colors"
            >
              Read the full research
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
