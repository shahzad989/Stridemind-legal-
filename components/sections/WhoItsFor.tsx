const AUDIENCES = [
  {
    emoji: '🧓',
    title: 'Adults 55+',
    description:
      'Looking to stay sharp and active as you age? StrideMind makes cognitive training a natural part of your daily walk — no gym, no screen time, no stress.',
  },
  {
    emoji: '⚖️',
    title: 'Concerned About Falls',
    description:
      'Falls are the leading cause of injury in older adults. Dual‑task walking has been clinically shown to improve balance and measurably reduce fall risk.',
  },
  {
    emoji: '🏥',
    title: 'Physical Therapy Patients',
    description:
      'StrideMind complements physical therapy by building cognitive‑motor coordination — the brain‑body link that protects you during everyday movement.',
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-brand-muted py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            Who It&apos;s For
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Built for active aging
          </h2>
        </div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {AUDIENCES.map((a) => (
            <div
              key={a.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="text-5xl mb-6" aria-hidden="true">{a.emoji}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{a.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
