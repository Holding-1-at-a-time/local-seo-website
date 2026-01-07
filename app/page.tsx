import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-balance leading-[1.05]">
                Protection that lasts.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                Experience the difference of professional ceramic coating and interior deep cleansing. Your vehicle
                deserves more than ordinary care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  size="lg"
                  asChild
                  className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/get-estimate">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8 border-2 bg-transparent">
                  <Link href="/ceramic-coating">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="container mx-auto px-4 mt-20">
            <div className="relative max-w-6xl mx-auto aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl border border-border">
              <img
                src="/luxury-car-with-perfect-glossy-ceramic-coating-in-.jpg"
                alt="Luxury vehicle with ceramic coating"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Two specialized services. Infinite attention to detail.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              <Card className="border-2 border-border hover:border-primary/50 transition-all group overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/ceramic-coating-application-on-luxury-car-paint.jpg"
                    alt="Ceramic coating service"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 space-y-4">
                  <Shield className="h-12 w-12 text-primary" />
                  <h3 className="text-3xl font-bold">Ceramic Coating</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Years of protection in a single application. Shield your paint from UV rays, chemicals, and daily
                    wear with professional-grade ceramic coating.
                  </p>
                  <Link
                    href="/ceramic-coating"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-border hover:border-primary/50 transition-all group overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/luxury-car-interior-deep-cleaning-and-restoration.jpg"
                    alt="Interior deep cleansing service"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 space-y-4">
                  <Sparkles className="h-12 w-12 text-primary" />
                  <h3 className="text-3xl font-bold">Interior Deep Cleansing</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Breathe new life into your cabin. Complete odor removal, steam cleaning, and protection that makes
                    every drive feel brand new.
                  </p>
                  <Link
                    href="/interior-deep-cleansing"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance">
                Why professionals choose us
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Professional-Grade Products</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We use only the highest quality ceramic coatings and cleaning solutions designed for lasting
                      results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Meticulous Attention to Detail</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Every surface, every panel, every stitch receives individual attention. We don't rush perfection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Multi-Year Protection</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Our ceramic coatings provide years of protection, not months. Your investment is safeguarded.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <CheckCircle2 className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Transparent Process</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Clear communication, detailed explanations, and honest timelines. You'll know exactly what to
                      expect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to protect your investment?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Request a free estimate and discover how we can transform your vehicle.
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
