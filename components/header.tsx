import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-bold text-primary">One Detail At A Time</div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link
            href="/san-antonio-car-detailing-services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/san-antonio-ceramic-coating"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Ceramic Coating
          </Link>
          <Link
            href="/san-antonio-interior-deep-cleaning"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Interior Detailing
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild className="hidden lg:flex bg-transparent">
            <Link href="/contact" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Get Estimate
            </Link>
          </Button>
          <Button asChild>
            <a href="tel:7262071007" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(726) 207-1007</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
