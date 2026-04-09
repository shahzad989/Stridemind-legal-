import { Headphones, Footprints, Brain } from 'lucide-react';

const STEPS = [
  {
    Icon: Headphones,
    number: '01',
    title: 'Put in your earbuds',
    description:
      'Grab your regular earbuds or headphones — no special equipment required.',
  },
  {
    Icon: Footprints,
    number: '02',
    title: 'Start your walk',
    description:
      'Head outside, to a park, or onto your treadmill. Any walk of any length works.',
  },
  {
    Icon: Brain,
    number: '03',
    title: 'Respond to audio challenges',
    description:
      'Answer cognitive prompts as you walk, strengthening the brain‑body coordination that protects your balance.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-brand-muted py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Three steps to sharper thinking
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map(({ Icon, number, title, description }) => (
            <div
              key={number}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border border-gray-100 flex flex-col hover:-translate-y-1 transition-all duration-200"
            >
              <div className="mb-5">
                <Icon size={48} color="#166534" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">
                Step {number}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg flex-1">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
