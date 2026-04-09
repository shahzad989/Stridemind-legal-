'use client';

import { motion } from 'framer-motion';

const ITEMS = [
  { icon: '⭐', text: '5-star rated on App Store' },
  { icon: '🏃', text: '5,000+ active walkers' },
  { icon: '🏆', text: 'Featured in Health & Fitness' },
  { icon: '🧪', text: 'Reviewed by 30+ clinical trials' },
];

export default function SocialProofBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gray-900 py-4 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {ITEMS.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-base" aria-hidden="true">{item.icon}</span>
              <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
