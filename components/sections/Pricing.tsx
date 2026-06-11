'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Every claim here is constrained by what the app actually ships:
// - The monthly check-in, Progress screen, history, and weekly goal are FREE
//   (deliberate product decision; the paywall never gates measurement).
// - There is NO free trial (the app's paywall says "Subscribe Now" on purpose).
// - "Personalized difficulty", "session analytics", and "offline mode" are not
//   app features and were removed; do not reintroduce features the app lacks.
// - Prices match StrideMind.storekit in the app repo ($9.99/mo, $79.99/yr).
//   If App Store pricing changes, this file must change with it.
// - The app calls sessions "strides", never "protocols".

const FREE_FEATURES = [
  { text: 'A set of strides to train with', included: true },
  { text: 'The monthly check-in and your whole Progress screen', included: true },
  { text: 'Weekly goal, streaks, and session history', included: true },
  { text: 'The full stride library', included: false },
  { text: 'New programs added every month', included: false },
];

const PREMIUM_FEATURES = [
  { text: 'Everything in Free', included: true },
  { text: 'The full stride library, across every intensity', included: true },
  { text: 'New programs added every month, so the training never repeats itself', included: true },
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
            Start free, and upgrade whenever you like.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The app is free to download, with no credit card needed. You can train, check in,
            and watch your progress without paying anything.
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
              <p className="text-gray-500 mt-1 text-sm">Free for as long as you like</p>
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
              <p className="text-xs font-bold text-green-200 uppercase tracking-widest mb-2">Premium</p>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold text-white">$9.99</span>
                <span className="text-green-200 mb-2">/month</span>
              </div>
              <p className="text-green-200 mt-1 text-sm">or $79.99 per year, which saves 33%</p>
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
              Download on the App Store
            </a>
            <p className="text-center text-green-200 text-xs mt-3">
              Billed through your Apple ID. Cancel anytime in your settings.
            </p>
          </motion.div>
        </div>

        {/* The no-trial framing is honest and deliberate: there is no trial to forget about. */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="text-center text-gray-500 text-base mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          There is no free trial and nothing to remember to cancel. You train with the free
          strides for as long as you like, and you subscribe only if you want more.
        </motion.p>
      </div>
    </section>
  );
}
