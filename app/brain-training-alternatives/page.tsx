import type { Metadata } from 'next';
import Link from 'next/link';
import { EGM_2025, GAVELIN_2021, VTIME_2016 } from '@/lib/citations';

// WHY THIS PAGE EXISTS
// "Lumosity alternatives", "brain training apps that aren't just games",
// "screen-free brain training", "do brain training apps actually work" are all
// the same underlying question, and the site had no page for any of them. The
// blog post at /blog/brain-training-off-the-screen makes the positive case for
// moving brain training onto a walk; this page answers the sceptical version of
// the question, which is the one people actually type.
//
// It is a server component with no framer-motion, like /for-families and unlike
// /science. Everything is in the server HTML with nothing behind an animation
// initial state, which is what both screen readers and answer engines read.
//
// ON NAMING COMPETITORS
// The category criticism here is scientific and applies to seated screen-based
// training generally, so it is made about the category, not about any one
// product. The single company-specific fact on the page is the FTC's own
// published enforcement action against Lumos Labs, stated plainly with the FTC
// as the source and no editorialising. We do not characterise any competitor's
// current product, effectiveness, or intentions, because we have not tested
// them and it is not our place to.

export const metadata: Metadata = {
  title: 'Do Brain Training Apps Actually Work? A Look at the Alternatives | Stridemind',
  description:
    'Brain training games reliably improve the game. Whether that carries into daily life is the real question. Here is the research, and what changes when you move.',
  alternates: { canonical: 'https://stridemind.app/brain-training-alternatives' },
  openGraph: {
    title: 'Do Brain Training Apps Actually Work? A Look at the Alternatives',
    description:
      'The transfer problem with seated brain games, what the evidence supports instead, and how movement-based training differs.',
    url: 'https://stridemind.app/brain-training-alternatives',
    images: [{ url: 'https://stridemind.app/opengraph-image', width: 1200, height: 630 }],
  },
};

const QA = [
  {
    q: 'Do brain training apps actually work?',
    a: 'They reliably make you better at the exercises inside the app. Whether that improvement carries into daily life is the part researchers argue about, and it is called the transfer problem. Practice effects are real learning, but getting quicker at a matching game does not automatically make you sharper in a busy supermarket, because the two situations ask different things of your brain.',
  },
  {
    q: 'Why are brain training apps criticised?',
    a: 'The criticism is about narrow transfer, which means gains tend to stay close to the trained task rather than spreading to everyday ability. It became a consumer-protection matter in 2016, when the US Federal Trade Commission settled with the maker of Lumosity over advertising claims the agency said were not supported by the evidence the company had.',
  },
  {
    q: 'What is a good alternative to seated brain training?',
    a: 'Training that combines thinking with physical movement at the same time has better evidence for general benefit than either one alone. A 2021 network meta-analysis of randomised trials ranked simultaneous cognitive and physical training highest for overall thinking skills, ahead of doing the two separately and ahead of exercise on its own.',
  },
  {
    q: 'Is there screen-free brain training for seniors?',
    a: 'Yes. Any mental task done while walking counts, including counting backwards, naming items in a category, or holding a short list in memory. Stridemind delivers this through audio so nothing needs to be watched, and there are unguided versions you can practise on your own walk without any app at all.',
  },
  {
    q: 'How is Stridemind different from Lumosity, Elevate, or BrainHQ?',
    a: 'Those are seated, screen-based products where you look at a device and respond by tapping. Stridemind is audio-only and designed to be used while you walk, so the thinking happens at the same time as the movement rather than instead of it. It is built for adults 55 and over, and its aim is fall risk and everyday steadiness rather than game scores.',
  },
  {
    q: 'Does Stridemind claim to prevent dementia?',
    a: 'No. Stridemind is a wellness app, not a medical device, and it makes no claim about preventing, treating, or delaying any disease. The research it is built on shows improvements in balance, mobility, and some measures of thinking. That is the claim, and it stops there.',
  },
];

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://stridemind.app/brain-training-alternatives#webpage',
  url: 'https://stridemind.app/brain-training-alternatives',
  name: 'Do Brain Training Apps Actually Work? A Look at the Alternatives',
  description:
    'The transfer-of-training criticism of seated brain games, what the evidence supports instead, and how movement-based dual-task training differs.',
  isPartOf: { '@id': 'https://stridemind.app/#website' },
  about: { '@id': 'https://stridemind.app/#app' },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stridemind.app' },
    { '@type': 'ListItem', position: 2, name: 'Brain Training Alternatives' },
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

