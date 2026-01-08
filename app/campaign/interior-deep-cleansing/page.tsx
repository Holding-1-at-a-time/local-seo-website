import { Button } from "@/components/ui/button"
import { Phone, Sparkles, CheckCircle2, Heart, Star } from "lucide-react"
import type { Metadata } from "next"
import { EstimateForm } from "@/components/estimate-form"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Interior Deep Cleaning San Antonio TX | Professional Car Detailing",
  description:
    "Professional interior deep cleaning in San Antonio. Steam cleaning, leather conditioning, odor elimination. IDA-certified specialist. 10% to Junior Achievement. Call (726) 207-1007.",
  keywords:
    "interior detailing san antonio, car interior cleaning san antonio, leather cleaning san antonio tx, auto upholstery cleaning, deep clean car interior san antonio",
  openGraph: {
    title: "Interior Deep Cleaning San Antonio | Professional Detailing",
    description:
      "Professional interior deep cleaning. Steam cleaning, leather conditioning, complete odor elimination.",
    url: "https://odaat1.com/campaign/interior-deep-cleansing",
    siteName: "One Detail At A Time",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://odaat1.com/luxury-car-interior-deep-cleaning-leather-seats-s.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Deep Cleaning Service San Antonio TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Deep Cleaning San Antonio | Professional Service",
    description: "Professional interior deep cleaning. Steam cleaning, leather conditioning.",
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
 * Renders the campaign landing page for the Interior Deep Cleaning service in San Antonio.
 *
 * The page includes embedded JSON-LD structured data for LocalBusiness, Product, and Service,
 * and presents a marketing layout with a hero (rating and call-to-action), benefits, detailed
 * "what's included" list, before/after comparison, an estimate form (prefilled for interior deep cleaning),
 * a charity highlight, trust signals, and a simple footer with contact and policy links.
 *
 * @returns The React element tree representing the Interior Deep Cleaning campaign landing page.
 */
export default function InteriorDeepCleansingCampaignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://odaat1.com/#business",
        name: "One Detail At A Time",
        image: "https://odaat1.com/luxury-car-interior-deep-cleaning-leather-seats-s.jpg",
        url: "https://odaat1.com",
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
        "@id": "https://odaat1.com/campaign/interior-deep-cleansing#product",
        name: "Interior Deep Cleaning San Antonio",
        description:
          "Professional interior deep cleaning service with steam cleaning, leather conditioning, carpet shampooing, and complete odor elimination for vehicles in San Antonio, TX.",
        image: "https://odaat1.com/luxury-car-interior-deep-cleaning-leather-seats-s.jpg",
        brand: {
          "@type": "Brand",
          name: "One Detail At A Time",
        },
        offers: {
          "@type": "Offer",
          url: "https://odaat1.com/campaign/interior-deep-cleansing",
          priceCurrency: "USD",
          price: "199",
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
          ratingCount: "112",
        },
      },
      {
        "@type": "Service",
        "@id": "https://odaat1.com/campaign/interior-deep-cleansing#service",
        serviceType: "Auto Interior Detailing",
        name: "Interior Deep Cleaning",
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
          name: "Interior Detailing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Interior Deep Cleaning",
                description: "Complete interior restoration with steam cleaning, leather care, and odor elimination",
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
          <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-card">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm text-primary border border-primary/20">
                  <Sparkles className="h-4 w-4" />
                  <span>Complete Interior Restoration</span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[0.95]">
                  Your Sanctuary.
                  <br />
                  <span className="text-primary">Restored.</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                  Transform your car's interior from worn to wonderful. Professional deep cleaning in San Antonio that
                  eliminates stains, odors, and bacteria.
                </p>

                <div className="flex items-center justify-center gap-1 pt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">5.0 from 112+ San Antonio customers</span>
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
              <div className="relative max-w-5xl mx-auto aspect-video overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/luxury-car-interior-deep-cleaning-leather-seats-s.jpg"
                  alt="Professional interior deep cleaning service in San Antonio TX showing pristine leather seats"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Deep Clean Your Interior?</h2>
                <p className="text-xl text-muted-foreground">
                  You spend hours in your vehicle. It should feel like new every time you get in.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                <div className="text-center space-y-4 p-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Like-New Condition</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional steam cleaning reaches deep into fabric and leather, removing years of buildup
                  </p>
                </div>

                <div className="text-center space-y-4 p-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Healthier Environment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Eliminate allergens, bacteria, and odors for you and your family in San Antonio
                  </p>
                </div>

                <div className="text-center space-y-4 p-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Protected Investment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Maintain resale value with a meticulously detailed interior that shows your care
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Interior Service</h2>
                  <p className="text-xl text-muted-foreground">
                    Every surface. Every detail. Restored to perfection in San Antonio.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Deep Steam Cleaning</div>
                        <div className="text-sm text-muted-foreground">All upholstery, carpets, and floor mats</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Leather Conditioning</div>
                        <div className="text-sm text-muted-foreground">
                          Clean, condition, and protect all leather surfaces
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Dashboard & Trim Restoration</div>
                        <div className="text-sm text-muted-foreground">Clean and protect all hard surfaces</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Complete Odor Elimination</div>
                        <div className="text-sm text-muted-foreground">Remove smoke, pet, food, and musty odors</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Air Vent Detailing</div>
                        <div className="text-sm text-muted-foreground">Clean all vents and crevices</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Window & Glass Polishing</div>
                        <div className="text-sm text-muted-foreground">Streak-free interior glass cleaning</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Trunk & Cargo Cleaning</div>
                        <div className="text-sm text-muted-foreground">Complete trunk area detailing</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">UV Protectant Application</div>
                        <div className="text-sm text-muted-foreground">Protect against San Antonio sun damage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Before & After */}
          <section className="py-24 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">The Transformation</h2>
                  <p className="text-xl text-muted-foreground">
                    From neglected to immaculate. See what San Antonio customers experience.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 p-8 rounded-2xl border border-border bg-background/50">
                    <div className="text-sm font-semibold text-muted-foreground">BEFORE</div>
                    <ul className="space-y-3">
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
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                        Dirty windows
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 p-8 rounded-2xl border-2 border-primary/30 bg-primary/5">
                    <div className="text-sm font-semibold text-primary">AFTER</div>
                    <ul className="space-y-3">
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
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Crystal-clear glass
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Estimate Form Section */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Estimate</h2>
                  <p className="text-xl text-muted-foreground">
                    Ready to transform your interior? Fill out the form and we'll contact you within 24 hours
                  </p>
                </div>

                <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
                  <EstimateForm defaultService="Interior Deep Cleaning" />
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
          <section className="py-20 bg-card">
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
          <section className="py-16 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">112+</div>
                    <div className="text-muted-foreground">Happy San Antonio Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">IDA</div>
                    <div className="text-muted-foreground">Certified Professional</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">Satisfaction Guaranteed</div>
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