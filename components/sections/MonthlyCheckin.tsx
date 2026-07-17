'use client';

import { motion } from 'framer-motion';

// This section exists because the monthly check-in is the app's strongest
// retention feature and the site barely mentioned it (one clause in the
// hero). Facts it leans on are all product truths: the check-in, Progress
// screen, and history are free; the cadence is deliberately monthly (train
// daily, measure monthly); results are delivered in plain language. The
// verdict copy inside the mockup card is quoted VERBATIM from the approved
// examples in design/voice.md, so the site previews real app language
// instead of an invented screenshot.
const POINTS = [
  {
    title: 'Monthly on purpose',
    body: 'You train on your walks day to day, but real change takes weeks. So Stridemind measures once a month and never nags you to test yourself.',
  },
  {
    title: 'Plain language, never a grade',
    body: 'The result tells you what happened and what it means for you, in complete sentences. No raw statistics to decode, and no scores designed to make you anxious.',
  },
  {
    title: 'Free, and it stays free',
    body: 'The check-in, your Progress screen, and your whole history never sit behind the paywall. Measurement is not something you should have to pay to keep.',
  },
];

// Hand-drawn trend line for the mockup: gentle, mostly level, ending slightly
// up. Deliberately NOT a dramatic hockey stick, because the app's own
// philosophy is that holding your ground is a dignified result.
function TrendLine() {
  return (
    <svg viewBox="0 0 280 64" className="w-full h-16" aria-hidden="true">
      <polyline
        points="8,36 62,32 116,38 170,30 224,31 272,24"
        fill="none"
        stroke="#3D6B35"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [8, 36],
        [62, 32],
        [116, 38],
        [170, 30],
        [224, 31],
        [272, 24],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#3D6B35" />
      ))}
    </svg>
  );
}

export default function MonthlyCheckin() {
  return (
    <section id="check-in" className="bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Your Progress
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-5 leading-tight">
              You can watch it working.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Once a month, Stridemind gives you a short check-in. It measures how well your
              thinking holds up while you move, compared with how you do sitting still, and
              explains the result the way a good coach would.
            </p>
            <div className="space-y-6">
              {POINTS.map((point) => (
                <div key={point.title} className="flex gap-4 items-start">
                  <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" stroke="#166534" strokeWidth={3} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Check-in result card mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute w-80 h-80 rounded-full pointer-events-none"
              style={{ background: '#dcfce7', filter: 'blur(56px)', opacity: 0.6 }}
            />
            <div className="relative w-full max-w-md bg-white rounded-3xl border border-gray-200 shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Monthly check-in
                </p>
                <span className="text-xs font-semibold text-brand bg-brand-light px-2.5 py-1 rounded-full">
                  Free
                </span>
              </div>
              {/* Verbatim approved verdict copy from design/voice.md; if the
                  voice guide's examples change, change this with them. */}
              <p className="text-2xl font-bold text-gray-900 leading-snug mb-3">
                Your reactions have stayed consistent.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-7">
                There&rsquo;s been no significant changes since your first check-ins, and for an
                ongoing habit, maintaining it is exactly what you want.
              </p>
              <TrendLine />
              <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
                <p className="text-sm text-gray-500">Six check-ins so far</p>
                <p className="text-sm text-gray-500">Next one in 30 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
