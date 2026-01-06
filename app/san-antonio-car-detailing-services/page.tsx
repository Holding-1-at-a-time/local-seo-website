import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Car Detailing Services in San Antonio, TX | One Detail At A Time",
  description:
    "Professional auto detailing services in San Antonio, TX. Interior cleaning, exterior wash, ceramic coating, and paint correction. IDA-certified specialist. Call (726) 207-1007.",
  keywords: [
    "car detailing services san antonio",
    "auto detailing san antonio",
    "car wash san antonio",
    "vehicle detailing san antonio tx",
  ],
}

export default function ServicesPage() {
  const services = [
    {
      title: "Auto Detailing",
      slug: "san-antonio-auto-detailing",
      price: "Custom packages available",
      duration: "Varies by service",
      image: "/auto-detailing-complete-car-care-san-antonio-tx.jpg",
      alt: "Complete auto detailing services in San Antonio TX - interior and exterior car care",
      description:
        "Comprehensive auto detailing services in San Antonio including interior cleaning, exterior wash, and paint protection for your vehicle.",
      features: [
        "Complete interior & exterior detail",
        "Engine bay cleaning available",
        "Wheel & tire detailing",
        "Paint decontamination",
        "Professional finishing",
      ],
    },
    {
      title: "Interior Deep Cleaning",
      slug: "san-antonio-interior-deep-cleaning",
      price: "Starting at $350",
      duration: "7-9 hours",
      image: "/professional-car-interior-deep-cleaning-san-antoni.jpg",
      alt: "Professional interior deep cleaning services in San Antonio TX",
      description:
        "Complete interior restoration including shampooing, leather conditioning, steam cleaning, and odor removal for San Antonio vehicles.",
      features: [
        "Steam cleaning all surfaces",
        "Leather cleaning & conditioning",
        "Hot water extraction",
        "Ozone odor removal",
        "UV protection application",
      ],
    },
    {
      title: "Exterior Hand Wash & Sealant",
      slug: "san-antonio-exterior-hand-wash-sealant",
      price: "Starting at $150",
      duration: "3-4 hours",
      image: "/car-exterior-hand-wash-paint-protection-san-antoni.jpg",
      alt: "Exterior hand wash and sealant services in San Antonio TX",
      description:
        "Premium hand wash with Iron-X treatment, clay bar, and paint sealant for lasting protection in San Antonio weather.",
      features: [
        "Two-bucket method",
        "Iron-X paint decontamination",
        "Clay bar treatment",
        "Paint sealant application",
        "Glossy finish",
      ],
    },
    {
      title: "Ceramic Coating",
      slug: "san-antonio-ceramic-coating",
      price: "2-Year & 5-Year Options",
      duration: "Full day service",
      image: "/ceramic-coating-application-professional-car-paint.jpg",
      alt: "Ceramic coating services in San Antonio TX - 2 year and 5 year protection",
      description:
        "Ultimate paint protection with 2-year or 5-year ceramic coating options for San Antonio car owners.",
      features: [
        "Long-lasting protection",
        "Enhanced gloss & shine",
        "Hydrophobic properties",
        "UV protection",
        "Scratch resistance",
      ],
    },
    {
      title: "Paint Correction",
      slug: "san-antonio-paint-correction",
      price: "Custom Quote",
      duration: "Varies by condition",
      image: "/paint-correction-polishing-remove-swirls-scratches.jpg",
      alt: "Paint correction services San Antonio TX - swirl and scratch removal",
      description:
        "Professional multi-stage paint correction to remove swirls, scratches, and oxidation for San Antonio vehicles.",
      features: [
        "Multi-stage polishing",
        "Swirl mark removal",
        "Scratch elimination",
        "Paint restoration",
        "Mirror-like finish",
      ],
    },
    {
      title: "Engine Detailing",
      slug: "san-antonio-engine-detailing",
      price: "Starting at $150",
      duration: "2-3 hours",
      image: "/engine-bay-detailing-cleaning-san-antonio-tx.jpg",
      alt: "Engine bay detailing and cleaning services in San Antonio TX",
      description:
        "Professional engine bay cleaning and detailing to restore appearance and prevent corrosion in San Antonio vehicles.",
      features: [
        "Safe degreasing process",
        "Component protection",
        "Detailed cleaning",
        "Dressing application",
        "Inspection included",
      ],
    },
    {
      title: "Full Body Wash",
      slug: "san-antonio-full-body-wash",
      price: "Starting at $100",
      duration: "1-2 hours",
      image: "/full-body-wash-hand-wash-car-san-antonio-tx.jpg",
      alt: "Full body wash hand wash services in San Antonio TX",
      description: "Complete hand wash and drying service using premium products for San Antonio vehicles.",
      features: ["Two-bucket hand wash", "Wheel cleaning", "Tire dressing", "Window cleaning", "Microfiber drying"],
    },
    {
      title: "Headlight Polishing",
      slug: "san-antonio-headlight-polishing",
      price: "Starting at $80",
      duration: "1 hour",
      image: "/headlight-restoration-polishing-san-antonio-tx.jpg",
      alt: "Headlight restoration and polishing services in San Antonio TX",
      description: "Headlight restoration and polishing to improve visibility and appearance for San Antonio vehicles.",
      features: [
        "UV damage removal",
        "Multi-stage polishing",
        "Clear coat protection",
        "Improved visibility",
        "Enhanced appearance",
      ],
    },
    {
      title: "Paint Repair",
      slug: "san-antonio-paint-repair",
      price: "Custom Quote",
      duration: "Varies by damage",
      image: "/paint-chip-scratch-repair-san-antonio-tx.jpg",
      alt: "Paint chip and scratch repair services in San Antonio TX",
      description: "Expert paint chip and scratch repair services to restore your vehicle's finish in San Antonio.",
      features: ["Color matching", "Chip repair", "Scratch removal", "Touch-up application", "Blending & finishing"],
    },
    {
      title: "Seat Shampooing",
      slug: "san-antonio-seat-shampooing",
      price: "Starting at $150",
      duration: "3-4 hours",
      image: "/car-seat-shampooing-upholstery-cleaning-san-anton.jpg",
      alt: "Car seat shampooing and upholstery cleaning services in San Antonio TX",
      description:
        "Deep cleaning and shampooing for car seats and upholstery to remove stains and odors in San Antonio vehicles.",
      features: [
        "Pre-treatment of stains",
        "Hot water extraction",
        "Fast drying process",
        "Fabric protection",
        "Odor elimination",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                Professional Car Detailing Services in San Antonio, Texas
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Expert auto detailing at our San Antonio studio. IDA-certified specialist providing interior cleaning,
                paint correction, ceramic coating, and hand wash services.
              </p>
              <Button size="lg" asChild>
                <a href="tel:7262071007">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (726) 207-1007
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card key={service.slug} className="overflow-hidden border-border">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                    <div className={`relative aspect-[3/2] lg:aspect-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.alt}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="font-semibold text-primary">{service.price}</span>
                            <span>•</span>
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full sm:w-auto">
                          <Link href={`/${service.slug}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Serving San Antonio, Texas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Located at 11692 Bricken Circle, San Antonio, TX 78233. Our professional detailing studio provides expert
              car care services to San Antonio and surrounding areas. Open Tuesday through Sunday, 7:00 AM - 10:00 PM.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Visit Our Studio</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
