'use client';

import { motion } from 'framer-motion';
import ListeningRibbon from '@/components/ListeningRibbon';

// The answer to the question four people asked in the first round of feedback:
// "why not just listen to an audiobook?" Sits straight after the hero because
// it is the thing no recording or brain game offers.
//
// Every line is limited to what the device tests showed: spoken audio pauses
// and comes back, music is lowered and never paused, and the app can only tell
// whether something is playing. Do not write "any app" here: each app decides
// for itself whether to resume, and only Apple Podcasts and Spotify have been
// tested (the FAQ names them). No claim here that this format matches the
// research trials, since no study has tested tasks spread through a walk.
const BEATS = [
  {
    title: 'Your audio plays',
    body: 'Start your podcast, audiobook or music in the app you already use, then put your phone in your pocket and walk.',
  },
  {
    title: 'A short task takes over',
    body: 'Every few minutes, Stridemind pauses your podcast or audiobook, or lowers your music. A calm voice then gives you something to think about for about a minute.',
  },
  {
    title: 'Your audio comes back',
    body: 'When the task is done, your audio picks up again by itself. Nothing is scored, and you never have to touch your phone.',
  },
];

export default function OwnAudio() {
  return (
    <section id="own-audio" className="bg-cockpit py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold mb-4" style={{ color: '#8FC27E' }}>
            Walk with your own audio
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-6">
            You can keep listening to what you love.
          </h2>
          <p className="text-xl text-cockpit-muted leading-relaxed">
            An audiobook keeps you company on a walk, but it asks nothing of you. Stridemind
            fits short thinking tasks around whatever you already enjoy, so your mind gets
            some work to do and you still get your story.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="my-14"
        >
          <ListeningRibbon barColor="rgba(143,168,200,0.45)" barsPerRun={16} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {BEATS.map((beat, i) => (
            <motion.div
              key={beat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">{beat.title}</h3>
              <p className="text-lg text-cockpit-muted leading-relaxed">{beat.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-14 pt-8 border-t border-white/10 text-lg text-cockpit-muted leading-relaxed max-w-3xl">
          Stridemind can tell whether something is playing, so it knows when to wait for you. It
          can&apos;t tell what you are listening to. Your first walk like this is free, and you
          don&apos;t need an account to try it.
        </p>
      </div>
    </section>
  );
}
