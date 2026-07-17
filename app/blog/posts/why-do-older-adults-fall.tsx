import { BlogPost, P, H2, UL, Callout, Finding, Sources, TextLink } from './shared';

// The head-query post: "why do older adults fall" is the question this whole
// category gets asked most, and answering it well is how the site earns the
// right to be cited by answer engines. The lead paragraph is a self-contained
// answer an AI can lift verbatim, and the article's job is to move the reader
// from the familiar causes (strength, vision, medication) to the one
// Stridemind is built around: attention. Every research claim restates the
// verified citations recorded on /science; the 2022 review's falls figure is
// a 5-of-30 vote count and is deliberately presented that way, never as an
// effect size.
function Content() {
  return (
    <>
      <P>
        Older adults usually fall not because their legs suddenly give out, but because walking
        quietly stops being automatic. With age, staying balanced starts to draw on the same
        attention we use for thinking, and most falls happen in the moment that attention is
        pulled elsewhere. Weaker muscles, changing vision, and some medications all raise the
        risk, but the part few people hear about is that balance becomes a mental task, and like
        most mental tasks, it can be trained.
      </P>

      <H2>Falls are common, and worth taking seriously</H2>
      <P>
        The scale surprises most families. According to the CDC, about one in four adults over 65
        falls each year, falls are the leading cause of injury death in that age group, and the
        annual medical cost of falls in the United States exceeds fifty billion dollars. None of
        that is said to alarm you. It is said because the causes are more fixable than the
        numbers suggest.
      </P>

      <H2>The familiar causes</H2>
      <P>
        Doctors group most fall risk into a handful of well-known factors, and each one deserves
        attention:
      </P>
      <UL>
        <li>Muscle strength declines with age, especially in the legs, unless it is used.</li>
        <li>Vision changes make edges, curbs, and low light harder to judge.</li>
        <li>
          Some medications, and especially combinations of them, cause dizziness or slowed
          reactions. A regular review with your doctor or pharmacist is worth the appointment.
        </li>
        <li>Home hazards like loose rugs, trailing cords, and dark stairways play their part.</li>
      </UL>
      <P>
        These are all real, and a good fall-prevention plan addresses them. But they leave a
        puzzle. Plenty of people with reasonable strength and decent vision still fall. The
        missing piece is what researchers call cognitive-motor interference.
      </P>

      <H2>The cause fewer people talk about: attention</H2>
      <P>
        For most of adult life, walking runs on autopilot. You can walk, talk, carry groceries,
        and think about dinner all at once, because walking asks for almost no conscious effort.
        With age, that changes gradually. Walking starts to need real attention, and when
        something else claims that attention, a question from a grandchild, a phone ringing, a
        step down you did not expect, the walking is what gets shortchanged. Steps shorten,
        rhythm wavers, and a small stumble becomes a fall.
      </P>
      <P>
        Clinicians even use this as a warning sign. Some older adults stop walking entirely when
        someone asks them a question, because the conversation and the walking no longer fit side
        by side. Everyday life rarely lets us do one thing at a time, which is why so many falls
        happen on ordinary days, in ordinary places, mid-thought.
      </P>

      <H2>The encouraging part: this is trainable</H2>
      <P>
        Exercise in general helps. A Cochrane review of 108 trials with 23,407 participants found
        that exercise programmes, especially those focused on balance and functional movement,
        reduce fall rates in older adults by about 23 percent. That alone is a strong reason to
        keep moving.
      </P>
      <P>
        Training the attention side adds something more specific. Dual-task training, which means
        practicing a thinking task while you walk, works on exactly the interference that causes
        many falls. A 2022 systematic review found that 23 of 30 randomized and pilot randomized
        trials, which is 76.6 percent, reported improved balance after dual-task training, and 5
        of the 30 also reported fewer falls. A 2025 meta-analysis in European Geriatric Medicine
        pooled 44 studies with 2,782 older adults and found significant improvements in balance
        and functional mobility, along with reduced fall frequency.
      </P>
      <Finding source="Mirelman et al., The Lancet, 2016. V-TIME randomized trial, 302 participants.">
        In a landmark trial, older adults who added cognitive challenges to their treadmill
        walking had a 42 percent lower fall rate over the following six months than those who did
        the identical walk without them. The only difference between the groups was the thinking.
      </Finding>

      <H2>What you can do this week</H2>
      <Callout>
        Walk regularly on a route you know. Ask your doctor or pharmacist to review your
        medications. Get your eyes checked if it has been more than a year. And once walking
        feels comfortable, start giving your mind a job while you walk, gently at first, because
        that is the part of fall risk that strength exercises alone do not reach.
      </Callout>
      <P>
        If you want to understand the training side more deeply, our plain-English guide{' '}
        <TextLink href="/blog/what-is-dual-task-training">What Is Dual-Task Training?</TextLink>{' '}
        explains how to practice it safely on your own, and our{' '}
        <TextLink href="/science">science page</TextLink> walks through every study mentioned
        here.
      </P>

      <H2>Where Stridemind fits in</H2>
      <P>
        Stridemind turns dual-task training into guided audio sessions for your iPhone. A narrator
        gives your mind its work through your earphones while you walk, so your eyes stay up and
        your phone stays in your pocket. The app is{' '}
        <TextLink href="https://apps.apple.com/app/id6761288997">free to download</TextLink>, the
        first strides are free to train with, and sessions run five to fifteen minutes. It is a
        wellness app, not a medical device, so if you have a diagnosed balance condition or a
        recent fall behind you, talk with your physician before starting.
      </P>

      <Sources
        items={[
          'Centers for Disease Control and Prevention. Older Adult Falls Data. CDC, 2023.',
          'Sherrington C, et al. Exercise for preventing falls in older people living in the community. Cochrane Database of Systematic Reviews, 2019.',
          'Khan A, et al. A Systematic Review Exploring the Theories Underlying the Improvement of Balance and Reduction in Falls Following Dual-Task Training among Older Adults. International Journal of Environmental Research and Public Health, 2022, 19, 16890.',
          'Khan A, et al. Effectiveness of dual-task exercise in improving balance and preventing falls among older adults: systematic review with meta-analysis and meta-regression. European Geriatric Medicine, 2025.',
          'Mirelman A, et al. Addition of a non-immersive virtual reality component to treadmill training to reduce fall risk in older adults (V-TIME): a randomised controlled trial. The Lancet, 2016.',
        ]}
      />
    </>
  );
}

export const post: BlogPost = {
  slug: 'why-do-older-adults-fall',
  title: 'Why Do Older Adults Fall? The Causes, Explained in Plain English',
  description:
    'Most falls happen when attention runs short, not when legs give out. A plain explanation of why older adults fall and what the research says helps.',
  datePublished: '2026-07-17',
  dateModified: '2026-07-17',
  readingMinutes: 6,
  Content,
};
