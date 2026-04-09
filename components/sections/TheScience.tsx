'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface StatConfig {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

const STATS: StatConfig[] = [
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
    label: 'Years — the age group that benefits most',
  },
];

function AnimatedStat({ value, suffix, prefix = '', decimals = 0, label }: StatConfig) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease out cubic
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
      className="text-center p-8 bg-brand-muted rounded-2xl border border-brand-light"
    >
      <p className="text-5xl font-extrabold text-brand mb-3">
        {prefix}{count.toFixed(decimals)}{suffix}
      </p>
      <p className="text-gray-700 text-lg leading-snug">{label}</p>
    </motion.div>
  );
}

export default function TheScience() {
  return (
    <section id="science" className="bg-white py-24 px-6">
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
            <span className="text-brand">Evidence-backed training.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Cognitive-motor interference is what happens when your brain manages physical
            movement and mental tasks simultaneously. Research shows that training this
            dual-task ability strengthens the neural pathways responsible for balance,
            attention, and fall prevention.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {STATS.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-gray-50 rounded-2xl p-8 border-l-4 border-brand"
        >
          <p className="text-gray-700 text-xl leading-relaxed mb-4">
            &ldquo;A 2022 review of 30 randomized controlled trials found that 76.6% of
            participants in dual-task training showed improved balance and cognitive
            performance.&rdquo;
          </p>
          <p className="text-sm text-gray-500 italic">
            Int. J. Environ. Res. Public Health, 2022, 19, 16890
          </p>
        </motion.div>
      </div>
    </section>
  );
}
