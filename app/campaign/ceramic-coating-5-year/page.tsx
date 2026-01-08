import { Button } from "@/components/ui/button"
import { Phone, Shield, CheckCircle2, Sparkles, Star, Zap } from "lucide-react"
import type { Metadata } from "next"
import { EstimateForm } from "@/components/estimate-form"
import Link from "next/link"

export const metadata: Metadata = {
  title: "5-Year Ceramic Coating San Antonio TX | Ultimate Paint Protection | Premium",
  description:
    "Professional 5-year ceramic coating in San Antonio. 10H+ hardness, self-healing technology, maximum UV protection. IDA-certified. 10% to Junior Achievement. Call (726) 207-1007.",
  keywords:
    "5 year ceramic coating san antonio, premium ceramic coating, long term paint protection san antonio, ceramic coating warranty, professional auto detailing san antonio tx",
  openGraph: {
    title: "5-Year Ceramic Coating San Antonio | Ultimate Protection",
    description: "Professional 5-year ceramic coating. 10H+ hardness, self-healing technology, maximum protection.",
    url: "https://odaat1.com/campaign/ceramic-coating-5-year",
    siteName: "One Detail At A Time",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://odaat1.com/ceramic-coating-application-san-antonio-tx-profess.jpg",
        width: 1200,
        height: 630,
        alt: "5-Year Ceramic Coating Application San Antonio TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5-Year Ceramic Coating San Antonio | Ultimate Protection",
    description: "Professional 5-year ceramic coating. 10H+ hardness, self-healing technology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

/**
 * Campaign landing page for the 5-Year Premium Ceramic Coating offering in San Antonio.
 *
 * Renders a static marketing page including structured JSON-LD, hero and benefits sections,
 * service inclusions, an estimate form (prefilled for the 5-Year Premium Ceramic Coating),
 * charity and trust signals, and a simple footer with contact links.
 *
 * @returns The React element for the campaign landing page.
 */
export default function CeramicCoating5YearCampaignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://odaat1.com/#business",
        name: "One Detail At A Time",
        image: "https://odaat1.com/ceramic-coating-application-san-antonio-tx-profess.jpg",
        url: "https://odaat1.com",
        telephone: "+17262071007",
        priceRange: "$$$",
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
          latitude: 29.5737,
          longitude: -98.3471,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        areaServed: {
          "@type": "City",
          name: "San Antonio",
          "@id": "https://en.wikipedia.org/wiki/San_Antonio",
        },
      },
      {
        "@type": "Product",
        "@id": "https://odaat1.com/campaign/ceramic-coating-5-year#product",
        name: "5-Year Premium Ceramic Coating San Antonio",
        description:
          "Professional 5-year premium ceramic coating with 10H+ hardness, self-healing technology, superior hydrophobic properties, and maximum UV protection for vehicles in San Antonio, TX.",
        image: "https://odaat1.com/ceramic-coating-application-san-antonio-tx-profess.jpg",
        brand: {
          "@type": "Brand",
          name: "One Detail At A Time",
        },
        offers: {
          "@type": "Offer",
          url: "https://odaat1.com/campaign/ceramic-coating-5-year",
          priceCurrency: "USD",
          price: "1499",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@id": "https://odaat1.com/#business",
          },
          areaServed: {
            "@type": "City",
            name: "San Antonio",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "64",
        },
      },
      {
        "@type": "Service",
        "@id": "https://odaat1.com/campaign/ceramic-coating-5-year#service",
        serviceType: "Premium Ceramic Coating Application",
        name: "5-Year Premium Ceramic Coating",
        provider: {
          "@id": "https://odaat1.com/#business",
        },
        areaServed: {
          "@type": "City",
          name: "San Antonio",
          "@id": "https://en.wikipedia.org/wiki/San_Antonio",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Premium Ceramic Coating Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "5-Year Premium Ceramic Coating",
                description:
                  "Ultimate ceramic coating with 5-year protection, 10H+ hardness, self-healing technology, and mirror-like gloss",
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* NO HEADER/NAVIGATION - Campaign Landing Page */}
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-card">
            <div className="absolute top-8 right-8 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
              PREMIUM PACKAGE
            </div>

            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm text-primary border border-primary/20">
                  <Zap className="h-4 w-4" />
                  <span>5-Year Ultimate Protection</span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[0.95]">
                  Maximum Protection.
                  <br />
                  <span className="text-primary">5 Years Guaranteed.</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                  The ultimate ceramic coating in San Antonio with self-healing technology, 10H+ hardness, and
                  mirror-like gloss that lasts five full years.
                </p>

                <div className="flex items-center justify-center gap-1 pt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">5.0 from 64+ San Antonio customers</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    asChild
                    className="text-lg h-16 px-10 text-primary-foreground rounded-full shadow-lg"
                  >
                    <a href="tel:7262071007">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: (726) 207-1007
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 mt-16">
              <div className="relative max-w-5xl mx-auto aspect-video overflow-hidden rounded-3xl shadow-2xl ring-2 ring-primary/20">
                <img
                  src="/ceramic-coating-application-san-antonio-tx-profess.jpg"
                  alt="Professional 5-year premium ceramic coating application in San Antonio TX showing mirror-like gloss"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* Premium Benefits Section */}
          <section className="py-24 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Premium 5-Year Protection?</h2>
                <p className="text-xl text-muted-foreground">
                  The best ceramic coating San Antonio has to offer - engineered for maximum durability
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                <div className="text-center space-y-4 p-6 border border-primary/20 rounded-2xl bg-primary/5">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">10H+ Hardness</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Superior scratch resistance protects against San Antonio's toughest conditions
                  </p>
                </div>

                <div className="text-center space-y-4 p-6 border border-primary/20 rounded-2xl bg-primary/5">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Self-Healing Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Minor swirls and scratches heal with heat exposure, maintaining perfection
                  </p>
                </div>

                <div className="text-center space-y-4 p-6 border border-primary/20 rounded-2xl bg-primary/5">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Mirror-Like Gloss</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enhanced depth and clarity that turns heads on every San Antonio street
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included - Premium */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Service Includes</h2>
                  <p className="text-xl text-muted-foreground">
                    Complete multi-stage preparation and application in San Antonio
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Complete Paint Decontamination</div>
                        <div className="text-sm text-muted-foreground">Clay bar, iron remover, and tar removal</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Multi-Stage Paint Correction</div>
                        <div className="text-sm text-muted-foreground">Remove swirls, scratches, oxidation</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Panel Wipe & Prep</div>
                        <div className="text-sm text-muted-foreground">
                          IPA and panel prep solution for perfect bonding
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Premium Ceramic Base Coat</div>
                        <div className="text-sm text-muted-foreground">High-solids coating for durability</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Top Coat Application</div>
                        <div className="text-sm text-muted-foreground">Self-healing layer for gloss and protection</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">24-Hour Curing Process</div>
                        <div className="text-sm text-muted-foreground">Climate-controlled environment</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">5-Year Warranty Certificate</div>
                        <div className="text-sm text-muted-foreground">Backed by manufacturer guarantee</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Premium Maintenance Kit</div>
                        <div className="text-sm text-muted-foreground">Professional care products included</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Estimate Form Section */}
          <section className="py-24 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Estimate</h2>
                  <p className="text-xl text-muted-foreground">
                    Experience the ultimate protection. Fill out the form and we'll contact you within 24 hours
                  </p>
                </div>

                <div className="bg-background rounded-3xl p-8 md:p-10 shadow-xl border-2 border-primary/20">
                  <EstimateForm defaultService="5-Year Premium Ceramic Coating" />
                </div>

                <div className="text-center mt-8 space-y-2">
                  <p className="text-sm text-muted-foreground">Prefer to talk? Call us directly</p>
                  <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent">
                    <a href="tel:7262071007">
                      <Phone className="mr-2 h-5 w-5" />
                      (726) 207-1007
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Charity Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-10 md:p-12 border border-primary/20">
                <h2 className="text-3xl md:text-4xl font-bold">Detailing With Purpose</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  10% of your investment goes to Junior Achievement of South Texas, empowering young people in San
                  Antonio with entrepreneurial skills and financial literacy.
                </p>
              </div>
            </div>
          </section>

          {/* Trust Signals */}
          <section className="py-16 bg-card border-t border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">64+</div>
                    <div className="text-muted-foreground">Premium San Antonio Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">IDA</div>
                    <div className="text-muted-foreground">Certified Professional</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">5-Year</div>
                    <div className="text-muted-foreground">Protection Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Simple Footer */}
          <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">One Detail At A Time</h3>
                  <p className="text-muted-foreground">11692 Bricken Circle, San Antonio, TX 78233</p>
                  <p className="text-muted-foreground">
                    <a href="tel:7262071007" className="hover:text-primary transition-colors">
                      (726) 207-1007
                    </a>
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
                    Terms & Conditions
                  </Link>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} One Detail At A Time. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}