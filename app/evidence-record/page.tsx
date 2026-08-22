import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BARBAN_2017,
  CDC_FALLS,
  COCHRANE_2019,
  EGM_2025,
  EVIDENCE_LAST_VERIFIED,
  GAVELIN_2021,
  IJERPH_2022,
  VAN_HET_REVE_2014,
  VTIME_2016,
  WOLLESEN_2017,
} from '@/lib/citations';

// WHY THIS PAGE EXISTS
// The corrections below already lived as code comments in lib/citations.ts,
// visible only to whoever opened that file. Nobody else researching this
// topic, no journalist, no PT, no AI system's verification pass, could see
// that work. This page is that same record made public: every place a claim
// on this site or in a source paper turned out to need a correction, dated,
// with the exact figures. Every sentence below restates something already
// verified in lib/citations.ts; nothing here is a new claim.
//
// Nothing on this page is invented or summarized from memory. If a future
// correction lands in lib/citations.ts, add it here in the same breath.

export const metadata: Metadata = {
  title: 'The Evidence Record — Corrections to Our Research Claims | Stridemind',
  description:
    'Every correction we have made to a research claim on this site, dated, with the exact figures, plus two places the published papers contradict themselves.',
  alternates: { canonical: 'https://stridemind.app/evidence-record' },
  openGraph: {
    title: 'The Evidence Record — Corrections to Our Research Claims',
    description:
      'A public log of every research claim we have corrected, dated and sourced, plus what we found when we read past the abstracts.',
    url: 'https://stridemind.app/evidence-record',
    images: [{ url: 'https://stridemind.app/opengraph-image', width: 1200, height: 630 }],
  },
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://stridemind.app/evidence-record#webpage',
  url: 'https://stridemind.app/evidence-record',
  name: 'The Evidence Record',
  description:
    'A dated, itemized record of every correction made to research claims on stridemind.app, and of two self-contradictions found in the published source papers.',
  isPartOf: { '@id': 'https://stridemind.app/#website' },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://stridemind.app/evidence-record#article',
  headline: 'The Evidence Record: Corrections to Our Research Claims',
  description:
    'Every correction made to a research claim on stridemind.app, dated, with the exact figures, plus two places the published source papers contradict themselves.',
  mainEntityOfPage: 'https://stridemind.app/evidence-record',
  dateModified: EVIDENCE_LAST_VERIFIED,
  author: {
    '@type': 'Person',
    '@id': 'https://stridemind.app/about#founder',
    name: 'Ibrahim Shahzad',
  },
  publisher: { '@id': 'https://stridemind.app/#organization' },
  citation: [
    COCHRANE_2019.reference,
    VAN_HET_REVE_2014.reference,
    GAVELIN_2021.reference,
    BARBAN_2017.reference,
    WOLLESEN_2017.reference,
    IJERPH_2022.reference,
    EGM_2025.reference,
    VTIME_2016.reference,
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stridemind.app' },
    { '@type': 'ListItem', position: 2, name: 'The Evidence Record' },
  ],
};

interface CorrectionEntry {
  study: string;
  before: string;
  after: string;
  detail: string;
  source: string;
  url: string;
}

