'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
// Q&A content lives in faq-data.ts so the server-rendered JSON-LD in
// app/page.tsx can share it; see the comment there before editing questions.
import { FAQS } from './faq-data';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-gray-900">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-gray-400" />
        </motion.div>
      </button>
      {/* The answer stays mounted and collapses via height, instead of the old
          conditional render, so every answer exists in the server HTML. AI
          crawlers and Google's FAQ rich results read the static markup and
          never click, so conditionally rendered answers were invisible to
          them. initial={false} keeps SSR/hydration from animating on load. */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
        aria-hidden={!open}
      >
        <p className="pb-5 text-gray-600 text-base leading-relaxed pr-8">{a}</p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-brand-muted py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 px-8"
        >
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
