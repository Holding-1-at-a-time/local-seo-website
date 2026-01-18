import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, CheckCircle2, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Car Detailing Alamo Heights | Luxury Auto Detailing | ODAAT1",
  description:
    "Premium car detailing in Alamo Heights, San Antonio TX. Ceramic coating, paint correction & interior detailing for historic Alamo Heights homes. IDA-certified. Call (726) 207-1007.",
  keywords: [
    "car detailing alamo heights",
    "ceramic coating alamo heights",
    "paint correction alamo heights",
    "auto detailing alamo heights san antonio",
    "luxury detailing near alamo heights",
  ],
}

export default function AlamoHeightsDetailingPage() {
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
                Serving Alamo Heights
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Luxury Car Detailing in Alamo Heights, San Antonio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                Sophisticated auto detailing services for Alamo Heights' historic community. Preserving luxury and classic vehicles near Broadway, Austin Highway, and Olmos Park.
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
                <h2 className="text-3xl font-bold mb-4">Detailing Excellence for Alamo Heights' Finest Vehicles</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Alamo Heights' rich automotive heritage—from classic cars in tree-lined neighborhoods to modern luxury
                  vehicles—deserves detailing services that match its sophistication. One Detail At A Time brings
                  IDA-certified expertise to preserve your vehicle's value and beauty.
                </p>
              </div>

              {/* Alamo Heights-Specific Services */}
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Paint Correction & Restoration</h3>
                    <p className="text-sm text-muted-foreground">
                      Specialized{" "}
                      <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                        paint correction
                      </Link>{" "}
                      for Alamo Heights' collection of European luxury and classic American vehicles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Ceramic Coating Protection</h3>
                    <p className="text-sm text-muted-foreground">
                      Long-term{" "}
                      <Link href="/san-antonio-ceramic-coating" className="text-primary hover:underline">
                        ceramic coating
                      </Link>{" "}
                      to protect against Broadway traffic grime and Texas sun exposure.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Interior Preservation</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete{" "}
                      <Link href="/san-antonio-interior-deep-cleaning" className="text-primary hover:underline">
                        interior care
                      </Link>{" "}
                      with leather conditioning and UV protection for Alamo Heights' premium interiors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Maintenance Programs</h3>
                    <p className="text-sm text-muted-foreground">
                      Recurring detailing packages with{" "}
                      <Link href="/san-antonio-exterior-hand-wash-sealant" className="text-primary hover:underline">
                        safe washing
                      </Link>{" "}
                      for Alamo Heights residents who value regular care.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Why Alamo Heights Trusts One Detail At A Time</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Respect for Classic & Luxury Vehicles</h3>
                    <p className="text-muted-foreground">
                      From vintage American classics to modern German engineering, we understand the unique needs of Alamo
                      Heights' diverse automotive collection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">IDA-Certified Craftsmanship</h3>
                    <p className="text-muted-foreground">
                      International Detailing Association certification ensures your investment receives proper care using
                      industry-leading techniques and products.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Community Investment</h3>
                    <p className="text-muted-foreground">
                      We donate 10% of profits to Junior Achievement of South Texas, aligning with Alamo Heights' tradition
                      of supporting local education and community programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Convenient North-Central Location</h3>
                    <p className="text-muted-foreground">
                      Located at 11692 Bricken Circle, easily accessible from Alamo Heights via Broadway Street or Austin
                      Highway. Quick commute from the historic downtown Alamo Heights area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Serving Alamo Heights & Surrounding Communities</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We proudly serve Alamo Heights, Olmos Park, Terrell Hills, and the greater North Central San Antonio area.
                View all our{" "}
                <Link href="/san-antonio-car-detailing-services" className="text-primary hover:underline">
                  San Antonio detailing services
                </Link>
                .
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div>
                  <p className="font-semibold mb-2">Alamo Heights Area</p>
                  <p className="text-muted-foreground">Broadway Street</p>
                  <p className="text-muted-foreground">Austin Highway</p>
                  <p className="text-muted-foreground">McCullough Avenue</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Nearby Communities</p>
                  <p className="text-muted-foreground">Olmos Park</p>
                  <p className="text-muted-foreground">Terrell Hills</p>
                  <p className="text-muted-foreground">Lincoln Heights</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Major Landmarks</p>
                  <p className="text-muted-foreground">Alamo Quarry Market</p>
                  <p className="text-muted-foreground">Incarnate Word</p>
                  <p className="text-muted-foreground">Fort Sam Houston</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 rounded-2xl bg-primary/5 p-12">
              <h2 className="text-3xl font-bold">Preserve Your Vehicle's Excellence</h2>
              <p className="text-lg text-muted-foreground">
                Contact us today for expert detailing services tailored to Alamo Heights' luxury vehicles.
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
            name: "One Detail at a Time (ODAAT1) - Alamo Heights Car Detailing",
            image: "https://odaat1.com/logo.png",
            url: "https://odaat1.com/areas-served/alamo-heights-car-detailing",
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
              name: "Alamo Heights, San Antonio, TX",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "07:00",
                closes: "22:00",
              },
            ],
          }),
        }}
      />
    </div>
  )
}
