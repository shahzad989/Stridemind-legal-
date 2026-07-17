/** @type {import('next').NextConfig} */

// Security headers for every route. The site is fully static with no forms,
// no auth, and no third-party embeds, so the policy can be tight. The one
// integration that constrains it is Vercel Analytics + Speed Insights:
// in production both load same-origin under /_vercel/* and beacon to
// same-origin, but debug builds pull the script from va.vercel-scripts.com,
// so that host is allowed in script-src. If analytics ever stop reporting,
// this CSP is the first place to look.
//
// 'unsafe-inline' in script-src is required by the inline JSON-LD blocks and
// Next's own inline bootstrap; going nonce-based would force dynamic
// rendering of every page, which is a bad trade for a static marketing site.
// 'unsafe-inline' in style-src covers framer-motion's inline style writes.
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
  // Two years, as required for HSTS preload list eligibility.
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Redundant with frame-ancestors for modern browsers, kept for older ones.
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // The site never needs these sensors; denying them is free hardening.
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
