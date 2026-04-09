'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Does it work on Android?',
    a: 'StrideMind is currently iOS only (iPhone and iPad). Android is on our roadmap. Join our email list at appstridemind@gmail.com to be notified when it launches.',
  },
  {
    q: 'Do I need wifi or data during my walk?',
    a: 'Premium subscribers can download protocols for offline use before heading out. Free users need an internet connection to stream audio during their session.',
  },
  {
    q: 'How long are the sessions?',
    a: 'Sessions range from 9 to 20 minutes, designed to fit into a regular walk. You can walk longer — the protocol ends and you keep going. Most users aim for 3–5 sessions per week.',
  },
  {
    q: "I'm not very tech-savvy. Is it hard to use?",
    a: "StrideMind was designed specifically for adults 55+. You press play, put your phone in your pocket, and listen. No screens during your walk. If you can use a podcast app, you can use StrideMind.",
  },
  {
    q: "What's the difference between free and premium?",
    a: 'Free gives you 3 protocols to try — enough to feel the benefit. Premium unlocks all 20+ protocols, personalized difficulty, full history and analytics, and offline access for $4.99/month or $34.99/year.',
  },
  {
    q: 'Is it safe if I have a balance condition or have had a fall?',
    a: 'StrideMind is a wellness app, not a medical device. If you have a diagnosed balance condition or have recently had a fall, please consult your physician or physical therapist before starting. Many users do use it under PT guidance.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Yes — you can cancel anytime through your iPhone Settings → Apple ID → Subscriptions. Your access continues until the end of your billing period.',
  },
];

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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 text-base leading-relaxed pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
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
