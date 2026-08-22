'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ALL_CITATIONS,
  BARBAN_2017,
  CDC_FALLS,
  EVIDENCE_LAST_VERIFIED,
  VAN_HET_REVE_2014,
  VTIME_2016,
  WOLLESEN_2017,
} from '@/lib/citations';
import { SCIENCE_QA } from './qa';

// --- Animated counter ---

interface StatConfig {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sub: string;
}

const HEADLINE_STATS: StatConfig[] = [
  { value: 44, suffix: '', label: 'Randomized controlled trials', sub: 'European Geriatric Medicine, 2025' },
  { value: 2782, suffix: '', label: 'Participants across those trials', sub: 'Meta-analysis, 2025' },
  { value: 76.6, suffix: '%', decimals: 1, label: 'Of a separate 30-trial review reported better balance', sub: 'IJERPH, 2022' },
];

function AnimatedStat({ value, suffix, prefix = '', decimals = 0, label, sub }: StatConfig) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * value).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [inView, value, decimals]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="text-center p-8 bg-white rounded-2xl border border-brand-light shadow-sm"
    >
      <p className="text-5xl font-extrabold text-brand mb-2">
        {prefix}{count.toFixed(decimals)}{suffix}
      </p>
      <p className="text-gray-700 font-medium leading-snug">{label}</p>
      <p className="text-xs text-gray-500 mt-2 italic">{sub}</p>
    </motion.div>
  );
}

// --- Stagger variants ---

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// --- Mechanism cards ---
//
// The third card used to read "Direct head-to-head trials show that adding a
// cognitive layer to an otherwise identical exercise program produces
// significantly larger reductions in falls." That plural was not supportable.
// One trial on this site shows that (V-TIME, 2016). The other head-to-head
// trial we cite (van het Reve 2014) looked for exactly that effect and did not
// find it, so citing "trials" as a body of agreeing evidence misrepresented our
// own sources. The card now says what each trial actually found, which is a
// more interesting and more defensible claim than the one it replaced.
const MECHANISM = [
  {
    label: 'What it is',
    body: 'Dual-task training means performing a cognitive exercise, such as number recall, pattern recognition, or memory sequences, at the same time as walking. It trains the specific brain and body coordination that everyday movement depends on, and that tends to weaken with age.',
  },
  {
    label: 'Why it works',
    body: 'Repeated practice at doing both at once builds the capacity to divide attention, to keep walking automatic, and to keep thinking clearly under load. Over several weeks the brain gets better at allocating attention between the two, which is what reduces the gait disruption that leads to falls in real environments.',
  },
  {
    label: 'What the head-to-head trials show, and where they disagree',
    body: 'When researchers hold the physical exercise constant and add only a cognitive layer, the added layer reliably improves dual-task walking, divided attention, and gait initiation. Whether it also reduces falls beyond what the exercise alone achieves is less settled. One trial found a 42% lower fall rate from the cognitive layer alone. Another looked for the same effect and found that falls fell sharply in both groups, with no measurable difference between them.',
  },
];

// --- How Stridemind applies it ---

const APP_FEATURES = [
  { label: 'Audio-first', detail: 'No screen interaction during sessions, so your eyes stay up and your phone stays in your pocket' },
  { label: 'Structured strides', detail: 'Each session targets a specific combination of thinking and movement demand' },
  { label: 'Progressive difficulty', detail: 'Premium strides raise the mental load as you get more comfortable' },
  { label: 'Designed for 55+', detail: 'Pacing, voice clarity, and session length built for the people who will use it' },
];

// --- Main component ---

