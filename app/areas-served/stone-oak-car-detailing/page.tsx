import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, CheckCircle2, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Car Detailing Stone Oak | Ceramic Coating & Paint Correction | ODAAT1",
  description:
    "Professional car detailing in Stone Oak, San Antonio TX. Ceramic coating, paint correction & interior detailing for Stone Oak luxury vehicles. IDA-certified. Call (726) 207-1007.",
  keywords: [
    "car detailing stone oak",
    "ceramic coating stone oak",
    "paint correction stone oak",
    "auto detailing stone oak san antonio",
    "detailing near stone oak",
  ],
}

export default function StoneOakDetailingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <MapPin className="h-4 w-4" />
                Serving Stone Oak
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Professional Car Detailing in Stone Oak, San Antonio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                Premium auto detailing services for Stone Oak residents. Ceramic coating, paint correction, and interior detailing for luxury vehicles near Sonterra Boulevard & Stone Oak Parkway.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="text-lg h-12">
                  <a href="tel:7262071007">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (726) 207-1007
                  </a>
                </Button>
                <Button size="lg" asChild variant="outline" className="text-lg h-12 bg-transparent">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Service Area */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Premium Detailing for Stone Oak Luxury Vehicles</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stone Oak's affluent community demands the highest quality vehicle care. One Detail At A Time provides
                  IDA-certified detailing services designed specifically for the luxury vehicles commonly seen throughout
                  Stone Oak, from Sonterra to the TPC Parkway area.
                </p>
              </div>

              {/* Stone Oak-Specific Services */}
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Ceramic Coating Stone Oak</h3>
                    <p className="text-sm text-muted-foreground">
                      Protect your investment with{" "}
                      <Link href="/san-antonio-ceramic-coating" className="text-primary hover:underline">
                        2-7 year ceramic coating
                      </Link>{" "}
                      designed to withstand Stone Oak's environmental challenges—from the Texas sun to I-281 road grime.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Paint Correction for Luxury Cars</h3>
                    <p className="text-sm text-muted-foreground">
                      Remove swirl marks and oxidation with{" "}
                      <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                        multi-stage paint correction
                      </Link>
                      —the standard for Stone Oak's BMW, Mercedes, and Tesla owners.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Interior Deep Cleaning</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete{" "}
                      <Link href="/san-antonio-interior-deep-cleaning" className="text-primary hover:underline">
                        interior sterilization
                      </Link>{" "}
                      with hot water extraction and ozone treatment for Stone Oak families and executives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Maintenance Detailing</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular maintenance packages with{" "}
                      <Link href="/san-antonio-exterior-hand-wash-sealant" className="text-primary hover:underline">
                        safe hand washing
                      </Link>{" "}
                      to keep your vehicle pristine between major details.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Stone Oak */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Why Stone Oak Trusts One Detail At A Time</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Convenient Location Near Stone Oak</h3>
                    <p className="text-muted-foreground">
                      Located at 11692 Bricken Circle, just minutes from Stone Oak Parkway. Easy access from Sonterra
                      Boulevard, making drop-off and pick-up seamless for busy professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">IDA-Certified Expertise</h3>
                    <p className="text-muted-foreground">
                      International Detailing Association certification ensures your luxury vehicle receives the proper
                      care it deserves, following industry best practices for paint correction and protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Community-Focused Service</h3>
                    <p className="text-muted-foreground">
                      We donate 10% of all profits to Junior Achievement of South Texas, supporting financial literacy
                      education for the next generation—a value that resonates with Stone Oak's community-minded residents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Protection Against Local Hazards</h3>
                    <p className="text-muted-foreground">
                      Specialized treatments for Stone Oak-specific challenges: cedar pollen from nearby Hill Country, hard
                      water spots, and the intense UV exposure that damages unprotected paint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Serving All of Stone Oak & Surrounding Areas</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We proudly serve Stone Oak, Sonterra, TPC Parkway, Canyon Springs, and the greater North San Antonio area.
                View all our{" "}
                <Link href="/san-antonio-car-detailing-services" className="text-primary hover:underline">
                  San Antonio detailing services
                </Link>
                .
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div>
                  <p className="font-semibold mb-2">Stone Oak Area</p>
                  <p className="text-muted-foreground">Sonterra Boulevard</p>
                  <p className="text-muted-foreground">Stone Oak Parkway</p>
                  <p className="text-muted-foreground">TPC Parkway</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Nearby Communities</p>
                  <p className="text-muted-foreground">Canyon Springs</p>
                  <p className="text-muted-foreground">The Dominion</p>
                  <p className="text-muted-foreground">Rogers Ranch</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Major Roads</p>
                  <p className="text-muted-foreground">US-281 North</p>
                  <p className="text-muted-foreground">Loop 1604</p>
                  <p className="text-muted-foreground">Evans Road</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 rounded-2xl bg-primary/5 p-12">
              <h2 className="text-3xl font-bold">Ready to Protect Your Investment?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us today for a free consultation and estimate for your Stone Oak vehicle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="text-lg h-12">
                  <a href="tel:7262071007">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (726) 207-1007
                  </a>
                </Button>
                <Button size="lg" asChild variant="outline" className="text-lg h-12 bg-transparent">
                  <Link href="/contact">Schedule Online</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://odaat1.com",
            name: "One Detail at a Time (ODAAT1) - Stone Oak Car Detailing",
            image: "https://odaat1.com/logo.png",
            url: "https://odaat1.com/areas-served/stone-oak-car-detailing",
            telephone: "+17262071007",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "11692 Bricken Circle",
              addressLocality: "San Antonio",
              addressRegion: "TX",
              postalCode: "78233",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 29.5485,
              longitude: -98.3971,
            },
            areaServed: {
              "@type": "City",
              name: "Stone Oak, San Antonio, TX",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "07:00",
                closes: "22:00",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Car Detailing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Ceramic Coating Stone Oak",
                    description:
                      "Professional ceramic coating application for Stone Oak luxury vehicles with 2-7 year protection.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Paint Correction Stone Oak",
                    description: "Multi-stage paint correction to remove swirls, scratches and oxidation.",
                  },
                },
              ],
            },
          }),
        }}
      />
    </div>
  )
}
