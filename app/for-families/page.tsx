import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Families — Stridemind: Fall Prevention',
  // Plain apostrophes here: these are JS strings, not JSX, so an HTML entity
  // would render literally in the meta tags.
  description:
    "For adult children and caregivers: what actually lowers a parent's fall risk, why constant caution backfires, and how to help with dignity.",
  alternates: { canonical: 'https://stridemind.app/for-families' },
  openGraph: {
    title: 'Help a Parent Lower Their Fall Risk — Stridemind for Families',
    description:
      "What actually lowers a parent's fall risk, why constant caution backfires, and how to help without taking over.",
    url: 'https://stridemind.app/for-families',
  },
};

// The slug and nav label say "families" rather than "caregivers" on purpose:
// adult children in the early-worry stage do not self-identify as caregivers,
// and a parent seeing "For Caregivers" in the nav of an app made for them
// reads as being labeled. The caregiver search terms live in the metadata
// and body copy instead, where they belong.
const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://stridemind.app/for-families#webpage',
  url: 'https://stridemind.app/for-families',
  name: 'Stridemind for Families — Help a Parent Lower Their Fall Risk',
  description:
    'A guide for adult children and caregivers: the evidence on lowering fall risk in older adults, why fear-driven caution backfires, and how to introduce training with dignity.',
  isPartOf: { '@id': 'https://stridemind.app/#website' },
  about: { '@id': 'https://stridemind.app/#app' },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stridemind.app' },
    { '@type': 'ListItem', position: 2, name: 'For Families' },
  ],
};

// Figures restate the verified citations recorded on /science; do not
// strengthen or restate them from memory.
const EVIDENCE = [
  {
    stat: '23%',
    label: 'Fewer falls from exercise programmes that challenge balance',
    source: 'Cochrane review of 108 trials, 23,407 participants (Sherrington et al., 2019)',
  },
  {
    stat: '44',
    label: 'Studies in the 2025 meta-analysis finding dual-task training improves balance and mobility and reduces falls',
    source: 'European Geriatric Medicine, 2025 (2,782 older adults)',
  },
  {
    stat: '42%',
    label: 'Lower fall rate when cognitive challenges were added to otherwise identical treadmill training',
    source: 'V-TIME randomized trial, The Lancet, 2016 (302 participants)',
  },
];

const INTRO_STEPS = [
  {
    number: '01',
    title: 'Talk about strength, not risk',
    body: 'Training is something athletes do, and it is something your parent can do. "This keeps you strong and sharp" lands where "I worry about you falling" does not.',
  },
  {
    number: '02',
    title: 'Make it shared, not assigned',
    body: 'A standing walk together, even one where you keep them company by phone, feels completely different from a printed list of precautions left on the counter.',
  },
  {
    number: '03',
    title: 'Let them own it',
    body: 'Offer it once, warmly, and then step back. Their practice, their progress, their story to tell you. The monthly check-in gives them something real to report.',
  },
];

const WHAT_THEY_GET = [
  {
    title: 'As easy as a podcast',
    body: 'They press play, put the phone in a pocket, and walk. There is no screen to watch during a session and nothing to configure. If they can play a podcast, they can use Stridemind.',
  },
  {
    title: 'Free to start, nothing to cancel',
    body: 'The app is free to download with a set of free strides, and there is no free trial that quietly turns into a charge. Nothing starts billing unless they choose it themselves.',
  },
  {
    title: 'Progress they can see',
    body: 'A short monthly check-in shows how their thinking holds up while they move, explained in plain language. It is theirs to share with you, or not.',
  },
  {
    title: 'Made for their generation',
    body: 'Calm narration, comfortable pacing, and sessions of five to fifteen minutes, designed for adults 55 and over on iPhone. No points, no streak guilt, no cartoon confetti.',
  },
];

