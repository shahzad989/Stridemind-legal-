import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Delete Your Account — Stridemind',
  description:
    'How to delete your Stridemind account and data, from inside the app or by email, and what is removed when you do.',
  alternates: { canonical: 'https://stridemind.app/delete-account' },
  openGraph: {
    title: 'Delete Your Stridemind Account',
    description: 'How to delete your Stridemind account and data, and what is removed when you do.',
    url: 'https://stridemind.app/delete-account',
    images: [{ url: 'https://stridemind.app/opengraph-image', width: 1200, height: 630 }],
  },
};

// Added 2026-11-01 for the Android launch. WHY this page exists: Google Play
// requires every app that lets people create an account to publish a web page,
// reachable without the app, that names the app, gives the steps to delete the
// account, and says what data is deleted or kept and for how long. Its URL goes
// into Play Console's Data safety form. It also serves iPhone users who have
// already removed the app and can no longer reach the in-app button.
//
// Every claim here is constrained by what the app actually does:
// - Settings > Account > Delete Account calls the delete_user database
//   function (app repo, supabase/migrations/008_delete_user.sql). It deletes
//   the account row, and every table holding the person's data cascades from
//   it, so the deletion is immediate, not queued.
// - "Within 30 days" covers the email route and Supabase's own backups, and
//   matches the retention line in the privacy policy. Do not shorten it.
// - PostHog and Sentry hold records keyed by the account's random ID, never
//   the name or email (Sentry runs with sendDefaultPii false). They are not
//   reached by the delete button, so the page says so plainly and offers
//   removal by email rather than promising an automatic cleanup that does not
//   exist.
// - Deleting the account does NOT cancel a store subscription. Billing belongs
//   to Apple or Google, so the cancel step comes first.
export default function DeleteAccount() {
  return (
    <LegalLayout title="Delete Your Account" lastUpdated="November 1, 2026">
      <p className="text-lg text-gray-700 leading-relaxed mb-10">
        This page explains how to delete your Stridemind account and the data that goes with it.
        You can do it yourself inside the Stridemind app in under a minute, or ask us to do it for
        you by email if you no longer have the app.
      </p>

      <LegalSection title="Before You Start: Cancel Any Subscription">
        <p>
          Deleting your account does not cancel a Stridemind Premium subscription, because the
          subscription is billed by Apple or Google rather than by us. If you subscribe, please
          cancel it first so you are not charged again.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>On an iPhone:</strong> open Settings, tap your name, tap Subscriptions, choose
            Stridemind, and tap Cancel Subscription.
          </li>
          <li>
            <strong>On an Android phone:</strong> open the Google Play Store app, tap your profile
            picture, tap Payments and subscriptions, then Subscriptions, choose Stridemind, and tap
            Cancel subscription.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Delete Your Account in the App">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Stridemind and sign in.</li>
          <li>Go to the Progress tab and tap the gear at the top to open Settings.</li>
          <li>Tap Account.</li>
          <li>Tap Delete Account, then tap Delete to confirm.</li>
        </ol>
        <p>
          Your account and your data are deleted straight away, and you are signed out. This cannot
          be undone, so a new account later would start from the beginning.
        </p>
      </LegalSection>

      <LegalSection title="Ask Us to Delete It by Email">
        <p>
          If you have already removed the app, or would rather we did it for you, email{' '}
          <a
            href="mailto:appstridemind@gmail.com?subject=Delete%20my%20Stridemind%20account"
            className="text-brand-dark hover:text-brand underline"
          >
            appstridemind@gmail.com
          </a>{' '}
          from the email address you signed up with and ask us to delete your account. We will
          confirm by email once it is done, within 30 days and usually much sooner.
        </p>
      </LegalSection>

      <LegalSection title="What Is Deleted">
        <ul className="list-disc pl-6 space-y-2">
          <li>Your account, including your name, your email address, and your password.</li>
          <li>Your walk history, saved strides, and weekly goal.</li>
          <li>Your check-in results, including the walking pace and step summaries stored with them.</li>
          <li>Any feedback you sent from inside the app.</li>
        </ul>
        <p>
          These are removed from our database immediately. Copies in our hosting provider&apos;s
          routine backups are gone within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="What Is Kept, and Why">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Purchase records.</strong> If you bought a subscription, Apple or Google keeps
            its own record of the purchase, and our subscription service, RevenueCat, keeps the
            transaction record that tax and accounting rules require. These do not include your
            name, your walks, or your check-in results.
          </li>
          <li>
            <strong>App usage and crash records.</strong> Our analytics service (PostHog) and crash
            reporting service (Sentry) hold records of how the app was used and of any errors. They
            are linked to a random account number, not to your name or email, and they cannot be
            traced back to you once your account is gone. They expire on those services&apos;
            normal schedules. Email us if you would like them removed sooner and we will do it
            within 30 days.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Questions">
        <p>
          Our{' '}
          <Link href="/privacy-policy" className="text-brand-dark hover:text-brand underline">
            privacy policy
          </Link>{' '}
          has the full detail on what we collect and why. For anything else, write to{' '}
          <a href="mailto:appstridemind@gmail.com" className="text-brand-dark hover:text-brand underline">
            appstridemind@gmail.com
          </a>{' '}
          and a real person will reply.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
