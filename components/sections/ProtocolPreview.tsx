'use client';

import { motion } from 'framer-motion';
import { Play, Clock, Zap } from 'lucide-react';

const PROTOCOLS = [
  {
    title: 'Spell and Breathe',
    intensity: 'Light' as const,
    duration: 10,
    isFree: true,
    description:
      'You\'ll be given words to spell aloud — backwards — while keeping a steady walking pace. Breathing cues are woven in to keep you grounded. Deceptively simple. Clinically effective.',
    challenge: '"Spell the word PRESENT… backwards. P… T… N… keep walking."',
    color: '#d1fae5',
    textColor: '#065f46',
  },
  {
    title: 'Rhyme and Count',
    intensity: 'Moderate' as const,
    duration: 12,
    isFree: false,
    description:
      'You\'ll respond to rhyming word prompts while counting in sequences — both tasks running simultaneously. Trains the attentional switching that protects you when your environment gets unpredictable.',
    challenge: '"Give me a word that rhymes with GROUND… now count back from 40 by 4."',
    color: '#fef3c7',
    textColor: '#92400e',
  },
];

const intensityDots: Record<'Light' | 'Moderate' | 'Intense', number> = {
  Light: 1,
  Moderate: 2,
  Intense: 3,
};

const AppleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export default function ProtocolPreview() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Inside the App
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">
            Real protocols. Real cognitive challenge.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every session is an audio-guided workout for your brain — no screen, no equipment, no gym.
            Just your earbuds and a walk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {PROTOCOLS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden flex flex-col"
            >
              {/* Card header */}
              <div className="p-7 flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.title}</h3>
                    <div className="flex items-center gap-3">
                      {/* Intensity */}
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: p.color, color: p.textColor }}
                      >
                        {Array.from({ length: intensityDots[p.intensity] }).map((_, i) => (
                          <Zap key={i} size={10} fill="currentColor" />
                        ))}
                        {p.intensity}
                      </span>
                      {/* Duration */}
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} />
                        {p.duration} min
                      </span>
                      {/* Free badge */}
                      {p.isFree && (
                        <span className="text-xs font-semibold text-brand bg-brand-light px-2 py-0.5 rounded-full">
                          Free
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                    <Play size={20} color="white" fill="white" />
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-5">{p.description}</p>

                {/* Sample challenge */}
                <div className="bg-gray-900 rounded-xl px-5 py-4">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Sample audio prompt</p>
                  <p className="text-white text-base leading-relaxed italic">{p.challenge}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More in app */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="text-gray-500 mb-6 text-lg">
            More protocols inside the app — new ones added regularly.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            <AppleIcon />
            Download to unlock all protocols
          </a>
        </motion.div>
      </div>
    </section>
  );
}
