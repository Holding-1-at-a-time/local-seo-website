import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | One Detail At A Time",
  description:
    "Privacy policy for One Detail At A Time. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="leading-relaxed">
                One Detail At A Time LLC ("we," "our," or "us") respects your privacy and is committed to protecting
                your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website odaat1.com or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
              <p className="leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request an estimate or quote for our services</li>
                <li>Schedule an appointment</li>
                <li>Contact us via phone, email, or our contact form</li>
                <li>Subscribe to our newsletter or marketing communications</li>
              </ul>
              <p className="leading-relaxed mt-4">This information may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Vehicle information (year, make, model)</li>
                <li>Service preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
              <p className="leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Device identifiers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and manage our detailing services</li>
                <li>Respond to your inquiries and estimate requests</li>
                <li>Schedule and confirm appointments</li>
                <li>Send service reminders and follow-up communications</li>
                <li>Improve our website and services</li>
                <li>Send promotional materials and special offers (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are
                small text files stored on your device that help us understand how you use our site.
              </p>
              <p className="leading-relaxed mb-4">We use cookies for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>Marketing and advertising purposes</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability
                to use certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="leading-relaxed mb-4">
                We may use third-party services that collect, monitor, and analyze data to improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Vercel Analytics:</strong> For website performance and usage analytics
                </li>
                <li>
                  <strong>Resend:</strong> For email communications and estimate requests
                </li>
                <li>
                  <strong>Google Analytics:</strong> For website traffic analysis (if applicable)
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                These third parties have their own privacy policies governing their use of your information. We
                encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our
                  business (e.g., email service providers, payment processors)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or government regulation
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of others
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the internet or
                electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
              <p className="leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request access to the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Opt-Out:</strong> Opt-out of marketing communications at any time
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data in a portable format
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, please contact us at estimates@odaat1.com or call (726) 207-1007.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">California Privacy Rights (CCPA)</h2>
              <p className="leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act
                (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to know if personal information is sold or disclosed</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to deletion of personal information</li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about
                how we protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold mb-2">One Detail At A Time LLC</p>
                <p>11692 Bricken Circle</p>
                <p>San Antonio, TX 78233</p>
                <p className="mt-2">Email: estimates@odaat1.com</p>
                <p>Phone: (726) 207-1007</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