const SITE_CORRECTIONS: CorrectionEntry[] = [
  {
    study: 'Sherrington et al., Cochrane Database of Systematic Reviews, 2019',
    before:
      'We wrote that exercise programmes "reduce fall rates by about 23%... across 108 trials and 23,407 participants."',
    after:
      'Both numbers are real, and both appear in the review’s abstract, but they do not belong together. The review covered 108 randomized trials and 23,407 participants in total. The 23% rate reduction is pooled from a smaller subset: 59 studies, 12,981 participants. Attaching the review’s full size to a subset’s effect size overstated the evidence behind the number by roughly double.',
    detail:
      'We now lead with the balance-and-functional-exercise subgroup instead, the one the review’s own conclusion singles out: 39 studies, 7,920 participants, a 24% rate reduction (rate ratio 0.76, 95% CI 0.70 to 0.81).',
    source: COCHRANE_2019.reference,
    url: COCHRANE_2019.url,
  },
  {
    study: 'van het Reve & de Bruin, BMC Geriatrics, 2014',
    before:
      'We wrote that adding cognitive training to strength-balance exercise "lowered fear of falling and fall rates compared with strength-balance training alone."',
    after:
      'It did not. Fear of falling and fall rate both improved significantly within each group (p < 0.001 each), but the paper states plainly there was "no significant interaction between the groups for the falls parameter," and no interaction for fear of falling either.',
    detail:
      'What the cognitive layer did add, measurably: sharper dual-task step length, gait initiation, reaction time, and divided attention, in 182 older adults averaging age 81.5.',
    source: VAN_HET_REVE_2014.reference,
    url: VAN_HET_REVE_2014.url,
  },
  {
    study: 'Gavelin et al., Ageing Research Reviews, 2021',
    before:
      'Our structured data attached the effect size Hedges g = 0.22 directly to simultaneous physical-and-cognitive training.',
    after:
      'That number belongs to any combined training against a control, across 41 comparisons in the network meta-analysis, not to simultaneous training specifically. Simultaneous training’s advantage is a ranking within that network, not a separate effect size.',
    detail: 'We have split the two apart everywhere this citation appears.',
    source: GAVELIN_2021.reference,
    url: GAVELIN_2021.url,
  },
  {
    study: 'Barban et al., Brain Sciences, 2017 (I-DONT-FALL)',
    before: 'We credited this trial with "some persistence at three-month follow-up."',
    after:
      'The paper says the opposite about the motor-training effect: fear-of-falling scores in the combined group drifted from 29.7 back to 30.7 once training stopped (p = 0.031), and the authors write that the motor-training effect "did not last after the end of the treatment."',
    detail:
      'The honest read is more useful than the overclaim was: the benefit depended on continuing, an argument for an ongoing habit rather than a course of treatment.',
    source: BARBAN_2017.reference,
    url: BARBAN_2017.url,
  },
  {
    study: 'Wollesen et al., BMC Geriatrics, 2017',
    before:
      'We described the whole sample as older adults "with concern about falling," and credited the trial with increasing "gait confidence."',
    after:
      'The trial deliberately enrolled people both with and without concern about falling, and its findings split along exactly that line: people who arrived worried got the fear-of-falling benefit; people who did not saw their thinking-while-walking improve instead. Neither group got both. And the trial never measured "gait confidence"; it measured step length and gait line.',
    detail: '95 independent-living older adults, average age 71.5, trained for 12 weeks against a non-training control.',
    source: WOLLESEN_2017.reference,
    url: WOLLESEN_2017.url,
  },
  {
    study: 'Khan et al., IJERPH, 2022',
    before: 'We described the review’s falls figure, 5 of 30 studies reporting a drop in fall frequency, as "17.8% fewer falls."',
    after:
      'That percentage does not exist in the paper. Five-of-thirty is a count of studies that found a reduction, not a pooled effect size. We have corrected it to read as a count everywhere it appears on this site.',
    detail: '',
    source: IJERPH_2022.reference,
    url: IJERPH_2022.url,
  },
  {
    study: 'CDC, Facts About Falls',
    before: 'We carried "$50 billion" as the annual health care cost of non-fatal falls among older adults.',
    after: 'That is the CDC’s 2015 figure. The CDC’s current figure is $80 billion.',
    detail: 'Updated on this site and everywhere it is quoted.',
    source: CDC_FALLS.reference,
    url: CDC_FALLS.url,
  },
];

interface SourceIssue {
  study: string;
  issue: string;
  detail: string;
  source: string;
  url: string;
}

const SOURCE_ISSUES: SourceIssue[] = [
  {
    study: 'Wollesen et al., BMC Geriatrics, 2017',
    issue:
      'The published abstract reports only the step-length result and says nothing about fear of falling. Read only the abstract, and the honest conclusion is that this trial found no fear-of-falling effect.',
    detail:
      'It did find one. The result is in the body text: "The FES-I decreased in people with CoF who had the intervention compared to the control group, and remained unchanged in the no CoF group" (time × group × concern interaction, p = 0.038). Table 2 gives 23.7 to 21.8 in the trained group with concern about falling, against 23.8 to 23.7 in matched controls. We read past the abstract on this one; we would recommend anyone else citing this trial do the same.',
    source: WOLLESEN_2017.reference,
    url: WOLLESEN_2017.url,
  },
  {
    study: 'Khan et al., IJERPH, 2022',
    issue:
      'The paper’s own abstract and its Results section disagree with each other. The abstract states 26 of 30 studies reported improved balance.',
    detail:
      'The Results section states "Twenty-three (76.6%) of the 30 included studies reported improvement in balance." We cite the Results figure, 23, because it is the specific, itemized one; the paper lists all 23 reference numbers inline there. A future correction that "fixes" 23 back to 26 from the abstract would be trading a sourced figure for an unsourced one.',
    source: IJERPH_2022.reference,
    url: IJERPH_2022.url,
  },
];

interface Limit {
  study: string;
  limit: string;
  source: string;
  url: string;
}

const KNOWN_LIMITS: Limit[] = [
  {
    study: 'Khan et al., European Geriatric Medicine, 2025',
    limit:
      'This is the site’s headline citation, 44 randomized controlled trials, 2,782 older adults. The balance and mobility findings rest on the bulk of that review. The falls finding does not: only 6 of the 44 studies measured fall frequency, and all six collected it by self-report, which the authors themselves name as a limitation. We keep the falls claim, because it is real and it is what the review reports, but it is materially weaker evidence than the balance and mobility findings, and we say so wherever the falls figure appears.',
    source: EGM_2025.reference,
    url: EGM_2025.url,
  },
  {
    study: 'Mirelman et al., The Lancet, 2016 (V-TIME)',
    limit:
      'This is the only trial on this site that shows a between-group falls advantage for adding a cognitive task to otherwise identical training, a 42% lower fall rate over six months (incident rate ratio 0.58, 95% CI 0.36 to 0.96). It is one trial. We say "a trial found," never "trials found," anywhere we cite it.',
    source: VTIME_2016.reference,
    url: VTIME_2016.url,
  },
];

