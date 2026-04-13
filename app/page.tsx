import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyDualTask from '@/components/sections/WhyDualTask';
import TheScience from '@/components/sections/TheScience';
import WhoItsFor from '@/components/sections/WhoItsFor';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CallToAction from '@/components/sections/CallToAction';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://stridemind.app/#webpage',
  url: 'https://stridemind.app',
  name: 'StrideMind: Fall Prevention — Train Your Brain While Walking',
  isPartOf: { '@id': 'https://stridemind.app/#website' },
  about: { '@id': 'https://stridemind.app/#app' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.hero-description', '#faq', '#science'],
  },
};

const scholarlyArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  '@id': 'https://stridemind.app/#egm-2025-meta-analysis',
  headline:
    'Effects of dual-task walking training on fall risk and cognitive function in older adults: a systematic review and meta-analysis',
  description:
    'A systematic review and meta-analysis of 28+ randomized controlled trials involving 2,782 participants examining the effects of combined cognitive-motor (dual-task) walking training on fall risk, gait stability, and cognitive function in adults aged 55 and older.',
  publisher: {
    '@type': 'Organization',
    name: 'European Geriatric Medicine',
  },
  datePublished: '2025',
  about: [
    { '@type': 'Thing', name: 'dual-task walking training' },
    { '@type': 'Thing', name: 'fall prevention' },
    { '@type': 'Thing', name: 'cognitive function in older adults' },
    { '@type': 'Thing', name: 'gait stability' },
  ],
  isBasedOn: {
    '@type': 'MedicalStudy',
    studyDesign: 'Randomized Controlled Trial',
    studySubject: {
      '@type': 'MedicalCondition',
      name: 'Fall risk in older adults',
    },
  },
  citation:
    'European Geriatric Medicine, 2025. Meta-analysis of dual-task walking interventions: 28+ RCTs, 2,782 participants.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is dual-task walking training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dual-task walking training means performing a cognitive task — such as number recall, pattern recognition, or memory challenges — while walking at the same time. This combination trains the brain and body to coordinate under real-world conditions, which is exactly the challenge older adults face when navigating everyday environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can StrideMind really reduce fall risk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The approach behind StrideMind is backed by 28+ randomized controlled trials involving 2,782 participants, with a meta-analysis published in European Geriatric Medicine in 2025. Evidence consistently shows that dual-task walking training improves gait stability and reduces the cognitive-motor interference that leads to falls.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cognitive tasks does StrideMind use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "StrideMind uses audio-delivered cognitive challenges including number drills, pattern recall, memory sequences, and speed-based recall tasks. All exercises are delivered through your earphones so you can keep your phone in your pocket and eyes up while you walk.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long until I see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clinical studies show measurable improvements in gait and dual-task performance within 6–8 weeks of consistent training. Most users report feeling more confident and mentally sharp during walks within the first few sessions. Consistency — a few sessions per week — matters more than session length.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is StrideMind safe for someone with mild cognitive impairment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'StrideMind is a wellness app, not a medical device, and is not intended to diagnose or treat any condition. Many users with mild cognitive concerns use it under physical therapist or physician guidance. If you have a diagnosis, please consult your healthcare provider before starting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes StrideMind different from other brain training apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most brain training apps are screen-based and sedentary. StrideMind is built specifically for movement — the cognitive exercises are designed to be done while walking, which is the only form of training proven to reduce fall risk through dual-task interference. It's audio-first, requires no screen interaction during sessions, and is designed specifically for adults 55+.",
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Do Dual-Task Walking Training with StrideMind',
  description:
    'Dual-task walking training combines a cognitive challenge with physical walking to improve balance and reduce fall risk in adults 55+. Follow these steps to get started with StrideMind.',
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
      name: 'Open StrideMind and select a protocol',
      text: 'Launch the StrideMind app on your iPhone, browse the protocol library, and choose a session that matches your current intensity level. Put your earphones in before you head out.',
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
      text: "Respond to the audio prompts — recalling numbers, identifying patterns, or completing memory tasks — without stopping or slowing your walk. This simultaneous demand is the training stimulus that builds fall resistance and cognitive resilience.",
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
      <Pricing />
      <FAQ />
      <CallToAction />
    </>
  );
}
