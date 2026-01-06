import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Shield, CheckCircle2, Sparkles, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ceramic Coating San Antonio | Ultimate Paint Protection | One Detail At A Time",
  description:
    "Premium ceramic coating in San Antonio, TX. 2-year and 5-year protection options. IDA-certified specialist at 11692 Bricken Circle. Transform your vehicle. Call (726) 207-1007.",
  openGraph: {
    title: "Ceramic Coating San Antonio | Ultimate Paint Protection",
    description: "Premium ceramic coating in San Antonio, TX. 2-year and 5-year protection options for your vehicle.",
    url: "https://onedetailatatime.com/ceramic-coating-san-antonio",
    siteName: "One Detail At A Time",
    locale: "en_US",
    type: "website",
  },
}

export default function CeramicCoatingLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ceramic Coating",
    serviceType: "Automotive Paint Protection",
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
      "Premium ceramic coating service in San Antonio, TX. Professional 2-year and 5-year paint protection with lifetime durability.",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section - Apple Style */}
          <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-b from-background to-card">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center space-y-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm text-primary border border-primary/20">
                  <Shield className="h-4 w-4" />
                  <span>Ultimate Paint Protection</span>
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-balance leading-[0.95]">
                  Protection.
                  <br />
                  <span className="text-primary">Perfected.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                  Ceramic coating that shields your vehicle from San Antonio's harsh elements while maintaining a
                  stunning, showroom shine.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button size="lg" asChild className="text-lg h-16 px-10 text-primary-foreground rounded-full">
                    <a href="tel:7262071007">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (726) 207-1007
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-lg h-16 px-10 rounded-full border-2 hover:bg-primary/10 bg-transparent"
                  >
                    <Link href="/san-antonio-ceramic-coating">
                      View Details
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 mt-20">
              <div className="relative max-w-6xl mx-auto aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/ceramic-coating-application-san-antonio-tx-profess.jpg"
                  alt="Premium ceramic coating application on luxury vehicle in San Antonio TX showing mirror-like gloss finish at One Detail At A Time professional studio"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* Why Ceramic Coating - Emotional Appeal */}
          <section className="py-32 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-balance">Why protect what you love?</h2>
                <p className="text-2xl text-muted-foreground leading-relaxed text-pretty">
                  Your vehicle represents your success, your style, your commitment to excellence. Ceramic coating isn't
                  just protection—it's preservation of everything your vehicle means to you.
                </p>
              </div>

              <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
                <div className="text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Unmatched Protection</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Shield your paint from UV rays, bird droppings, tree sap, and San Antonio's intense heat—all while
                    maintaining that perfect gloss.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Sparkles className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Effortless Beauty</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hydrophobic properties mean dirt and water slide right off. Your vehicle stays cleaner, longer, with
                    minimal maintenance.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Lasting Value</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Protect your investment. Ceramic coating preserves your paint's condition, maintaining resale value
                    for years to come.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Options */}
          <section className="py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">Choose your protection</h2>
                  <p className="text-2xl text-muted-foreground">
                    Two exceptional options. One expert application in San Antonio.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* 2-Year Option */}
                  <div className="rounded-3xl border-2 border-border p-10 space-y-8 hover:border-primary/50 transition-colors bg-card">
                    <div>
                      <div className="text-sm text-primary font-semibold mb-2">IDEAL FOR MOST VEHICLES</div>
                      <h3 className="text-4xl font-bold mb-4">2-Year Protection</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Perfect for San Antonio drivers seeking premium protection with exceptional value and proven
                        durability.
                      </p>
                    </div>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">2-year hydrophobic protection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">9H hardness scratch resistance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">UV protection against fading</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Chemical stain resistance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Enhanced gloss finish</span>
                      </li>
                    </ul>

                    <Button size="lg" asChild className="w-full text-lg h-14 rounded-full">
                      <a href="tel:7262071007">
                        Get 2-Year Protection
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>

                  {/* 5-Year Option */}
                  <div className="rounded-3xl border-2 border-primary p-10 space-y-8 bg-primary/5 relative overflow-hidden">
                    <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                      PREMIUM
                    </div>
                    <div>
                      <div className="text-sm text-primary font-semibold mb-2">MAXIMUM PROTECTION</div>
                      <h3 className="text-4xl font-bold mb-4">5-Year Protection</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        The ultimate shield for San Antonio vehicles. Maximum durability, superior gloss, and unmatched
                        long-term protection.
                      </p>
                    </div>

                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg font-medium">5-year premium protection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg font-medium">10H+ hardness scratch resistance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg font-medium">Superior hydrophobic properties</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg font-medium">Maximum UV & chemical protection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg font-medium">Mirror-like gloss enhancement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg font-medium">Self-healing technology</span>
                      </li>
                    </ul>

                    <Button size="lg" asChild className="w-full text-lg h-14 rounded-full">
                      <a href="tel:7262071007">
                        Get 5-Year Protection
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Process - Build Trust */}
          <section className="py-32 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">Precision. Every time.</h2>
                  <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                    Our IDA-certified specialist follows a meticulous process to ensure flawless application and lasting
                    protection for your San Antonio vehicle.
                  </p>
                </div>

                <div className="space-y-12">
                  <div className="flex gap-6 items-start">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-2xl font-bold text-primary">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Deep Cleaning & Decontamination</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Complete wash, clay bar treatment, and iron remover to eliminate all contaminants from your
                        vehicle's surface.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-2xl font-bold text-primary">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Paint Correction</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Multi-stage polishing to remove swirls, scratches, and imperfections, creating a flawless base
                        for ceramic coating.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-2xl font-bold text-primary">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Surface Preparation</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        IPA wipe-down removes all polishing oils, ensuring maximum ceramic coating adhesion and
                        longevity.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-2xl font-bold text-primary">
                      4
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Ceramic Application</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Precise, methodical application in our climate-controlled San Antonio studio, ensuring even
                        coverage and perfect bonding.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-2xl font-bold text-primary">
                      5
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Curing & Final Inspection</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Proper curing time in a controlled environment, followed by thorough inspection to ensure
                        perfection before delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Impact - Charity Message */}
          <section className="py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-12 md:p-16 border border-primary/20">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Protection with purpose</h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  When you choose One Detail At A Time in San Antonio, 10% of your investment goes to Junior Achievement
                  of South Texas, empowering the next generation with entrepreneurial skills and financial literacy.
                </p>
                <p className="text-lg text-muted-foreground">
                  Your vehicle's protection helps build brighter futures for San Antonio youth.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-32 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center space-y-10">
                <h2 className="text-5xl md:text-6xl font-bold text-balance">Ready to protect what matters?</h2>
                <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Experience the difference of professional ceramic coating in San Antonio. Call today or visit our
                  studio at 11692 Bricken Circle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button size="lg" asChild className="text-lg h-16 px-10 rounded-full">
                    <a href="tel:7262071007">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (726) 207-1007
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-lg h-16 px-10 rounded-full border-2 hover:bg-primary/10 bg-transparent"
                  >
                    <Link href="/contact">Visit Our Studio</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground pt-6">
                  Tuesday-Sunday: 7:00 AM - 10:00 PM | Monday: Closed
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
