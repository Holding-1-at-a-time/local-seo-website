import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Award, Shield, Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Apple-inspired */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20">
                <Award className="h-4 w-4" />
                <span>IDA-Certified Specialist</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                One Detail
                <br />
                At A Time
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                Premium car detailing in San Antonio that gives back. Every detail perfected, every service supports
                Junior Achievement of South Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  asChild
                  className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href="tel:7262071007">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (726) 207-1007
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg h-14 px-8 border-2 border-primary/30 hover:border-primary/50 bg-transparent"
                >
                  <Link href="/san-antonio-car-detailing-services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-16">
            <div className="relative max-w-5xl mx-auto aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/luxury-car-with-perfect-paint-shine-in-professiona.jpg"
                alt="Professional car detailing services in San Antonio, Texas - luxury vehicle with ceramic coating and paint correction by IDA-certified specialist"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Why We Detail - Charity Mission */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-6 mb-12">
                <Heart className="h-12 w-12 text-primary mx-auto" />
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Why we detail your vehicle</h2>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                  At One Detail At A Time, every service is more than just car care—it's an investment in our
                  community's future.
                </p>
              </div>
              <div className="bg-background/50 rounded-2xl p-8 md:p-12 border border-border space-y-6">
                <h3 className="text-2xl font-semibold text-primary">10% of Our Revenue Goes to Junior Achievement</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you choose our San Antonio auto detailing services, you're not just getting exceptional vehicle
                  care—you're empowering the next generation. We proudly donate 10% of our revenue to Junior Achievement
                  of South Texas, helping young people develop entrepreneurial skills, financial literacy, and career
                  readiness.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every ceramic coating, paint correction, and interior detail we complete contributes to creating
                  opportunities for local students. That's the power of One Detail At A Time—precision car care with a
                  purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">San Antonio Auto Detailing Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Expert car care services at our professional detailing studio in San Antonio, TX
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Auto Detailing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete auto detailing services in San Antonio, TX - interior and exterior perfection
                  </p>
                  <Link
                    href="/san-antonio-auto-detailing"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Interior Deep Cleansing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Steam cleaning, leather conditioning, and complete odor removal for San Antonio vehicles
                  </p>
                  <Link
                    href="/san-antonio-interior-deep-cleaning"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Exterior Hand Wash & Sealant</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Premium hand wash with clay bar treatment and paint sealant for San Antonio weather
                  </p>
                  <Link
                    href="/san-antonio-exterior-hand-wash-sealant"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Ceramic Coating</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    2-year and 5-year ceramic coating for ultimate paint protection in San Antonio, Texas
                  </p>
                  <Link
                    href="/san-antonio-ceramic-coating"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Paint Correction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Multi-stage paint correction to remove swirls and scratches for San Antonio car owners
                  </p>
                  <Link
                    href="/san-antonio-paint-correction"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Engine Detailing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional engine bay cleaning and detailing services in San Antonio, TX
                  </p>
                  <Link
                    href="/san-antonio-engine-detailing"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Full Body Wash</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Complete hand wash and drying service for vehicles in San Antonio, Texas
                  </p>
                  <Link
                    href="/san-antonio-full-body-wash"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Headlight Polishing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Headlight restoration and polishing to improve visibility and appearance in San Antonio
                  </p>
                  <Link
                    href="/san-antonio-headlight-polishing"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Paint Repair</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Expert paint chip and scratch repair services for San Antonio vehicles
                  </p>
                  <Link
                    href="/san-antonio-paint-repair"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Seat Shampooing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deep cleaning and shampooing for car seats and upholstery in San Antonio, TX
                  </p>
                  <Link
                    href="/san-antonio-seat-shampooing"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild variant="outline" className="text-lg h-14 px-8 border-2 bg-transparent">
                <Link href="/san-antonio-car-detailing-services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-7xl mx-auto">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/professional-car-detailing-studio-san-antonio-texa.jpg"
                  alt="Professional IDA-certified car detailing studio in San Antonio TX with advanced equipment and climate-controlled facility at 11692 Bricken Circle"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">
                  Why San Antonio Trusts One Detail At A Time
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are San Antonio experts in premium car detailing, restoring both the interior and exterior of your
                  vehicle with meticulous attention to detail.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-7 w-7 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">IDA-Certified Specialist</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Professional certification ensuring expert car care in San Antonio
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-7 w-7 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Private Professional Studio</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Climate-controlled facility at 11692 Bricken Circle, San Antonio, TX 78233
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-7 w-7 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Advanced Techniques</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                          Paint correction
                        </Link>
                        ,{" "}
                        <Link href="/san-antonio-ceramic-coating" className="text-primary hover:underline">
                          ceramic coating
                        </Link>
                        , and{" "}
                        <Link href="/san-antonio-interior-deep-cleaning" className="text-primary hover:underline">
                          interior restoration
                        </Link>{" "}
                        for San Antonio vehicles
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="h-7 w-7 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        10% of revenue supports Junior Achievement of South Texas
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-12 md:p-16 border border-primary/20">
              <Shield className="h-16 w-16 mx-auto mb-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Revive Your Car's Beauty?</h2>
              <p className="text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Contact One Detail At A Time today and experience professional car detailing in San Antonio, TX.
                Tuesday-Sunday, 7:00 AM - 10:00 PM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href="tel:7262071007">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (726) 207-1007
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg h-14 px-8 border-2 border-primary/30 hover:border-primary/50 bg-transparent"
                >
                  <Link href="/contact">Get Directions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
