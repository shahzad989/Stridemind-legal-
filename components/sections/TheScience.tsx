'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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

const RESEARCH_STATS: StatConfig[] = [
  {
    value: 30,
    suffix: '+',
    label: 'Randomized controlled trials reviewed',
  },
  {
    value: 76.6,
    suffix: '%',
    decimals: 1,
    label: 'Of participants improved balance AND cognitive performance',
  },
  {
    value: 55,
    suffix: '+',
    label: 'The age group that benefits most from dual-task training',
  },
];

const CITATIONS = [
  {
    quote:
      'A 2022 review of 30 randomized controlled trials found that 76.6% of participants in dual-task training showed improved balance and cognitive performance.',
    source: 'Int. J. Environ. Res. Public Health, 2022, 19, 16890',
  },
  {
    quote:
      'Dual-task training — combining physical movement with simultaneous cognitive challenge — consistently outperforms exercise-only interventions for fall prevention in older adults.',
    source: 'Cochrane Database of Systematic Reviews, 2019',
  },
  {
    quote:
      'Cognitive-motor dual-task training leads to significant improvements in gait stability, reaction time, and attentional control — all key predictors of fall risk.',
    source: 'Age and Ageing, Oxford Academic, 2021',
  },
];

function AnimatedStat({ value, suffix, prefix = '', decimals = 0, label, sublabel }: StatConfig) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
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
      className="text-center p-8 bg-brand-muted rounded-2xl border border-brand-light flex flex-col"
    >
      <p className="text-5xl font-extrabold text-brand mb-3">
        {prefix}{count.toFixed(decimals)}{suffix}
      </p>
      <p className="text-gray-700 text-lg leading-snug flex-1">{label}</p>
      {sublabel && <p className="text-xs text-gray-400 mt-3 italic">{sublabel}</p>}
    </motion.div>
  );
}

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

      {/* Part 1 — The Problem (dark urgent background) */}
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

      {/* Part 2 — The Science (white) */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              The Science
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              Not just a wellness app.{' '}
              <span className="text-brand">Evidence-backed fall prevention.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-gray-900">Cognitive-motor interference</strong> is what happens when your brain manages
              physical movement and mental tasks at the same time. When you&apos;re distracted,
              your gait becomes unstable — and that&apos;s when falls happen.
            </p>
          </motion.div>

          {/* How it works — two column explainer */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="bg-brand-muted rounded-2xl p-8 border border-brand-light"
            >
              <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">Why it happens</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your brain splits attention between walking and thinking</h3>
              <p className="text-gray-600 leading-relaxed">
                Research shows that older adults significantly slow their walking pace — or stop entirely —
                when asked to think at the same time. This &ldquo;stops walking when talking&rdquo; phenomenon
                is a measurable, well-documented predictor of fall risk.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="bg-brand-muted rounded-2xl p-8 border border-brand-light"
            >
              <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">How training helps</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dual-task training builds the neural pathways that protect you</h3>
              <p className="text-gray-600 leading-relaxed">
                By repeatedly practicing walking while performing cognitive challenges, you train
                the specific brain-body coordination system responsible for balance, reaction time,
                and attentional control under real-world conditions.
              </p>
            </motion.div>
          </div>

          {/* Animated stats */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {RESEARCH_STATS.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>

          {/* Citations */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-6">
              What the research says
            </p>
            {CITATIONS.map((c) => (
              <div key={c.source} className="bg-gray-50 rounded-2xl p-7 border-l-4 border-brand">
                <p className="text-gray-700 text-lg leading-relaxed mb-3">
                  &ldquo;{c.quote}&rdquo;
                </p>
                <p className="text-sm text-gray-400 italic">{c.source}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
