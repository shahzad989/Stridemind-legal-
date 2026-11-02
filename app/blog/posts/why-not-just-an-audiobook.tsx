import { BlogPost, P, H2, Callout, Finding, Sources, TextLink } from './shared';
import { EGM_2025 } from '@/lib/citations';

// Written because "why not just listen to an audiobook?" came up four times in
// the first round of feedback (r/over60, 2026-10), and nothing on the site
// answered it. Says plainly that no study has tested tasks spread through a
// walk, so the research is attributed to dual-task training as a method. The
// temptation-bundling research is left out until it has had a full-text read
// (site CLAUDE.md, lib/citations.ts rules).
function Content() {
  return (
    <>
      <P>
        Plenty of people already walk with an audiobook or a podcast, and it is a lovely habit. So
        when an app offers to give your mind something to do on a walk, the fair question is why
        you wouldn&apos;t just press play on a book instead. The honest answer is that you can do
        both, and that the two ask different things of you.
      </P>

      <H2>Listening and thinking on demand are not the same</H2>
      <P>
        A good story holds your attention, but it carries you along. You can drift for a minute,
        come back, and lose nothing that matters. Nothing in the book asks you to hold a few
        numbers in mind, switch between two rules, or come up with words of your own while your
        legs keep moving.
      </P>
      <P>
        That effort is what researchers call dual-task training: doing a thinking task and a
        physical task at the same moment. It is deliberately a little hard, and it is the part the
        research is about.
      </P>
      <Finding source={`Khan et al., ${EGM_2025.journal}, ${EGM_2025.year}. 44 randomised controlled trials, 2,782 older adults.`}>
        {EGM_2025.finding}
      </Finding>

      <H2>Why not give up the audiobook, then?</H2>
      <P>
        Because a walk you look forward to is a walk you keep taking. A training habit only helps
        while it lasts, and most of us are far more likely to head out the door for the next
        chapter than for a set of exercises. Asking someone to swap the book they love for an
        instructor&apos;s voice is a poor bargain, and many people wouldn&apos;t stick with it.
      </P>

      <H2>How the two fit together</H2>
      <P>
        This is why Stridemind has a walk built around your own audio. You start your podcast,
        audiobook or music in the app you already use, put your phone in your pocket, and walk.
        Every few minutes, Stridemind pauses your podcast or audiobook, or lowers your music, and a
        calm voice gives you a short thinking task. You might count backwards, name words from a
        category, or picture an everyday scene. After about a minute, your audio comes back by
        itself. You can choose how often tasks arrive, and nothing is scored.
      </P>
      <Callout>
        Stridemind can tell whether something is playing, so it knows when to wait for you. It
        can&apos;t tell what you are listening to.
      </Callout>

      <H2>What we don&apos;t know yet</H2>
      <P>
        The research above tested dual-task training as a method. As far as we can find, no study
        has tested short tasks spread through a walk with an audiobook in between, and Stridemind
        itself has not been tested in a trial. If you would rather do one
        unbroken session, the guided strides in the app work that way.
      </P>
      <P>
        You can read more in our{' '}
        <TextLink href="/blog/what-is-dual-task-training">plain-English guide to dual-task training</TextLink>,
        or see the evidence on our <TextLink href="/science">science page</TextLink>. Your first
        walk with your own audio is free, and Stridemind is{' '}
        <TextLink href="https://apps.apple.com/app/id6761288997">free to download on the App Store</TextLink>.
      </P>

      <Sources items={[EGM_2025.reference]} />
    </>
  );
}

export const post: BlogPost = {
  slug: 'why-not-just-an-audiobook',
  title: 'Why Not Just Listen to an Audiobook on Your Walk?',
  description:
    'An audiobook keeps you company on a walk, but it asks little of your mind. Here is what thinking while you walk adds, and how to keep your book too.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  readingMinutes: 3,
  Content,
};
