import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | odaat1.com",
  description:
    "Terms and conditions for using odaat1.com detailing services. Read our service terms, payment policies, and liability information.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
                <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using odaat1.com or our services, you agree to be bound by these Terms and
                    Conditions. If you do not agree with any part of these terms, you may not use our services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">2. Services Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide professional automotive detailing services including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Ceramic coating application and protection</li>
                    <li>Interior deep cleansing and restoration</li>
                    <li>Paint correction and enhancement</li>
                    <li>Additional detailing services as described on our website</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Service descriptions are provided for general information and may vary based on vehicle condition
                    and customer needs.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">3. Pricing and Payment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Pricing for our services is provided as estimates and may vary based on vehicle size, condition, and
                    specific requirements. Final pricing will be confirmed before service begins.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Payment is due upon completion of services unless otherwise arranged</li>
                    <li>We accept major credit cards, debit cards, and other payment methods as posted</li>
                    <li>Prices do not include applicable taxes unless stated</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">4. Scheduling and Cancellation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Appointments are scheduled based on availability. We require:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>At least 48 hours notice for cancellations to avoid fees</li>
                    <li>Timely arrival for scheduled appointments</li>
                    <li>Advance notice if your vehicle requires special accommodation</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Late cancellations or no-shows may result in cancellation fees up to 50% of the scheduled service
                    cost.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">5. Vehicle Condition and Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    While we take extreme care with every vehicle:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>We are not liable for pre-existing damage, defects, or mechanical issues</li>
                    <li>Customers must disclose any known paint damage, weak clear coat, or panel issues</li>
                    <li>We are not responsible for damage resulting from defective paint, clear coat, or materials</li>
                    <li>Any existing damage will be documented before service begins</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">6. Service Guarantees</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ceramic coating warranties are provided by the coating manufacturer and vary by product:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>2-year, 5-year, and 7-year options available</li>
                    <li>Warranty requires proper maintenance as outlined in care instructions</li>
                    <li>Coverage details provided at time of service</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Interior detailing services are guaranteed for workmanship. If you are unsatisfied with our work,
                    notify us within 48 hours for review.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">7. Customer Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed">Customers agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate vehicle information and condition disclosure</li>
                    <li>Remove all personal belongings from the vehicle</li>
                    <li>Follow provided maintenance instructions for ceramic coatings</li>
                    <li>Maintain reasonable cleanliness between detailing services</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the fullest extent permitted by law, our liability is limited to the cost of the service
                    provided. We are not liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of use of vehicle during service</li>
                    <li>Damage from pre-existing conditions</li>
                    <li>Issues arising from failure to follow maintenance instructions</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">9. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on odaat1.com, including text, images, logos, and design elements, is our property or
                    licensed to us. Unauthorized use is prohibited.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">10. Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any disputes arising from these terms or our services shall be resolved through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Initial good-faith negotiation between parties</li>
                    <li>Binding arbitration if negotiation fails</li>
                    <li>Governing law as determined by our business location</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">11. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be posted on this page with an
                    updated effective date. Continued use of our services constitutes acceptance of modified terms.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">12. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms and Conditions, please contact us through the estimate request form
                    on our website.
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
