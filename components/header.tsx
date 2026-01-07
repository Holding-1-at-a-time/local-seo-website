import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-bold tracking-tight">odaat1</div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/ceramic-coating" className="text-sm font-medium transition-colors hover:text-primary">
            Ceramic Coating
          </Link>
          <Link href="/interior-deep-cleansing" className="text-sm font-medium transition-colors hover:text-primary">
            Interior Cleansing
          </Link>
        </nav>

        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/get-estimate">Get Estimate</Link>
        </Button>
      </div>
    </header>
  )
}
