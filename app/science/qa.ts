// The question-and-answer block on /science, and the FAQPage JSON-LD built
// from it. Plain module (no 'use client') so both the client section component
// and the server page can import it, the same arrangement as the homepage's
// faq-data.ts.
//
// WHY THIS SHAPE
// AI answer engines don't retrieve a page and read it top to bottom. They
// decompose a question into sub-questions, search those, and lift a passage
// that answers one of them. A long narrative page answers the headline question
// well and the sub-questions not at all, because the answer to "can you do this
// at home" is spread across four paragraphs and a citation. These entries exist
// to be liftable on their own: one question, an answer that opens with the
// answer rather than with context, and the supporting evidence in the same
// block rather than in a footnote. Retrieval pipelines discard passages where
// the claim and its evidence are separated.
//
// Answers are kept to roughly 40 to 80 words. Shorter loses the evidence,
// longer stops being a single extractable passage.
//
// Every figure here restates lib/citations.ts. Do not introduce a number that
// is not recorded and verified there.
export const SCIENCE_QA = [
  {
    q: 'What is dual-task training?',
    a: 'Dual-task training means doing a thinking task and a physical task at the same time, most often walking while working on something mental such as recalling numbers or spotting a pattern. The overlap is the point. Everyday walking already asks you to think and move at once, so training the two together is closer to real life than training either one on its own.',
  },
  {
    q: 'Does dual-task training actually work?',
    a: 'For balance and mobility, the evidence is strong. A 2025 review in European Geriatric Medicine pooled 44 randomised trials covering 2,782 older adults and found significant improvements in dynamic balance and functional mobility. The same review found fewer falls, although that part rests on only 6 of the 44 studies, all of which asked people to recall their own falls.',
  },
  {
    q: 'How is dual-task training different from regular balance exercise?',
    a: 'Regular balance exercise trains your body while your mind is free to concentrate on it. Dual-task training deliberately occupies your attention at the same time, which is the condition most real falls happen under. In the clearest test of this, two groups did identical treadmill work and only one had a thinking challenge added. That group had 42% fewer falls over the following six months.',
  },
  {
    q: 'Can you do dual-task training at home?',
    a: 'Yes. It needs no equipment. The trials that show a benefit used ordinary walking with a mental task layered on top, which is something you can practise on a familiar route by counting backwards as you walk or naming as many items in a category as you can. What it does need is a safe, flat path and a few sessions a week over several weeks.',
  },
  {
    q: 'What is an example of a dual-task exercise?',
    a: 'A common one is walking at your normal pace while counting backwards from 100 in threes. Others include naming as many animals as you can while you walk, repeating a short list of numbers in reverse, or listening for a pattern in a sequence read aloud. The thinking task should compete for your attention without being so hard that you stop walking.',
  },
  {
    q: 'Do physical therapists use dual-task training?',
    a: 'Yes. Dual-task walking is an established part of falls rehabilitation, used both to assess risk and to train it. Therapists often measure how much someone slows down when asked to walk and think at once, because a large drop-off predicts falls. Stridemind is a wellness app rather than a clinical tool, and some people use it between appointments.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most trials run between six and twelve weeks, and that is the range where measurable changes in walking and dual-task performance tend to appear. In the 2025 review, balance improved with around 30 minutes of moderately challenging training three times a week. Consistency matters more than session length, and the benefits fade once training stops, so it works best as a lasting habit.',
  },
  {
    q: 'Is dual-task training safe for older adults?',
    a: 'In the exercise trials Cochrane reviewed, adverse events were uncommon and were mostly minor muscle and joint complaints. Dual-task walking does divide your attention on purpose, so pick a flat, familiar route away from traffic and keep your pace comfortable. If you have a diagnosed balance condition or have fallen recently, speak with your doctor or physical therapist before starting.',
  },
] as const;
