import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EstimateForm } from "@/components/estimate-form"
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">Get Your Free Estimate</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience San Antonio's premier auto detailing. We'll respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Estimate Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Request Your Estimate</h2>
                  <EstimateForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Or Contact Us Directly</h2>
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
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:estimates@odaat1.com" className="text-sm text-primary hover:underline block">
                      estimates@odaat1.com
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
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Visit Our San Antonio Studio</h2>
                <p className="text-lg text-muted-foreground">Professional detailing studio - appointment required.</p>
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

              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Important Information</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Professional detailing studio - appointments required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Studio service only (no mobile detailing)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>20% non-refundable deposit required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>24-hour cancellation notice required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Additional fees may apply for excessive soiling or pet hair</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
