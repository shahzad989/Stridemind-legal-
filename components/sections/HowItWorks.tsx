'use client';

import { Headphones, Footprints, Brain } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// Step 3 deliberately describes thinking along, not tapping or answering prompts.
// The app's strides are hands-in-pocket listening sessions; "respond to challenges"
// was the old, inaccurate framing (tapping on tracks was rejected as a product decision).
const STEPS = [
  {
    Icon: Headphones,
    number: '01',
    title: 'Put in your earbuds',
    description:
      'Any earbuds or headphones you already own will do. There is no equipment to buy.',
  },
  {
    Icon: Footprints,
    number: '02',
    title: 'Walk somewhere familiar',
    description:
      'A level path you know well is ideal, indoors or out. You walk at your own comfortable pace, and your phone stays in your pocket.',
  },
  {
    Icon: Brain,
    number: '03',
    title: 'Think along as you walk',
    description:
      'Each stride gives your mind something to do while you move. It might be counting patterns, quick arithmetic, or recalling what you just noticed, all set over calm natural sound.',
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

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-muted py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900">
            Three steps to sharper thinking
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {STEPS.map(({ Icon, number, title, description }) => (
            <motion.div
              key={number}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border border-gray-100 flex flex-col hover:-translate-y-1 transition-all duration-200"
            >
              <div className="mb-5">
                <Icon size={48} color="#166534" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">
                Step {number}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg flex-1">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
