// The canonical, verified evidence base for stridemind.app.
//
// WHY THIS FILE EXISTS
// Every research figure on this site used to be retyped by hand in each place
// it appeared: the /science citation cards, the /science JSON-LD, the
// /for-families stat row, five blog posts, llms.txt and ai.txt. That drift is
// exactly how the site ended up publishing a pooled effect size welded to the
// wrong denominator for over a year (see COCHRANE_2019 below). Structured
// surfaces now import from here instead of restating figures, so a correction
// lands everywhere at once.
//
// HOW TO USE IT
// - Structured surfaces (citation cards, JSON-LD, stat rows) import these
//   objects directly. Never retype a number into those.
// - Blog prose can't import a sentence, so posts restate figures by hand. When
//   you write or edit a post, copy the numbers FROM THIS FILE, never from
//   memory and never from another post.
//
// THE RULE THAT MATTERS MOST
// A pooled effect size belongs to the specific set of studies that produced
// it, not to the review that contains it. Reviews routinely report an overall
// scope ("108 trials, 23,407 participants") and then compute each individual
// estimate from a much smaller subset. Quoting the headline scope next to a
// subset estimate is the single easiest way to publish a number that a
// fact-checker, a physical therapist, or an AI system's verification layer can
// catch. Every entry below therefore records the denominator for each figure
// separately from the review's total size.
//
// All figures below were re-verified against the primary sources on
// 2026-08-22 via PubMed/PMC full text. `verifiedOn` records that pass.

export interface Citation {
  /** Short key used in prose and source lists. */
  id: string;
  /** Exact published title. */
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
  pmid?: string;
  /** Where a reader can check it. */
  url: string;
  /** Date this entry was last checked against the primary source. */
  verifiedOn: string;
  /** One-sentence, plain-language statement of what the study found. */
  finding: string;
  /** Exactly what the finding is based on. Always shown next to the finding. */
  basis: string;
  /** Formatted entry for a visible source list. */
  reference: string;
}

// Sherrington 2019 is the strongest single piece of evidence that exercise
// prevents falls, and the one the site most often leans on.
//
// THE CORRECTION (2026-08-22): the site previously stated "reduce fall rates by
// about 23% ... across 108 trials and 23,407 participants." Both numbers are
// real and both appear in the abstract, but they do not belong together. The
// review as a whole included 108 RCTs and 23,407 participants; the
// exercise-versus-control comparison drew on 81 of those trials (19,684
// participants); and the 23% rate reduction is pooled from 59 studies with
// 12,981 participants. Quoting the review's total size beside a subset estimate
// inflated the apparent weight of the finding by roughly double.
//
// We now lead with the balance-and-functional-exercise figure instead of the
// all-exercise figure, because that subgroup is the one the review's own
// conclusion singles out ("Exercise programmes that reduce falls primarily
// involve balance and functional exercises") and it is the closest analogue to
// what Stridemind actually asks people to do. Its denominator is stated with it.
export const COCHRANE_2019: Citation = {
  id: 'sherrington-2019',
  title: 'Exercise for preventing falls in older people living in the community',
  authors: 'Sherrington C, Fairhall NJ, Wallbank GK, et al.',
  journal: 'Cochrane Database of Systematic Reviews',
  year: '2019',
  doi: '10.1002/14651858.CD012424.pub2',
  pmid: '30703272',
  url: 'https://pubmed.ncbi.nlm.nih.gov/30703272/',
  verifiedOn: '2026-08-22',
  finding:
    'Exercise programmes built around balance and functional tasks reduce the rate of falls in older adults by 24% compared with a control group.',
  basis:
    'Rate ratio 0.76, 95% CI 0.70 to 0.81, from 39 studies with 7,920 participants; graded high-certainty evidence. Across all exercise types the reduction is 23% (rate ratio 0.77, 59 studies, 12,981 participants). The full review included 108 randomised trials and 23,407 participants.',
  reference:
    'Sherrington C, et al. Exercise for preventing falls in older people living in the community. Cochrane Database of Systematic Reviews, 2019. Balance and functional exercise: rate ratio 0.76 (39 studies, 7,920 participants).',
};