function CorrectionCard({ c }: { c: CorrectionEntry }) {
  return (
    <div className="bg-white rounded-2xl p-7 border-l-4 border-brand shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{c.study}</h3>
      <div className="space-y-3">
        <div className="flex gap-3">
          <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-md h-fit mt-0.5">
            We said
          </span>
          <p className="text-gray-700 leading-relaxed">{c.before}</p>
        </div>
        <div className="flex gap-3">
          <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-brand-dark bg-brand-light px-2.5 py-1 rounded-md h-fit mt-0.5">
            Correction
          </span>
          <p className="text-gray-700 leading-relaxed">{c.after}</p>
        </div>
      </div>
      {c.detail && <p className="text-gray-600 leading-relaxed mt-4 text-base">{c.detail}</p>}
      <p className="text-sm text-gray-500 italic mt-4">
        <a
          href={c.url}
          className="text-brand underline underline-offset-2 hover:text-brand-dark not-italic"
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.source}
        </a>
      </p>
    </div>
  );
}

export default function EvidenceRecordPage() {
  return (
    <>
      {[webPageJsonLd, articleJsonLd, breadcrumbJsonLd].map((schema, i) => (
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
              A Public Correction Log
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              The evidence record
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every research claim on this site is checked against the original paper it comes
              from, not a summary of it. This page is the record of what that checking has found:
              every place a claim here needed correcting, dated, with the exact figures, and two
              places the published source papers disagree with themselves.
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
              . See{' '}
              <Link href="/science" className="text-brand-dark hover:text-brand underline">
                the science page
              </Link>{' '}
              for the current, corrected claims themselves.
            </p>
          </div>
        </section>

        {/* Site corrections */}
        <section className="bg-brand-muted py-20 px-6 border-b border-brand-light">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-4 leading-tight">
              Corrections to claims we made
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Each of these was a claim published on stridemind.app that turned out to overstate,
              misattribute, or misdate what its source paper actually found. All were corrected on{' '}
              {new Date(`${EVIDENCE_LAST_VERIFIED}T00:00:00Z`).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC',
              })}
              .
            </p>
            <div className="space-y-5">
              {SITE_CORRECTIONS.map((c) => (
                <CorrectionCard key={c.study} c={c} />
              ))}
            </div>
          </div>
        </section>

        {/* Source-level issues */}
        <section className="bg-gray-900 py-20 px-6 border-b border-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-white mb-4 leading-tight">
              Issues we found in the papers themselves
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              These are not our corrections. They are places the published, peer-reviewed source
              disagrees with itself, or buries a finding somewhere a reader checking only the
              abstract would miss it.
            </p>
            <div className="space-y-5">
              {SOURCE_ISSUES.map((s) => (
                <div key={s.study} className="bg-gray-800/60 rounded-2xl p-7 border-l-4 border-amber-500">
                  <h3 className="text-lg font-bold text-white mb-3">{s.study}</h3>
                  <p className="text-gray-200 leading-relaxed mb-3">{s.issue}</p>
                  <p className="text-gray-300 leading-relaxed">{s.detail}</p>
                  <p className="text-sm text-gray-400 italic mt-4">
                    <a
                      href={s.url}
                      className="text-brand underline underline-offset-2 hover:text-brand-dark not-italic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.source}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Known limits */}
        <section className="bg-white py-20 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-gray-900 mb-4 leading-tight">
              Limits we state plainly, not corrections
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              These two figures are not wrong. They are simply narrower than they can sound out of
              context, so we say the limit next to the number every time it appears.
            </p>
            <div className="space-y-5">
              {KNOWN_LIMITS.map((l) => (
                <div key={l.study} className="bg-white rounded-2xl p-7 border-l-4 border-gray-300 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{l.study}</h3>
                  <p className="text-gray-700 leading-relaxed">{l.limit}</p>
                  <p className="text-sm text-gray-500 italic mt-4">
                    <a
                      href={l.url}
                      className="text-brand underline underline-offset-2 hover:text-brand-dark not-italic"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.source}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology / invite corrections */}
        <section className="bg-brand-muted py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-gray-900 mb-4 leading-tight">
              How this record is kept
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every figure on stridemind.app is checked against the full text of its original
              paper on PubMed or PMC, not against an abstract, a summary, or another site quoting
              it. When a check turns up a problem, whether ours or the paper&apos;s own, it is
              fixed everywhere it appears and logged here with the date. If you find a figure on
              this site that does not match its source, we want to know.
            </p>
            <a
              href="mailto:appstridemind@gmail.com"
              className="inline-block bg-brand text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-dark transition-colors"
            >
              Report a citation issue
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
