import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Clock, CheckCircle2, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exterior Hand Wash & Sealant in San Antonio, TX | One Detail At A Time",
  description:
    "Professional exterior hand wash and paint sealant service in San Antonio, TX. Two-bucket method, Iron-X treatment, clay bar, and glossy paint seal. Starting at $150. Call (726) 207-1007",
  keywords: [
    "exterior hand wash san antonio",
    "car wash san antonio tx",
    "paint sealant san antonio",
    "clay bar treatment san antonio",
    "professional car wash san antonio",
  ],
}

export default function ExteriorHandWashPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <Shield className="h-4 w-4" />
                3-4 Hour Service
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Exterior Hand Wash & Sealant in San Antonio, Texas
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                Premium exterior hand wash service in San Antonio with two-bucket method, Iron-X treatment, clay bar,
                and glossy paint sealant for lasting protection.
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
                  src="/professional-car-exterior-hand-wash-san-antonio-tx.jpg"
                  alt="Professional exterior hand wash and sealant service in San Antonio TX showing luxury car being detailed"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Exclusive Exterior Hand Wash & Sealant</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our San Antonio exterior hand wash service delivers a beautiful, glossy finish with lasting
                    protection. Please note that this service is not designed to correct any pre-existing swirling or
                    scratches on your vehicle's exterior.
                  </p>
                </div>

                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Our Detailed Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Two-Bucket Method Hand Wash</h4>
                          <p className="text-sm text-muted-foreground">
                            Fresh mitts and towels are used to ensure careful handling of your vehicle's exterior in our
                            San Antonio studio.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Iron-X Treatment</h4>
                          <p className="text-sm text-muted-foreground">
                            Applied to remove any paint contamination from Texas roads and environment.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Extensive Clay Bar Treatment</h4>
                          <p className="text-sm text-muted-foreground">
                            Performed to eliminate embedded particles, such as fallout, that are not visible to the
                            naked eye.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Paint Sealant Application</h4>
                          <p className="text-sm text-muted-foreground">
                            The clear coat is paint sealed to give your vehicle's paint a beautiful, glossy finish
                            perfect for San Antonio's climate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Pricing */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">San Antonio Exterior Wash Pricing</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Car</span>
                          <span className="text-xl font-bold text-primary">$150</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Large Car</span>
                          <span className="text-xl font-bold text-primary">$155</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Truck</span>
                          <span className="text-xl font-bold text-primary">$165</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Large Truck</span>
                          <span className="text-xl font-bold text-primary">$175</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">SUV</span>
                          <span className="text-xl font-bold text-primary">$180</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-border">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Large SUV / Minivan</span>
                          <span className="text-xl font-bold text-primary">$190</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions - San Antonio Exterior Wash
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How long does the exterior hand wash service take in San Antonio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our exterior hand wash and sealant service typically takes 3-4 hours to complete. This ensures we
                    give proper attention to every step, from the two-bucket wash to the final paint sealant
                    application.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Will this service remove swirls and scratches from my car?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, this service is not designed to correct pre-existing swirling or scratches. For that, we
                    recommend our Paint Correction service in San Antonio, which uses machine polishing to remove
                    defects.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What is the clay bar treatment and why is it important?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Clay bar treatment removes embedded contaminants from your paint surface that washing alone cannot
                    remove, such as industrial fallout, brake dust, and environmental particles common in San Antonio.
                    This leaves your paint smooth as glass.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How long does the paint sealant last?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The paint sealant typically lasts 3-6 months depending on driving conditions and care. For
                    longer-lasting protection in San Antonio's weather, consider our 2-year or 5-year ceramic coating
                    services.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What is your deposit and cancellation policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    A 20% non-refundable deposit is required when booking. If you provide 24-hour notice of
                    cancellation, your deposit transfers to a new appointment. Cancellations with less than 24-hour
                    notice forfeit the deposit and require an additional 20% payment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Do you offer mobile exterior wash services in San Antonio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, we operate exclusively from our professional detailing studio at 11692 Bricken Circle, San
                    Antonio, TX 78233. This allows us to provide the highest quality service with controlled conditions
                    and professional equipment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <Clock className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              Book Your Exterior Hand Wash in San Antonio
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Experience premium exterior detailing at our San Antonio studio. Open Tuesday-Sunday, 7:00 AM - 10:00 PM.
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
