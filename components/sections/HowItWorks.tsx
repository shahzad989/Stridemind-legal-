const STEPS = [
  {
    number: '01',
    emoji: '🎧',
    title: 'Put in your earbuds',
    description:
      'Grab your regular earbuds or headphones — no special equipment required.',
  },
  {
    number: '02',
    emoji: '🚶',
    title: 'Start your walk',
    description:
      'Head outside, to a park, or onto your treadmill. Any walk of any length works.',
  },
  {
    number: '03',
    emoji: '🧠',
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
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Three steps to sharper thinking
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="text-5xl mb-5" aria-hidden="true">{step.emoji}</div>
              <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">
                Step {step.number}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg flex-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
