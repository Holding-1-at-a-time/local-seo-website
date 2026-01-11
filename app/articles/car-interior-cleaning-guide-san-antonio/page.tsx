import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { FAQAccordion } from "@/components/faq-accordion"
import { ArticleStructuredData } from "@/components/article-structured-data"

export const metadata: Metadata = {
  title: "Interior Cleaning Guide | San Antonio TX | ODAAT1",
  description:
    "Professional interior cleaning guide: deep cleaning tiers, material care, odor removal & health benefits. Expert service in San Antonio. Call (726) 207-1007.",
  openGraph: {
    title: "Car Interior Cleaning Guide | San Antonio TX",
    description: "Complete guide to professional car interior cleaning in San Antonio.",
    url: "https://odaat1.com/articles/car-interior-cleaning-guide-san-antonio",
    type: "article",
  },
  alternates: {
    canonical: "https://odaat1.com/articles/car-interior-cleaning-guide-san-antonio",
  },
}

const faqItems = [
  {
    question: "How often should I get my car's interior professionally cleaned in San Antonio?",
    answer:
      "We recommend professional interior detailing every 3-6 months in San Antonio due to high dust, cedar pollen, and humidity that promote bacterial growth. Families with children or pets may benefit from more frequent cleaning.",
  },
  {
    question: "Can you remove smoke odor from my vehicle?",
    answer:
      "Yes. We use ozone treatment that converts O₂ into O₃, which neutralizes smoke odors at the molecular level. This requires the vehicle to be unoccupied during treatment and ventilated for at least two hours afterward.",
  },
  {
    question: "Is steam cleaning safe for leather seats?",
    answer:
      "Yes, when performed correctly. We use dry steam at controlled temperatures that kill bacteria without saturating leather. After steaming, we apply premium leather conditioner to maintain suppleness and prevent cracking.",
  },
  {
    question: "What's the difference between vacuuming and hot-water extraction?",
    answer:
      "Vacuuming removes surface debris, while hot-water extraction (shampooing) injects cleaning solution deep into carpet and upholstery fibers, then extracts it along with embedded grime, stains, and allergens that vacuuming cannot reach.",
  },
  {
    question: "How long does interior detailing take?",
    answer:
      "Basic interior cleaning takes 2-3 hours. Deep remediation with shampooing requires 4-6 hours. Full restoration with steam sterilization and odor treatment may take 6-8 hours, plus drying time.",
  },
]

const relatedArticles = [
  {
    slug: "professional-auto-detailing-guide-san-antonio",
    title: "Complete Detailing Guide",
    description: "All four stages of professional detailing",
  },
  {
    slug: "exterior-car-detailing-guide-san-antonio",
    title: "Exterior Detailing Guide",
    description: "Comprehensive exterior care for Texas",
  },
  {
    slug: "paint-decontamination-guide-san-antonio",
    title: "Decontamination Guide",
    description: "Foundation of quality detailing",
  },
]

