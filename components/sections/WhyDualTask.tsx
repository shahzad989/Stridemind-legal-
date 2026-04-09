'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const ROWS = [
  { label: 'Cardiovascular benefit',         walking: true,  brainGames: false, stridemind: true },
  { label: 'Trains balance & gait',           walking: false, brainGames: false, stridemind: true },
  { label: 'Clinically shown to reduce fall risk', walking: false, brainGames: false, stridemind: true },
  { label: 'Cognitive training',              walking: false, brainGames: true,  stridemind: true },
  { label: 'Works during real-world movement',walking: true,  brainGames: false, stridemind: true },
  { label: 'No screen time during session',   walking: true,  brainGames: false, stridemind: true },
  { label: 'Trains brain-body coordination',  walking: false, brainGames: false, stridemind: true },
  { label: 'Evidence-backed for fall prevention', walking: null,  brainGames: false, stridemind: true },
];

function Cell({ value }: { value: boolean | null }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-brand/10 flex items-center justify-center">
          <Check size={16} className="text-brand" strokeWidth={2.5} />
        </div>
      </div>
    );
  if (value === null)
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
          <Minus size={14} className="text-gray-400" />
        </div>
      </div>
    );
  return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
        <X size={14} className="text-gray-400" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function WhyDualTask() {
  return (
    <section className="bg-brand-muted py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Why It&apos;s Different
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">
            Walking alone isn&apos;t enough.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Falls happen when you&apos;re distracted — not when you&apos;re focused on walking.
            Training your brain and body together is what changes the outcome.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
        >
          {/* Header row */}
          <div className="grid grid-cols-4 border-b border-gray-100">
            <div className="p-5 col-span-1" />
            <div className="p-5 text-center border-l border-gray-100">
              <p className="text-sm font-semibold text-gray-500">Regular Walking</p>
            </div>
            <div className="p-5 text-center border-l border-gray-100">
              <p className="text-sm font-semibold text-gray-500">Brain Games</p>
              <p className="text-xs text-gray-400">(e.g. Lumosity)</p>
            </div>
            <div className="p-5 text-center border-l border-gray-100 bg-brand-muted">
              <p className="text-sm font-bold text-brand">Stridemind</p>
              <p className="text-xs text-brand/70">Dual-task training</p>
            </div>
          </div>

          {/* Data rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-4 border-b border-gray-50 ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}
            >
              <div className="p-4 pl-5 flex items-center">
                <p className="text-sm text-gray-700 font-medium leading-snug">{row.label}</p>
              </div>
              <div className="p-4 flex items-center border-l border-gray-100">
                <Cell value={row.walking} />
              </div>
              <div className="p-4 flex items-center border-l border-gray-100">
                <Cell value={row.brainGames} />
              </div>
              <div className="p-4 flex items-center border-l border-gray-100 bg-brand-muted/40">
                <Cell value={row.stridemind} />
              </div>
            </div>
          ))}

          {/* Footer note */}
          <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-400 italic">
              ─ indicates limited or mixed evidence. Comparison based on published clinical literature on dual-task walking interventions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
