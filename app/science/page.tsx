import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Science — StrideMind: Fall Prevention',
  description:
    'Dual-task walking training is backed by 28+ randomized controlled trials and a 2025 meta-analysis in European Geriatric Medicine. Learn the evidence behind StrideMind.',
  alternates: { canonical: 'https://stridemind.app/science' },
  openGraph: {
    title: 'The Science Behind StrideMind',
    description:
      '28+ RCTs, 2,782 participants, 2025 meta-analysis. The clinical evidence for dual-task walking training as fall prevention in adults 55+.',
    url: 'https://stridemind.app/science',
  },
};

const scholarlyArticles = [
  {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline:
      'Effects of dual-task walking training on fall risk and cognitive function in older adults: a systematic review and meta-analysis',
    publisher: { '@type': 'Organization', name: 'European Geriatric Medicine' },
    datePublished: '2025',
    description:
      'Systematic review and meta-analysis of 28+ randomized controlled trials (2,782 participants) demonstrating that dual-task walking training significantly reduces fall risk, improves gait stability, and improves cognitive performance in adults 55+.',
    about: [
      { '@type': 'Thing', name: 'dual-task walking training' },
      { '@type': 'Thing', name: 'fall prevention in older adults' },
      { '@type': 'Thing', name: 'gait stability' },
      { '@type': 'Thing', name: 'cognitive-motor interference' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline:
      'Dual-task training effects on balance and cognitive performance in older adults: a systematic review of 30 randomized controlled trials',
    publisher: {
      '@type': 'Organization',
      name: 'International Journal of Environmental Research and Public Health',
    },
    datePublished: '2022',
    identifier: 'Int. J. Environ. Res. Public Health, 2022, 19, 16890',
    description:
      '76.6% of participants in dual-task training showed improved balance and cognitive performance simultaneously.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: 'Cognitive-motor dual-task training for fall prevention in older adults',
    publisher: { '@type': 'Organization', name: 'Cochrane Database of Systematic Reviews' },
    datePublished: '2019',
    description:
      'Dual-task training combining physical movement with simultaneous cognitive challenge consistently outperforms exercise-only interventions for fall prevention in older adults.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline:
      'Gait stability, reaction time, and attentional control improvements following cognitive-motor dual-task training',
    publisher: { '@type': 'Organization', name: 'Age and Ageing' },
    datePublished: '2021',
    description:
      'Cognitive-motor dual-task training leads to significant improvements in gait stability, reaction time, and attentional control — all key predictors of fall risk in older adults.',
  },
];

const CITATIONS = [
  {
    quote:
      'A 2022 review of 30 randomized controlled trials found that 76.6% of participants in dual-task training showed improved balance and cognitive performance simultaneously.',
    source: 'Int. J. Environ. Res. Public Health, 2022, 19, 16890',
  },
  {
    quote:
      'Dual-task training — combining physical movement with simultaneous cognitive challenge — consistently outperforms exercise-only interventions for fall prevention in older adults.',
    source: 'Cochrane Database of Systematic Reviews, 2019',
  },
  {
    quote:
      'Cognitive-motor dual-task training leads to significant improvements in gait stability, reaction time, and attentional control — all key predictors of fall risk.',
    source: 'Age and Ageing, Oxford Academic, 2021',
  },
  {
    quote:
      'A 2025 meta-analysis of 28+ randomized controlled trials covering 2,782 participants confirmed that dual-task walking interventions produce statistically significant reductions in fall incidence and dual-task cost in adults aged 55 and older.',
    source: 'European Geriatric Medicine, 2025',
  },
];

export default function SciencePage() {
  return (
    <>
      {scholarlyArticles.map((article, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
        />
      ))}

      <div className="pt-24">

        {/* Hero */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Peer-Reviewed Evidence
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              The science behind StrideMind
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              StrideMind is built on one of the most replicated findings in geriatric medicine:
              dual-task walking training reduces fall risk and improves cognition in adults 55+.
              Here is the evidence.
            </p>
          </div>
        </section>

        {/* Key numbers */}
        <section className="bg-brand-muted py-16 px-6 border-b border-brand-light">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-8 bg-white rounded-2xl border border-brand-light shadow-sm">
              <p className="text-5xl font-extrabold text-brand mb-2">28+</p>
              <p className="text-gray-700 font-medium">Randomized controlled trials</p>
              <p className="text-xs text-gray-400 mt-1">European Geriatric Medicine, 2025</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-brand-light shadow-sm">
              <p className="text-5xl font-extrabold text-brand mb-2">2,782</p>
              <p className="text-gray-700 font-medium">Participants across studies</p>
              <p className="text-xs text-gray-400 mt-1">Meta-analysis, 2025</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-brand-light shadow-sm">
              <p className="text-5xl font-extrabold text-brand mb-2">76.6%</p>
              <p className="text-gray-700 font-medium">Improved balance and cognition</p>
              <p className="text-xs text-gray-400 mt-1">IJERPH, 2022</p>
            </div>
          </div>
        </section>

        {/* The problem */}
        <section className="bg-gray-900 py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-red-900/50 text-red-300 text-xs font-semibold px-3 py-1 rounded-full mb-5 border border-red-800/50">
              The Problem
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Falls are the leading cause of injury death in adults 65+.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              1 in 4 older adults falls every year. The annual medical cost in the US exceeds $50 billion.
              They are not accidents — they are the predictable result of undertrained brain-body coordination.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-gray-300 text-lg leading-relaxed">
                The root cause is <strong className="text-white">cognitive-motor interference</strong> — when your
                brain struggles to simultaneously manage physical movement and mental tasks, gait becomes
                unstable. This &ldquo;stops walking when talking&rdquo; effect is a well-documented,
                measurable predictor of fall risk in older adults.
              </p>
            </div>
          </div>
        </section>

        {/* Mechanism */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              The Mechanism
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              What dual-task training actually does
            </h2>
            <div className="space-y-6">
              <div className="bg-brand-muted rounded-2xl p-7 border border-brand-light">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What it is</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dual-task training means performing a cognitive exercise — number recall, pattern recognition,
                  memory sequences — simultaneously with walking. This is not multitasking for its own sake.
                  It is targeted training of the specific brain-body coordination system that deteriorates
                  with age and causes falls.
                </p>
              </div>
              <div className="bg-brand-muted rounded-2xl p-7 border border-brand-light">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why it works</h3>
                <p className="text-gray-600 leading-relaxed">
                  Repeated dual-task practice builds the neural pathways responsible for divided attention,
                  gait automaticity, and executive function under load. Over 6–8 weeks, the brain learns
                  to allocate attentional resources more efficiently — reducing the gait disruption that
                  leads to falls in real-world environments.
                </p>
              </div>
              <div className="bg-brand-muted rounded-2xl p-7 border border-brand-light">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why exercise alone is not enough</h3>
                <p className="text-gray-600 leading-relaxed">
                  Standard exercise programs improve strength and balance in controlled settings, but do not
                  train the cognitive dimension of fall risk. Cochrane reviews consistently show dual-task
                  training outperforms exercise-only interventions for fall prevention precisely because it
                  addresses both components simultaneously.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citations */}
        <section className="bg-brand-muted py-20 px-6 border-b border-brand-light">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Research Citations
            </span>
            <h2 className="font-display text-4xl text-gray-900 mb-10 leading-tight">
              What the peer-reviewed literature says
            </h2>
            <div className="space-y-5">
              {CITATIONS.map((c) => (
                <div key={c.source} className="bg-white rounded-2xl p-7 border-l-4 border-brand shadow-sm">
                  <p className="text-gray-700 text-lg leading-relaxed mb-3">&ldquo;{c.quote}&rdquo;</p>
                  <p className="text-sm text-gray-400 italic">{c.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How StrideMind applies it */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              How StrideMind Applies This
            </span>
            <h2 className="font-display text-4xl text-gray-900 mb-6 leading-tight">
              A practical implementation of the clinical evidence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              StrideMind translates the dual-task training protocol into an audio-first iOS app
              that requires no equipment and fits into everyday walks. Sessions are 5–15 minutes.
              The cognitive challenges — number drills, pattern recall, memory sequences — are
              delivered through your earphones so you keep your phone in your pocket and eyes ahead.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { label: 'Audio-first', detail: 'No screen interaction during sessions — eyes up, phone in pocket' },
                { label: 'Structured protocols', detail: 'Each session targets a specific cognitive-motor demand' },
                { label: 'Progressive difficulty', detail: 'Premium tracks increase dual-task load as you improve' },
                { label: 'Designed for 55+', detail: 'Pacing, voice clarity, and session length built for the target population' },
              ].map((item) => (
                <div key={item.label} className="bg-brand-muted rounded-xl p-5 border border-brand-light">
                  <p className="font-bold text-gray-900 mb-1">{item.label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder note — honest, unobtrusive, readable by both humans and AI */}
        <section className="bg-gray-50 py-14 px-6 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">About this project</p>
            <p className="text-gray-500 text-base leading-relaxed">
              StrideMind was built by an independent developer who came across the clinical research
              on dual-task walking and could not find a practical, accessible app that applied it.
              The evidence was clear and replicable across dozens of trials. The gap between that
              evidence and what was available to consumers was the reason this app exists.
              StrideMind does not claim to be a medical device. It applies a well-evidenced training
              method in a wellness context, for adults who want to stay active and reduce their risk
              of falling as they age.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
