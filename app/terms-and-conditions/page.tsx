import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | One Detail At A Time",
  description: "Terms and conditions for One Detail At A Time auto detailing services in San Antonio, TX.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
              <p className="leading-relaxed">
                Welcome to One Detail At A Time LLC! These terms and conditions outline the rules and regulations for
                using our website at odaat1.com and our auto detailing services in San Antonio, TX.
              </p>
              <p className="leading-relaxed mt-4">
                By accessing this website and using our services, you accept these terms and conditions in full. Do not
                continue to use One Detail At A Time's services if you do not agree to all of the terms and conditions
                stated on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Refunds, Deposit, and Cancellation Policy</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">Refunds Policy</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Refund Eligibility:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Refunds are applicable for services that have not been rendered</li>
                    <li>Refunds must be requested within 3 days from the date of service</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Refund Process:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To request a refund, contact our customer support team at estimates@odaat1.com</li>
                    <li>
                      Provide your name, contact information, invoice number, and a brief explanation of the reason for
                      your refund request
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Refund Approval:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Each refund request will be evaluated on a case-by-case basis</li>
                    <li>
                      Refunds may be refused if services have already been provided or if the request does not meet our
                      refund eligibility criteria
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Refund Method:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Approved refunds will be processed through the original payment method</li>
                    <li>
                      Please allow 7-21 business days for the refund to be processed and reflected in your account
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Partial Refunds:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Partial refunds may be issued if only a portion of the services has been completed</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Non-Refundable Items:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Certain items, such as gift cards, promotional offers, or special discounted services, may be
                      non-refundable
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Deposit Policy</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Deposit Amount:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      A non-refundable deposit of 20% of the estimated total is required to secure your detailing
                      appointment
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Deposit Payment:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Deposits can be paid online through our secure payment portal or over the phone with our customer
                      support team
                    </li>
                    <li>Accepted payment methods include cash, all major credit cards, and Cash App</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Deposit Transfer:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Rescheduling requires a minimum of 24 hours notice</li>
                    <li>
                      With a 24-hour cancellation notice, your deposit can be transferred to the new appointment date
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Late Cancellation:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cancellations with less than 24 hours notice will result in the forfeiture of the deposit</li>
                    <li>This policy compensates for the loss of time and resources allocated for your service</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Cancellations</h3>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>A minimum of 24 hours notice is required for cancellations</li>
                  <li>Call or text our customer support team to cancel an appointment at (726) 207-1007</li>
                  <li>Cancellations with less than 24 hours notice will result in the forfeiture of the deposit</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Agreement</h2>
              <p className="leading-relaxed mb-4">
                By scheduling an appointment or using our services, you authorize One Detail At A Time LLC to perform
                the estimated repairs and detailing services on your vehicle(s).
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  During the repair or detailing process, your vehicle may need to be driven on streets, highways, or
                  elsewhere for testing, inspection, or transportation
                </li>
                <li>
                  You grant One Detail At A Time LLC and its employees permission to operate your vehicle for these
                  purposes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Vehicle Care and Responsibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  One Detail At A Time LLC will take reasonable care to prevent any loss or damage to your vehicle and
                  any personal property left inside it
                </li>
                <li>
                  However, we will not be held responsible for any loss or damage to the vehicle or personal property
                  caused by fire, theft, accident, or any other cause beyond our control
                </li>
                <li>
                  Any damages caused by your own negligence or misuse of the vehicle after the detailing service is
                  complete are your responsibility
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Liability Waiver</h2>
              <p className="leading-relaxed">
                You release One Detail At A Time LLC from any liability for damages to the vehicle or personal property
                caused by your own negligence or misuse of the vehicle after the detailing service is complete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Warranty Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Any warranties or guarantees offered by One Detail At A Time LLC will be provided separately in
                  writing
                </li>
                <li>
                  Warranty terms and conditions, including limitations and exclusions, will be outlined in the warranty
                  document
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment for our services is due as outlined in the estimate or invoice</li>
                <li>Accepted forms of payment include cash, all major credit cards, and Cash App</li>
                <li>Late payments may be subject to additional fees or penalties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p className="leading-relaxed mb-4">
                Our website uses cookies to help personalize your online experience. By accessing our website, you agree
                to use the required cookies.
              </p>
              <p className="leading-relaxed mb-4">
                A cookie is a text file placed on your device by a web server. Cookies cannot be used to run programs or
                deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web
                server in the domain that issued the cookie.
              </p>
              <p className="leading-relaxed">
                We may use cookies to collect, store, and track information for statistical or marketing purposes. You
                can accept or decline optional cookies through your browser settings. Some required cookies are
                necessary for the operation of our website and do not require your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property License</h2>
              <p className="leading-relaxed mb-4">
                Unless otherwise stated, One Detail At A Time LLC and/or its licensors own the intellectual property
                rights for all material on odaat1.com. All intellectual property rights are reserved.
              </p>
              <p className="leading-relaxed mb-4">You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy or republish material from our website</li>
                <li>Sell, rent, or sub-license material from our website</li>
                <li>Reproduce, duplicate, or copy material from our website</li>
                <li>Redistribute content from our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Hyperlinking</h2>
              <p className="leading-relaxed mb-4">
                The following organizations may link to our website without prior written approval:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>Online directory distributors</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These organizations may link to our home page, publications, or other website information so long as the
                link is not deceptive, does not falsely imply sponsorship or endorsement, and fits within the context of
                the linking party's site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Content Liability</h2>
              <p className="leading-relaxed">
                We shall not be held responsible for any content appearing on third-party websites that link to our
                site. You agree to protect and defend us against all claims raised from such external content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
              <p className="leading-relaxed">
                In the event of any dispute arising from these terms and conditions or our services, both parties agree
                to resolve the dispute through mediation or arbitration in accordance with the laws of Texas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and
                conditions relating to our website and services. Nothing in this disclaimer will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Limit or exclude our or your liability for death or personal injury</li>
                <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                <li>Limit any liabilities in any way that is not permitted under applicable law</li>
                <li>Exclude any liabilities that may not be excluded under applicable law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions shall be governed by and construed in accordance with the laws of the State
                of Texas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
              <p className="leading-relaxed">
                We reserve the right to modify or update these terms and conditions at any time without prior notice. By
                continuing to use our services after any modifications, you agree to be bound by the updated terms and
                conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Severability</h2>
              <p className="leading-relaxed">
                If any provision of these terms and conditions is deemed invalid or unenforceable, the remaining
                provisions will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions or concerns about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold mb-2">One Detail At A Time LLC</p>
                <p>11692 Bricken Circle</p>
                <p>San Antonio, TX 78233</p>
                <p className="mt-2">Email: estimates@odaat1.com</p>
                <p>Phone: (726) 207-1007</p>
              </div>
              <p className="leading-relaxed mt-6">
                Thank you for choosing One Detail At A Time LLC for your auto detailing needs!
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
