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
      'A Systematic Review Exploring the Theories Underlying the Improvement of Balance and Reduction in Falls Following Dual-Task Training among Older Adults',
    publisher: {
      '@type': 'Organization',
      name: 'International Journal of Environmental Research and Public Health',
    },
    datePublished: '2022',
    identifier: 'Int. J. Environ. Res. Public Health, 2022, 19, 16890',
    author: { '@type': 'Person', name: 'Khan et al.' },
    description:
      '23 of 30 studies (76.6%) reported improvements in balance after dual-task training in older adults; 5 of 30 reported a reduction in fall incidence.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: 'Exercise for preventing falls in older people living in the community',
    publisher: { '@type': 'Organization', name: 'Cochrane Database of Systematic Reviews' },
    datePublished: '2019',
    author: { '@type': 'Person', name: 'Sherrington et al.' },
    description:
      'Meta-analysis of 108 trials (23,407 participants) found that exercise programmes — especially balance and functional training — reduce fall rates by ~23% and the proportion of people who fall by ~15% versus non-exercise controls.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline:
      'Strength-balance supplemented with computerized cognitive training to improve dual task gait and divided attention in older adults: a multicenter randomized-controlled trial',
    publisher: { '@type': 'Organization', name: 'BMC Geriatrics' },
    datePublished: '2014',
    author: { '@type': 'Person', name: 'van het Reve & de Bruin' },
    description:
      'Adding cognitive training to strength-balance exercise improved dual-task gait, reaction time, executive function, divided attention, fear of falling, and fall rates compared with strength-balance alone in 182 older adults (mean age 81.5).',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline:
      'Addition of a non-immersive virtual reality component to treadmill training to reduce fall risk in older adults (V-TIME)',
    publisher: { '@type': 'Organization', name: 'The Lancet' },
    datePublished: '2016',
    author: { '@type': 'Person', name: 'Mirelman et al.' },
    description:
      'In 302 high-risk older adults, treadmill training plus a cognitive VR layer (obstacles, distractors, path choices) produced a 42% lower fall rate over 6 months versus treadmill training alone (IRR 0.58, 95% CI 0.36–0.96).',
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
