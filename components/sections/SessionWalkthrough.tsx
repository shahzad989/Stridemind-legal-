'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    time: '0:00',
    action: 'Choose your protocol',
    detail: 'Open the app, pick a session. "Spell and Breathe" for a calm day, something harder if you\'re ready for a challenge.',
    isAudio: false,
  },
  {
    time: '0:20',
    action: 'Press play — then pocket your phone',
    detail: 'You won\'t touch your screen again. The session is entirely audio. No looking down, no distractions, just the walk.',
    isAudio: false,
  },
  {
    time: '0:45',
    action: 'You hear a warm-up intro',
    detail: '"Welcome to Spell and Breathe. Find a comfortable pace and we\'ll begin in a few steps."',
    isAudio: true,
  },
  {
    time: '2:00',
    action: 'The cognitive challenges begin',
    detail: '"Spell the word BALANCE backwards — take your time, keep walking." Your brain works. Your feet keep moving. That\'s the training.',
    isAudio: true,
  },
  {
    time: '9:00',
    action: 'A cool-down cue, then it ends on its own',
    detail: '"Great work. Slow your pace for the next minute." The session closes quietly. Keep walking as long as you like.',
    isAudio: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function SessionWalkthrough() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-brand/30">
            What a Session Sounds Like
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            No app to stare at.<br />Just listen and walk.
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Here&apos;s exactly what happens during a &ldquo;Spell and Breathe&rdquo; session from start to finish.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-[52px] top-4 bottom-4 w-px bg-gray-700" aria-hidden="true" />

          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <motion.div key={i} variants={item} className="flex gap-6 items-start">
                {/* Time bubble */}
                <div className="flex-shrink-0 w-[52px] flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10 ${
                      step.isAudio
                        ? 'bg-brand text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {step.time}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold text-lg">{step.action}</h3>
                    {step.isAudio && (
                      <span className="text-[10px] font-bold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Audio
                      </span>
                    )}
                  </div>
                  <p className={`leading-relaxed text-base ${step.isAudio ? 'text-gray-300 italic' : 'text-gray-400'}`}>
                    {step.isAudio ? `"${step.detail}"` : step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          Every protocol follows this structure. Different cognitive challenges, same simplicity.
        </motion.p>
      </div>
    </section>
  );
}
