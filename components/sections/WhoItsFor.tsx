'use client';

import { Users, ShieldCheck, Brain } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// The falls claim wording is deliberate and matches the app ("leading cause of
// unintentional injury among older adults", per CDC). Do not strengthen it.
const AUDIENCES = [
  {
    Icon: Users,
    title: 'Adults 55 and over',
    description:
      'Stridemind makes cognitive training a natural part of your daily walk. There is no gym, no screen to watch while you move, and no pressure to perform.',
  },
  {
    Icon: ShieldCheck,
    title: 'Anyone thinking about balance',
    description:
      'Falls are the leading cause of unintentional injury among older adults, and balance is trainable. Practicing thinking while walking is one of the best-studied ways to work on it.',
  },
  {
    Icon: Brain,
    title: 'People who want to keep their mind active',
    description:
      'Stridemind gives your mind real work to do while you walk, the same kind of challenge as a brain game, but out in the world with your eyes up and your phone in your pocket.',
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WhoItsFor() {
  return (
    <section className="bg-brand-muted py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Who It&apos;s For
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900">
            Built for active aging
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {AUDIENCES.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="mb-6">
                <Icon size={48} color="#166534" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
