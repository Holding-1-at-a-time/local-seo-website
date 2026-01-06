import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2, Paintbrush } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Paint Repair San Antonio TX | Paint Chip & Scratch Repair | One Detail At A Time",
  description:
    "Expert paint chip and scratch repair in San Antonio, TX. Professional touch-up and paint correction at 11692 Bricken Circle. IDA-certified specialist. Call (726) 207-1007.",
  openGraph: {
    title: "Paint Repair San Antonio TX | Paint Chip & Scratch Repair",
    description: "Expert paint chip and scratch repair in San Antonio, TX. Professional touch-up and paint correction.",
    url: "https://onedetailatatime.com/san-antonio-paint-repair",
    siteName: "One Detail At A Time",
    locale: "en_US",
    type: "website",
  },
}

export default function PaintRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Paint Repair",
    serviceType: "Auto Paint Repair",
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
      "Expert paint chip and scratch repair service in San Antonio, TX. Professional color matching and touch-up for automotive paint.",
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
                    <Paintbrush className="h-4 w-4" />
                    <span>Expert Paint Touch-Up</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
                    Paint Repair
                    <span className="block text-primary mt-2">San Antonio, TX</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                    Professional paint chip and scratch repair in San Antonio. Expert color matching and touch-up to
                    restore your vehicle's finish.
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
                    src="/paint-chip-scratch-repair-san-antonio-tx.jpg"
                    alt="Professional paint chip and scratch repair service in San Antonio TX with expert color matching at One Detail At A Time detailing studio"
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
                  Expert Paint Touch-Up in San Antonio
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    At One Detail At A Time in San Antonio, TX, our paint repair service addresses chips, scratches, and
                    blemishes with professional color matching and application techniques. Located at 11692 Bricken
                    Circle, our IDA-certified specialist ensures seamless repairs that protect your vehicle's value.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">What's Included</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Thorough damage assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Professional color matching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Surface preparation and cleaning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Precision touch-up application</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Clear coat protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Blending for seamless finish</span>
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
                  Frequently Asked Questions About Paint Repair in San Antonio
                </h2>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">How long does paint repair take in San Antonio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Paint chip repair at our San Antonio studio typically takes 1-3 hours, depending on the number and
                      severity of chips. Some repairs may require additional curing time.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Can you match my car's paint color exactly?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, we use professional color matching systems to ensure the touch-up paint matches your
                      vehicle's original color, accounting for any fading from age and San Antonio sun exposure.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">What size paint damage can you repair in San Antonio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We specialize in repairing small to medium chips and scratches. For extensive damage requiring
                      panel repainting, we can recommend trusted San Antonio body shops.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Should I repair paint chips immediately?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, especially in San Antonio's climate. Paint chips expose bare metal to moisture, which can
                      lead to rust. Prompt repair protects your vehicle and maintains its value.
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
                  Ready to Repair Your Paint in San Antonio?
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
