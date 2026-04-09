'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const FREE_FEATURES = [
  { text: 'A couple of cognitive walk protocols', included: true },
  { text: 'Basic progress tracking', included: true },
  { text: 'Streak counter', included: true },
  { text: 'All 20+ premium protocols', included: false },
  { text: 'Personalized difficulty', included: false },
  { text: 'Detailed session analytics', included: false },
  { text: 'Offline mode (coming soon)', included: false },
];

const PREMIUM_FEATURES = [
  { text: 'All 20+ cognitive walk protocols', included: true },
  { text: 'Full progress tracking & history', included: true },
  { text: 'Streak counter & weekly goals', included: true },
  { text: 'Personalized difficulty levels', included: true },
  { text: 'Detailed session analytics', included: true },
  { text: 'New protocols added monthly', included: true },
  { text: 'Offline mode (coming soon)', included: true },
];

const AppleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">
            Start free, upgrade anytime
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No credit card required to download. No tricks. Just choose what works for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col"
          >
            <div className="mb-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Free</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold text-gray-900">$0</span>
              </div>
              <p className="text-gray-500 mt-1 text-sm">Forever free, no expiry</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {FREE_FEATURES.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  {f.included ? (
                    <Check size={18} className="text-brand flex-shrink-0 mt-0.5" />
                  ) : (
                    <X size={18} className="text-gray-300 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-base ${f.included ? 'text-gray-700' : 'text-gray-400'}`}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors text-base"
            >
              <AppleIcon />
              Download Free
            </a>
          </motion.div>

          {/* Premium */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="bg-brand rounded-2xl p-8 border border-brand flex flex-col relative overflow-hidden shadow-xl"
          >
            {/* Glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            />

            <div className="relative mb-6">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-bold text-green-200 uppercase tracking-widest">Premium</p>
                <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold text-white">$4.99</span>
                <span className="text-green-200 mb-2">/month</span>
              </div>
              <p className="text-green-200 mt-1 text-sm">or $34.99/year — save 42%</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1 relative">
              {PREMIUM_FEATURES.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <Check size={18} className="text-green-300 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-green-50">{f.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white text-brand font-bold hover:bg-green-50 transition-colors text-base shadow-lg"
            >
              <AppleIcon />
              Start Free Trial
            </a>
            <p className="text-center text-green-200 text-xs mt-3">7-day free trial · Cancel anytime</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
