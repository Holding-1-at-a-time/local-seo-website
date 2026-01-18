import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Heart } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-bold text-primary">One Detail At A Time</div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          
          {/* Services Dropdown - Revenue-First Structure */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="col-span-2">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 px-3">High-Revenue Pillars</div>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/san-antonio-paint-correction"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border border-primary/20"
                        >
                          <div className="text-sm font-medium leading-none">Paint Correction</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Remove swirls, scratches & oxidation
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/san-antonio-ceramic-coating"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border border-primary/20"
                        >
                          <div className="text-sm font-medium leading-none">Ceramic & Graphene Coatings</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            2-7 year protection from Texas sun
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/san-antonio-interior-deep-cleaning"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border border-primary/20"
                        >
                          <div className="text-sm font-medium leading-none">Interior Deep Cleansing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Steam sterilization & odor removal
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/san-antonio-car-detailing-services"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border border-primary/20"
                        >
                          <div className="text-sm font-medium leading-none">Full Conservation Packages</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Complete vehicle care bundles
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-2 mt-2">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">Add-On Services</div>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/san-antonio-headlight-polishing"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Headlight Restoration</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/san-antonio-engine-detailing"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Engine Bay Detailing</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* The Process Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">The Process</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/articles/professional-auto-detailing-guide-san-antonio"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">4-Stage Detailing Guide</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our complete detailing process
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/articles/two-bucket-wash-method-san-antonio"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Safe Washing Methods</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Scratch-free techniques
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/articles/clay-bar-decontamination-san-antonio"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Decontamination Process</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Clay bar & iron removal
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/articles"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">All Articles</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse our knowledge base
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Our Mission */}
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
            <Heart className="h-3 w-3 text-primary" />
            Our Mission
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden md:flex bg-transparent">
            <Link href="/contact">Get Free Estimate</Link>
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