// The site's headline citation. Verified figures: 44 studies, 2,782 older
// adults, all randomised controlled trials.
//
// PRECISION NOTE (2026-08-22): the balance and mobility findings rest on the
// bulk of the review, but the FALLS finding does not. Only 6 of the 44 studies
// measured fall frequency, and all six collected falls retrospectively by
// self-report, which the authors name as a recall-bias limitation. The review's
// own conclusion asks for more work on dosage for falls specifically. So the
// falls half of this citation is materially weaker than the balance half, and
// anywhere the site makes a falls claim from this paper it should say so. This
// is not a reason to drop the claim; it is the reason to state it precisely.
export const EGM_2025: Citation = {
  id: 'khan-2025',
  title:
    'Effectiveness of dual-task exercise in improving balance and preventing falls among older adults: systematic review with meta-analysis and meta-regression',
  authors: 'Khan MJ, Kannan P, Wong TW, et al.',
  journal: 'European Geriatric Medicine',
  year: '2025',
  doi: '10.1007/s41999-025-01328-3',
  pmid: '41152559',
  url: 'https://pubmed.ncbi.nlm.nih.gov/41152559/',
  verifiedOn: '2026-08-22',
  finding:
    'Dual-task exercise significantly improved dynamic balance and functional mobility in older adults, and reduced how often they fell.',
  basis:
    '44 randomised controlled trials with 2,782 older adults. Balance: mean difference 1.78 on the Berg Balance Scale, 95% CI 0.72 to 2.83. Mobility: mean difference 0.73 seconds on the Timed Up and Go, 95% CI 0.34 to 1.12. The falls result comes from only 6 of the 44 studies, all of which recorded falls by self-report, so it is the least certain of the three.',
  reference:
    'Khan MJ, et al. Effectiveness of dual-task exercise in improving balance and preventing falls among older adults: systematic review with meta-analysis and meta-regression. European Geriatric Medicine, 2025. 44 studies, 2,782 older adults.',
};

// The single cleanest demonstration that the cognitive layer, not the walking,
// is what produces the extra benefit: both arms did identical treadmill work.
// This is the ONLY trial on the site that shows a between-group falls
// advantage for adding a cognitive task, which is why the mechanism copy must
// say "a trial", never "trials" (see VAN_HET_REVE_2014).
export const VTIME_2016: Citation = {
  id: 'mirelman-2016',
  title:
    'Addition of a non-immersive virtual reality component to treadmill training to reduce fall risk in older adults (V-TIME): a randomised controlled trial',
  authors: 'Mirelman A, Rochester L, Maidan I, et al.',
  journal: 'The Lancet',
  year: '2016',
  doi: '10.1016/S0140-6736(16)31325-3',
  pmid: '27524393',
  url: 'https://pubmed.ncbi.nlm.nih.gov/27524393/',
  verifiedOn: '2026-08-22',
  finding:
    'Adding a cognitive challenge to otherwise identical treadmill training produced a 42% lower fall rate over the following six months.',
  basis:
    '302 older adults at high risk of falling across five centres, six weeks of training three times a week. Incident rate ratio 0.58, 95% CI 0.36 to 0.96, p = 0.033. Falls fell from 11.9 to 6.0 per six months in the group with the cognitive layer, and from 10.7 to 8.3 in the treadmill-only group, where the change was not statistically significant.',
  reference:
    'Mirelman A, et al. Addition of a non-immersive virtual reality component to treadmill training to reduce fall risk in older adults (V-TIME): a randomised controlled trial. The Lancet, 2016. 302 participants, incident rate ratio 0.58.',
};

// THE CORRECTION (2026-08-22): the site previously said this trial showed the
// cognitive layer "lowered fear of falling and fall rates compared with
// strength-balance training alone." It did not. Read the statistics carefully:
//
//   - Significant INTERACTION effects (the cognitive layer added something):
//     dual-task costs of step length, gait initiation, reaction time, and
//     divided attention.
//   - Fear of falling and fall rate: significant WITHIN-GROUP improvement in
//     both arms (p < 0.001 each), and the paper states plainly that there was
//     "no significant interaction between the groups for the falls parameter"
//     and for FES-I "no differences were observed between SB and SBC and there
//     was no interaction."
//
// So this trial is evidence that adding cognitive training sharpens dual-task
// walking and divided attention. It is evidence AGAINST claiming the cognitive
// layer adds anything to falls or fear of falling on its own. Keeping it framed
// honestly is worth more than the overclaim was: it is a strength-balance
// programme cutting falls by more than 80% during training, which is a real and
// useful result, and the cognitive layer's genuine contribution is specific and
// measurable. Do not restore the old phrasing.
export const VAN_HET_REVE_2014: Citation = {
  id: 'van-het-reve-2014',
  title:
    'Strength-balance supplemented with computerized cognitive training to improve dual task gait and divided attention in older adults: a multicenter randomized-controlled trial',
  authors: 'van het Reve E, de Bruin ED',
  journal: 'BMC Geriatrics',
  year: '2014',
  doi: '10.1186/1471-2318-14-134',
  pmid: '25511081',
  url: 'https://pubmed.ncbi.nlm.nih.gov/25511081/',
  verifiedOn: '2026-08-22',
  finding:
    'Adding cognitive training to a strength and balance programme produced further gains in dual-task walking, gait initiation and divided attention, beyond what the exercise achieved on its own.',
  basis:
    '182 older adults, average age 81.5, trained for 12 weeks. The added benefit appeared in dual-task step length, gait initiation and divided attention. Fear of falling and fall rate improved significantly in both groups, with no measurable difference between them, so those two gains are credited to the strength and balance training rather than to the cognitive component.',
  reference:
    'van het Reve E, de Bruin ED. Strength-balance supplemented with computerized cognitive training to improve dual task gait and divided attention in older adults: a multicenter randomized-controlled trial. BMC Geriatrics, 2014. 182 older adults, average age 81.5.',
};

