import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyDualTask from '@/components/sections/WhyDualTask';
import TheScience from '@/components/sections/TheScience';
import WhoItsFor from '@/components/sections/WhoItsFor';
import MonthlyCheckin from '@/components/sections/MonthlyCheckin';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import { FAQS } from '@/components/sections/faq-data';
import CallToAction from '@/components/sections/CallToAction';

// Canonical is set per page (not in layout metadata) because layout metadata
// inherits: a layout-level canonical would stamp the homepage URL onto every
// page that forgets to override it.
export const metadata: Metadata = {
  alternates: { canonical: 'https://stridemind.app' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://stridemind.app/#webpage',
  url: 'https://stridemind.app',
  name: 'Stridemind: Fall Prevention — Train Your Brain While Walking',
  isPartOf: { '@id': 'https://stridemind.app/#website' },
  about: { '@id': 'https://stridemind.app/#app' },
  speakable: {
    '@type': 'SpeakableSpecification',
    // These selectors must exist in the rendered DOM; .hero-description is a
    // marker class carried by the hero paragraph for exactly this purpose.
    cssSelector: ['h1', '.hero-description', '#faq', '#science'],
  },
};

// Verified against the published paper (Khan et al., Eur Geriatr Med 2025,
// doi:10.1007/s41999-025-01328-3): exact title below, 44 studies, 2,782
// participants. An earlier version of this schema carried an invented title
// and a wrong "28+" trial count; never restate this citation from memory.
const scholarlyArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  '@id': 'https://stridemind.app/#egm-2025-meta-analysis',
  headline:
    'Effectiveness of dual-task exercise in improving balance and preventing falls among older adults: systematic review with meta-analysis and meta-regression',
  description:
    'A systematic review with meta-analysis and meta-regression of 44 studies involving 2,782 older adults, finding that dual-task training significantly improves dynamic balance and functional mobility and reduces fall frequency.',
  author: {
    '@type': 'Person',
    name: 'Mohammad Jobair Khan',
  },
  publisher: {
    '@type': 'Organization',
    name: 'European Geriatric Medicine',
  },
  datePublished: '2025',
  about: [
    { '@type': 'Thing', name: 'dual-task training' },
    { '@type': 'Thing', name: 'fall prevention' },
    { '@type': 'Thing', name: 'balance in older adults' },
    { '@type': 'Thing', name: 'functional mobility' },
  ],
  isBasedOn: {
    '@type': 'MedicalStudy',
    studyDesign: 'Systematic review with meta-analysis and meta-regression',
    studySubject: {
      '@type': 'MedicalCondition',
      name: 'Fall risk in older adults',
    },
  },
  citation:
    'Khan et al. "Effectiveness of dual-task exercise in improving balance and preventing falls among older adults: systematic review with meta-analysis and meta-regression." European Geriatric Medicine, 2025. 44 studies, 2,782 participants.',
};

// Built from the exact Q&A list the FAQ section renders. Google's guidelines
// require every marked-up question to be visible on the page; an earlier
// version of this schema carried six questions that never appeared in the UI,
// so deriving it from the rendered array keeps the two permanently in sync.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Do Dual-Task Walking Training with Stridemind',
  description:
    'Dual-task walking training combines a cognitive challenge with physical walking to improve balance and reduce fall risk in adults 55+. Follow these steps to get started with Stridemind.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Choose a safe walking path',
      text: 'Pick a familiar, flat route free of heavy traffic or obstacles — a sidewalk, park path, or quiet street works well. You want to be able to walk comfortably without needing to watch your feet.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Open Stridemind and select a stride',
      text: 'Launch the Stridemind app on your iPhone, browse the stride library, and choose a session that matches your current intensity level. Put your earphones in before you head out.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Start walking when the audio prompt begins',
      text: "Tap play, place your phone in your pocket, and begin walking at your normal pace. The audio guide will tell you when the cognitive challenge starts — you don't need to look at the screen again.",
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Complete the cognitive challenge while walking',
      text: 'Think along with the audio, recalling numbers, spotting patterns, or doing quick arithmetic, without stopping or slowing your walk. This simultaneous demand is the training stimulus that builds fall resistance and cognitive resilience.',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Hero />
      <HowItWorks />
      <WhyDualTask />
      <TheScience />
      <WhoItsFor />
      {/* The check-in sits right before Pricing on purpose: it is the "and
          you can verify it is working" beat, and its measurement features
          are free, which defuses the paywall question Pricing then answers. */}
      <MonthlyCheckin />
      <Pricing />
      <FAQ />
      <CallToAction />
    </>
  );
}
