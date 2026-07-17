'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const ROWS = [
  { label: 'Cardiovascular benefit',         walking: true,  brainGames: false, stridemind: true },
  { label: 'Trains balance & gait',           walking: false, brainGames: false, stridemind: true },
  { label: 'Built on clinically studied dual-task training', walking: false, brainGames: false, stridemind: true },
  { label: 'Cognitive training',              walking: false, brainGames: true,  stridemind: true },
  { label: 'Works during real-world movement',walking: true,  brainGames: false, stridemind: true },
  { label: 'No screen time during session',   walking: true,  brainGames: false, stridemind: true },
  { label: 'Trains brain-body coordination',  walking: false, brainGames: false, stridemind: true },
  { label: 'Grounded in fall-prevention research', walking: null,  brainGames: false, stridemind: true },
];

// Icons are aria-hidden and each cell carries sr-only text, so a screen
// reader hears "Yes" / "No" / "Limited or mixed evidence" instead of nothing.
function Cell({ value }: { value: boolean | null }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-brand/10 flex items-center justify-center">
          <Check size={16} className="text-brand" strokeWidth={2.5} aria-hidden="true" />
          <span className="sr-only">Yes</span>
        </div>
      </div>
    );
  if (value === null)
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
          <Minus size={14} className="text-gray-400" aria-hidden="true" />
          <span className="sr-only">Limited or mixed evidence</span>
        </div>
      </div>
    );
  return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
        <X size={14} className="text-gray-400" strokeWidth={2.5} aria-hidden="true" />
        <span className="sr-only">No</span>
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
            Falls tend to happen when your attention is divided, not when you are focused on
            walking. Stridemind trains your body and mind together on the same walk, real
            cognitive work done with your eyes up and your phone in your pocket. It is something
            neither an ordinary walk nor a screen-based brain game can do on its own.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
        >
          {/* A real table, not a div grid: screen readers can only associate a
              Yes/No cell with "Brain Games" and "Trains balance & gait" when
              the markup declares row and column headers. Visuals are unchanged. */}
          <table className="w-full border-collapse">
            <caption className="sr-only">
              Comparison of regular walking, screen-based brain games, and Stridemind dual-task training
            </caption>
            <thead>
              <tr className="border-b border-gray-100">
                <td className="p-5 w-[34%]" />
                <th scope="col" className="p-5 text-center border-l border-gray-100">
                  <p className="text-sm font-semibold text-gray-500">Regular Walking</p>
                </th>
                <th scope="col" className="p-5 text-center border-l border-gray-100">
                  <p className="text-sm font-semibold text-gray-500">Brain Games</p>
                  <p className="text-xs text-gray-500 font-normal">(e.g. Lumosity)</p>
                </th>
                <th scope="col" className="p-5 text-center border-l border-gray-100 bg-brand-muted">
                  <p className="text-sm font-bold text-brand">Stridemind</p>
                  <p className="text-xs text-brand/70 font-normal">Dual-task training</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-gray-50 ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}
                >
                  <th scope="row" className="p-4 pl-5 text-left font-medium">
                    <p className="text-sm text-gray-700 leading-snug">{row.label}</p>
                  </th>
                  <td className="p-4 border-l border-gray-100">
                    <Cell value={row.walking} />
                  </td>
                  <td className="p-4 border-l border-gray-100">
                    <Cell value={row.brainGames} />
                  </td>
                  <td className="p-4 border-l border-gray-100 bg-brand-muted/40">
                    <Cell value={row.stridemind} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer note */}
          <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-sm text-gray-500 italic">
              ─ indicates limited or mixed evidence. Comparison based on published clinical literature on dual-task walking interventions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
