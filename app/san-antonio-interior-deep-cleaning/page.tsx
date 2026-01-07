import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EstimateForm } from "@/components/estimate-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Clock, DollarSign, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Deep Cleaning San Antonio TX | Car Interior Detailing",
  description:
    "Professional car interior deep cleaning in San Antonio. Steam cleaning, leather conditioning, odor removal, hot water extraction. Starting at $350. Call (726) 207-1007.",
  keywords: [
    "interior detailing san antonio",
    "car interior cleaning san antonio tx",
    "auto upholstery cleaning san antonio",
    "leather conditioning san antonio",
  ],
}

export default function InteriorCleaningPage() {
  const pricing = [
    { vehicle: "Car", price: "$350.00" },
    { vehicle: "Large Car", price: "$360.00" },
    { vehicle: "Truck", price: "$350.00" },
    { vehicle: "Large Truck", price: "$400.00" },
    { vehicle: "SUV", price: "$400.00" },
    { vehicle: "Large SUV", price: "$430.00" },
  ]

  const services = [
    "Dusting of all vents and crevices",
    "Wiping down all surfaces",
    "Deep vacuuming of mats, seats, and carpets",
    "Pre-treatment of stains",
    "Steam cleaning of all surfaces",
    "Cleaning and conditioning of leather seats",
    "Shampooing of mats, seats, and carpets",
    "Hot water extraction",
    "2 hour dry time",
    "Final vacuuming",
    "Stain and water resistance application on fabric",
    "UV protection on vinyl, rubber, & plastic",
    "Streak-free window cleaning",
    "Ozone purification for odor removal",
    "Fragrant bomb for added freshness",
    "Final sanitizer and disinfectant wipe down",
  ]

  const faqs = [
    {
      question: "How long does interior deep cleaning take in San Antonio?",
      answer:
        "Our comprehensive interior deep cleaning service takes 7-9 hours to complete. This ensures every detail of your vehicle's interior is thoroughly cleaned and restored at our San Antonio detailing studio.",
    },
    {
      question: "What areas of San Antonio do you serve?",
      answer:
        "We are located at 11692 Bricken Circle, San Antonio, TX 78233. While we do not offer mobile detailing services, we welcome customers from all areas of San Antonio and surrounding communities to our professional studio.",
    },
    {
      question: "Do you remove pet hair and odors?",
      answer:
        "Yes! Our interior deep cleaning includes extensive vacuuming, steam cleaning, and ozone purification that effectively removes pet hair, dander, and odors. Additional fees may apply for excessive pet hair in San Antonio vehicles.",
    },
    {
      question: "Is leather conditioning included?",
      answer:
        "Absolutely. For vehicles with leather seats, we use pH-neutral leather cleaner followed by premium leather conditioner to clean, protect, and maintain your leather interior in San Antonio's climate.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "A 20% non-refundable deposit is required when booking. With 24-hour notice, your deposit transfers to a new appointment. Less than 24-hour notice results in deposit forfeiture and an additional 20% fee for rebooking.",
    },
    {
      question: "Do you offer same-day interior cleaning in San Antonio?",
      answer:
        "Due to the comprehensive 7-9 hour process, same-day service is limited. We recommend scheduling in advance at our San Antonio studio. Call (726) 207-1007 to check availability.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                  The sanctuary you deserve.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every drive should feel like the first. Transform your vehicle's interior with professional deep
                  cleaning that restores comfort, health, and pride of ownership.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:7262071007">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (726) 207-1007
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="/luxury-car-interior-deep-cleaning-leather-seats-sa.jpg"
                  alt="Professional interior deep cleaning service in San Antonio TX showing pristine leather seats and detailed dashboard"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-border">
                  <CardContent className="p-6 text-center space-y-2">
                    <DollarSign className="h-8 w-8 mx-auto text-primary" />
                    <div className="text-2xl font-bold">Starting at $350</div>
                    <div className="text-sm text-muted-foreground">Base package price</div>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-6 text-center space-y-2">
                    <Clock className="h-8 w-8 mx-auto text-primary" />
                    <div className="text-2xl font-bold">7-9 Hours</div>
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
                  <h2 className="text-3xl font-bold mb-4">Complete Interior Restoration for San Antonio Vehicles</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our car interior deep cleaning service is specifically designed to eradicate dirt, sand, and grime
                    from all areas of your vehicle's interior. We specialize in shampooing and deep-cleaning carpeted
                    areas and cloth seats using professional hot water extraction equipment. Leather seats receive
                    meticulous treatment with pH-neutral leather cleaner and premium conditioning. Your car's interior
                    is thoroughly disinfected and sanitized, effectively eliminating viruses, bacteria, and fungi.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">San Antonio Interior Detailing Includes:</h3>
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

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">San Antonio Interior Cleaning Pricing</h2>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {pricing.map((item) => (
                      <div
                        key={item.vehicle}
                        className="flex justify-between items-center py-3 border-b border-border last:border-0"
                      >
                        <span className="font-medium">{item.vehicle}</span>
                        <span className="text-primary font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded-lg space-y-2 text-sm text-muted-foreground">
                    <p>* Additional fees may apply for vehicles with excessive soiling, stains, or pet hair.</p>
                    <p>* A 20% non-refundable deposit is required at booking.</p>
                    <p>* 24-hour cancellation notice required to transfer deposit to new appointment.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Estimate Form Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Request Your Free Estimate</h2>
                <p className="text-lg text-muted-foreground">
                  Share your vehicle details and we'll provide a personalized quote within 24 hours.
                </p>
              </div>
              <Card className="border-border bg-background">
                <CardContent className="p-8">
                  <EstimateForm defaultService="Interior Deep Cleaning" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Transform Your Interior Today</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Experience the difference professional care makes. Every detail matters.
            </p>
            <Button size="lg" variant="secondary" asChild>
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
