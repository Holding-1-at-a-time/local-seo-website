import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, CheckCircle2, Sparkles } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Paint Correction San Antonio, TX | Remove Swirls & Scratches | One Detail At A Time",
  description:
    "Professional paint correction in San Antonio, TX. Remove swirls, scratches, and oxidation with expert machine polishing. IDA-certified specialist. Call (726) 207-1007",
  keywords: [
    "paint correction san antonio",
    "paint correction san antonio tx",
    "remove swirls san antonio",
    "car paint restoration san antonio",
    "machine polishing san antonio",
  ],
}

export default function PaintCorrectionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <Sparkles className="h-4 w-4" />
                Expert Paint Restoration
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Paint Correction in San Antonio, Texas
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
                Professional paint correction to remove swirls, scratches, and oxidation. Restore your vehicle's paint
                to showroom condition in San Antonio, TX.
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
                  src="/paint-correction-machine-polishing-san-antonio-tx.jpg"
                  alt="Professional paint correction and machine polishing service in San Antonio TX removing swirls and scratches from vehicle paint"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Professional Paint Correction in San Antonio</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paint correction is the process of removing surface imperfections from your vehicle's clear coat,
                  including swirl marks, scratches, oxidation, and water spots. Using advanced machine polishing
                  techniques, our IDA-certified specialist in San Antonio restores your paint to a flawless, mirror-like
                  finish.
                </p>
              </div>

              {/* What We Fix */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Common Paint Issues We Correct</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-border">
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold">Swirl Marks</h4>
                      <p className="text-sm text-muted-foreground">
                        Fine circular scratches caused by improper washing and drying techniques common in San Antonio
                        car washes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold">Light to Moderate Scratches</h4>
                      <p className="text-sm text-muted-foreground">
                        Surface-level scratches in the clear coat that haven't penetrated to the base coat.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold">Oxidation</h4>
                      <p className="text-sm text-muted-foreground">
                        Paint dullness and fading caused by UV exposure from San Antonio's intense sun.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold">Water Spots & Etching</h4>
                      <p className="text-sm text-muted-foreground">
                        Mineral deposits from hard water and environmental fallout that etch into the paint surface.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold">Holograms</h4>
                      <p className="text-sm text-muted-foreground">
                        Buffer trails and micro-marring from improper polishing techniques.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6 space-y-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold">Orange Peel</h4>
                      <p className="text-sm text-muted-foreground">
                        Texture in factory paint that can be leveled for an ultra-smooth finish.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Our Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Our San Antonio Paint Correction Process</h3>
                <div className="space-y-4">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Paint Inspection & Assessment</h4>
                          <p className="text-sm text-muted-foreground">
                            We thoroughly inspect your vehicle's paint with LED lighting to identify all defects and
                            determine the appropriate correction level.
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
                          <h4 className="font-semibold mb-2">Deep Cleaning & Decontamination</h4>
                          <p className="text-sm text-muted-foreground">
                            Hand wash, iron remover, and clay bar treatment to remove all surface contaminants before
                            polishing.
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
                          <h4 className="font-semibold mb-2">Paint Thickness Measurement</h4>
                          <p className="text-sm text-muted-foreground">
                            Using a paint depth gauge, we measure clear coat thickness to ensure safe polishing without
                            risk of burn-through.
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
                          <h4 className="font-semibold mb-2">Multi-Stage Machine Polishing</h4>
                          <p className="text-sm text-muted-foreground">
                            Using dual-action and rotary polishers with various pad and polish combinations, we
                            systematically remove defects panel by panel.
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
                          <h4 className="font-semibold mb-2">Paint Refinement & Jeweling</h4>
                          <p className="text-sm text-muted-foreground">
                            Final polishing stage to remove any micro-marring and achieve maximum gloss and clarity.
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
                          <h4 className="font-semibold mb-2">Protection Application</h4>
                          <p className="text-sm text-muted-foreground">
                            Paint sealant or ceramic coating to protect your freshly corrected paint and maintain the
                            results longer in San Antonio conditions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Correction Levels */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Paint Correction Service Levels</h3>
                <div className="space-y-6">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">Stage 1: Light Correction</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Single-step polish to remove 40-60% of defects. Ideal for newer vehicles or those with light
                        swirls and minor imperfections.
                      </p>
                      <p className="text-lg font-bold text-primary">Starting at $400</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">Stage 2: Medium Correction</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Two-step polish to remove 70-85% of defects. Recommended for most San Antonio vehicles with
                        moderate swirls, scratches, and oxidation.
                      </p>
                      <p className="text-lg font-bold text-primary">Starting at $700</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2">Stage 3: Heavy Correction</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Multi-step polish to remove 90-95% of defects. For severely neglected paint or show car
                        preparation requiring near-perfect results.
                      </p>
                      <p className="text-lg font-bold text-primary">Starting at $1,200</p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Final pricing depends on vehicle size, paint condition, and desired results. Contact us for a detailed
                  quote and paint assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions - San Antonio Paint Correction
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How long does paint correction take in San Antonio?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Paint correction typically takes 1-3 days depending on the correction level and vehicle size. Stage
                    1 light correction usually takes 1 day, Stage 2 medium correction takes 1-2 days, and Stage 3 heavy
                    correction can take 2-3 days for thorough results.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Can paint correction remove deep scratches?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Paint correction can only remove scratches that are in the clear coat layer. If you can feel a
                    scratch with your fingernail or it has penetrated through to the base coat or primer, it cannot be
                    fully removed by polishing and may require touch-up paint or repainting.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Should I get ceramic coating after paint correction?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Paint correction creates the perfect surface for ceramic coating. We strongly recommend
                    protecting your corrected paint with either our{" "}
                    <Link href="/san-antonio-ceramic-coating" className="text-primary hover:underline">
                      2-year or 5-year ceramic coating
                    </Link>{" "}
                    to maintain results longer and make future cleaning easier in San Antonio's climate.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Is paint correction safe for my car's paint?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    When performed by a trained professional with proper equipment, paint correction is completely safe.
                    We use a paint depth gauge to measure clear coat thickness before polishing and carefully monitor
                    our work to ensure we never remove more clear coat than necessary.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How do I maintain my paint after correction?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Maintain corrected paint by using proper hand wash techniques with the two-bucket method, microfiber
                    wash mitts, and pH-neutral soap. Avoid automatic car washes and always dry with clean, soft
                    microfiber towels. Regular maintenance washes at our San Antonio studio can help preserve your
                    results.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Which correction stage do I need for my vehicle?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The best correction level depends on your paint's condition and your expectations. We recommend
                    bringing your vehicle to our San Antonio studio for a free paint inspection and assessment. We'll
                    examine your paint under LED lighting and recommend the appropriate correction level.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-primary-foreground" />
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Restore Your Paint to Perfection</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Schedule your paint correction service in San Antonio today. Open Tuesday-Sunday, 7:00 AM - 10:00 PM.
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
