import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">One Detail At A Time</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IDA-certified auto detailing studio serving San Antonio, TX with premium vehicle care services.
            </p>
          </div>

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
                <a href="tel:7262071007" className="hover:text-primary transition-colors">
                  (726) 207-1007
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <div>Tue-Sun: 7:00 AM - 10:00 PM</div>
                  <div>Monday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/san-antonio-auto-detailing" className="hover:text-primary transition-colors">
                  Auto Detailing
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-interior-deep-cleaning" className="hover:text-primary transition-colors">
                  Interior Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-exterior-hand-wash-sealant" className="hover:text-primary transition-colors">
                  Exterior Hand Wash & Sealant
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-ceramic-coating" className="hover:text-primary transition-colors">
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-paint-correction" className="hover:text-primary transition-colors">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-engine-detailing" className="hover:text-primary transition-colors">
                  Engine Detailing
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-full-body-wash" className="hover:text-primary transition-colors">
                  Full Body Wash
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-headlight-polishing" className="hover:text-primary transition-colors">
                  Headlight Polishing
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-paint-repair" className="hover:text-primary transition-colors">
                  Paint Repair
                </Link>
              </li>
              <li>
                <Link href="/san-antonio-seat-shampooing" className="hover:text-primary transition-colors">
                  Seat Shampooing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} One Detail At A Time. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
