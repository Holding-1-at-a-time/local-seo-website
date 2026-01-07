import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | odaat1.com",
  description:
    "Privacy policy for odaat1.com detailing services. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information that you provide directly to us when you request an estimate or contact us
                    about our services. This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Vehicle information (year, make, model)</li>
                    <li>Service preferences and additional notes</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide you with estimates for our detailing services</li>
                    <li>Communicate with you about your requests and our services</li>
                    <li>Improve our website and services</li>
                    <li>Send you updates and promotional materials (with your consent)</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">3. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties. We may
                    share information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Service providers who assist us in operating our website and conducting our business</li>
                    <li>Law enforcement or regulatory agencies when required by law</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">4. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your browsing experience and analyze
                    website traffic. You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information from unauthorized
                    access, alteration, or disclosure. However, no method of transmission over the internet is 100%
                    secure.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access, correct, or delete your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request information about how we use your data</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">7. Third-Party Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy
                    practices of these external sites. We use Resend for email communications, which has its own privacy
                    policy.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">8. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect
                    personal information from children.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">9. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any significant changes
                    by posting the new policy on this page with an updated effective date.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">10. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this privacy policy or how we handle your personal information, please
                    contact us through the estimate form on our website.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
