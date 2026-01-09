import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Auto Detailing San Antonio TX | Professional Car Detailing Services",
  description:
    "Complete auto detailing services in San Antonio, TX. Interior cleaning, exterior wash, paint protection, and more. IDA-certified specialist. Call (726) 207-1007.",
  keywords: [
    "auto detailing san antonio",
    "car detailing san antonio tx",
    "professional auto detailing san antonio",
    "vehicle detailing san antonio",
  ],
}

export default function AutoDetailingPage() {
  const services = [
    "Complete interior vacuuming and cleaning",
    "Exterior hand wash and dry",
    "Wheel and tire cleaning",
    "Window cleaning inside and out",
    "Dashboard and console detailing",
    "Door jamb cleaning",
    "Fabric or leather treatment",
    "Paint decontamination",
    "Wax or sealant application",
    "Chrome and trim polishing",
  ]

  const faqs = [
    {
      question: "What is included in auto detailing in San Antonio?",
      answer:
        "Our auto detailing service includes complete interior cleaning with vacuuming and surface treatment, exterior hand wash with wax or sealant, wheel and tire detailing, window cleaning, and door jamb cleaning. We customize each service to your vehicle's specific needs at our San Antonio studio.",
    },
    {
      question: "How long does auto detailing take in San Antonio, TX?",
      answer:
        "A complete auto detailing service typically takes 4-8 hours depending on your vehicle's size and condition. Our San Antonio detailing studio ensures thorough attention to every detail without rushing the process.",
    },
    {
      question: "How often should I get my car detailed in San Antonio?",
      answer:
        "We recommend professional auto detailing every 3-4 months for San Antonio vehicles. However, this can vary based on usage, parking conditions, and San Antonio's weather. Regular detailing protects your investment and maintains your vehicle's value.",
    },
    {
      question: "Do you offer auto detailing packages in San Antonio?",
      answer:
        "Yes! We offer customizable auto detailing packages combining multiple services. Popular combinations include interior deep cleaning with ceramic coating, or paint correction with sealant application. Call (726) 207-1007 to discuss the best package for your San Antonio vehicle.",
    },
    {
      question: "Is auto detailing worth it for older cars?",
      answer:
        "Auto detailing can significantly improve the appearance and condition of older vehicles. Our San Antonio specialists can restore faded paint, remove stains, and eliminate odors, helping extend your vehicle's life and potentially increase resale value.",
    },
    {
      question: "What's the difference between a car wash and auto detailing?",
      answer:
        "A car wash provides basic cleaning, while auto detailing is comprehensive vehicle restoration. Our San Antonio auto detailing includes deep cleaning, paint correction, protection application, and meticulous attention to every surface inside and out.",
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
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary border border-primary/20">
                  <Sparkles className="h-4 w-4" />
                  <span>Complete Auto Care</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                  Professional Auto Detailing in San Antonio, TX
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Experience comprehensive auto detailing services at our San Antonio studio. Our IDA-certified
                  specialist provides complete interior and exterior vehicle care, restoring your car to showroom
                  condition while supporting Junior Achievement of South Texas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="tel:7262071007">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (726) 207-1007
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-2 bg-transparent">
                    <Link href="/san-antonio-car-detailing-services">View All Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/auto-detailing-complete-car-care-san-antonio-tx.jpg"
                  alt="Professional auto detailing services in San Antonio TX showing complete interior and exterior car care at IDA-certified studio"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Comprehensive Auto Detailing Services in San Antonio
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our auto detailing service combines professional techniques with premium products to restore and
                  protect your vehicle.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Our San Antonio Auto Detailing?</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      At One Detail At A Time, we provide complete auto detailing services that go beyond basic car
                      washes. Our IDA-certified specialist uses professional-grade equipment and premium products to
                      clean, restore, and protect every surface of your vehicle.
                    </p>
                    <p>
                      Located at 11692 Bricken Circle, San Antonio, TX 78233, our private detailing studio offers a
                      controlled environment for superior results. Every service contributes to our mission—10% of
                      revenue supports Junior Achievement of South Texas, empowering local students.
                    </p>
                    <p>
                      Looking for specialized services? We offer{" "}
                      <Link href="/san-antonio-ceramic-coating" className="text-primary hover:underline">
                        premium ceramic coating
                      </Link>
                      ,{" "}
                      <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                        multi-stage paint correction
                      </Link>
                      , and{" "}
                      <Link href="/san-antonio-interior-deep-cleaning" className="text-primary hover:underline">
                        interior deep cleaning services
                      </Link>{" "}
                      throughout San Antonio. View our{" "}
                      <Link href="/san-antonio-car-detailing-services" className="text-primary hover:underline">
                        complete service menu
                      </Link>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Professional Auto Detailing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact One Detail At A Time for expert auto detailing in San Antonio, TX. Tuesday-Sunday, 7:00 AM - 10:00
              PM.
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
