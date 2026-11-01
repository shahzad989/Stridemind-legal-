import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — Stridemind',
  description: 'Stridemind privacy policy. Learn what data we collect, how we use it, and your rights.',
  alternates: { canonical: 'https://stridemind.app/privacy-policy' },
};

// 2026-11-01 update, made for the Google Play listing: Play reviewers compare
// this page with the Data safety form, so it now names everything the app
// really sends out. PostHog (usage events, keyed by the Supabase user id) and
// Sentry (crashes, a 10% masked session replay, and in-app feedback delivery,
// sendDefaultPii false) had been running in the app without being listed here.
// Google Play joins Apple as a payment processor, and the deletion steps link
// to /delete-account, which Play requires. Mirror any change here into the
// legacy privacy-policy.html at the repo root: GitHub Pages still serves it.
export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="November 1, 2026">
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        Stridemind (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the app&rdquo;) is a cognitive training app built
        for active adults. This policy explains what data we collect, how we use it, and your
        rights around it.
      </p>

      <LegalSection title="Who We Are">
        <p>
          Stridemind is an independently developed app. If you have questions about this policy,
          contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">
            appstridemind@gmail.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="What We Collect">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Account information:</strong> your name and email address when you create an
            account. If you sign in with Apple or Google, we receive your name and email address
            from them instead of a password.
          </li>
          <li>
            <strong>Usage data:</strong> the training sessions you complete, their duration, your
            activity history within the app, and the weekly goal you set.
          </li>
          <li>
            <strong>Check-in results:</strong> if you take the optional cognitive check-ins, we store
            your results, such as scores and reaction times, so the app can show you how they change
            over time. These results are not a medical assessment and we do not treat them as one.
          </li>
          <li>
            <strong>Motion data during sessions:</strong> with your permission, the app reads step
            counts from your phone&apos;s built-in motion sensors while a session or check-in is
            running, to confirm you were walking and to measure your walking pace. A summary, such
            as steps per minute, may be stored with your check-in results. The app does not read
            motion data outside of an active session or check-in.
          </li>
          <li>
            <strong>Subscription status:</strong> whether you have an active premium subscription,
            managed through RevenueCat.
          </li>
          <li>
            <strong>Feedback you send:</strong> if you use Share Feedback in the app, we store your
            message, the topic you chose, your app version, and your phone&apos;s system version, so
            we can read it and fix what you describe.
          </li>
          <li>
            <strong>App usage and crash data:</strong> we record which screens you open and which
            buttons you tap, which walks you start and finish, and the details of any crash or
            error, including your phone model and system version. For a small share of app
            sessions, the crash service also keeps a short screen recording with all text and
            images hidden, so we can see where something went wrong. This data is linked to a
            random account number, not to your name or email address.
          </li>
          <li>
            <strong>Website analytics:</strong> if you visit stridemind.app in a web browser, we use
            Google Analytics to see general information about that visit, such as which pages were
            viewed, how you arrived at the site, and your approximate location, device, and browser.
            This applies only to browsing our website, not to your account or your use of the app.
          </li>
        </ul>
        <p>We do not collect precise location data. We do not sell your data, and we do not use it for advertising.</p>
      </LegalSection>

      <LegalSection title="How We Use Your Data">
        <ul className="list-disc pl-6 space-y-2">
          <li>To display your training history and progress inside the app.</li>
          <li>To calculate your weekly training progress toward your goal.</li>
          <li>To show how your check-in results change over time on your Progress screen.</li>
          <li>To manage your account and subscription status.</li>
          <li>To find and fix problems, and to learn which parts of the app people use.</li>
          <li>
            To send optional reminders through local notifications on your device (only if you
            enable them). These notifications are generated locally and do not transmit any data
            to our servers.
          </li>
        </ul>
        <p>We do not sell your data. We do not use your data for advertising.</p>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          All data transmitted between the app and our servers is encrypted in transit using
          HTTPS/TLS. Your account data is stored securely through Supabase, which maintains its
          own security certifications and practices.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Supabase</strong>: database and authentication. Your account data and session
            history are stored here.{' '}
            <a href="https://supabase.com/privacy" className="text-brand-dark hover:text-brand underline" target="_blank" rel="noopener noreferrer">
              Supabase Privacy Policy
            </a>
          </li>
          <li>
            <strong>RevenueCat</strong>: subscription management. Purchase and entitlement data is
            processed here.{' '}
            <a href="https://www.revenuecat.com/privacy" className="text-brand-dark hover:text-brand underline" target="_blank" rel="noopener noreferrer">
              RevenueCat Privacy Policy
            </a>
          </li>
          <li>
            <strong>Expo</strong>: app development platform used to build and deliver the app.{' '}
            <a href="https://expo.dev/privacy" className="text-brand-dark hover:text-brand underline" target="_blank" rel="noopener noreferrer">
              Expo Privacy Policy
            </a>
          </li>
          <li>
            <strong>PostHog</strong>: app usage analytics. Records which screens and features are
            used, linked to a random account number.{' '}
            <a href="https://posthog.com/privacy" className="text-brand-dark hover:text-brand underline" target="_blank" rel="noopener noreferrer">
              PostHog Privacy Policy
            </a>
          </li>
          <li>
            <strong>Sentry</strong>: crash and error reporting, and delivery of the feedback you send
            from the app. It is not sent your name or email address.{' '}
            <a href="https://sentry.io/privacy/" className="text-brand-dark hover:text-brand underline" target="_blank" rel="noopener noreferrer">
              Sentry Privacy Policy
            </a>
          </li>
          <li>
            <strong>Apple and Google</strong>: payment processing for in-app subscriptions is handled
            entirely by the store you bought from, the Apple App Store or Google Play. We never see
            your payment details.{' '}
            <a href="https://policies.google.com/privacy" className="text-brand-dark hover:text-brand underline" target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>
          </li>
          <li>
            <strong>Sign in with Apple and Google Sign-In</strong>: optional ways to create an
            account. If you use one, Apple or Google tells us your name and email address and
            confirms it is you.
          </li>
          <li>
            <strong>Google Analytics</strong>: website analytics for stridemind.app. Helps us
            understand how visitors use our website. This service is not used inside the app itself.{' '}
            <a href="https://policies.google.com/privacy" className="text-brand-dark hover:text-brand underline" target="_blank" rel="noopener noreferrer">
              Google Privacy Policy
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          Our website (stridemind.app) uses cookies through Google Analytics to distinguish visitors
          and measure how the site is used. These cookies do not identify you by name and are not
          used for advertising. You can block or delete cookies through your browser settings, or opt
          out of Google Analytics specifically using the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" className="text-brand-dark hover:text-brand underline" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>
          . The mobile app does not use cookies; it stores data locally on your device and through the
          services listed above.
        </p>
      </LegalSection>

      <LegalSection title="International Data Transfers">
        <p>
          Stridemind uses Supabase, which stores data on infrastructure hosted in the United States
          (Amazon Web Services). If you are located outside the United States, your data may be
          transferred to and processed in the US.
        </p>
        <p>
          Where required by applicable law, we rely on standard contractual clauses or equivalent
          safeguards to legitimize such transfers. By using the app, you acknowledge that your data
          may be processed in the United States.
        </p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          Your data is retained for as long as your account is active. If you delete your account,
          your personal data is deleted within 30 days.
        </p>
        <p>
          You can delete your account yourself in the app under Settings, then Account, then
          Delete Account, or ask us by email. Our{' '}
          <Link href="/delete-account" className="text-brand-dark hover:text-brand underline">
            account deletion page
          </Link>{' '}
          gives the steps and explains what is removed and what is kept.
        </p>
      </LegalSection>

      <LegalSection title="Your Rights (All Users)">
        <p>
          Regardless of where you are located, you can request access to, correction of, or
          deletion of your personal data at any time by contacting us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">
            appstridemind@gmail.com
          </a>
          . We will respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="California Residents (CCPA)">
        <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Right to know</strong> — you can request information about the personal data we collect and how we use it.</li>
          <li><strong>Right to delete</strong> — you can request that we delete your personal data.</li>
          <li><strong>Right to opt out of sale</strong> — we do not sell your personal data to third parties.</li>
          <li><strong>Right to non-discrimination</strong> — we will not treat you differently for exercising any of these rights.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="EEA and UK Residents (GDPR / UK GDPR)">
        <p>
          If you are located in the European Economic Area or the United Kingdom, you have the following rights under the General Data Protection Regulation (GDPR) or equivalent UK law:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Right of access</strong> — you can request a copy of the personal data we hold about you.</li>
          <li><strong>Right to rectification</strong> — you can ask us to correct inaccurate or incomplete data.</li>
          <li><strong>Right to erasure</strong> — you can request that we delete your personal data.</li>
          <li><strong>Right to restriction</strong> — you can ask us to limit how we use your data in certain circumstances.</li>
          <li><strong>Right to data portability</strong> — you can request your data in a structured, machine-readable format.</li>
          <li><strong>Right to object</strong> — you can object to our processing of your data where we rely on legitimate interests as a legal basis.</li>
        </ul>
        <p>
          Our legal basis for processing your data is the performance of our contract with you
          (providing the app and its features). To exercise any of these rights or to lodge a
          complaint, contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>.
          You also have the right to lodge a complaint with your local data protection authority.
        </p>
      </LegalSection>

      <LegalSection title="Canadian Residents (PIPEDA / Quebec Law 25)">
        <p>
          If you are a Canadian resident, you have rights under the Personal Information Protection
          and Electronic Documents Act (PIPEDA) and, if you are a Quebec resident, under Quebec
          Law 25. These include the right to access your personal information, to request
          corrections, and to withdraw consent to our use of your data (subject to legal and
          contractual restrictions). To exercise any of these rights, contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="Australian Residents (Privacy Act 1988)">
        <p>
          If you are located in Australia, we handle your personal information in accordance with
          the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs). You have
          the right to access your personal information and to request corrections. To make a
          request or raise a privacy concern, contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>.
          If we do not resolve your complaint to your satisfaction, you may escalate it to the
          Office of the Australian Information Commissioner (OAIC).
        </p>
      </LegalSection>

      <LegalSection title="Brazilian Residents (LGPD)">
        <p>
          If you are located in Brazil, your personal data is processed in accordance with the Lei
          Geral de Proteção de Dados (LGPD — Federal Law No. 13,709/2018). You have the right to
          confirm the existence of processing, access your data, correct incomplete or inaccurate
          data, request anonymization or deletion, request data portability, and revoke consent.
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="Japanese Residents (APPI)">
        <p>
          If you are located in Japan, your personal information is handled in accordance with the
          Act on the Protection of Personal Information (APPI). You have the right to request
          disclosure, correction, addition, deletion, or cessation of use of your personal
          information. To make a request, contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="South Korean Residents (PIPA)">
        <p>
          If you are located in South Korea, your personal information is processed in accordance
          with the Personal Information Protection Act (PIPA). You have the right to access,
          correct, delete, and suspend processing of your personal information. To exercise any
          of these rights, contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="Indian Residents (DPDP Act)">
        <p>
          If you are located in India, your personal data is processed in accordance with the
          Digital Personal Data Protection Act, 2023 (DPDP Act). You have the right to access
          information about your data, to correct inaccurate data, and to request erasure. To
          exercise any of these rights, contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="Swiss Residents (nFADP)">
        <p>
          If you are located in Switzerland, your personal data is processed in accordance with the
          revised Federal Act on Data Protection (nFADP), in force since September 1, 2023. You
          have the right to information about your data, to correction, and to deletion. To exercise
          any of these rights, contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="Other Jurisdictions">
        <p>
          If you are located in a jurisdiction not listed above that grants you privacy rights under
          applicable law, you may contact us at{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">appstridemind@gmail.com</a>{' '}
          to exercise those rights. We will respond within 30 days and will make reasonable efforts
          to comply with applicable local requirements.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          Stridemind is designed for adults 55 and older. We do not knowingly collect data from
          anyone under the age of 13 (or a higher age if required by your local law).
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          If we make material changes to this policy, we will update the date at the top and notify
          users through the app where appropriate.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions or requests:{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">
            appstridemind@gmail.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
