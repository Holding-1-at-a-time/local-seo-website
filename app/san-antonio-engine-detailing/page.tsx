import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, DollarSign, Clock, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Engine Detailing San Antonio TX | Engine Bay Cleaning Services",
  description:
    "Professional engine detailing and bay cleaning in San Antonio, TX. Safe degreasing, component protection, detailed cleaning. Starting at $150. Call (726) 207-1007.",
  keywords: [
    "engine detailing san antonio",
    "engine bay cleaning san antonio tx",
    "engine degreasing san antonio",
    "motor cleaning san antonio",
  ],
}

export default function EngineDetailingPage() {
  const services = [
    "Engine bay inspection",
    "Component protection (electrical, sensors)",
    "Safe degreasing application",
    "Agitation and detailed cleaning",
    "Careful rinsing process",
    "Compressed air drying",
    "Dressing application",
    "Final inspection",
  ]

  const faqs = [
    {
      question: "Is engine detailing safe for my car in San Antonio?",
      answer:
        "Yes! Our San Antonio engine detailing service uses safe, professional techniques. We protect all electrical components, sensors, and sensitive parts before cleaning. Our IDA-certified specialist has extensive experience with engine bay detailing for all vehicle types.",
    },
    {
      question: "How often should I get engine detailing in San Antonio, TX?",
      answer:
        "We recommend engine detailing every 12-18 months for San Antonio vehicles. Regular engine bay cleaning helps prevent corrosion, makes maintenance easier, and can help identify potential issues early. San Antonio's climate can cause buildup that benefits from periodic cleaning.",
    },
    {
      question: "What are the benefits of engine detailing?",
      answer:
        "Engine detailing improves appearance, makes it easier to spot leaks or issues, helps prevent corrosion, can improve resale value, and keeps your engine bay cooler by removing heat-trapping grime. It's especially beneficial for San Antonio vehicles exposed to heat and humidity.",
    },
    {
      question: "How long does engine detailing take in San Antonio?",
      answer:
        "Engine detailing at our San Antonio studio typically takes 2-3 hours. This includes inspection, protection of components, degreasing, detailed cleaning, drying, and dressing application. We never rush the process to ensure safe, thorough results.",
    },
    {
      question: "Will engine cleaning affect my warranty?",
      answer:
        "Proper engine detailing does not void warranties. Our San Antonio specialists use manufacturer-approved techniques and take extensive precautions to protect all components. We can provide documentation of our process if needed for warranty purposes.",
    },
    {
      question: "Do you detail engine bays for classic cars in San Antonio?",
      answer:
        "We have experience detailing engine bays for classic, vintage, and collector vehicles in San Antonio. We use extra care and appropriate products for older engines. Call (726) 207-1007 to discuss your classic car's specific needs.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                  Engine Detailing in San Antonio, TX
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Professional engine bay cleaning and detailing services in San Antonio. Our IDA-certified specialist
                  safely removes grease, grime, and buildup to restore your engine's appearance and prevent corrosion.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="tel:7262071007">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (726) 207-1007
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/engine-bay-detailing-cleaning-san-antonio-tx.jpg"
                  alt="Professional engine bay detailing and cleaning service in San Antonio TX showing pristine engine compartment"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-border">
                  <CardContent className="p-6 text-center space-y-2">
                    <DollarSign className="h-8 w-8 mx-auto text-primary" />
                    <div className="text-2xl font-bold">Starting at $150</div>
                    <div className="text-sm text-muted-foreground">Service price</div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6 text-center space-y-2">
                    <Clock className="h-8 w-8 mx-auto text-primary" />
                    <div className="text-2xl font-bold">2-3 Hours</div>
                    <div className="text-sm text-muted-foreground">Service duration</div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6 text-center space-y-2">
                    <CheckCircle2 className="h-8 w-8 mx-auto text-primary" />
                    <div className="text-2xl font-bold">IDA Certified</div>
                    <div className="text-sm text-muted-foreground">Professional specialist</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Safe Engine Bay Cleaning for San Antonio Vehicles</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our engine detailing service carefully removes years of accumulated grease, oil, and grime from your
                    engine bay. We use professional-grade degreasers and safe techniques that protect all electrical
                    components, sensors, and sensitive parts. The result is a clean, restored engine bay that's easier
                    to maintain and helps identify potential issues.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">San Antonio Engine Detailing Includes:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div key={service} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Engine Detailing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact One Detail At A Time for professional engine bay cleaning in San Antonio, TX.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
