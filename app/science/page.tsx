import type { Metadata } from 'next';
import ScienceContent from './ScienceContent';
import { SCIENCE_QA } from './qa';
import { ALL_CITATIONS, EVIDENCE_LAST_VERIFIED } from '@/lib/citations';

// The title used to be "The Science — Stridemind: Fall Prevention", which only
// matches a search by someone who already knows the brand. People and answer
// engines ask whether the method works, so the title is now that question. The
// brand still appears, just after the thing being asked about.
export const metadata: Metadata = {
  title: 'Does Dual-Task Training Prevent Falls? What 44 Trials Found | Stridemind',
  description:
    'A 2025 meta-analysis of 44 randomised trials found dual-task training improves balance and mobility in older adults. Here is the evidence, the effect sizes, and where it runs out.',
  alternates: { canonical: 'https://stridemind.app/science' },
  openGraph: {
    title: 'Does Dual-Task Training Prevent Falls? What 44 Trials Found',
    description:
      '44 trials, 2,782 participants, and an honest account of where the evidence is weaker. The research behind dual-task training for adults 55+.',
    url: 'https://stridemind.app/science',
    type: 'article',
    modifiedTime: EVIDENCE_LAST_VERIFIED,
    // The file-convention OG image only attaches to the homepage segment, so
    // every non-blog page must reference the generated image explicitly or
    // link previews render with no image at all.
    images: [{ url: 'https://stridemind.app/opengraph-image', width: 1200, height: 630 }],
  },
};

// All six ScholarlyArticle nodes are generated from lib/citations.ts rather
// than retyped here. The descriptions below used to be a second hand-written
// copy of every figure on the page, and they drifted: the Cochrane node
// repeated the same wrong denominator the visible copy had, and the Gavelin
// node attached a pooled effect size to the wrong comparison. Generating them
// makes that class of bug impossible.
const scholarlyArticles = ALL_CITATIONS.map((c) => ({
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: c.title,
  author: { '@type': 'Person', name: c.authors },
  publisher: { '@type': 'Organization', name: c.journal },
  datePublished: c.year,
  ...(c.doi ? { identifier: `https://doi.org/${c.doi}` } : {}),
  url: c.url,
  description: `${c.finding} ${c.basis}`,
  about: [
    { '@type': 'Thing', name: 'dual-task training' },
    { '@type': 'Thing', name: 'fall prevention in older adults' },
  ],
}));

// Article schema carries dateModified, which is the freshness signal that
// actually gets read. It points at the evidence verification date rather than
// the build date, so it only moves when the citations are genuinely rechecked.
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://stridemind.app/science#article',
  headline: 'Does Dual-Task Training Prevent Falls? What 44 Trials Found',
  description:
    'The clinical evidence for dual-task walking training as fall prevention in adults 55+, with the effect sizes, the study counts behind each figure, and the limits of the research.',
  mainEntityOfPage: 'https://stridemind.app/science',
  dateModified: EVIDENCE_LAST_VERIFIED,
  author: {
    '@type': 'Person',
    '@id': 'https://stridemind.app/about#founder',
    name: 'Ibrahim Shahzad',
  },
  publisher: { '@id': 'https://stridemind.app/#organization' },
  citation: ALL_CITATIONS.map((c) => c.reference),
};

// Derived from the same array the page renders, so every marked-up question is
// visible on the page as Google requires, and the two can never drift.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SCIENCE_QA.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function SciencePage() {
  return (
    <>
      {[...scholarlyArticles, articleSchema, faqSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ScienceContent />
    </>
  );
}