export default function ForFamiliesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="pt-24">
        {/* Hero */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              For Families
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              You want them safe. They want to stay themselves.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              If you are here because a parent has slowed down, started reaching for the wall on
              the stairs, or already had a fall, this page is for you. Here is what the research
              says actually lowers fall risk, and how to offer help without taking anything away
              from them.
            </p>
          </div>
        </section>

        {/* Evidence */}
        <section className="bg-brand-muted py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">
                Movement works better than worry.
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The strongest evidence in fall prevention is not about railings or reminders. It
                is about training, and the newest research says training the mind and body
                together works best of all.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {EVIDENCE.map((item) => (
                <div key={item.stat} className="bg-white rounded-2xl p-7 border border-brand-light shadow-sm text-center flex flex-col">
                  <p className="text-5xl font-extrabold text-brand mb-3">{item.stat}</p>
                  <p className="text-gray-700 leading-snug flex-1">{item.label}</p>
                  <p className="text-xs text-gray-500 italic mt-3">{item.source}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-base text-gray-600">
              Every figure above is quoted from the peer-reviewed papers on{' '}
              <Link href="/science" className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors">
                our science page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Fear backfires */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 leading-tight mb-5">
              Why &ldquo;just be careful&rdquo; backfires
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              The most natural thing to say to a parent is some version of &ldquo;please be
              careful.&rdquo; Said too often, it does the opposite of what you hope. After a fall,
              or after enough warnings, many older adults develop a lasting fear of falling. They
              walk less, go out less, and accept less of life, and the inactivity weakens exactly
              the systems that were keeping them safe.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              The research on this is pointed. In a multicenter trial of 481 older adults at fall
              risk, combined motor and cognitive training significantly reduced fear-of-falling
              scores, while cognitive training alone did not. Confidence came back through
              training, not through caution.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We wrote a fuller guide on this, including scripts for the conversation itself, in{' '}
              <Link href="/blog/help-a-parent-lower-fall-risk" className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors">
                How to Help a Parent Lower Their Risk of Falling, Without Taking Over
              </Link>
              .
            </p>
          </div>
        </section>

        {/* What they get */}
        <section className="bg-brand-muted py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-4">
                What Stridemind gives them
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Guided audio sessions that give their mind real work during a normal walk, built
                on the same dual-task method the research above studied.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {WHAT_THEY_GET.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-7 border border-brand-light shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to bring it up */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 leading-tight mb-10 text-center">
              How to bring it up
            </h2>
            <div className="space-y-6">
              {INTRO_STEPS.map((step) => (
                <div key={step.number} className="flex gap-5 items-start">
                  <p className="text-xs font-bold text-brand uppercase tracking-widest pt-1.5 flex-shrink-0">
                    {step.number}
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mt-10">
              <p className="text-base text-gray-600 leading-relaxed">
                One honest note. Stridemind is a wellness app, not a medical device. If your
                parent has a diagnosed balance condition or a recent fall behind them, the right
                first step is a conversation with their physician or physical therapist. Many
                people use Stridemind alongside that care.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#166534' }}>
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
              Their next walk can be the first one.
            </h2>
            <p className="text-xl text-green-100 mb-9 leading-relaxed">
              The app is free to download on iPhone, the first strides are free to try, and there
              is no trial that turns into a charge. Send them the link, or set it up together on
              your next visit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/app/id6761288997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
              {/* No-backend share path: opens the visitor's own mail app with
                  the page link, which suits how this generation actually
                  shares things. */}
              <a
                href="mailto:?subject=Thought%20of%20you%20for%20this&body=I%20came%20across%20this%20and%20thought%20of%20you.%20It%20turns%20a%20normal%20walk%20into%20brain%20training%2C%20and%20it%20is%20backed%20by%20real%20research%3A%20https%3A%2F%2Fstridemind.app"
                className="text-sm font-semibold text-green-100 underline underline-offset-2 hover:text-white transition-colors"
              >
                Email this to someone
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
