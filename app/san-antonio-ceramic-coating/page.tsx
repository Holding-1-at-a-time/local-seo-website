import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, CheckCircle2, Shield, Star } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { EstimateForm } from "@/components/estimate-form"

export const metadata: Metadata = {
  title: "Ceramic Coating San Antonio, TX | 2-Year & 5-Year Protection | One Detail At A Time",
  description:
    "Professional ceramic coating in San Antonio with 2-year and 5-year options. Pro-grade paint protection with hand wash, clay bar, machine polish. IDA-certified. Call (726) 207-1007",
  keywords: [
    "ceramic coating san antonio",
    "ceramic coating san antonio tx",
    "paint protection san antonio",
    "ceramic coating near me",
    "car coating san antonio",
  ],
}

export default function CeramicCoatingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <Star className="h-4 w-4" />
                IDA-Certified Excellence
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Protection. Perfected.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                Your vehicle deserves more than a wash. It deserves a shield that lasts years, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="text-lg h-12">
                  <a href="tel:7262071007">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (726) 207-1007
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Image */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src="/ceramic-coating-application-san-antonio-tx-profess.jpg"
                  alt="Professional ceramic coating application in San Antonio TX showing pro-grade paint protection being applied to luxury vehicle"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Package Options */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Protection Level</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {/* 2-Year Package */}
                <Card className="border-2 border-border hover:border-primary transition-colors">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">2-Year Ceramic Coating</h3>
                      <p className="text-3xl font-bold text-primary mb-4">Starting at $800</p>
                      <p className="text-muted-foreground">
                        Quality protection for San Antonio vehicles with 2-year durability and enhanced gloss.
                      </p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Hand wash with two-bucket method</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Iron remover treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Clay bar surface prep</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">2-year ceramic coating application</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">1-2 day service duration</span>
                      </li>
                    </ul>
                    <Button size="lg" asChild className="w-full">
                      <a href="tel:7262071007">Schedule 2-Year Coating</a>
                    </Button>
                  </CardContent>
                </Card>

                {/* 5-Year Package */}
                <Card className="border-2 border-primary relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">5-Year Pro-Grade Ceramic Coating</h3>
                      <p className="text-3xl font-bold text-primary mb-4">Starting at $1,400</p>
                      <p className="text-muted-foreground">
                        Ultimate protection with machine polish for San Antonio's toughest conditions.
                      </p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Hand wash with two-bucket method</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Iron remover treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">Clay bar surface prep</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold">Machine polish for defect removal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold">Pro-grade 5-year ceramic coating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">1-2 day service duration</span>
                      </li>
                    </ul>
                    <Button size="lg" asChild className="w-full">
                      <a href="tel:7262071007">Schedule 5-Year Coating</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Year Process Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">5-Year Pro-Grade Ceramic Coating Process</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience the ultimate protection for your vehicle with our comprehensive 5-year pro-grade ceramic
                  coating service in San Antonio, TX.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Hand Wash</h4>
                        <p className="text-sm text-muted-foreground">
                          We start by giving your vehicle a thorough hand wash using the two-bucket method and hand dry
                          for a spotless finish.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Iron Remover</h4>
                        <p className="text-sm text-muted-foreground">
                          We apply an Iron Decon solution to the entire vehicle, including the glass, paint, and rims,
                          to eliminate any iron contamination from San Antonio roads.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Clay Bar</h4>
                        <p className="text-sm text-muted-foreground">
                          Next, we clay the entire vehicle to restore the paint to a smooth-as-glass surface, removing
                          any contamination.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Machine Polish</h4>
                        <p className="text-sm text-muted-foreground">
                          Our dual-action buffer and brand-new pads polish the vehicle's clear coat to remove any light
                          defects and level out the paint's surface.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Hand Wash (Again)</h4>
                        <p className="text-sm text-muted-foreground">
                          We give your vehicle another hand wash using the two-bucket method and hand dry for a perfect
                          finish.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">6</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Prep Spray and Wipe Down</h4>
                        <p className="text-sm text-muted-foreground">
                          To ensure no polishing oil residue is left on the surface, we use an automotive oil and polish
                          eraser solution to prep the vehicle.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">7</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Ceramic Coating Application</h4>
                        <p className="text-sm text-muted-foreground">
                          Finally, we apply the pro-graded ceramic coating after inspecting your vehicle to ensure no
                          water or contamination on the surface, giving your investment the ultimate protection it
                          deserves.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing Table */}
              <div>
                <h3 className="text-2xl font-bold mb-6">San Antonio Ceramic Coating Pricing</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Car / Truck</span>
                        <span className="text-xl font-bold text-primary">$1,400</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Large Truck / SUV / Minivan</span>
                        <span className="text-xl font-bold text-primary">$1,600</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Additional fees may apply for vehicles with excessive soiling, stains, or dog hair.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Estimate Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Get Your Free Estimate</h2>
                <p className="text-lg text-muted-foreground">
                  Tell us about your vehicle and we'll provide a detailed quote within 24 hours.
                </p>
              </div>
              <Card className="border-border">
                <CardContent className="p-8">
                  <EstimateForm defaultService="Ceramic Coating" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions - San Antonio Ceramic Coating
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What's the difference between 2-year and 5-year ceramic coating?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The 5-year pro-grade coating includes machine polishing to remove light defects before application,
                    providing superior gloss and longevity. The 2-year coating is applied after thorough cleaning and
                    prep without machine polishing, offering excellent protection at a lower price point for San Antonio
                    vehicles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How long does ceramic coating take to apply in San Antonio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Both 2-year and 5-year ceramic coating services typically require 1-2 days at our San Antonio
                    studio. This allows proper preparation, application, and curing time for optimal results.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Will ceramic coating protect my car from San Antonio's weather?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Ceramic coating provides excellent protection against UV rays, heat, rain, bird droppings, and
                    other environmental contaminants common in San Antonio, Texas. It makes your vehicle easier to clean
                    and maintains its appearance longer.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Should I get paint correction before ceramic coating?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    If your vehicle has existing swirls, scratches, or other paint defects, we recommend our{" "}
                    <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                      paint correction service
                    </Link>{" "}
                    before ceramic coating. The 5-year package includes light machine polishing, but severe defects may
                    require full paint correction first.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How do I maintain ceramic coating after application?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Maintain your ceramic coating with regular hand washing using pH-neutral soap, avoid automatic car
                    washes with harsh chemicals, and consider periodic maintenance washes at our San Antonio studio to
                    maximize the coating's lifespan.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What is your deposit and cancellation policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A 20% non-refundable deposit is required when booking. If you provide 24-hour notice of
                    cancellation, your deposit transfers to a new appointment. Cancellations with less than 24-hour
                    notice forfeit the deposit and require an additional 20% payment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              Protect Your Investment with Ceramic Coating
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Schedule your ceramic coating service in San Antonio today. Open Tuesday-Sunday, 7:00 AM - 10:00 PM.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg h-12">
              <a href="tel:7262071007">
                <Phone className="mr-2 h-5 w-5" />
                Call (726) 207-1007
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