// Supports the "training at the same time beats training separately" argument
// for cognition. Read the effect sizes precisely: g = 0.22 is the effect of ANY
// combined intervention against control (k = 41), not the effect of simultaneous
// training specifically. The simultaneous-is-best result is a RANKING within the
// network meta-analysis. The site previously attached g = 0.22 directly to
// simultaneous training in its JSON-LD; that is fixed, and the authors' own
// description of the effect as "small" is kept.
export const GAVELIN_2021: Citation = {
  id: 'gavelin-2021',
  title:
    'Combined physical and cognitive training for older adults with and without cognitive impairment: a systematic review and network meta-analysis of randomized controlled trials',
  authors: 'Gavelin HM, Dong C, Minkov R, et al.',
  journal: 'Ageing Research Reviews',
  year: '2021',
  doi: '10.1016/j.arr.2020.101232',
  pmid: '33249177',
  url: 'https://pubmed.ncbi.nlm.nih.gov/33249177/',
  verifiedOn: '2026-08-22',
  finding:
    'Doing cognitive and physical training at the same time was the most effective of the combined approaches for thinking skills, and significantly better than physical exercise on its own.',
  basis:
    'Network meta-analysis of randomised controlled trials. Any combined training produced a small but significant benefit for overall cognition against control, Hedges g = 0.22, 95% CI 0.14 to 0.30, from 41 comparisons. Within that network, simultaneous training ranked highest for cognition, ahead of sequential training and of cognitive training alone.',
  reference:
    'Gavelin HM, et al. Combined physical and cognitive training for older adults with and without cognitive impairment: a systematic review and network meta-analysis of randomized controlled trials. Ageing Research Reviews, 2021.',
};

// NOTE ON THE NUMBERS (do not "fix" these): this paper's abstract says 26 of 30
// studies reported improved balance, while its Results section says
// "Twenty-three (76.6%) of the 30 included studies reported improvement in
// balance." The published paper contradicts itself. The site cites the Results
// figure because it is the specific, itemised one (the paper lists all 23
// reference numbers inline). A future session that "corrects" 23 to 26 from the
// abstract would be trading a sourced figure for an unsourced one.
//
// The 5-of-30 falls figure is a COUNT OF STUDIES, not an effect size. It has
// been misread on this site before as "17.8% fewer falls". It means five
// studies looked at fall incidence and found a reduction. Never state it as a
// percentage reduction in falls.
export const IJERPH_2022: Citation = {
  id: 'khan-2022',
  title:
    'A Systematic Review Exploring the Theories Underlying the Improvement of Balance and Reduction in Falls Following Dual-Task Training among Older Adults',
  authors: 'Khan MJ, Kannan P, Wong TW, Fong KNK, Winser SJ',
  journal: 'International Journal of Environmental Research and Public Health',
  year: '2022',
  doi: '10.3390/ijerph192416890',
  pmid: '36554771',
  url: 'https://pubmed.ncbi.nlm.nih.gov/36554771/',
  verifiedOn: '2026-08-22',
  finding:
    'Across 30 trials of dual-task training in older adults, 23 reported improved balance and 5 reported a drop in how often people fell.',
  basis:
    '30 randomised and pilot randomised trials. The 23 and the 5 are counts of studies reporting a result, not pooled effect sizes. The review\'s purpose was to identify why dual-task training works, and it settled on attention: training teaches the brain to shift attention between the walking and the thinking as each demands it.',
  reference:
    'Khan MJ, et al. A Systematic Review Exploring the Theories Underlying the Improvement of Balance and Reduction in Falls Following Dual-Task Training among Older Adults. International Journal of Environmental Research and Public Health, 2022, 19, 16890.',
};