export default function InteriorCleaningGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleStructuredData
        title="Professional Car Interior Cleaning: Health, Hygiene & Preservation"
        description="Complete guide to professional interior detailing including deep cleaning tiers, material care, odor removal, and health benefits."
        url="https://odaat1.com/articles/car-interior-cleaning-guide-san-antonio"
        datePublished="2024-01-05"
        dateModified="2024-01-05"
        image="https://odaat1.com/car-interior-cleaning-steam-san-antonio-detailing.jpg"
        imageAlt="Professional steam cleaning and interior detailing at One Detail At A Time studio in San Antonio Texas"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/interior-car-detailing-leather-cleaning-san-antonio.jpg"
            alt="Professional interior detailer cleaning and conditioning leather seats at One Detail At A Time studio in San Antonio Texas"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            <BreadcrumbNav items={[{ label: "Articles", href: "/articles" }, { label: "Interior Cleaning Guide" }]} />
            <ScrollAnimation>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Interior Care
              </span>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Professional Car Interior Cleaning: Health, Hygiene & Preservation
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
                Discover why professional interior detailing is a technical discipline focused on maintaining your
                vehicle's value and your family's health.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <Button size="lg" asChild>
                <a href="tel:7262071007" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call (726) 207-1007
                </a>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollAnimation>
            <p className="lead text-xl text-muted-foreground">
              If you're looking for the absolute best car interior cleaning San Antonio offers, you need to understand
              that professional interior work is a technical discipline focused on health, hygiene, and surface
              preservation.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <p className="mt-6 text-muted-foreground">
              At <strong>One Detail at a Time</strong>, located at 11692 Bricken Circle (78233), I treat every vehicle
              as a unique project, using my IDA certification to reverse years of environmental wear. Since starting
              this business in 2019 during a period of homelessness, I have dedicated my craft to giving back, donating
              10% of every sale to Junior Achievement of South Texas.
            </p>
          </ScrollAnimation>

          {/* Tiers Section */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">The Tiers of Interior Detailing</h2>
              <p className="mt-4 text-muted-foreground">
                Professional shops in San Antonio typically offer a tiered approach based on the vehicle's condition and
                the owner's goals. Understanding these tiers helps you select the right service level for your needs.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="my-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold">Foundation</h4>
                <p className="mb-2 text-sm text-primary">Express/Bronze</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Compressed air blowout</li>
                  <li>• Thorough vacuuming</li>
                  <li>• UV protectant application</li>
                  <li>• Surface wipe-down</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/50 bg-primary/5 p-6">
                <h4 className="mb-2 font-bold text-primary">Deep Remediation</h4>
                <p className="mb-2 text-sm text-primary">Premium/Silver</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Carpet shampooing</li>
                  <li>• Upholstery deep clean</li>
                  <li>• Leather conditioning</li>
                  <li>• Stain removal</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold">Restoration</h4>
                <p className="mb-2 text-sm text-primary">Executive/Gold</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Steam sterilization</li>
                  <li>• Hot-water extraction</li>
                  <li>• Ozone treatment</li>
                  <li>• Complete restoration</li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left">
            <div className="relative my-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/car-interior-cleaning-steam-san-antonio-detailing.jpg"
                alt="Professional steam sterilization and hot water extraction for interior deep cleaning at One Detail At A Time in San Antonio Texas"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* Surface Science */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Specialized Surface Science</h2>
              <p className="mt-4 text-muted-foreground">
                A comprehensive{" "}
                <Link href="/interior-detailing-san-antonio" className="font-medium text-primary hover:underline">
                  interior detailing
                </Link>{" "}
                guide must address the diversity of materials found in modern vehicles, from synthetic textiles to
                carbon fiber and genuine leather.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <h3 className="mt-8 text-2xl font-semibold">Material Preservation</h3>
            <p className="mt-4 text-muted-foreground">
              Standard detailing includes the use of leather conditioners and fabric protectants to keep materials
              flexible and prevent the fading or cracking caused by the intense San Antonio sun. Leather, in particular,
              can dry out and crack within 2-3 years without proper conditioning in our climate.
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <h3 className="mt-8 text-2xl font-semibold">Environmental Remediation</h3>
            <p className="mt-4 text-muted-foreground">
              In neighborhoods like Alamo Heights and Stone Oak, we focus on eliminating cedar pollen and abrasive
              street dust that settle into dashboards and vents during dry, breezy spring months. This seasonal
              contamination can trigger allergies and respiratory issues if not properly addressed.
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <p className="text-sm text-muted-foreground">
                <strong>Health Alert:</strong> Studies show that vehicle interiors can harbor more bacteria per square
                inch than a typical toilet seat. In San Antonio's humid climate, mold and mildew can develop in carpets
                and upholstery within weeks if moisture is present. Regular professional cleaning isn't just about
                aesthetics—it's about protecting your family's health.
              </p>
            </div>
          </ScrollAnimation>

          {/* Health and Odor */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Health and Odor Remediation</h2>
              <p className="mt-4 text-muted-foreground">
                Beyond aesthetics, interior detailing is critical for a healthy driving environment. The enclosed nature
                of vehicle cabins means that contaminants become concentrated, affecting air quality and comfort.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="relative my-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/ozone-treatment-odor-removal-car-interior-san-anto.jpg"
                alt="Professional ozone generator treatment for smoke and odor removal from vehicle interior at One Detail At A Time in San Antonio Texas"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="font-semibold">Ozone Treatment</h4>
                <p className="text-sm text-muted-foreground">
                  Converts O₂ into O₃ to neutralize organic odors and smoke at the molecular level. Must only be done in
                  an unoccupied vehicle with 2+ hours of ventilation afterward.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="font-semibold">Steam Sterilization</h4>
                <p className="text-sm text-muted-foreground">
                  High-temperature dry steam kills bacteria and dust mites thriving in South Texas humidity. This
                  chemical-free approach is safe for all interior surfaces.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="font-semibold">Pet Hair Removal</h4>
                <p className="text-sm text-muted-foreground">
                  Specialized tools like rubber brushes and pumice stones lift hairs trapped in fabric fibers that
                  standard vacuuming cannot remove.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Asset Management */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Asset Management and Resale Value</h2>
              <p className="mt-4 text-muted-foreground">
                Choosing a private professional detailer is an investment in your vehicle as a capital asset.
                Documenting these professional services can tangibly boost your vehicle's resale value, especially when
                integrated into official history reports. Buyers are willing to pay premium prices for vehicles with
                documented professional maintenance.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <p className="text-sm text-muted-foreground">
                <strong>Industry Standards:</strong> The{" "}
                <a
                  href="https://www.the-ida.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  International Detailing Association
                </a>{" "}
                provides certification standards for professional detailers, ensuring they understand proper chemical
                selection, material care, and safety protocols.
              </p>
            </div>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation>
            <div className="my-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 md:p-12">
              <h2 className="mb-4 text-2xl font-bold">Spotless Results, Community Impact</h2>
              <p className="mb-6 text-muted-foreground">
                At One Detail at a Time, I provide spotless results without the stress, ensuring your ride reflects
                perfection while we work together to support San Antonio's youth through Junior Achievement of South
                Texas.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="tel:7262071007" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call (726) 207-1007
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact" className="gap-2">
                    Schedule Interior Detailing
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* FAQ Section */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollAnimation>
        </div>
      </article>

      {/* Related Articles */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="mb-8 text-center text-3xl font-bold">Continue Reading</h2>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article, index) => (
              <ScrollAnimation key={article.slug} delay={index * 100}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
                >
                  <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
