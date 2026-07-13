import Link from 'next/link';
import type { ReactNode } from 'react';

// Every post registers here with its metadata plus a Content component.
// Posts are plain TSX (no MDX pipeline) so the article body is server-rendered
// HTML with zero client JS: answer engines and screen readers get the full
// text with nothing hidden behind animation initial states.
export interface BlogPost {
  slug: string;
  title: string;
  // Meta description AND the card blurb on /blog. Kept under 160 characters.
  description: string;
  // ISO dates drive the JSON-LD, the sitemap, and the visible byline.
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  Content: () => ReactNode;
}

export function formatPostDate(iso: string): string {
  // en-US long date; force UTC so the rendered date never shifts a day
  // depending on the build server's timezone.
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

// --- Shared article typography ---
// The site has no @tailwindcss/typography plugin, so these small components
// are the single source of article styling. Type scale leans large
// (text-lg body) because the audience is 55+.

export function P({ children }: { children: ReactNode }) {
  return <p className="text-lg text-gray-700 leading-relaxed mb-5">{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-3xl text-gray-900 leading-tight mt-12 mb-4">{children}</h2>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2 mb-5 text-lg text-gray-700 leading-relaxed">{children}</ul>;
}

// Highlight box for the one takeaway a skimmer should not miss.
export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-brand-muted border border-brand-light rounded-2xl p-6 my-8">
      <p className="text-lg text-gray-800 leading-relaxed">{children}</p>
    </div>
  );
}

// Research finding card, styled to match the citation cards on /science so
// evidence looks the same everywhere on the site.
export function Finding({ children, source }: { children: ReactNode; source: string }) {
  return (
    <div className="bg-brand-muted rounded-2xl p-6 border-l-4 border-brand my-8">
      <p className="text-lg text-gray-700 leading-relaxed mb-3">{children}</p>
      <p className="text-sm text-gray-400 italic">{source}</p>
    </div>
  );
}

// Numbered source list at the foot of every post. Answer engines reward
// visible sourcing, and readers this age group ask "says who?" first.
export function Sources({ items }: { items: string[] }) {
  return (
    <section className="mt-14 pt-8 border-t border-gray-200">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Sources</h2>
      <ol className="list-decimal pl-5 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-500 leading-relaxed">
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}

// Inline internal link, brand-colored so cross-links to /science, other
// posts, and the App Store read as invitations rather than buried anchors.
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith('http');
  if (external) {
    return (
      <a href={href} className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors">
      {children}
    </Link>
  );
}
