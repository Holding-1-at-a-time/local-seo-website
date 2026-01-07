import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, CheckCircle2, Wind, Droplets, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Deep Cleansing | odaat1.com - Complete Interior Restoration",
  description:
    "Professional interior deep cleansing services. Steam cleaning, odor elimination, leather conditioning, and complete interior restoration. Transform your cabin.",
  keywords: [
    "interior detailing",
    "car interior cleaning",
    "interior deep cleaning",
    "odor removal",
    "leather conditioning",
    "steam cleaning",
  ],
}

export default function InteriorDeepCleansingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20">
                <Sparkles className="h-4 w-4" />
                <span>Complete Interior Transformation</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                Breathe new life into your interior.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                Professional interior deep cleansing that eliminates odors, removes stains, and restores every surface
                to like-new condition.
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
                src="/luxury-car-interior-deep-cleaning-process-with-ste.jpg"
                alt="Professional interior deep cleansing"
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
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Your interior deserves attention</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Daily use takes a toll you can see, smell, and feel.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <Wind className="h-10 w-10 text-destructive" />
                    <h3 className="text-xl font-semibold">Persistent Odors</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Smoke, pets, food, and mildew create unpleasant smells that regular cleaning can't eliminate.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <Droplets className="h-10 w-10 text-destructive" />
                    <h3 className="text-xl font-semibold">Deep-Set Stains</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Spills, dirt, and grime penetrate fabric and leather, creating stubborn stains.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <Sparkles className="h-10 w-10 text-destructive" />
                    <h3 className="text-xl font-semibold">Worn Surfaces</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      UV damage, body oils, and wear leave leather dry, cracked, and faded.
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
                <Sparkles className="h-16 w-16 text-primary mx-auto" />
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Deep cleansing that transforms</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Our comprehensive process addresses every surface, eliminating problems at their source.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Complete Odor Elimination</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Professional-grade ozone treatment and enzymatic cleaners neutralize odors at the molecular level,
                      not just masking them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Steam Extraction Cleaning</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      High-temperature steam penetrates deep into fabric and carpet, lifting dirt, stains, and bacteria
                      that vacuum alone can't reach.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Leather Restoration & Protection</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      pH-balanced cleaning followed by conditioning and UV protection restores suppleness and prevents
                      cracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Detail Brush Work</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Every vent, crevice, button, and seam receives individual attention. No area overlooked.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">UV-Protectant Dressing</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Non-greasy protection for all interior surfaces prevents future fading and cracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">What's included</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Comprehensive interior restoration from top to bottom.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Complete Vacuum</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Seats, carpets, trunk, and all storage compartments thoroughly vacuumed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Steam Cleaning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Fabric seats, carpets, and floor mats steam extracted and sanitized.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Leather Care</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cleaning, conditioning, and UV protection for all leather surfaces.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Dashboard & Console</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Detailed cleaning and protective dressing for all hard surfaces.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Window Cleaning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Streak-free interior window and mirror cleaning for crystal clarity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Odor Treatment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ozone or enzymatic treatment to permanently eliminate unwanted smells.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Detail Cleaning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Vents, buttons, cup holders, door jambs—every detail addressed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6 space-y-3">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Final Inspection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive quality check ensures every surface meets our standards.
                    </p>
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
                  See how we restore interiors to like-new condition.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-xl border border-border">
                    <img
                      src="/dirty-car-interior-with-stains-and-worn-leather-be.jpg"
                      alt="Before interior deep cleansing"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-center text-lg font-semibold text-muted-foreground">
                    Before: Stained, worn interior
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-xl border border-border">
                    <img
                      src="/pristine-clean-car-interior-with-restored-leather-.jpg"
                      alt="After interior deep cleansing"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-center text-lg font-semibold text-primary">After: Fresh, restored cabin</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Available add-ons</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Enhance your interior protection with these upgrades.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8 space-y-4">
                    <Shield className="h-10 w-10 text-primary" />
                    <h3 className="text-2xl font-semibold">Fabric Protection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Invisible barrier protects against future spills and stains. Liquids bead up for easy cleanup.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8 space-y-4">
                    <Sparkles className="h-10 w-10 text-primary" />
                    <h3 className="text-2xl font-semibold">Pet Hair Removal</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Specialized tools and techniques remove embedded pet hair from all fabric surfaces.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8 space-y-4">
                    <Droplets className="h-10 w-10 text-primary" />
                    <h3 className="text-2xl font-semibold">Leather Conditioning Plus</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Premium conditioner for aged or neglected leather. Restores oils and flexibility.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-8 space-y-4">
                    <Wind className="h-10 w-10 text-primary" />
                    <h3 className="text-2xl font-semibold">Headliner Cleaning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Delicate cleaning for fabric headliners, removing stains without damage or sagging.
                    </p>
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
                    <h3 className="text-xl font-semibold mb-3">How long until my interior is dry?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Most interiors are dry within 4-6 hours. We use professional extraction equipment that removes 95%
                      of moisture. We recommend leaving windows cracked if weather permits.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Can you remove pet hair?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes. We use specialized brushes, compressed air, and static tools to remove embedded pet hair from
                      fabric and carpet. For severe cases, we offer a dedicated pet hair removal add-on.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Will ozone treatment harm my car?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No. When used properly, ozone is perfectly safe and incredibly effective at eliminating smoke,
                      mildew, and organic odors. It naturally converts back to oxygen after treatment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">How often should I get interior detailing?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For most vehicles, 2-3 times per year maintains excellent condition. High-use vehicles or those
                      with pets/children may benefit from quarterly service.
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
              <Sparkles className="h-16 w-16 text-primary mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Transform your interior today</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Request a free estimate and experience the difference of professional interior deep cleansing.
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
