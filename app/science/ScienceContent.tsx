'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// --- Animated counter ---

interface StatConfig {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sub: string;
}

const HEADLINE_STATS: StatConfig[] = [
  { value: 28, suffix: '+', label: 'Randomized controlled trials', sub: 'European Geriatric Medicine, 2025' },
  { value: 2782, suffix: '', label: 'Participants across studies', sub: 'Meta-analysis, 2025' },
  { value: 76.6, suffix: '%', decimals: 1, label: 'Improved balance and cognition', sub: 'IJERPH, 2022' },
];

function AnimatedStat({ value, suffix, prefix = '', decimals = 0, label, sub }: StatConfig) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
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
      className="text-center p-8 bg-white rounded-2xl border border-brand-light shadow-sm"
    >
      <p className="text-5xl font-extrabold text-brand mb-2">
        {prefix}{count.toFixed(decimals)}{suffix}
      </p>
      <p className="text-gray-700 font-medium leading-snug">{label}</p>
      <p className="text-xs text-gray-400 mt-2 italic">{sub}</p>
    </motion.div>
  );
}

// --- Stagger variants ---

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// --- Citation data ---

const CITATIONS = [
  {
    quote:
      'A 2022 review of 30 randomized controlled trials found that 76.6% of participants in dual-task training showed improved balance and cognitive performance simultaneously.',
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
  {
    quote:
      'A 2025 meta-analysis of 28+ randomized controlled trials covering 2,782 participants confirmed that dual-task walking interventions produce statistically significant reductions in fall incidence and dual-task cost in adults aged 55 and older.',
    source: 'European Geriatric Medicine, 2025',
  },
];

// --- Mechanism cards ---

const MECHANISM = [
  {
    label: 'What it is',
    body: 'Dual-task training means performing a cognitive exercise — number recall, pattern recognition, memory sequences — simultaneously with walking. It is targeted training of the specific brain-body coordination system that deteriorates with age and causes falls.',
  },
  {
    label: 'Why it works',
    body: 'Repeated dual-task practice builds the neural pathways responsible for divided attention, gait automaticity, and executive function under load. Over 6–8 weeks, the brain learns to allocate attentional resources more efficiently — reducing the gait disruption that leads to falls in real-world environments.',
  },
  {
    label: 'Why exercise alone is not enough',
    body: 'Standard exercise programs improve strength and balance in controlled settings but do not train the cognitive dimension of fall risk. Cochrane reviews consistently show dual-task training outperforms exercise-only interventions for fall prevention precisely because it addresses both components simultaneously.',
  },
];

// --- How StrideMind applies it ---

const APP_FEATURES = [
  { label: 'Audio-first', detail: 'No screen interaction during sessions — eyes up, phone in pocket' },
  { label: 'Structured protocols', detail: 'Each session targets a specific cognitive-motor demand' },
  { label: 'Progressive difficulty', detail: 'Premium tracks increase dual-task load as you improve' },
  { label: 'Designed for 55+', detail: 'Pacing, voice clarity, and session length built for the target population' },
];

// --- Main component ---

export default function ScienceContent() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Peer-Reviewed Evidence
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              The science behind StrideMind
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              StrideMind is built on one of the most replicated findings in geriatric medicine:
              dual-task walking training reduces fall risk and improves cognition in adults 55+.
              Here is the evidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated stats */}
      <section className="bg-brand-muted py-16 px-6 border-b border-brand-light">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
          {HEADLINE_STATS.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block bg-red-900/50 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mb-5 border border-red-800/50">
              The Problem
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Falls are the leading cause of injury death in adults 65+.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              1 in 4 older adults falls every year. The annual medical cost in the US exceeds $50 billion.
              They are not accidents — they are the predictable result of undertrained brain-body coordination.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-7"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              The root cause is{' '}
              <strong className="text-white">cognitive-motor interference</strong> — when your brain
              struggles to simultaneously manage physical movement and mental tasks, gait becomes unstable.
              This &ldquo;stops walking when talking&rdquo; effect is a measurable, well-documented predictor
              of fall risk in older adults.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              The Mechanism
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 leading-tight">
              What dual-task training actually does
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {MECHANISM.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-brand-muted rounded-2xl p-7 border border-brand-light"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Citations */}
      <section className="bg-brand-muted py-20 px-6 border-b border-brand-light">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Research Citations
            </span>
            <h2 className="font-display text-4xl text-gray-900 leading-tight">
              What the peer-reviewed literature says
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {CITATIONS.map((c) => (
              <motion.div
                key={c.source}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border-l-4 border-brand shadow-sm"
              >
                <p className="text-gray-700 text-lg leading-relaxed mb-3">&ldquo;{c.quote}&rdquo;</p>
                <p className="text-sm text-gray-400 italic">{c.source}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How StrideMind applies it */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-8"
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              How StrideMind Applies This
            </span>
            <h2 className="font-display text-4xl text-gray-900 mb-5 leading-tight">
              A practical implementation of the clinical evidence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              StrideMind translates the dual-task training protocol into an audio-first iOS app that
              requires no equipment and fits into everyday walks. Sessions are 5–15 minutes.
              Cognitive challenges are delivered through your earphones so you keep your phone in
              your pocket and eyes ahead.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {APP_FEATURES.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-brand-muted rounded-xl p-5 border border-brand-light"
              >
                <p className="font-bold text-gray-900 mb-1">{item.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-muted py-16 px-6 border-b border-brand-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl text-gray-900 mb-4">Ready to try it?</h2>
          <p className="text-gray-600 mb-7">
            Free to start. No equipment. Works on any walk.
          </p>
          <a
            href="https://apps.apple.com/app/stridemind"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </motion.div>
      </section>

      {/* Founder note — honest, unobtrusive */}
      <section className="bg-gray-50 py-14 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">About this project</p>
          <p className="text-gray-500 text-base leading-relaxed">
            StrideMind was built by an independent developer who came across the clinical research
            on dual-task walking and could not find a practical, accessible app that applied it.
            The evidence was clear and replicable across dozens of trials. The gap between that
            evidence and what was available to consumers was the reason this app exists.
            StrideMind is not a medical device. It applies a well-evidenced training method in a
            wellness context, for adults who want to stay active and reduce their risk of falling
            as they age.
          </p>
        </div>
      </section>

    </div>
  );
}
