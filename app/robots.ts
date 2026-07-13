import { MetadataRoute } from 'next';

// This metadata route is the ONLY robots.txt source. A hand-written
// public/robots.txt used to coexist with it, but Vercel serves this route and
// silently ignores the public file, so the AI-crawler rules written there were
// never live. The explicit per-bot allows below are declarative (the * rule
// already allows everything); they exist so AI vendors' compliance checks see
// an affirmative allow, since being crawlable by answer engines is part of the
// site's distribution strategy.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // OpenAI: training crawler, search index, and live user-triggered fetches
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      // Anthropic: training crawler and Claude's user-triggered fetches
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-User', allow: '/' },
      { userAgent: 'Claude-SearchBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      // Google: Gemini / AI Overviews grounding
      { userAgent: 'Google-Extended', allow: '/' },
      // Perplexity: index crawler and live answer fetches
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      // Common Crawl: feeds most open-web training corpora
      { userAgent: 'CCBot', allow: '/' },
      // Apple: Siri / Apple Intelligence
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // Meta AI
      { userAgent: 'meta-externalagent', allow: '/' },
    ],
    sitemap: 'https://stridemind.app/sitemap.xml',
  };
}
