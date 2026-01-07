import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle2, Droplets, Sun, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Ceramic Coating | odaat1.com - Years of Paint Protection",
  description:
    "Professional ceramic coating services that protect your vehicle's paint for years. Shield against UV rays, chemicals, and scratches. Free estimate available.",
  keywords: [
    "ceramic coating",
    "paint protection",
    "car ceramic coating",
    "professional ceramic coating",
    "UV protection",
    "paint sealant",
  ],
}

export default function CeramicCoatingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20">
                <Shield className="h-4 w-4" />
                <span>Multi-Year Protection</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                Protection that lasts years, not months.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                Professional ceramic coating creates an invisible shield over your paint, providing unmatched protection
                against the elements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  asChild
                  className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/get-estimate">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-16">
            <div className="relative max-w-5xl mx-auto aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl border border-border">
              <img
                src="/professional-ceramic-coating-being-applied-to-luxu.jpg"
                alt="Professional ceramic coating application"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Your paint faces constant threats</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every day your vehicle is exposed to damage you can't always see.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <Sun className="h-10 w-10 text-destructive" />
                    <h3 className="text-xl font-semibold">UV Oxidation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Harsh sunlight breaks down clear coat and fades paint over time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <Droplets className="h-10 w-10 text-destructive" />
                    <h3 className="text-xl font-semibold">Chemical Damage</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Bird droppings, bug splatter, and acid rain etch into unprotected surfaces.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <Sparkles className="h-10 w-10 text-destructive" />
                    <h3 className="text-xl font-semibold">Swirl Marks</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Improper washing techniques create micro-scratches that dull your finish.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <Shield className="h-16 w-16 text-primary mx-auto" />
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Ceramic coating: The ultimate shield</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Professional-grade ceramic coating bonds to your paint at a molecular level, creating a permanent
                  protective layer.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Extreme Hydrophobic Effect</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Water, dirt, and contaminants bead up and roll off effortlessly. Your car stays cleaner longer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Chemical Resistance</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Bird droppings, bug splatter, and road salt can't penetrate the ceramic barrier.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">UV Protection</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Shields your paint from harmful UV rays that cause oxidation and fading.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Enhanced Gloss</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Amplifies depth and shine, giving your paint a liquid-like appearance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Scratch Resistance</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      9H hardness provides exceptional protection against minor scratches and swirls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Our meticulous process</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Proper preparation is everything. We don't rush perfection.
                </p>
              </div>

              <div className="space-y-8">
                <Card className="border-2 border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-bold text-primary shrink-0">01</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">Deep Cleaning & Decontamination</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Complete wash, clay bar treatment, and iron removal to eliminate all surface contaminants.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-bold text-primary shrink-0">02</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">Paint Correction</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Multi-stage polishing removes swirls, scratches, and oxidation for a flawless finish.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-bold text-primary shrink-0">03</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">Surface Preparation</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Panel wipe removes all polish oils and residue to ensure perfect ceramic bonding.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-bold text-primary shrink-0">04</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">Ceramic Application & Curing</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Multiple layers of professional ceramic coating applied in controlled conditions, followed by
                          proper curing time.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">The transformation</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  See the difference professional ceramic coating makes.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-xl border border-border">
                    <img
                      src="/car-paint-before-ceramic-coating-with-swirls-and-d.jpg"
                      alt="Before ceramic coating"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-center text-lg font-semibold text-muted-foreground">
                    Before: Dull, unprotected paint
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-xl border border-border">
                    <img
                      src="/car-paint-after-ceramic-coating-with-mirror-shine-.jpg"
                      alt="After ceramic coating"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-center text-lg font-semibold text-primary">After: Protected, mirror-like finish</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Choose your protection level</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  All packages include complete paint correction and multi-layer application.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-2 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Essential</h3>
                      <p className="text-muted-foreground">Great for daily drivers</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">2 Years</p>
                      <p className="text-sm text-muted-foreground mt-1">Protection guarantee</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Single layer ceramic coating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Paint correction included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Full decontamination</span>
                      </li>
                    </ul>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/get-estimate">Get Estimate</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Premium</h3>
                      <p className="text-muted-foreground">For enthusiasts</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">5 Years</p>
                      <p className="text-sm text-muted-foreground mt-1">Protection guarantee</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Multi-layer ceramic coating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Advanced paint correction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Wheel & caliper coating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Trim & glass protection</span>
                      </li>
                    </ul>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/get-estimate">Get Estimate</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Ultimate</h3>
                      <p className="text-muted-foreground">Maximum protection</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">7 Years</p>
                      <p className="text-sm text-muted-foreground mt-1">Protection guarantee</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Premium multi-layer coating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Full paint correction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Complete vehicle protection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Interior ceramic treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Annual maintenance included</span>
                      </li>
                    </ul>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/get-estimate">Get Estimate</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Common questions</h2>
              </div>

              <div className="space-y-6">
                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">How long does ceramic coating last?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      With proper maintenance, our ceramic coatings provide 2-7 years of protection depending on the
                      package you choose. Unlike waxes that last weeks, ceramic coating is a semi-permanent bond.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Do I still need to wash my car?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, but it's much easier. The hydrophobic effect means dirt doesn't stick, and contaminants rinse
                      away effortlessly. Most clients find they wash their cars less frequently.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Will ceramic coating fix scratches?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ceramic coating doesn't fill or hide defects. That's why we include paint correction in every
                      package to remove existing scratches before applying the coating.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">How long does the process take?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Depending on your vehicle's condition and package, expect 2-4 days. This includes prep work, paint
                      correction, ceramic application, and proper curing time. We never rush.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Shield className="h-16 w-16 text-primary mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Protect your paint. Preserve your investment.
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Request a free estimate and we'll create a custom protection plan for your vehicle.
              </p>
              <Button
                size="lg"
                asChild
                className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/get-estimate">Get Your Free Estimate</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
