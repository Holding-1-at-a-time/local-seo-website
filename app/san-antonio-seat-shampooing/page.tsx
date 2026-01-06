import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2, Armchair } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Seat Shampooing San Antonio TX | Upholstery Cleaning | One Detail At A Time",
  description:
    "Professional seat shampooing and upholstery cleaning in San Antonio, TX. Deep clean car seats at 11692 Bricken Circle. IDA-certified specialist. Call (726) 207-1007.",
  openGraph: {
    title: "Seat Shampooing San Antonio TX | Upholstery Cleaning",
    description:
      "Professional seat shampooing and upholstery cleaning in San Antonio, TX. Deep clean and restore car seats.",
    url: "https://onedetailatatime.com/san-antonio-seat-shampooing",
    siteName: "One Detail At A Time",
    locale: "en_US",
    type: "website",
  },
}

export default function SeatShampooingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Seat Shampooing",
    serviceType: "Upholstery Cleaning",
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
      "Professional seat shampooing and upholstery cleaning service in San Antonio, TX. Deep clean car seats with specialized products and techniques.",
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
                    <Armchair className="h-4 w-4" />
                    <span>Deep Upholstery Cleaning</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
                    Seat Shampooing
                    <span className="block text-primary mt-2">San Antonio, TX</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                    Professional seat shampooing and upholstery cleaning in San Antonio. Deep clean and restore your car
                    seats with expert techniques.
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
                    src="/car-seat-shampooing-upholstery-cleaning-san-anton.jpg"
                    alt="Professional seat shampooing and upholstery cleaning service for cars in San Antonio TX at One Detail At A Time on 11692 Bricken Circle"
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
                  Expert Upholstery Cleaning in San Antonio
                </h2>
                <div className="prose prose-invert max-w-none space-y-6 text-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    At One Detail At A Time in San Antonio, TX, our seat shampooing service provides deep cleaning for
                    fabric and cloth upholstery. Located at 11692 Bricken Circle, our professional detailing studio uses
                    specialized products and extraction equipment to remove stains, odors, and embedded dirt.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">What's Included</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Pre-treatment of stains</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Deep shampooing with specialized cleaners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Hot water extraction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Odor elimination treatment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Fabric protection application (optional)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Complete drying</span>
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
                  Frequently Asked Questions About Seat Shampooing in San Antonio
                </h2>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">How long does seat shampooing take in San Antonio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Professional seat shampooing at our San Antonio studio typically takes 2-4 hours, including drying
                      time. Heavily soiled seats may require additional time.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Can you remove all stains from car seats?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      While we can remove most stains, some permanent stains (like bleach damage or old set-in stains)
                      may not come out completely. Our San Antonio specialists will provide honest expectations during
                      assessment.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">How long until my seats are dry in San Antonio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      With our professional extraction equipment and San Antonio's climate, seats are typically dry
                      within 2-6 hours. We ensure they're completely dry before you leave our facility.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Do you clean leather seats or just fabric in San Antonio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This service is specifically for fabric and cloth seats. For leather seats, we recommend our
                      Interior Deep Cleansing service, which includes specialized leather cleaning and conditioning.
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
                  Ready to Deep Clean Your Seats in San Antonio?
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
