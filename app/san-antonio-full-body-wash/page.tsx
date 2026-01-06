import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2, Droplets } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Full Body Wash San Antonio TX | Hand Wash Car Detailing | One Detail At A Time",
  description:
    "Professional full body hand wash services in San Antonio, TX. Expert car washing with premium products at 11692 Bricken Circle. IDA-certified auto detailing specialist. Call (726) 207-1007.",
  openGraph: {
    title: "Full Body Wash San Antonio TX | Hand Wash Car Detailing",
    description:
      "Professional full body hand wash services in San Antonio, TX. Expert car washing with premium products.",
    url: "https://onedetailatatime.com/san-antonio-full-body-wash",
    siteName: "One Detail At A Time",
    locale: "en_US",
    type: "website",
  },
}

export default function FullBodyWashPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full Body Wash",
    serviceType: "Car Wash",
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
      "Professional full body hand wash service in San Antonio, TX. Complete exterior cleaning with premium products and techniques.",
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
                    <Droplets className="h-4 w-4" />
                    <span>Premium Hand Wash Service</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
                    Full Body Wash
                    <span className="block text-primary mt-2">San Antonio, TX</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                    Professional hand wash service in San Antonio. Complete exterior cleaning with premium products and
                    meticulous attention to detail.
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
                    src="/full-body-wash-hand-wash-car-san-antonio-tx.jpg"
                    alt="Professional full body hand wash service for cars in San Antonio TX at One Detail At A Time detailing studio on 11692 Bricken Circle"
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Complete Hand Wash in San Antonio</h2>
                <div className="prose prose-invert max-w-none space-y-6 text-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    At One Detail At A Time in San Antonio, TX, our full body wash service provides thorough exterior
                    cleaning using premium products and techniques. Located at 11692 Bricken Circle, our professional
                    detailing studio ensures your vehicle receives expert hand washing care.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">What's Included</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Complete hand wash with pH-balanced soap</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Wheel and tire cleaning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Window and glass cleaning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Microfiber drying to prevent scratches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Door jambs cleaning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">Tire shine application</span>
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
                  Frequently Asked Questions About Full Body Wash in San Antonio
                </h2>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">How long does a full body wash take in San Antonio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A professional full body wash at our San Antonio detailing studio typically takes 45-60 minutes,
                      depending on the vehicle size and condition.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">What makes hand washing better than automatic car washes?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hand washing prevents scratches and swirl marks common in automatic car washes. Our San Antonio
                      specialists use proper techniques and premium products to protect your vehicle's paint.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">How often should I get a full body wash in San Antonio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We recommend every 1-2 weeks for San Antonio vehicles, especially during pollen season or dusty
                      conditions. Regular washing protects your paint from contaminants.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">
                      Do you offer mobile full body wash services in San Antonio?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No, we operate exclusively from our professional detailing studio at 11692 Bricken Circle, San
                      Antonio, TX 78233. This ensures we have all the proper equipment and controlled environment for
                      the best results.
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
                  Ready for a Professional Hand Wash in San Antonio?
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
