import Link from "next/link"
import { MapPin, Phone, Clock, Shield, Heart, Award, CreditCard } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Column 1: Brand & Trust Badges */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-primary">One Detail At A Time</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                IDA-certified auto detailing studio serving San Antonio, Stone Oak, & The Dominion with premium vehicle conservation services.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-medium">IDA Certified Detailer</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Veteran-Owned Business</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Heart className="h-5 w-5 text-primary" />
                <span className="font-medium">10% to Junior Achievement</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="pt-2">
              <p className="text-xs text-muted-foreground mb-2">We Accept</p>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">All Major Cards | Apple Pay | Google Pay</span>
              </div>
            </div>
          </div>

          {/* Column 2: Main Services (High-Revenue) */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Main Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/san-antonio-paint-correction" className="hover:text-primary transition-colors">
                  Paint Correction San Antonio
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-ceramic-coating" className="hover:text-primary transition-colors">
                  Ceramic Coatings San Antonio
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-interior-deep-cleaning" className="hover:text-primary transition-colors">
                  Interior Detailing San Antonio
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-exterior-hand-wash-sealant" className="hover:text-primary transition-colors">
                  Exterior Hand Wash & Sealant
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-auto-detailing" className="hover:text-primary transition-colors">
                  Full Auto Detailing
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-headlight-polishing" className="hover:text-primary transition-colors">
                  Headlight Restoration
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-engine-detailing" className="hover:text-primary transition-colors">
                  Engine Bay Detailing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources (Educational Clusters) */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles/paint-correction-exterior-detailing-san-antonio" className="hover:text-primary transition-colors">
                  Understanding Paint Correction
                </Link>
              </li>
              <li>
                <Link href="/articles/ceramic-coating-protection-guide-san-antonio" className="hover:text-primary transition-colors">
                  Ceramic vs. Graphene Guide
                </Link>
              </li>
              <li>
                <Link href="/articles/clay-bar-decontamination-san-antonio" className="hover:text-primary transition-colors">
                  Paint Decontamination Guide
                </Link>
              </li>
              <li>
                <Link href="/articles/car-interior-cleaning-guide-san-antonio" className="hover:text-primary transition-colors">
                  Interior Cleaning Guide
                </Link>
              </li>
              <li>
                <Link href="/articles/two-bucket-wash-method-san-antonio" className="hover:text-primary transition-colors">
                  Safe Washing Methods
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-primary transition-colors font-medium">
                  All Articles →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>
                  11692 Bricken Circle
                  <br />
                  San Antonio, TX 78233
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:7262071007" className="hover:text-primary transition-colors font-medium">
                  (726) 207-1007
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <div>Tue-Sun: 7:00 AM - 10:00 PM</div>
                  <div className="text-muted-foreground">Monday: Closed</div>
                  <div className="text-primary text-xs mt-1">Flexible scheduling available</div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="mt-6 pt-4 border-t border-border">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} One Detail At A Time. All rights reserved. | Veteran-Owned | San Antonio, TX</p>
        </div>
      </div>
    </footer>
  )
}
