const TESTIMONIALS = [
  {
    quote:
      "I've been using StrideMind for three months and my balance has noticeably improved. I feel so much more confident on my morning walks.",
    name: 'Margaret T.',
    age: 68,
  },
  {
    quote:
      "My physical therapist recommended it after my fall last year. Now it's part of my daily routine — and I actually enjoy it.",
    name: 'Robert K.',
    age: 72,
  },
  {
    quote:
      "Simple to use, and the science actually checks out. My doctor was genuinely impressed when I showed her the research behind it.",
    name: 'Linda M.',
    age: 61,
  },
];

const StarIcon = () => (
  <svg className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            What people are saying
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-lg flex flex-col hover:-translate-y-1 transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">Age {t.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
