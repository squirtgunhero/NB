import type { Metadata } from "next";
import { AnimateIn } from "@/components/shared/animate-in";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for NicoleBeauchamp.com — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <h1 className="font-display text-4xl md:text-5xl text-ivory text-center">
              Privacy Policy
            </h1>
            <p className="mt-4 text-stone-400 text-center">
              Last updated: March 2026
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateIn>
            <div className="prose-custom space-y-10">
              <p className="text-stone-500 leading-relaxed">
                Nicole Beauchamp, licensed real estate salesperson affiliated
                with Sotheby&rsquo;s International Realty (&ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;), is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website NicoleBeauchamp.com (the &ldquo;Site&rdquo;).
              </p>

              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  1. Information We Collect
                </h2>
                <h3 className="font-display text-lg text-midnight mb-2 mt-6">
                  Personal Information
                </h3>
                <p className="text-stone-500 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily
                  provide when you:
                </p>
                <ul className="list-disc list-inside text-stone-500 space-y-1 ml-2">
                  <li>Submit a contact or inquiry form</li>
                  <li>Request a property valuation</li>
                  <li>Sign up for property alerts or our newsletter</li>
                  <li>Schedule a consultation or property tour</li>
                  <li>Use our mortgage calculator and choose to save results</li>
                </ul>
                <p className="text-stone-500 leading-relaxed mt-3">
                  This information may include your name, email address, phone
                  number, mailing address, property details, and any other
                  information you choose to provide.
                </p>

                <h3 className="font-display text-lg text-midnight mb-2 mt-6">
                  Automatically Collected Information
                </h3>
                <p className="text-stone-500 leading-relaxed">
                  When you access the Site, we may automatically collect certain
                  information including your IP address, browser type, operating
                  system, referring URLs, pages viewed, time spent on pages, and
                  other usage data.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-stone-500 leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-stone-500 space-y-1 ml-2">
                  <li>Respond to your inquiries and fulfill your requests</li>
                  <li>Provide property valuations and market analyses</li>
                  <li>Send property listings matching your criteria</li>
                  <li>
                    Communicate about market updates, events, and services you
                    may find relevant
                  </li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  3. Cookies & Tracking Technologies
                </h2>
                <p className="text-stone-500 leading-relaxed mb-3">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our Site. These may include:
                </p>
                <ul className="list-disc list-inside text-stone-500 space-y-1 ml-2">
                  <li>
                    <strong>Essential cookies:</strong> Required for the Site to
                    function properly
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> Help us understand how
                    visitors interact with the Site (e.g., Google Analytics)
                  </li>
                  <li>
                    <strong>Marketing cookies:</strong> Used to deliver relevant
                    advertisements and track campaign performance
                  </li>
                </ul>
                <p className="text-stone-500 leading-relaxed mt-3">
                  You can control cookie preferences through your browser
                  settings. Disabling certain cookies may affect the
                  functionality of the Site.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  4. Third-Party Sharing
                </h2>
                <p className="text-stone-500 leading-relaxed mb-3">
                  We do not sell your personal information. We may share your
                  information with:
                </p>
                <ul className="list-disc list-inside text-stone-500 space-y-1 ml-2">
                  <li>
                    <strong>Sotheby&rsquo;s International Realty:</strong> As
                    our affiliated brokerage, in connection with real estate
                    services
                  </li>
                  <li>
                    <strong>Service providers:</strong> Third parties who assist
                    with website hosting, analytics, email delivery, and
                    marketing
                  </li>
                  <li>
                    <strong>Legal requirements:</strong> When required by law,
                    regulation, or legal process
                  </li>
                  <li>
                    <strong>Business transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  5. Data Security
                </h2>
                <p className="text-stone-500 leading-relaxed">
                  We implement reasonable administrative, technical, and
                  physical security measures to protect your personal
                  information. However, no method of transmission over the
                  Internet or electronic storage is 100% secure. While we strive
                  to use commercially acceptable means to protect your
                  information, we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  6. Your Rights
                </h2>
                <p className="text-stone-500 leading-relaxed mb-3">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="list-disc list-inside text-stone-500 space-y-1 ml-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>
                    Request restriction of or object to processing of your
                    information
                  </li>
                </ul>
                <p className="text-stone-500 leading-relaxed mt-3">
                  To exercise any of these rights, please contact us using the
                  information provided below.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  7. Children&rsquo;s Privacy
                </h2>
                <p className="text-stone-500 leading-relaxed">
                  Our Site is not intended for individuals under the age of 18.
                  We do not knowingly collect personal information from
                  children. If you believe we have collected information from a
                  minor, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-stone-500 leading-relaxed">
                  We may update this Privacy Policy from time to time. The
                  updated version will be indicated by the &ldquo;Last
                  updated&rdquo; date at the top of this page. We encourage
                  you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  9. Contact Us
                </h2>
                <p className="text-stone-500 leading-relaxed">
                  If you have questions or concerns about this Privacy Policy or
                  our data practices, please contact us at:
                </p>
                <div className="mt-4 bg-white border border-stone-200 rounded-[4px] p-6">
                  <p className="text-midnight font-medium">
                    Nicole &ldquo;Nikki&rdquo; Beauchamp
                  </p>
                  <p className="text-stone-500 text-[14px] mt-1">
                    Licensed Real Estate Salesperson
                  </p>
                  <p className="text-stone-500 text-[14px]">
                    Sotheby&rsquo;s International Realty
                  </p>
                  <p className="text-stone-500 text-[14px] mt-2">
                    Email:{" "}
                    <a
                      href="mailto:nikki@nicolebeauchamp.com"
                      className="text-champagne hover:underline"
                    >
                      nikki@nicolebeauchamp.com
                    </a>
                  </p>
                  <p className="text-stone-500 text-[14px]">
                    Website:{" "}
                    <a
                      href="https://nicolebeauchamp.com"
                      className="text-champagne hover:underline"
                    >
                      nicolebeauchamp.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
