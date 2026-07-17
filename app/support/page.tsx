import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support — Stridemind: Fall Prevention',
  description:
    'Help with Stridemind: getting started, managing or cancelling your subscription, fixing common problems, and reaching a real person.',
  alternates: { canonical: 'https://stridemind.app/support' },
  openGraph: {
    title: 'Stridemind Support',
    description:
      'Getting started, managing or cancelling your subscription, fixing common problems, and reaching a real person.',
    url: 'https://stridemind.app/support',
    images: [{ url: 'https://stridemind.app/opengraph-image', width: 1200, height: 630 }],
  },
};

// This page doubles as the App Store Connect support URL, so it answers the
// questions App Review and skeptical customers check first: how to cancel,
// how billing works, and how to reach a human. Every claim is constrained by
// the app: billing runs through Apple (RevenueCat under the hood, but the
// user-facing truth is their Apple ID), there is no free trial, sessions
// stream audio and need a connection, and password reset is email-based.
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stridemind.app' },
    { '@type': 'ListItem', position: 2, name: 'Support' },
  ],
};

const COMMON_PROBLEMS = [
  {
    title: 'There is no sound during my stride',
    body: 'First check that your earbuds are connected to your iPhone and that the volume is up. If you are using Bluetooth earbuds, open their case, close it again, and reconnect. Then press play on the stride once more. If you still hear nothing, restarting the app usually clears it.',
  },
  {
    title: 'The audio stops or stutters on my walk',
    body: 'Strides stream their audio, so you need a data connection or wifi during your session. If your walking route has weak signal in places, the audio can pause until the connection returns. Checking that you have signal before you head out is the most reliable fix.',
  },
  {
    title: 'I forgot my password',
    body: 'On the sign-in screen, use the password reset option and we will email you a link to choose a new one. The email goes to the address you signed up with, and it is worth checking your spam folder if it does not arrive within a few minutes.',
  },
  {
    title: 'My reminders are not arriving',
    body: 'Notifications need permission twice: once inside the Stridemind app, under Settings and then Notifications, and once in your iPhone Settings under Notifications and then Stridemind. If either one is off, reminders stay silent.',
  },
];

export default function SupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="pt-24">
        {/* Hero */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
              Support
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-gray-900 mb-6 leading-tight">
              How can we help?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The answers to the most common questions are below, and a real person reads every
              email if you need more than that.
            </p>
          </div>
        </section>

        {/* Getting started */}
        <section className="bg-brand-muted py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl text-gray-900 mb-5 leading-tight">
              Getting started
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Download Stridemind from the{' '}
              <a
                href="https://apps.apple.com/app/id6761288997"
                className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors"
              >
                App Store
              </a>
              , create your account, and put in your earbuds. Choose a stride from the library,
              press play, and put your phone in your pocket. The narrator takes it from there, and
              there is nothing to watch or tap during your walk. If you can use a podcast app, you
              already know how to use Stridemind.
            </p>
          </div>
        </section>

        {/* Subscription */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl text-gray-900 mb-6 leading-tight">
              Your subscription
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How to cancel</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Open your iPhone Settings, tap your name at the top, then tap Subscriptions and
                  choose Stridemind. Tap Cancel Subscription. Your access continues until the end
                  of the period you already paid for, and nothing else is charged after that.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How billing works</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  All billing runs through your Apple ID, the same way as any App Store purchase.
                  We never see or store your card details. There is no free trial, so nothing
                  starts billing unless you chose it yourself.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Refunds</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Because Apple handles the billing, refund requests go through Apple directly at{' '}
                  <a
                    href="https://reportaproblem.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors"
                  >
                    reportaproblem.apple.com
                  </a>
                  . Sign in with your Apple ID, find the Stridemind charge, and choose Request a
                  Refund. Apple usually answers within a day or two.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common problems */}
        <section className="bg-brand-muted py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl text-gray-900 mb-8 leading-tight">
              Common problems, quick fixes
            </h2>
            <div className="space-y-5">
              {COMMON_PROBLEMS.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-7 border border-brand-light shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-16 px-6 border-b border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl text-gray-900 mb-4">Still stuck? Email us.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-3">
              Write to us and a real person will reply. Including your iPhone model, your iOS
              version, and what happened helps us fix things on the first try.
            </p>
            <a
              href="mailto:appstridemind@gmail.com"
              className="inline-flex items-center justify-center bg-brand text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-brand-dark transition-colors mt-3"
            >
              appstridemind@gmail.com
            </a>
          </div>
        </section>

        {/* Footer note */}
        <section className="bg-gray-50 py-12 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base text-gray-600 leading-relaxed">
              Stridemind is a wellness app, not a medical device. If you have a diagnosed balance
              condition or a recent fall behind you, please talk with your physician before
              training. You may also want our{' '}
              <Link href="/#faq" className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors">
                frequently asked questions
              </Link>
              ,{' '}
              <Link href="/privacy-policy" className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors">
                privacy policy
              </Link>
              , or{' '}
              <Link href="/terms-of-service" className="text-brand font-medium underline underline-offset-2 hover:text-brand-dark transition-colors">
                terms of service
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
