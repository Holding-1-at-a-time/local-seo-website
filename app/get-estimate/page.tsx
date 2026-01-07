import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EstimateForm } from "@/components/estimate-form"
import { Shield, Sparkles, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Free Estimate | odaat1.com - Request Your Quote Today",
  description:
    "Request a free estimate for ceramic coating or interior deep cleansing services. Professional car detailing with transparent pricing. Get your quote today.",
  keywords: [
    "car detailing estimate",
    "ceramic coating quote",
    "interior detailing price",
    "free estimate",
    "detailing quote",
  ],
}

export default function GetEstimatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">Get your free estimate</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Tell us about your vehicle and we'll provide a detailed quote for our services.
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                {/* Form */}
                <div>
                  <EstimateForm />
                </div>

                {/* Why Choose Us */}
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">What to expect</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We'll review your request and respond within 24 hours with a detailed estimate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          No hidden fees. We provide clear pricing based on your vehicle's condition and needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Custom Recommendations</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We'll suggest the best service package for your vehicle and budget.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">No Obligation</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Requesting an estimate is completely free with no pressure to commit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-primary" />
                      <h3 className="text-xl font-semibold">Our Services</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>Ceramic Coating (2-7 year protection)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>Interior Deep Cleansing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>Paint Correction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>Odor Elimination</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>Leather Conditioning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
