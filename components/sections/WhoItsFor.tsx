import { Users, ShieldCheck, HeartPulse } from 'lucide-react';

const AUDIENCES = [
  {
    Icon: Users,
    title: 'Adults 55+',
    description:
      'Looking to stay sharp and active as you age? StrideMind makes cognitive training a natural part of your daily walk — no gym, no screen time, no stress.',
  },
  {
    Icon: ShieldCheck,
    title: 'Concerned About Falls',
    description:
      'Falls are the leading cause of injury in older adults. Dual‑task walking has been clinically shown to improve balance and reduce fall risk.',
  },
  {
    Icon: HeartPulse,
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
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Who It&apos;s For
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Built for active aging
          </h2>
        </div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {AUDIENCES.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="mb-6">
                <Icon size={48} color="#166534" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
