import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Award, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
                  <Award className="h-4 w-4" />
                  IDA-Certified Specialist
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                  Premium Car Detailing in San Antonio, TX
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  One Detail At A Time offers exceptional vehicle care at our professional detailing studio. Experience
                  meticulous paint correction, protective ceramic coating, and thorough interior cleaning that gives
                  your car the ultimate makeover.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-lg h-12">
                    <a href="tel:7262071007">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (726) 207-1007
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg h-12 bg-transparent">
                    <Link href="/san-antonio-car-detailing-services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="/luxury-car-with-perfect-paint-shine-in-professiona.jpg"
                  alt="Professional car detailing services in San Antonio, Texas - luxury vehicle with ceramic coating"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">San Antonio Auto Detailing Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert car care services at our professional detailing studio in San Antonio, TX
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <img
                      src="/car-interior-cleaning-icon.jpg"
                      alt="Interior car detailing in San Antonio TX"
                      className="h-8 w-8"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Interior Deep Cleaning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Complete interior detailing with steam cleaning, leather conditioning, and odor removal for San
                    Antonio vehicles.
                  </p>
                  <Link
                    href="/san-antonio-interior-deep-cleaning"
                    className="text-sm text-primary hover:underline inline-block"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <img
                      src="/car-exterior-washing-icon.jpg"
                      alt="Exterior hand wash services San Antonio TX"
                      className="h-8 w-8"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Exterior Hand Wash & Sealant</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Premium hand wash with clay bar treatment and paint sealant for lasting protection in San Antonio
                    weather.
                  </p>
                  <Link
                    href="/san-antonio-exterior-hand-wash-sealant"
                    className="text-sm text-primary hover:underline inline-block"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <img
                      src="/ceramic-coating-protection-icon.jpg"
                      alt="Ceramic coating services San Antonio TX"
                      className="h-8 w-8"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Ceramic Coating</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    2-year and 5-year ceramic coating options for ultimate paint protection in San Antonio, Texas.
                  </p>
                  <Link
                    href="/san-antonio-ceramic-coating"
                    className="text-sm text-primary hover:underline inline-block"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <img
                      src="/paint-correction-polishing-icon.jpg"
                      alt="Paint correction services San Antonio TX"
                      className="h-8 w-8"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Paint Correction</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Professional paint correction to remove swirls and scratches for San Antonio car owners.
                  </p>
                  <Link
                    href="/san-antonio-paint-correction"
                    className="text-sm text-primary hover:underline inline-block"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="/professional-car-detailing-studio-san-antonio-texa.jpg"
                  alt="Professional detailing studio in San Antonio TX with advanced equipment"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Why San Antonio Trusts One Detail At A Time</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are San Antonio experts in premium car detailing, restoring both the interior and exterior of your
                  vehicle with meticulous attention to detail.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">IDA-Certified Specialist</h3>
                      <p className="text-sm text-muted-foreground">
                        Professional certification ensuring expert car care in San Antonio
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Professional Studio</h3>
                      <p className="text-sm text-muted-foreground">
                        Private detailing facility at 11692 Bricken Circle, San Antonio, TX
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Advanced Techniques</h3>
                      <p className="text-sm text-muted-foreground">
                        Paint correction, ceramic coating, and thorough interior restoration for San Antonio vehicles
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Meticulous Care</h3>
                      <p className="text-sm text-muted-foreground">
                        Every detail matters - treating your car with precision it deserves
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Ready to Revive Your Car's Beauty?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact One Detail At A Time today and experience professional car detailing in San Antonio, TX.
              Tuesday-Sunday, 7:00 AM - 10:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg h-12">
                <a href="tel:7262071007">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (726) 207-1007
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg h-12 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
