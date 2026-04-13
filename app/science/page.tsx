import type { Metadata } from 'next';
import ScienceContent from './ScienceContent';

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
      <ScienceContent />
    </>
  );
}
