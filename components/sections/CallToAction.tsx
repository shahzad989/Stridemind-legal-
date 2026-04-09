const AppleIcon = () => (
  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export default function CallToAction() {
  return (
    <section className="bg-brand py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
          Start training your brain while you walk
        </h2>
        <p className="text-xl text-green-100 mb-10 leading-relaxed max-w-2xl mx-auto">
          The first step toward sharper thinking and better balance starts with a walk.
          No gym. No equipment. Just you and your earbuds.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-4 bg-white text-gray-900 px-10 py-5 rounded-2xl hover:bg-gray-50 transition-colors shadow-xl"
        >
          <AppleIcon />
          <span>
            <span className="block text-xs text-gray-500 leading-none mb-1">Download on the</span>
            <span className="block text-xl font-bold leading-none">App Store</span>
          </span>
        </a>

        <p className="mt-6 text-green-200 text-sm">
          Free to start — no credit card required
        </p>
      </div>
    </section>
  );
}
