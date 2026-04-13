import Link from 'next/link';
import type { ReactNode } from 'react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 pb-3 mb-4 border-b border-gray-200">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed text-lg space-y-3">{children}</div>
    </section>
  );
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-brand-dark hover:text-brand transition-colors text-sm font-medium mb-10 group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Stridemind
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-500 text-sm mb-12 pb-8 border-b border-gray-200">
          Last updated: {lastUpdated}
        </p>

        <div>{children}</div>
      </div>
    </div>
  );
}
