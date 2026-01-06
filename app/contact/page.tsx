import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | One Detail At A Time San Antonio, TX",
  description:
    "Contact One Detail At A Time in San Antonio, TX. Located at 11692 Bricken Circle, San Antonio, TX 78233. Call (726) 207-1007. Open Tuesday-Sunday 7AM-10PM.",
  keywords: ["contact car detailing san antonio", "one detail at a time location", "san antonio detailing phone"],
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">Contact Us</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get in touch with San Antonio's premier auto detailing studio
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-border">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:7262071007" className="text-sm text-primary hover:underline block">
                      (726) 207-1007
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      11692 Bricken Circle
                      <br />
                      San Antonio, TX 78233
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday: Closed
                      <br />
                      Tue-Sun: 7AM - 10PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Service Type</h3>
                    <p className="text-sm text-muted-foreground">
                      Studio Only
                      <br />
                      (No Mobile Service)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Visit Our San Antonio Studio</h2>
                <p className="text-lg text-muted-foreground">
                  We're located in San Antonio, TX. Professional detailing studio - appointment required.
                </p>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.2!2d-98.3808!3d29.6084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDM2JzMwLjIiTiA5OMKwMjInNTEuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="One Detail At A Time location in San Antonio TX"
                />
              </div>

              <Card className="border-border bg-background">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Important Information</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>We are a private professional detailing studio - appointments required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>We do not offer mobile detailing services at this time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>20% non-refundable deposit required to book appointment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Please provide 24-hour cancellation notice or deposit is forfeited and additional 20% required
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Additional fees may apply for excessive soiling, stains, or pet hair</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Ready to Schedule Your Service?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Call us today to book your appointment at our San Antonio detailing studio.
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
