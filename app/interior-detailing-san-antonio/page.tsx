import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Sparkles, CheckCircle2, Heart, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Interior Detailing San Antonio | Deep Cleaning Service | One Detail At A Time",
  description:
    "Premium interior deep cleaning in San Antonio, TX. Steam cleaning, leather conditioning, odor removal at 11692 Bricken Circle. IDA-certified specialist. Call (726) 207-1007.",
  openGraph: {
    title: "Interior Detailing San Antonio | Deep Cleaning Service",
    description:
      "Premium interior deep cleaning in San Antonio, TX. Steam cleaning, leather conditioning, and odor removal.",
    url: "https://odaat1.com/interior-detailing-san-antonio",
    siteName: "One Detail At A Time",
    locale: "en_US",
    type: "website",
  },
}

export default function InteriorDetailingLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Deep Cleaning",
    serviceType: "Auto Interior Detailing",
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
      "Premium interior deep cleaning service in San Antonio, TX. Professional steam cleaning, leather conditioning, and complete odor elimination.",
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
                  <Sparkles className="h-4 w-4" />
                  <span>Precision Interior Restoration</span>
                </div>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-balance leading-[0.95]">
                  Revive.
                  <br />
                  <span className="text-primary">Refresh.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                  Transform your interior from worn to wonderful. Experience the luxury of a completely restored cabin
                  in San Antonio.
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
                    <Link href="/san-antonio-interior-deep-cleaning">
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
                  src="/luxury-car-interior-deep-cleaning-leather-seats-s.jpg"
                  alt="Luxury car interior deep cleaning service in San Antonio TX showing pristine leather seats and immaculate cabin at One Detail At A Time studio"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* Why Interior Detailing - Emotional Appeal */}
          <section className="py-32 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-balance">Your sanctuary deserves this</h2>
                <p className="text-2xl text-muted-foreground leading-relaxed text-pretty">
                  You spend countless hours in your vehicle. Whether it's your daily commute, family road trips, or
                  client meetings—your interior should reflect the quality and care you bring to every aspect of your
                  life.
                </p>
              </div>

              <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
                <div className="text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Sparkles className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Like-New Condition</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Professional steam cleaning reaches deep into fabric and leather, removing years of buildup and
                    restoring original beauty.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Healthier Environment</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Eliminate allergens, bacteria, and odors. Create a clean, fresh cabin for you and your loved ones in
                    San Antonio.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Protected Investment</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Maintain your vehicle's resale value. A meticulously detailed interior tells buyers your car has
                    been cherished.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Service Details */}
          <section className="py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">Complete interior transformation</h2>
                  <p className="text-2xl text-muted-foreground">
                    Every surface. Every detail. Restored to perfection in San Antonio.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="rounded-3xl border border-border p-10 space-y-6 bg-card">
                    <h3 className="text-3xl font-bold">What we restore</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Deep steam cleaning of all upholstery</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Leather conditioning and protection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Carpet shampooing and extraction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Dashboard and trim restoration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Complete odor elimination</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Air vent and crevice detailing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Window and glass polishing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span className="text-lg">Trunk and cargo area cleaning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-border p-10 space-y-6 bg-card">
                    <h3 className="text-3xl font-bold">How we do it</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">
                          1
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Pre-Treatment Assessment</div>
                          <div className="text-muted-foreground">Identify problem areas and materials</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">
                          2
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Deep Vacuuming</div>
                          <div className="text-muted-foreground">Remove all loose debris and particles</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">
                          3
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Steam Cleaning</div>
                          <div className="text-muted-foreground">Sanitize and deep clean all surfaces</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">
                          4
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Leather Care</div>
                          <div className="text-muted-foreground">Clean, condition, and protect leather</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">
                          5
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Final Detailing</div>
                          <div className="text-muted-foreground">Perfect every surface and apply protectants</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Before & After Concept */}
          <section className="py-32 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-12">
                <h2 className="text-5xl md:text-6xl font-bold text-balance">The difference is remarkable</h2>
                <p className="text-2xl text-muted-foreground leading-relaxed">
                  From neglected to immaculate. Our San Antonio interior detailing service doesn't just clean—it
                  transforms. Every stain removed, every surface restored, every detail perfected.
                </p>
                <div className="grid md:grid-cols-2 gap-8 pt-8">
                  <div className="space-y-4">
                    <div className="text-sm font-semibold text-muted-foreground">BEFORE</div>
                    <ul className="text-left space-y-3">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                        Stained upholstery and carpets
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                        Faded, cracked leather
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                        Persistent odors
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                        Dusty vents and trim
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm font-semibold text-primary">AFTER</div>
                    <ul className="text-left space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Spotless, fresh upholstery
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Conditioned, supple leather
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Completely odor-free
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Pristine surfaces throughout
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Impact - Charity Message */}
          <section className="py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-12 md:p-16 border border-primary/20">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Detailing with purpose</h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                  When you choose One Detail At A Time in San Antonio, 10% of your investment goes to Junior Achievement
                  of South Texas, empowering young people with entrepreneurial skills and financial literacy.
                </p>
                <p className="text-lg text-muted-foreground">
                  Your interior transformation helps transform lives in our San Antonio community.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-32 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center space-y-10">
                <h2 className="text-5xl md:text-6xl font-bold text-balance">Ready to restore your interior?</h2>
                <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Experience the luxury of a completely restored cabin. Call today or visit our San Antonio studio at
                  11692 Bricken Circle.
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
