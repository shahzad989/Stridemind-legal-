// The single source of truth for the homepage FAQ. Lives in its own plain
// module (no 'use client') because two consumers need it: the FAQ section
// renders it, and app/page.tsx builds the FAQPage JSON-LD from it. Google
// requires marked-up questions to be visible on the page, and deriving the
// schema from the rendered list makes drift impossible. Exporting from the
// client component instead breaks the server build (client-module exports
// become client references the server cannot iterate).
//
// Answers are constrained by the app: iPhone-only (no iPad build), strides not
// protocols, no free trial, and the check-in/Progress/history features are free.
export const FAQS = [
  {
    q: 'What is dual-task walking training?',
    a: 'Dual-task walking training means performing a cognitive task, such as number recall, pattern recognition, or memory challenges, while walking at the same time. This combination trains the brain and body to coordinate under real-world conditions, which is exactly the challenge older adults face when navigating everyday environments.',
  },
  {
    q: 'Can Stridemind really reduce fall risk?',
    a: 'The approach behind Stridemind is supported by a 2025 meta-analysis in European Geriatric Medicine covering 44 studies and 2,782 older adults, which found that dual-task training significantly improves dynamic balance and functional mobility and reduces fall frequency. Stridemind itself is a wellness app, not a medical device, and individual results vary.',
  },
  {
    q: 'What makes Stridemind different from other brain training apps?',
    a: 'Most brain training apps are screen-based and sedentary. Stridemind is built for movement, so the cognitive exercises are done while you walk. This dual-task approach targets the attention-and-movement interference that drives many falls, an approach research links to better balance and lower fall risk. It is audio-first, requires no screen interaction during sessions, and is designed for adults 55 and over.',
  },
  // The four own-audio questions are limited to what the device tests showed
  // (docs/own-audio-walks-plan.md in the app repo). Only Apple Podcasts and
  // Spotify are tested, so never write "any app" until more have been.
  {
    q: 'Can I listen to my own podcast, audiobook or music on my walk?',
    a: 'Yes. You start your audio in the app you already use, and every few minutes Stridemind pauses it or lowers it for a short thinking task of about a minute. Then your audio comes back by itself. You can choose how often tasks arrive, and a task waits if you have stopped walking. Your first walk like this is free, and you do not need an account to try it.',
  },
  {
    q: 'Which listening apps work with Stridemind?',
    a: 'We have tested Apple Podcasts and Spotify, and podcasts in both pause and come back by themselves. Other apps should behave the same way, but each app decides for itself what happens after a pause, and we have not tested them all yet. If your audio does not come back after a task, pressing play in your listening app will bring it back.',
  },
  {
    q: 'Does Stridemind pause my music too?',
    a: 'Your music gets quieter during a task instead of stopping, and it returns to its usual volume afterward. Podcasts and audiobooks pause completely, because your iPhone treats spoken audio and music differently.',
  },
  {
    q: 'Can Stridemind see what I am listening to?',
    a: 'No. Stridemind can only tell whether something is playing, so it knows when to wait for you. It cannot tell which show, book or song it is, or which app is playing it.',
  },
  // The three questions below were added because they are the ones people
  // actually type before they know what to call this. "Is it a fitness app",
  // "can I set it up for my mother", and "do I need anything" come up ahead of
  // any clinical phrasing, and the FAQ previously answered none of them.
  {
    q: 'What is the difference between a fall prevention app and a fitness app?',
    a: 'A fitness app measures activity, such as steps, distance, or heart rate. Stridemind is not measuring your walk, it is changing what you do during it by giving your mind a task while you move. The goal is not more exercise but better coordination between thinking and moving, which is the specific thing that gives way in most falls.',
  },
  {
    q: 'Can I set this up for my mother or father?',
    a: 'Yes, and many people do. Setting it up together on a visit works better than sending a link, because the first session is easier with someone there. After that it runs on its own: they press play, put the phone in a pocket, and walk. There is nothing to watch and nothing to tap during a session.',
  },
  {
    q: 'Do I need any equipment?',
    a: 'Only an iPhone and a pair of earphones. There is no wearable to buy, no treadmill, and nothing to set up at home. The training happens on whatever walk you already take, which is deliberate, because a programme that needs equipment is a programme most people stop doing.',
  },
  {
    q: 'Does it work on Android?',
    a: 'Stridemind is currently built for iPhone. Android is on our roadmap. Email us at appstridemind@gmail.com and we will let you know when it launches.',
  },
  {
    q: 'Do I need wifi or data during my walk?',
    a: 'For a guided stride, yes. Strides stream their audio, so you need a data connection or wifi on your walk. For a walk with your own audio, Stridemind only needs a connection when you start, because the tasks are saved on your phone first. Your listening app may still need its own connection.',
  },
  {
    q: 'How long are the sessions?',
    a: 'Strides range from 5 to 15 minutes, short enough to fit into any walk. A stride ends on its own, and you can keep walking as long as you like afterward. A walk with your own audio lasts until you end it. Most people aim for a few sessions per week.',
  },
  {
    q: 'How long until I see results?',
    a: 'Clinical studies show measurable improvements in gait and dual-task performance within 6 to 8 weeks of consistent training. Many people feel more focused and confident on their walks early on, though that varies from person to person. Consistency, a few sessions per week, matters more than session length.',
  },
  {
    q: "I'm not very tech-savvy. Is it hard to use?",
    a: 'Stridemind was designed specifically for adults 55 and over. You press play, put your phone in your pocket, and listen. There is no screen to watch during your walk. If you can use a podcast app, you can use Stridemind.',
  },
  {
    q: "What's the difference between free and premium?",
    a: 'Free gives you a set of strides to train with and your first walk with your own audio, plus the monthly check-in, your Progress screen, your history, and your weekly goal. Premium unlocks every walk with your own audio, the full stride library, and the new programs added every month, for $9.99 per month or $79.99 per year. There is no free trial, so nothing starts billing without you choosing it.',
  },
  {
    q: 'Is it safe if I have a balance condition or have had a fall?',
    a: 'Stridemind is a wellness app, not a medical device. If you have a diagnosed balance condition or have recently had a fall, please talk with your physician or physical therapist before starting. Many people use it alongside physical therapy.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: 'Yes. You can cancel anytime through your iPhone Settings, under your Apple ID and Subscriptions. Your access continues until the end of your billing period.',
  },
];