// Rows describe the two categories, not two named products. Anything stated
// about the right-hand column is verifiable from this site; anything in the
// left-hand column is true of seated screen-based training as a format.
const COMPARISON = [
  {
    dimension: 'Where your attention goes',
    seated: 'On a screen, in a quiet room, with nothing else competing for it.',
    stridemind: 'On the path in front of you, while a voice gives your mind a separate job.',
  },
  {
    dimension: 'What your body is doing',
    seated: 'Sitting still.',
    stridemind: 'Walking, which is the activity most falls happen during.',
  },
  {
    dimension: 'How you respond',
    seated: 'Tapping or clicking, so your hands and eyes are occupied.',
    stridemind: 'Thinking the answer. Nothing is tapped, and the phone stays in your pocket.',
  },
  {
    dimension: 'What it is measured against',
    seated: 'Scores and streaks inside the app.',
    stridemind: 'A monthly check-in, plus balance and mobility outcomes drawn from the research.',
  },
  {
    dimension: 'Who it is designed for',
    seated: 'General audiences, often skewing younger.',
    stridemind: 'Adults 55 and over, in pacing, voice, and session length.',
  },
];

export default function BrainTrainingAlternativesPage() {
  return (
    <>
      {[webPageJsonLd, breadcrumbJsonLd, faqJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="pt-24">
        {/* Hero. The opening paragraph is written to stand alone as a complete
            answer if it is lifted away from the rest of the page. */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              The Honest Version
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              Do brain training apps actually make you sharper in everyday life?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Brain training games reliably make you better at the games. Whether that sharpness
              travels into the rest of your life is a genuinely open question, and it is the
              question worth asking before you subscribe to anything. This page sets out the
              criticism of seated brain training fairly, then explains what the evidence supports
              instead, and where Stridemind fits.
            </p>
          </div>
        </section>

        {/* The transfer problem */}
        <section className="bg-brand-muted py-20 px-6 border-b border-brand-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-6 leading-tight">
              The criticism is about transfer, not about effort.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Nobody disputes that practising a memory puzzle makes you better at that memory
              puzzle. That is real learning, and there is nothing wrong with enjoying it. The
              argument is about how far the improvement travels, which researchers call transfer.
              Gains tend to stay close to the trained task. Getting faster at matching shapes on a
              tablet does not reliably make you steadier crossing a road, because a quiet room and
              a touchscreen never rehearse the combination that real life demands, which is
              thinking while your body is busy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This is not a fringe complaint. It became a consumer-protection matter in January
              2016, when the US Federal Trade Commission announced a settlement with Lumos Labs,
              the maker of Lumosity, over advertising the agency said the company could not
              support. Lumos Labs paid $2 million and agreed to hold reliable scientific evidence
              before making future claims about mental health benefits. We mention it because it
              is the clearest public marker of where the burden of proof sits, and because the
              same burden applies to us.
            </p>
            <div className="bg-white rounded-2xl p-7 border-l-4 border-brand mt-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                The useful question to ask any training product, including this one, is not
                &ldquo;did the score go up?&rdquo; It is &ldquo;did anything outside the app get
                better, and how would we know?&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* What the evidence supports */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-6 leading-tight">
              What happens when the thinking and the moving happen together.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              If mental exercise helps and physical exercise helps, the interesting research
              question was never whether to combine them but how. Should you do your puzzles and
              your walk separately, or at the same time? Trials have now compared those
              arrangements directly, and doing both at once comes out ahead.
            </p>

            <div className="space-y-5">
              <div className="bg-brand-muted rounded-2xl p-7 border-l-4 border-brand">
                <p className="text-lg text-gray-800 leading-relaxed mb-3 font-medium">
                  {GAVELIN_2021.finding}
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-3">{GAVELIN_2021.basis}</p>
                <p className="text-sm text-gray-500 italic">
                  {GAVELIN_2021.authors} {GAVELIN_2021.journal}, {GAVELIN_2021.year}.
                </p>
              </div>

              <div className="bg-brand-muted rounded-2xl p-7 border-l-4 border-brand">
                <p className="text-lg text-gray-800 leading-relaxed mb-3 font-medium">
                  {VTIME_2016.finding}
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-3">{VTIME_2016.basis}</p>
                <p className="text-sm text-gray-500 italic">
                  {VTIME_2016.authors} {VTIME_2016.journal}, {VTIME_2016.year}.
                </p>
              </div>

              <div className="bg-brand-muted rounded-2xl p-7 border-l-4 border-brand">
                <p className="text-lg text-gray-800 leading-relaxed mb-3 font-medium">
                  {EGM_2025.finding}
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-3">{EGM_2025.basis}</p>
                <p className="text-sm text-gray-500 italic">
                  {EGM_2025.authors} {EGM_2025.journal}, {EGM_2025.year}.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              Worth being precise about what that evidence covers. It is strongest for balance and
              mobility, which are physical outcomes measured with physical tests. It is real but
              smaller for general thinking skills. It is not evidence that any app prevents
              disease. The full picture, including where it runs out, is on our{' '}
              <Link href="/science" className="text-brand underline underline-offset-2 hover:text-brand-dark">
                science page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-brand-muted py-20 px-6 border-b border-brand-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-4 leading-tight">
              How Stridemind differs from seated brain training.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Apps like Lumosity, Elevate, and BrainHQ are screen-based products you use sitting
              down. Stridemind is built the other way round. The comparison below is about the two
              formats rather than about any one product&rsquo;s quality, which is not ours to
              judge.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 text-sm font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                      &nbsp;
                    </th>
                    <th className="text-left p-4 text-sm font-bold text-gray-700 border-b border-gray-200">
                      Seated, screen-based training
                    </th>
                    <th className="text-left p-4 text-sm font-bold text-brand border-b border-gray-200">
                      Stridemind
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row.dimension} className="border-b border-gray-100 last:border-0">
                      <td className="p-4 text-sm font-semibold text-gray-900 align-top">
                        {row.dimension}
                      </td>
                      <td className="p-4 text-sm text-gray-600 leading-relaxed align-top">
                        {row.seated}
                      </td>
                      <td className="p-4 text-sm text-gray-700 leading-relaxed align-top">
                        {row.stridemind}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What we do not claim */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-6 leading-tight">
              What Stridemind does not claim.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Having just spent a page on the burden of proof, it would be poor form to skip our
              own. So, plainly:
            </p>
            <ul className="space-y-4">
              {[
                'Stridemind is a wellness app, not a medical device, and it does not diagnose, treat, or prevent any condition.',
                'It makes no claim about dementia, Alzheimer’s disease, or cognitive decline as a diagnosis.',
                'The research behind the method was conducted on dual-task training programmes in general, not on this app specifically. No trial has tested Stridemind itself.',
                'The evidence for improved balance and mobility is considerably stronger than the evidence for fewer falls, which rests on a smaller number of studies.',
                'If you have a diagnosed balance condition or have fallen recently, the right first step is your doctor or a physical therapist, not an app.',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-lg text-gray-700 leading-relaxed">
                  <span className="text-brand font-bold flex-shrink-0 pt-0.5" aria-hidden="true">
                    &middot;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Q&A */}
        <section className="bg-brand-muted py-20 px-6 border-b border-brand-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-10 leading-tight">
              Common questions
            </h2>
            <div className="space-y-4">
              {QA.map((item) => (
                <div
                  key={item.q}
                  className="bg-white rounded-2xl p-7 border border-brand-light shadow-sm"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6" style={{ backgroundColor: '#166534' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
              Try it on a walk you were taking anyway.
            </h2>
            <p className="text-xl text-green-100 mb-9 leading-relaxed">
              Stridemind is free to download on iPhone, the first strides are free to train with,
              and there is no trial that quietly turns into a charge.
            </p>
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
          </div>
        </section>
      </div>
    </>
  );
}
