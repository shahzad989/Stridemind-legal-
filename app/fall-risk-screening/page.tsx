import type { Metadata } from 'next';
import Link from 'next/link';
import { EGM_2025, EVIDENCE_LAST_VERIFIED, VTIME_2016 } from '@/lib/citations';

// WHY THIS PAGE EXISTS
// "What is a dual-task gait assessment", "fall risk screening test", "timed up
// and go test" is the cluster this site had nothing for, and it is the one read
// by physical therapists, nurses, and the more thorough sort of adult child.
// It is also the cluster with the highest precision bar: this audience knows
// the literature and will notice a wrong cut-off or a blurred line between
// predicting risk and diagnosing something.
//
// THE HARD LINE ON THIS PAGE
// Screening tools predict risk. They do not diagnose, and neither does
// Stridemind. Nothing here should read as an instruction to self-assess in
// place of seeing a clinician, and Stridemind is deliberately kept out of the
// assessment sections entirely: it appears once, near the end, as training
// rather than as measurement. Any future edit that moves the app earlier or
// implies it screens anyone is the wrong direction.
//
// Numbers on this page are limited to ones verified against a primary source.
// The 12-second Timed Up and Go threshold is CDC STEADI's. The cut-offs for the
// chair stand and the 4-stage balance test are deliberately described rather
// than quoted, because they vary by age and sex and were not verified here;
// pointing to STEADI is better than printing a number we did not check.

export const metadata: Metadata = {
  title: 'What Is a Fall Risk Screening? The Tests and What the Scores Mean | Stridemind',
  description:
    'Fall risk screening uses short tests like the Timed Up and Go. What each measures, what a dual-task version adds, and what the results can and cannot tell you.',
  alternates: { canonical: 'https://stridemind.app/fall-risk-screening' },
  openGraph: {
    title: 'What Is a Fall Risk Screening? The Tests and What the Scores Mean',
    description:
      'The Timed Up and Go, the chair stand, the balance test, and the dual-task gait assessment, explained plainly for older adults and their families.',
    url: 'https://stridemind.app/fall-risk-screening',
    images: [{ url: 'https://stridemind.app/opengraph-image', width: 1200, height: 630 }],
  },
};

const QA = [
  {
    q: 'What is a fall risk screening?',
    a: 'It is a short set of questions and simple physical tests used to estimate how likely someone is to fall in the coming year. A typical screening takes about 15 minutes, needs a chair and a stopwatch, and is usually done by a doctor, nurse, or physical therapist. It estimates risk. It does not diagnose a cause.',
  },
  {
    q: 'What is the Timed Up and Go test?',
    a: 'You start seated, stand up, walk about 10 feet, turn, walk back, and sit down, while someone times you. It measures how efficiently you can combine standing, walking, and turning. CDC guidance flags 12 seconds or longer as an increased risk of falling for community-dwelling adults aged 65 and over.',
  },
  {
    q: 'What is a dual-task gait assessment?',
    a: 'It is the same walking test done twice, once normally and once while you do something mentally demanding, such as counting backwards. The difference between the two is what interests the assessor. A large drop-off when the thinking task is added suggests your walking depends heavily on conscious attention, which is associated with a higher risk of falling.',
  },
  {
    q: 'Can I do a fall risk screening at home?',
    a: 'You can time yourself standing, walking a short distance, turning, and sitting, and it will tell you something. What it will not do is tell you why, and the why is what changes anything. Slower results have many possible causes, including medication, vision, inner ear problems, and joint pain, and sorting between them needs a clinician.',
  },
  {
    q: 'What does a poor score actually mean?',
    a: 'It means you fall into a group with a higher average likelihood of falling, not that you will fall. These tools are calibrated to be sensitive so that fewer people at genuine risk are missed, which means a number of people who score poorly would never have fallen. The value of the result is that it starts a conversation about what to change.',
  },
  {
    q: 'Who should get screened for fall risk?',
    a: 'General guidance is that adults aged 65 and over be asked about falls at least once a year, and assessed more thoroughly if they have fallen in the past year, feel unsteady, or worry about falling. If any of those apply, it is worth raising at the next appointment rather than waiting to be asked.',
  },
  {
    q: 'Is Stridemind a fall risk screening tool?',
    a: 'No. Stridemind is a wellness app for training, not for assessment, and it does not screen, score, or diagnose fall risk. It includes a monthly check-in that tracks your own thinking-while-moving over time for your interest, which is a different thing from a clinical assessment and is not a substitute for one.',
  },
];

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://stridemind.app/fall-risk-screening#webpage',
  url: 'https://stridemind.app/fall-risk-screening',
  name: 'What Is a Fall Risk Screening? The Tests and What the Scores Mean',
  description:
    'A plain-language guide to fall risk screening for older adults: the Timed Up and Go, the chair stand, the balance test, the dual-task gait assessment, and what the results mean.',
  isPartOf: { '@id': 'https://stridemind.app/#website' },
};

