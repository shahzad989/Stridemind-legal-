import type { Metadata } from 'next';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — StrideMind',
  description: 'StrideMind terms of service. Read the terms that govern your use of the app.',
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="April 8, 2026">
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        These Terms of Service govern your use of StrideMind. By creating an account or using
        the app, you agree to these terms. If you do not agree, do not use the app.
      </p>

      <LegalSection title="Who We Are">
        <p>
          StrideMind is an independently developed app (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;). Contact:{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">
            appstridemind@gmail.com
          </a>
        </p>
      </LegalSection>

      <LegalSection title="What StrideMind Is">
        <p>
          StrideMind provides audio-guided cognitive training sessions designed to be used while
          walking. The app is intended for general wellness purposes only. It is not a medical
          device, does not provide medical advice, and is not a substitute for professional
          medical care.
        </p>
        <p>
          The cognitive training content in StrideMind is based on published research into
          dual-task walking exercises. Results vary between individuals. We make no guarantee of
          specific outcomes.
        </p>
      </LegalSection>

      <LegalSection title="Your Account">
        <p>
          You are responsible for keeping your account credentials secure. You must provide
          accurate information when creating an account. One account per person. You must be at
          least 13 years old to use StrideMind, or such higher age as required by the laws of
          your jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="Premium Subscription">
        <ul className="list-disc pl-6 space-y-2">
          <li>StrideMind offers a free tier and an optional paid subscription (&ldquo;StrideMind Premium&rdquo;).</li>
          <li>
            Subscriptions are billed through the platform you downloaded the app from (Apple App
            Store or Google Play) and are subject to that platform&apos;s payment terms.
          </li>
          <li>Subscriptions renew automatically unless cancelled at least 24 hours before the renewal date.</li>
          <li>
            You can manage or cancel your subscription at any time through your Apple ID settings
            or Google Play account settings.
          </li>
          <li>
            We do not offer refunds outside of the standard refund policy of the platform through
            which you purchased your subscription.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Acceptable Use">
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Share your account with another person. One account is for one individual only.</li>
          <li>Use StrideMind in any way that could cause injury to yourself or others.</li>
          <li>Attempt to reverse engineer, copy, or redistribute any part of the app.</li>
          <li>Use the app for any unlawful purpose.</li>
        </ul>
        <p>
          Walking while using the app is inherently your responsibility. Pay attention to your
          surroundings at all times.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          All content in StrideMind — including audio sessions, training scripts, and visual design
          — is owned by StrideMind. You may not copy, reproduce, or distribute any part of it
          without written permission.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer of Warranties">
        <p>
          StrideMind is provided &ldquo;as is&rdquo; without warranties of any kind. We do not
          guarantee the app will be available at all times or free of errors.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, StrideMind is not liable for any
          indirect, incidental, or consequential damages arising from your use of StrideMind.
          Some jurisdictions do not allow the exclusion or limitation of certain types of
          liability; in such cases, our liability is limited to the maximum extent permitted by
          local law.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these terms from time to time. Continued use of the app after changes are
          posted means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          We reserve the right to suspend or terminate your account at any time if you violate
          these terms, abuse the app, or engage in conduct we determine to be harmful. You may
          delete your account at any time through the app settings. Upon termination, your access
          to premium features will end and your data will be deleted within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="Dispute Resolution">
        <p>
          <strong>For users in the United States:</strong> Any dispute arising from your use of
          StrideMind will be resolved through binding individual arbitration under the rules of
          the American Arbitration Association, not in court. You waive any right to participate
          in a class action lawsuit or class-wide arbitration. This clause does not apply to claims
          that qualify for small claims court.
        </p>
        <p>
          <strong>For users in the European Union or United Kingdom:</strong> You may bring claims
          before the courts of your country of residence. Nothing in these terms limits your rights
          to bring claims before the relevant consumer protection authority in your jurisdiction.
          EU users may also use the European Commission&apos;s Online Dispute Resolution platform at{' '}
          <a href="https://ec.europa.eu/consumers/odr" className="text-brand-dark hover:text-brand underline" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr
          </a>
          .
        </p>
        <p>
          <strong>For users in Australia:</strong> Nothing in these terms excludes, restricts, or
          modifies any rights or remedies you have under the Australian Consumer Law that cannot
          be excluded, restricted, or modified by agreement.
        </p>
        <p>
          <strong>For users in Canada:</strong> You may have additional rights under applicable
          provincial consumer protection legislation.
        </p>
        <p>
          <strong>For users in Brazil:</strong> Consumer disputes may be brought before the
          appropriate consumer protection authority (PROCON) or through the consumer dispute
          platform consumidor.gov.br.
        </p>
        <p>
          <strong>For all other users:</strong> Any dispute not subject to the arbitration clause
          above will be resolved in the courts of the State of New York, United States, unless
          local law requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These terms are governed by the laws of the State of New York, United States, except
          where local mandatory law requires otherwise. Nothing in these terms is intended to
          deprive you of protections afforded by the mandatory laws of your country of residence.
        </p>
      </LegalSection>

      <LegalSection title="Severability">
        <p>
          If any provision of these terms is found to be unenforceable or invalid, that provision
          will be limited or eliminated to the minimum extent necessary, and the remaining
          provisions will continue in full force and effect.
        </p>
      </LegalSection>

      <LegalSection title="Entire Agreement">
        <p>
          These Terms of Service, together with our Privacy Policy, constitute the entire
          agreement between you and StrideMind regarding your use of the app and supersede any
          prior agreements or understandings.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions:{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">
            appstridemind@gmail.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