export default function ScienceContent() {
  return (
    <div className="pt-24">

      {/* Hero
          The old H1 was "The science behind Stridemind", which only answers a
          question someone asks once they already know the product exists. The
          page's real job is to answer the question people actually ask about
          the method, so the H1 is now that question and the product comes
          second. */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Peer-Reviewed Evidence
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              Does dual-task training actually prevent falls?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Walking while giving your mind something to do is one of the more replicated
              ideas in fall prevention research. This page sets out what the trials found,
              how strong each finding is, and where the evidence runs out. Stridemind is
              built on this method, and every figure below is quoted with the studies it
              came from.
            </p>
            <p className="text-sm text-gray-500 mt-6">
              Every citation on this page was last checked against the original papers on{' '}
              {new Date(`${EVIDENCE_LAST_VERIFIED}T00:00:00Z`).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC',
              })}
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated stats */}
      <section className="bg-brand-muted py-16 px-6 border-b border-brand-light">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
          {HEADLINE_STATS.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block bg-red-900/50 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mb-5 border border-red-800/50">
              The Problem
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Falls are the leading cause of injury death in adults 65 and older.
            </h2>
            {/* The cost figure was "$50 billion" here for a year. That is the
                2015 number. CDC now puts the annual health care cost of
                non-fatal older adult falls at $80 billion. */}
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              About 1 in 4 older adults reports falling each year, which is more than 14 million
              people. The annual health care cost of non-fatal falls in the United States is
              around $80 billion. Falls are not simply accidents. They are the predictable
              result of coordination between brain and body that has not been trained.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-7"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              The root cause is{' '}
              <strong className="text-white">cognitive-motor interference</strong>, which is what
              happens when your brain struggles to manage movement and thinking at the same time
              and your walking becomes less stable. This is the well-documented effect of people
              stopping walking when they start talking, and it is a measurable predictor of who
              will fall.
            </p>
            <p className="text-sm text-gray-500 italic mt-4">{CDC_FALLS.reference}</p>
          </motion.div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              The Mechanism
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 leading-tight">
              What dual-task training actually does
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {MECHANISM.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-brand-muted rounded-2xl p-7 border border-brand-light"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Citations
          Each card now carries the finding and the exact basis for it in the
          same block. Separating a claim from the study size, the confidence
          interval, and the caveats is how this page previously ended up
          quoting a pooled result beside the wrong denominator, and it is also
          what makes a passage unusable to anything trying to verify it. */}
      <section className="bg-brand-muted py-20 px-6 border-b border-brand-light">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Research Citations
            </span>
            <h2 className="font-display text-4xl text-gray-900 leading-tight">
              What the peer-reviewed literature says
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Each finding below is followed by exactly what it rests on, including how many
              studies and how many people, so you can weigh it yourself.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {ALL_CITATIONS.map((c) => (
              <motion.div
                key={c.id}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border-l-4 border-brand shadow-sm"
              >
                <p className="text-gray-800 text-lg leading-relaxed mb-4 font-medium">{c.finding}</p>
                <p className="text-gray-600 text-base leading-relaxed mb-4">{c.basis}</p>
                <p className="text-sm text-gray-500 italic">
                  {c.authors} {c.journal}, {c.year}.{' '}
                  <a
                    href={c.url}
                    className="text-brand underline underline-offset-2 hover:text-brand-dark not-italic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the source
                  </a>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* V-TIME */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 border border-white/20">
              Head-to-Head Evidence
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
              The same walk, with a very different outcome.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              In a trial published in <em>The Lancet</em>, researchers split 302 older adults at
              high risk of falling into two groups. Both walked on a treadmill for 45 minutes,
              three times a week, for six weeks. One group simply walked. The other walked while
              handling cognitive challenges, including obstacles, path choices, and distractions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              {
                label: 'Treadmill only',
                stat: 'No significant reduction',
                detail: 'Falls went from 10.7 to 8.3 per six months, a change that was not statistically significant.',
                muted: true,
              },
              {
                label: 'Treadmill with cognitive challenges',
                stat: '42% fewer falls',
                detail: 'Falls went from 11.9 to 6.0 per six months. Incident rate ratio 0.58, 95% CI 0.36 to 0.96.',
                muted: false,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className={`rounded-2xl p-7 border ${item.muted ? 'bg-white/5 border-white/10' : 'bg-brand/20 border-brand/40'}`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${item.muted ? 'text-gray-500' : 'text-green-400'}`}>
                  {item.label}
                </p>
                <p className={`text-3xl font-extrabold mb-2 ${item.muted ? 'text-gray-400' : 'text-white'}`}>
                  {item.stat}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-7"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Both groups did the same physical exercise for the same length of time. The only
              difference was the cognitive layer, and that layer went with a{' '}
              <strong className="text-white">42% lower fall rate</strong> over the following six
              months. This is the single clearest result behind the whole approach, and it is
              worth saying that it is one trial. The section below sets out where other trials
              have disagreed.
            </p>
            <p className="text-sm text-gray-400 italic mt-4">
              {VTIME_2016.authors} {VTIME_2016.journal}, {VTIME_2016.year}. V-TIME trial, 302
              participants across five centres.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where the evidence is weaker.
          NEW SECTION (2026-08-22). The page previously presented only findings
          that supported the product. That is both a credibility problem with
          the physical therapists this page is partly written for, and a
          practical one: a page that states its own limits gives a reader, and
          an answer engine, something specific to trust. Nothing here is
          hypothetical. Every limit named is one of our own cited papers. */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Where the Evidence Is Weaker
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-5 leading-tight">
              What this research does not show.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The case for dual-task training is genuinely good, and it is not uniform. These are
              the limits in the same studies quoted above, stated plainly, because you should be
              able to judge the method rather than take our word for it.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              {
                heading: 'The balance evidence is much stronger than the falls evidence.',
                body: 'In the 2025 meta-analysis, balance and mobility were measured across most of the 44 trials. Fall frequency was measured in only 6 of them, and all 6 relied on participants recalling their own falls, which the authors flag as a source of error. Improved balance is well established. Fewer falls is the more cautious claim.',
              },
              {
                heading: 'Adding a cognitive layer does not always reduce falls on its own.',
                body: 'The V-TIME trial found that it did. A separate trial of 182 adults averaging 81 years old set out to test the same idea and found that falls dropped sharply in both groups, with no measurable difference between them. What the cognitive layer clearly did add there was better dual-task walking, better gait initiation, and better divided attention.',
                source: VAN_HET_REVE_2014,
              },
              {
                heading: 'Not everyone gets the same benefit from the same training.',
                body: 'A trial of 95 older adults deliberately enrolled people both with and without a worry about falling, and the results split along that line. Those who arrived worried saw that worry ease. Those who did not arrive worried saw their thinking-while-walking improve instead. Neither group got both, and the authors still recommended addressing a fear of falling directly, because a cautious walking pattern persisted.',
                source: WOLLESEN_2017,
              },
              {
                heading: 'The benefits depend on continuing.',
                body: 'In the 481-person trial, fear-of-falling scores improved over three months of training and had drifted back within three months of stopping. This is the ordinary pattern for exercise of any kind, and it is the reason this is framed as a habit rather than a course of treatment with an end date.',
                source: BARBAN_2017,
              },
            ].map((item) => (
              <motion.div
                key={item.heading}
                variants={fadeUp}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.heading}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
                {item.source && (
                  <p className="text-sm text-gray-500 italic mt-3">
                    {item.source.authors} {item.source.journal}, {item.source.year}.
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Questions and answers.
          Rendered always-open rather than as an accordion. Collapsed answers
          are the single most common way a page's best content becomes
          invisible to crawlers and screen readers, and there is no reason to
          hide a reference section behind a click. */}
      <section id="questions" className="bg-brand-muted py-20 px-6 border-b border-brand-light">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Common Questions
            </span>
            <h2 className="font-display text-4xl text-gray-900 leading-tight">
              Questions people ask about dual-task training
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {SCIENCE_QA.map((item) => (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-brand-light shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How Stridemind applies it */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-8"
          >
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              How Stridemind Applies This
            </span>
            <h2 className="font-display text-4xl text-gray-900 mb-5 leading-tight">
              A practical version of the training used in the trials
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stridemind turns dual-task training into an audio-guided iPhone app that needs no
              equipment and fits into a walk you were going to take anyway. Sessions run 5 to 15
              minutes. The cognitive challenges come through your earphones, so your phone stays
              in your pocket and your eyes stay on the path.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {APP_FEATURES.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-brand-muted rounded-xl p-5 border border-brand-light"
              >
                <p className="font-bold text-gray-900 mb-1">{item.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related reading.
          Contextual in-body links, not another footer row. Footer links are
          sitewide boilerplate and get discounted accordingly; a link inside the
          text, with anchor text that says what is on the other side of it, is
          the one that carries weight and the one a reader actually follows. */}
      <section className="bg-white py-16 px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-gray-900 mb-6 leading-tight">
            Related reading
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              If a clinician has raised fall risk with you, or you want to know how this is
              measured rather than trained, read{' '}
              <Link
                href="/fall-risk-screening"
                className="text-brand underline underline-offset-2 hover:text-brand-dark"
              >
                what happens in a fall risk screening
              </Link>
              , which covers the Timed Up and Go, the dual-task version of it, and what the
              results can and cannot tell you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you are comparing this against a seated brain training app, we take the
              transfer-of-training criticism head on in{' '}
              <Link
                href="/brain-training-alternatives"
                className="text-brand underline underline-offset-2 hover:text-brand-dark"
              >
                do brain training apps actually work
              </Link>
              .
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you are reading this on behalf of a parent rather than for yourself,{' '}
              <Link
                href="/for-families"
                className="text-brand underline underline-offset-2 hover:text-brand-dark"
              >
                our guide for families
              </Link>{' '}
              covers how to raise it without it landing as a warning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-muted py-16 px-6 border-b border-brand-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl text-gray-900 mb-4">Ready to try it?</h2>
          <p className="text-gray-600 mb-7">
            Free to start. No equipment. It works on any walk.
          </p>
          <a
            href="https://apps.apple.com/app/id6761288997"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </motion.div>
      </section>

      {/* Founder note */}
      <section className="bg-gray-50 py-14 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">About this project</p>
          <p className="text-gray-600 text-base leading-relaxed">
            Stridemind was built by an independent developer who came across the clinical research
            on dual-task walking and could not find a practical, accessible app that applied it.
            The evidence was clear and replicated across dozens of trials. The gap between that
            evidence and what was available to ordinary people was the reason this app exists.
            Stridemind is not a medical device. It applies a well-evidenced training method in a
            wellness setting, for adults who want to stay active and reduce their risk of falling
            as they age.
          </p>
        </div>
      </section>

    </div>
  );
}
