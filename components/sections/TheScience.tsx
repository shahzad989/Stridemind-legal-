const STATS = [
  {
    value: '30+',
    label: 'Randomized controlled trials reviewed',
  },
  {
    value: '76.6%',
    label: 'Of participants improved balance AND cognitive performance',
  },
  {
    value: '55+',
    label: 'Years — the age group that benefits most',
  },
];

export default function TheScience() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            The Science
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Not just a wellness app.{' '}
            <span className="text-brand">Evidence‑backed training.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Cognitive‑motor interference is what happens when your brain manages physical
            movement and mental tasks simultaneously. Research shows that training this
            dual‑task ability strengthens the neural pathways responsible for balance,
            attention, and fall prevention.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="text-center p-8 bg-brand-muted rounded-2xl border border-brand-light"
            >
              <p className="text-5xl font-extrabold text-brand mb-3">{stat.value}</p>
              <p className="text-gray-700 text-lg leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Citation card */}
        <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-brand">
          <p className="text-gray-700 text-xl leading-relaxed mb-4">
            &ldquo;A 2022 review of 30 randomized controlled trials found that 76.6% of
            participants in dual‑task training showed improved balance and cognitive
            performance.&rdquo;
          </p>
          <p className="text-sm text-gray-500 italic">
            Int. J. Environ. Res. Public Health, 2022, 19, 16890
          </p>
        </div>
      </div>
    </section>
  );
}