// Article schema mirrors /science: dateModified points at the evidence
// verification date, not the build date, and author matches the visible
// byline so the structured data and the page agree.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://stridemind.app/fall-risk-screening#article',
  headline: 'What Is a Fall Risk Screening? The Tests and What the Scores Mean',
  description:
    'A plain-language guide to fall risk screening for older adults: the Timed Up and Go, the chair stand, the balance test, the dual-task gait assessment, and what the results mean.',
  mainEntityOfPage: 'https://stridemind.app/fall-risk-screening',
  dateModified: EVIDENCE_LAST_VERIFIED,
  author: {
    '@type': 'Person',
    '@id': 'https://stridemind.app/about#founder',
    name: 'Ibrahim Shahzad',
  },
  publisher: { '@id': 'https://stridemind.app/#organization' },
  citation: [EGM_2025.reference, VTIME_2016.reference],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stridemind.app' },
    { '@type': 'ListItem', position: 2, name: 'Fall Risk Screening' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: QA.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const TESTS = [
  {
    name: 'The Timed Up and Go',
    measures: 'Standing, walking, turning, and sitting, combined into one timed movement.',
    detail:
      'You begin seated in a chair with arms, stand up, walk about 10 feet at your normal pace, turn around, walk back, and sit down. CDC guidance treats 12 seconds or longer as a sign of increased fall risk in community-dwelling adults 65 and over. Some of the research literature uses a slightly higher threshold of around 13.5 seconds, which is worth knowing if you see a different number quoted somewhere else.',
  },
  {
    name: 'The 30-Second Chair Stand',
    measures: 'Leg strength and endurance.',
    detail:
      'You sit with your arms crossed over your chest and stand up and sit down as many times as you can in 30 seconds. The score is the number of full stands. What counts as below average depends on your age and sex, so the threshold is read from a table rather than being a single number.',
  },
  {
    name: 'The 4-Stage Balance Test',
    measures: 'Static balance, from easy to demanding.',
    detail:
      'You hold four standing positions in turn, each harder than the last, ending with one foot directly in front of the other and then standing on one leg. How long you can hold the harder positions without support is the result. It takes under two minutes and needs nothing but floor space.',
  },
  {
    name: 'The dual-task version of any of the above',
    measures: 'How much your walking depends on your conscious attention.',
    detail:
      'The assessor repeats a walking test while asking you to do something mentally demanding, most often counting backwards in threes or naming words in a category. They compare the two results. A big drop-off when the thinking is added is the finding of interest, and it is the specific pattern that dual-task training is designed to work on.',
  },
];

export default function FallRiskScreeningPage() {
  return (
    <>
      {[webPageJsonLd, articleJsonLd, breadcrumbJsonLd, faqJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="pt-24">
        {/* Hero */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              A Plain-Language Guide
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              What happens in a fall risk screening?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A fall risk screening is a short set of questions and simple physical tests that
              estimate how likely someone is to fall in the coming year. It usually takes about 15
              minutes, needs nothing more than a chair and a stopwatch, and is done by a doctor,
              nurse, or physical therapist. This page explains what each test measures, what a
              dual-task version adds, and what the result can and cannot tell you.
            </p>
            <p className="text-sm text-gray-500 mt-6">
              By{' '}
              <Link href="/about" className="text-brand-dark hover:text-brand underline">
                Ibrahim Shahzad
              </Link>
              , maker of Stridemind. Last reviewed{' '}
              {new Date(`${EVIDENCE_LAST_VERIFIED}T00:00:00Z`).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC',
              })}
              . Every figure on this page was checked against the original paper it comes from, not a summary of it.
            </p>
          </div>
        </section>

        {/* Important framing, placed early on purpose */}
        <section className="bg-amber-50 py-12 px-6 border-b border-amber-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              One thing to be clear about before the tests.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every tool below predicts risk. None of them diagnoses anything. A slow result tells
              you that something is worth looking into, not what that something is, and the causes
              range from medication side effects to vision, inner ear problems, joint pain, and
              simple deconditioning. Sorting between them is a clinician&rsquo;s job, and it is the
              part that actually changes outcomes.
            </p>
          </div>
        </section>

        {/* The tests */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-4 leading-tight">
              The tests you are most likely to be given
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Most screenings in the United States follow the CDC&rsquo;s STEADI approach, which
              starts with a short questionnaire about falls, unsteadiness, and worry, and then uses
              a small number of physical tests. None of them is difficult and none of them requires
              equipment you would not find in an ordinary clinic room.
            </p>

            <div className="space-y-5">
              {TESTS.map((test) => (
                <div
                  key={test.name}
                  className="bg-brand-muted rounded-2xl p-7 border border-brand-light"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{test.name}</h3>
                  <p className="text-sm font-semibold text-brand mb-3">{test.measures}</p>
                  <p className="text-gray-600 leading-relaxed">{test.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why the dual-task version matters */}
        <section className="bg-gray-900 py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 border border-white/20">
              The Dual-Task Version
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Why they ask you to count backwards while you walk.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              For most of adult life, walking runs on autopilot and leaves plenty of attention
              spare. With age, that changes: staying balanced starts drawing on the same mental
              resources you use for thinking. Adding a counting task to a walking test is a way of
              measuring how much spare capacity is left.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              There is a long-standing clinical observation behind this. Some older adults stop
              walking entirely when someone asks them a question, because the conversation and the
              walking no longer fit together. That pause is not rudeness or confusion. It is a
              measurable signal, and it is one of the better-known predictors of who will fall.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-gray-300 text-lg leading-relaxed mb-3">
                {EGM_2025.finding}
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-3">{EGM_2025.basis}</p>
              <p className="text-sm text-gray-500 italic">
                {EGM_2025.authors} {EGM_2025.journal}, {EGM_2025.year}.
              </p>
            </div>
          </div>
        </section>

        {/* What a result means */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-6 leading-tight">
              What the result means, and what it does not.
            </h2>
            <div className="space-y-5">
              {[
                {
                  heading: 'A poor score is a probability, not a prediction about you.',
                  body: 'Scoring above a threshold places you in a group that falls more often on average. Plenty of people in that group never fall. These tools are deliberately tuned to catch more people rather than fewer, because missing someone at genuine risk is the more costly error, and the trade-off is that some people are flagged who would have been fine.',
                },
                {
                  heading: 'A good score is not a clean bill of health either.',
                  body: 'The tests measure a narrow slice of what causes falls. Someone can walk briskly through a Timed Up and Go and still be at real risk from a new medication, poor lighting at home, or low blood pressure on standing. If you have fallen in the past year, say so even if you did well.',
                },
                {
                  heading: 'The screening is the beginning of the appointment, not the end.',
                  body: 'The useful part is what follows: a medication review, an eye check, a look at the home, and usually a referral for strength and balance work. The tests exist to point at which of those to do first.',
                },
              ].map((item) => (
                <div key={item.heading} className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {item.heading}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where training fits */}
        <section className="bg-brand-muted py-20 px-6 border-b border-brand-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-6 leading-tight">
              Where training comes in.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The most consistent recommendation to come out of a fall risk screening is exercise,
              and specifically exercise that challenges balance rather than only strength. Where a
              dual-task assessment shows a large drop-off between walking normally and walking
              while thinking, that particular gap can be trained directly.
            </p>
            <div className="bg-white rounded-2xl p-7 border-l-4 border-brand mb-8">
              <p className="text-lg text-gray-800 leading-relaxed mb-3 font-medium">
                {VTIME_2016.finding}
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-3">{VTIME_2016.basis}</p>
              <p className="text-sm text-gray-500 italic">
                {VTIME_2016.authors} {VTIME_2016.journal}, {VTIME_2016.year}.
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stridemind is one way to practise that at home, between appointments. It is an
              audio-guided iPhone app that gives your mind a task while you take an ordinary walk.
              It is a wellness app rather than a clinical tool: it does not screen you, score your
              risk, or replace anything on this page. If a screening has flagged something, start
              with the clinician who ran it. The evidence behind the training method, including
              where it is weaker, is set out on our{' '}
              <Link href="/science" className="text-brand underline underline-offset-2 hover:text-brand-dark">
                science page
              </Link>
              , and there is a guide for families at{' '}
              <Link href="/for-families" className="text-brand underline underline-offset-2 hover:text-brand-dark">
                For Families
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Q&A */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-10 leading-tight">
              Common questions
            </h2>
            <div className="space-y-4">
              {QA.map((item) => (
                <div
                  key={item.q}
                  className="bg-brand-muted rounded-2xl p-7 border border-brand-light"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="bg-gray-50 py-14 px-6 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Sources
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              {[
                'Centers for Disease Control and Prevention. STEADI, Stopping Elderly Accidents, Deaths and Injuries: assessments and screenings, including the Timed Up and Go, the 30-Second Chair Stand, and the 4-Stage Balance Test. Figures checked August 2026.',
                EGM_2025.reference,
                VTIME_2016.reference,
              ].map((item) => (
                <li key={item} className="text-sm text-gray-500 leading-relaxed">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}
