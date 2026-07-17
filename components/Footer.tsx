import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/app-icon.png"
                alt="Stridemind app icon"
                width={44}
                height={44}
                className="rounded-xl flex-shrink-0"
              />
              <div>
                <p className="text-base font-extrabold text-brand tracking-tight leading-tight">Stridemind: Fall Prevention</p>
                <p className="text-gray-400 text-xs mt-0.5">Train Your Brain While Walking</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cognitive dual-task training for adults 55+. Built on clinical research linking dual-task training to better balance and lower fall risk.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10">
            {/* /science was near-orphaned (one in-page link, absent from the
                sitemap until 2026-07); a persistent footer link gives crawlers
                a path to it from every page. */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Learn
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/science"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    The Science
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-families"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    For Families
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Legal
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Contact
              </p>
              <a
                href="mailto:appstridemind@gmail.com"
                className="text-gray-400 hover:text-white transition-colors text-base"
              >
                appstridemind@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {year} Stridemind: Fall Prevention. All rights reserved. Not a medical device. For wellness purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
