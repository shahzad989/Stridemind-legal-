import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Stridemind: Fall Prevention',
  description:
    'Who builds Stridemind, why it exists, and the rules we follow when we make claims about fall prevention and cognitive training.',
  alternates: { canonical: 'https://stridemind.app/about' },
  openGraph: {
    title: 'About Stridemind',
    description:
      'Who builds Stridemind, why it exists, and the rules we follow when we make claims.',
    url: 'https://stridemind.app/about',
  },
};

// The Person node carries a stable @id so the BlogPosting author objects can
// point here; a named human with a page of their own is a much stronger
// authorship signal than a bare name string. Biographical content is limited
// to what is recorded and true (independent developer, the evidence-practice
// gap that motivated the app); no credentials or history are invented.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://stridemind.app/about#page',
  url: 'https://stridemind.app/about',
  name: 'About Stridemind',
  isPartOf: { '@id': 'https://stridemind.app/#website' },
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://stridemind.app/about#founder',
    name: 'Ibrahim Shahzad',
    jobTitle: 'Founder, Stridemind',
    url: 'https://stridemind.app/about',
    worksFor: { '@id': 'https://stridemind.app/#organization' },
  },
};

// The claims-discipline list below is not marketing; each line is a real,
// enforced rule from this site's own contribution guidelines. Publishing the
// rules is itself the trust signal: this audience asks "says who?" first.
const CLAIM_RULES = [
  {
    title: 'Claims belong to the research, not the app.',
    body: 'When we say dual-task training improves balance, we are describing what published trials found about the training method. We do not claim that Stridemind itself guarantees you a clinical outcome, because no study has tested Stridemind itself yet.',
  },
  {
    title: 'Every number traces to a named study.',
    body: 'Each figure on this site, from the 44-study meta-analysis to the 42 percent lower fall rate in the V-TIME trial, is quoted from a specific peer-reviewed paper listed on our science page. When we could not verify a number against the published paper, we removed it.',
  },
  {
    title: 'No invented praise.',
    body: 'You will not find testimonials, star ratings, or "most popular" badges here until they come from real, verifiable users. We would rather look small than make things up.',
  },
  {
    title: 'The website matches the app.',
    body: 'If a feature is not in the app, it is not on this site. The pricing shown here is the pricing in the App Store, and there is no free trial to forget about, because the app does not have one.',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-24">
        {/* Hero */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              About
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              Why Stridemind exists
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stridemind began with a gap that made no sense: decades of clinical research on a
              training method that works, and no practical way for anyone outside a lab to use it.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-brand-muted py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Stridemind is built by one person, not a company of hundreds. My name is Ibrahim
              Shahzad, and I came across the research on dual-task walking training the way most
              people find things now, by following a thread of curiosity through published
              studies. What I found surprised me. Trial after trial showed that giving the mind
              real work to do during a walk improves balance and everyday mobility in older
              adults, and one landmark trial found a 42 percent lower fall rate from adding a
              cognitive layer to otherwise identical exercise.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Then I went looking for an app that applied it, and there wasn&rsquo;t one. There
              were brain games that keep you seated and staring at a screen, and there were
              walking apps that count steps and say nothing to your mind. The method the
              research kept pointing to, thinking and walking at the same time, lived only in
              physiotherapy clinics and university labs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stridemind is my attempt to close that gap: audio-guided sessions that give your
              mind its work through your earphones while you walk, with your eyes up and your
              phone in your pocket. It is built for adults 55 and over, and every design choice
              in it, from the calm narration to the monthly check-in, follows from respect for
              the people using it.
            </p>
          </div>
        </section>

        {/* Claims discipline */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                How We Make Claims
              </span>
              <h2 className="font-display text-4xl text-gray-900 leading-tight mb-4">
                The rules this site is written by
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Health claims aimed at older adults deserve more care than marketing usually
                gives them. These are the standing rules for every page here, and you are invited
                to hold us to them.
              </p>
            </div>
            <div className="space-y-5">
              {CLAIM_RULES.map((rule) => (
                <div key={rule.title} className="bg-brand-muted rounded-2xl p-7 border border-brand-light">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{rule.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{rule.body}</p>
                </div>
              ))}
            </div>
            <p className="text-base text-gray-600 leading-relaxed mt-8">
              Every study we rely on is quoted and cited on{' '}
              <Link href="/science" className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors">
                the science page
              </Link>
              , so you can check our reading against the papers themselves.
            </p>
          </div>
        </section>

        {/* What it is and is not */}
        <section className="bg-brand-muted py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl text-gray-900 leading-tight mb-4">
              What Stridemind is, and what it is not
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stridemind is a wellness app. It applies a well-evidenced training method for
              people who want to stay active, keep their mind engaged, and reduce their risk of
              falling as they age. It is not a medical device, it does not diagnose or treat any
              condition, and it is not a substitute for a doctor or physical therapist. If you
              have a diagnosed balance condition or a recent fall behind you, please talk with
              your physician before starting, as many people use Stridemind alongside that care.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl text-gray-900 mb-4">Talk to a person</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Questions, problems, and honest criticism all reach the same inbox, and I read all
              of it.
            </p>
            <a
              href="mailto:appstridemind@gmail.com"
              className="inline-flex items-center justify-center bg-brand text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-brand-dark transition-colors"
            >
              appstridemind@gmail.com
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
