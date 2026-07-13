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
  {
    q: 'Does it work on Android?',
    a: 'Stridemind is currently built for iPhone. Android is on our roadmap. Email us at appstridemind@gmail.com and we will let you know when it launches.',
  },
  {
    q: 'Do I need wifi or data during my walk?',
    a: 'Yes. Stridemind streams audio during your session, so you need a data connection or wifi on your walk. Make sure you have signal before heading out.',
  },
  {
    q: 'How long are the sessions?',
    a: 'Sessions range from 5 to 15 minutes, short enough to fit into any walk. The stride ends on its own, and you can keep walking as long as you like afterward. Most people aim for a few sessions per week.',
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
    a: 'Free gives you a set of strides to train with, plus the monthly check-in, your Progress screen, your history, and your weekly goal. Premium unlocks the full stride library and the new programs added every month, for $9.99 per month or $79.99 per year. There is no free trial, so nothing starts billing without you choosing it.',
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
