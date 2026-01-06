import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Headlight Polishing San Antonio TX | Headlight Restoration | One Detail At A Time",
  description:
    "Professional headlight polishing and restoration in San Antonio, TX. Remove oxidation, improve visibility at 11692 Bricken Circle. IDA-certified specialist. Call (726) 207-1007.",
  openGraph: {
    title: "Headlight Polishing San Antonio TX | Headlight Restoration",
    description:
      "Professional headlight polishing and restoration in San Antonio, TX. Remove oxidation and improve visibility.",
    url: "https://onedetailatatime.com/san-antonio-headlight-polishing",
    siteName: "One Detail At A Time",
    locale: "en_US",
    type: "website",
  },
}

export default function HeadlightPolishingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Headlight Polishing",
    serviceType: "Headlight Restoration",
    provider: {
      "@type": "LocalBusiness",
      name: "One Detail At A Time",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11692 Bricken Circle",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78233",
        addressCountry: "US",
      },
      telephone: "+17262071007",
    },
    areaServed: {
      "@type": "City",
      name: "San Antonio",
      "@id": "https://en.wikipedia.org/wiki/San_Antonio",
    },
    description:
      "Professional headlight polishing and restoration service in San Antonio, TX. Remove oxidation and improve visibility with expert techniques.",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-7xl mx-auto">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20">
                    <Lightbulb className="h-4 w-4" />
                    <span>Restore Clarity & Visibility</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
                    Headlight Polishing
                    <span className="block text-primary mt-2">San Antonio, TX</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                    Professional headlight restoration in San Antonio. Remove oxidation, improve visibility, and enhance
                    your vehicle's appearance with expert polishing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" asChild className="text-lg h-14 px-8">
                      <a href="tel:7262071007">
                        <Phone className="mr-2 h-5 w-5" />
                        Call (726) 207-1007
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/headlight-restoration-polishing-san-antonio-tx.jpg"
                    alt="Professional headlight polishing and restoration service in San Antonio TX removing oxidation and yellowing at One Detail At A Time on 11692 Bricken Circle"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Service Details */}
          <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Expert Headlight Restoration in San Antonio
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    At One Detail At A Time in San Antonio, TX, our headlight polishing service removes oxidation,
                    yellowing, and cloudiness from your headlight lenses. Located at 11692 Bricken Circle, our
                    IDA-certified specialist uses professional techniques to restore clarity and improve nighttime
                    visibility.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">What's Included</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Complete headlight lens cleaning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Wet sanding to remove oxidation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Multi-stage polishing for clarity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">UV protection coating application</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Surrounding area masking and protection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Frequently Asked Questions About Headlight Polishing in San Antonio
                </h2>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">How long does headlight polishing take in San Antonio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Professional headlight restoration at our San Antonio studio typically takes 1-2 hours for both
                      headlights, depending on the severity of oxidation.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Will the headlight restoration last?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, with our UV protection coating applied during the service, your headlights in San Antonio
                      will stay clear for 1-2 years. Regular maintenance can extend this further.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">
                      Can you restore heavily oxidized headlights in San Antonio?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, our professional wet sanding and multi-stage polishing process can restore even severely
                      yellowed and cloudy headlights to like-new clarity.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">
                      Does headlight polishing improve visibility at night in San Antonio?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Absolutely. Removing oxidation can improve light output by 50-100%, significantly enhancing
                      nighttime driving safety on San Antonio roads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">
                  Ready to Restore Your Headlights in San Antonio?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Contact One Detail At A Time today. Tuesday-Sunday, 7:00 AM - 10:00 PM.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg h-14 px-8">
                    <a href="tel:7262071007">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (726) 207-1007
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