// THE CORRECTION (2026-08-22): the site previously credited this trial with
// "some persistence at 3-month follow-up." The group-level effect did remain
// significant at follow-up, but the mixed-training arm's own scores drifted back
// from 29.7 to 30.7 once training stopped (p = 0.031), and the paper says the
// motor-training effect "did not last after the end of the treatment." Framing
// that as persistence was too generous. The honest version is more useful
// anyway: fear of falling responds to training and then fades without it, which
// is an argument for an ongoing habit rather than a course of treatment.
export const BARBAN_2017: Citation = {
  id: 'barban-2017',
  title: 'Reducing Fall Risk with Combined Motor and Cognitive Training in Elderly Fallers',
  authors: 'Barban F, Annicchiarico R, Melideo M, et al.',
  journal: 'Brain Sciences',
  year: '2017',
  doi: '10.3390/brainsci7020019',
  url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5332962/',
  verifiedOn: '2026-08-22',
  finding:
    'Training that combined movement with thinking tasks significantly reduced fear of falling, and did more for it than either movement or thinking alone.',
  basis:
    '481 older adults at risk of falling, across four groups. Fear-of-falling scores in the combined group fell from 32.0 to 29.7 over three months of training, p < 0.001. Movement-only training produced a smaller reduction. Thinking-only training and the control group did not improve. Three months after training ended, the combined group had drifted back to 30.7, so the benefit depended on continuing.',
  reference:
    'Barban F, et al. Reducing Fall Risk with Combined Motor and Cognitive Training in Elderly Fallers (I-DONT-FALL). Brain Sciences, 2017. 481 older adults at risk of falling.',
};

// THE CORRECTION (2026-08-22): the site previously said this trial "significantly
// reduced Falls Efficacy Scale scores (FES-I) and increased step length and gait
// confidence" in "95 community-dwelling older adults with concern about falling."
// Three things were wrong. The trial enrolled older adults BOTH with and without
// concern about falling, not only those with it. Its reported outcome was step
// length under single-task and dual-task walking, not FES-I, and no
// fear-of-falling result appears in the paper's abstract. And its conclusion
// points the other way: the authors write that additional treatment, such as
// cognitive behavioural therapy, "should be considered" to address concern about
// falling, because the cautious gait pattern persisted.
//
// This citation therefore no longer appears under a fear-of-falling heading
// anywhere on the site. It is good evidence for gait, and it is honest evidence
// that dual-task training alone does not resolve fear of falling.
export const WOLLESEN_2017: Citation = {
  id: 'wollesen-2017',
  title: 'Does dual task training improve walking performance of older adults with concern of falling?',
  authors: 'Wollesen B, Schulz S, Seydell L, Delbaere K',
  journal: 'BMC Geriatrics',
  year: '2017',
  doi: '10.1186/s12877-017-0610-5',
  pmid: '28893187',
  url: 'https://pubmed.ncbi.nlm.nih.gov/28893187/',
  verifiedOn: '2026-08-22',
  finding:
    'Twelve weeks of dual-task training lengthened participants’ stride both when walking normally and when walking while thinking, whether or not they were worried about falling.',
  basis:
    '95 independent-living older adults, average age 71.5, training once a week for 12 weeks against a non-training control group. Walking while thinking also improved, but only among those who were not already worried about falling. The authors concluded that worry about falling needs to be addressed directly as well, since a cautious walking pattern remained.',
  reference:
    'Wollesen B, Schulz S, Seydell L, Delbaere K. Does dual task training improve walking performance of older adults with concern of falling? BMC Geriatrics, 2017. 95 older adults.',
};

// CDC figures, refreshed 2026-08-22. The site carried "$50 billion", which is
// the 2015 figure; CDC now puts the annual health care cost of non-fatal older
// adult falls at $80 billion. Using a decade-old cost figure understated the
// problem and dated the page.
export const CDC_FALLS = {
  url: 'https://www.cdc.gov/falls/data-research/facts-stats/index.html',
  verifiedOn: '2026-08-22',
  oneInFour: 'About 1 in 4 adults aged 65 and older reports falling each year, which is more than 14 million people.',
  leadingCause: 'Falls are the leading cause of injury and of injury death among adults aged 65 and older.',
  cost: 'The annual health care cost of non-fatal falls among older adults is about $80 billion.',
  reference: 'Centers for Disease Control and Prevention. Facts About Falls, older adult fall prevention.',
};

/** Every citation, in the order /science presents them. */
export const ALL_CITATIONS: Citation[] = [
  EGM_2025,
  IJERPH_2022,
  COCHRANE_2019,
  VTIME_2016,
  VAN_HET_REVE_2014,
  GAVELIN_2021,
  BARBAN_2017,
  WOLLESEN_2017,
];

/** The date the whole evidence base was last checked against primary sources. */
export const EVIDENCE_LAST_VERIFIED = '2026-08-22';
