import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Clock, Calendar, MapPin, Award, CheckCircle2, ExternalLink, Droplets } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { FAQAccordion } from "@/components/faq-accordion"
import { ArticleStructuredData } from "@/components/article-structured-data"

export const metadata: Metadata = {
  title: "Garry Dean Wash Method Guide | San Antonio TX | ODAAT1",
  description:
    "Master the Garry Dean wash method for water-efficient, swirl-free car washing. Expert guide from San Antonio's IDA-certified detailers. Call (726) 207-1007.",
  openGraph: {
    title: "Garry Dean Wash Method Guide | San Antonio Auto Detailing",
    description: "A water-efficient luxury wash technique perfect for San Antonio's eco-conscious car owners.",
    url: "https://odaat1.com/articles/garry-dean-wash-method-san-antonio",
    type: "article",
  },
  alternates: {
    canonical: "https://odaat1.com/articles/garry-dean-wash-method-san-antonio",
  },
}

const faqs = [
  {
    question: "What is the Garry Dean Wash Method?",
    answer:
      "The Garry Dean Method is a specialized hybrid between rinseless and waterless washing developed by Garry Dean of Detail Juice. It uses a single bucket filled with pre-soaked microfiber towels, where each towel is used only once per panel and then discarded, eliminating cross-contamination.",
  },
  {
    question: "How many towels do I need for the Garry Dean Method?",
    answer:
      "You'll need between 20 microfiber towels for a small sedan and up to 60 for a large SUV. Each towel is used only once per panel, ensuring dirt is never reintroduced to the clean solution or the vehicle's surface.",
  },
  {
    question: "Can I use the Garry Dean Method in San Antonio's hot weather?",
    answer:
      "Yes! This method is actually ideal for San Antonio's heat because you work one panel at a time with a soaking wet towel, which helps prevent premature drying. The key is to dry each panel immediately after cleaning.",
  },
  {
    question: "Is this method safe for vehicles with ceramic coatings?",
    answer:
      "Absolutely. The Garry Dean Method is excellent for maintaining ceramic-coated vehicles because it minimizes friction and uses residue-free rinseless products. It's one of the safest maintenance washing methods available.",
  },
]

const relatedArticles = [
  {
    slug: "rinseless-waterless-washing-san-antonio",
    title: "Rinseless & Waterless Washing",
    description: "Explore more eco-friendly washing alternatives",
    image: "/rinseless-wash-san-antonio-guide-hero.jpg",
  },
  {
    slug: "two-bucket-wash-method-san-antonio",
    title: "The Two-Bucket Wash Method",
    description: "The traditional gold standard for safe washing",
    image: "/two-bucket-wash-san-antonio-guide-hero.jpg",
  },
  {
    slug: "ceramic-coating-protection-guide-san-antonio",
    title: "Ceramic Coating Guide",
    description: "Protect your investment with nanotechnology",
    image: "/ceramic-coating-san-antonio-guide-hero.jpg",
  },
]

export default function GarryDeanWashArticle() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleStructuredData
        title="The Garry Dean Wash Method: Water-Efficient Luxury Washing"
        description="Master the Garry Dean wash method for water-efficient, swirl-free car washing in San Antonio."
        url="https://odaat1.com/articles/garry-dean-wash-method-san-antonio"
        datePublished="2024-01-06"
        dateModified="2024-01-06"
        image="https://odaat1.com/garry-dean-wash-san-antonio-guide-hero.jpg"
        imageAlt="Garry Dean wash method demonstration with microfiber towels at One Detail At A Time auto detailing studio San Antonio Texas"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <BreadcrumbNav items={[{ label: "Articles", href: "/articles" }, { label: "Garry Dean Wash Method" }]} />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <ScrollAnimation>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <Droplets className="h-3.5 w-3.5" />
                    Eco-Friendly Washing
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />9 min read
                  </span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  The Garry Dean
                  <span className="mt-2 block text-primary">Wash Method</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                  A revolutionary water-efficient washing technique that combines the safety of rinseless washing with
                  luxury-level results—perfect for San Antonio&apos;s eco-conscious car enthusiasts.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <div className="mb-8 flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    San Antonio, TX
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
                    <Award className="h-4 w-4 text-primary" />
                    IDA Certified
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
                    <Calendar className="h-4 w-4 text-primary" />
                    Jan 6, 2024
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={400}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="gap-2" asChild>
                    <a href="tel:7262071007">
                      <Phone className="h-5 w-5" />
                      Call (726) 207-1007
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                    <Link href="/contact">
                      Get Free Estimate
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={200} direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl lg:aspect-square">
                <Image
                  src="/garry-dean-wash-san-antonio-guide-hero.jpg"
                  alt="Garry Dean wash method being performed with premium microfiber towels at One Detail At A Time professional detailing studio in San Antonio Texas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Introduction */}
            <ScrollAnimation>
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground">
                  When searching for a{" "}
                  <Link href="/san-antonio-exterior-hand-wash-sealant" className="text-primary hover:underline">
                    luxury hand wash in San Antonio
                  </Link>
                  , the most critical factor is ensuring your vehicle is cleaned using methods that prioritize paint
                  preservation and surface safety. The Garry Dean Method represents a high-efficiency evolution of
                  traditional washing techniques, specifically designed to deliver spotless results without the stress
                  of inducing swirl marks or wasting water.
                </p>
              </div>
            </ScrollAnimation>

            {/* Section: Understanding the Method */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Understanding the Garry Dean Method</h2>
                <p className="mb-6 text-muted-foreground">
                  The Garry Dean Wash Method was developed by Garry Dean, owner of Detail Juice, as a specialized hybrid
                  between rinseless and waterless washing. For mobile detailing in SATX, this method is highly valued
                  because it significantly reduces water usage and mess while maintaining a very low risk of paint
                  damage.
                </p>

                <div className="my-8 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    The One-Towel-Per-Panel Philosophy
                  </h3>
                  <p className="text-muted-foreground">
                    Unlike a standard one-bucket wash—which is the least recommended method because it allows dirt to be
                    reintroduced to the paint—the Garry Dean Method relies on using each cleaning towel only once. This
                    ensures that once a tool picks up road grime or dust, it never touches the vehicle again during that
                    session.
                  </p>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Required Tools */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Required Tools and Setup</h2>
                <p className="mb-6 text-muted-foreground">
                  To perform this eco-friendly car wash correctly, you need a specific arsenal of quality materials:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h4 className="mb-2 font-semibold">Large Bucket</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to hold the washing solution and pre-soak all microfiber towels
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h4 className="mb-2 font-semibold">Premium Microfiber Towels</h4>
                    <p className="text-sm text-muted-foreground">20-60 high-quality towels depending on vehicle size</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h4 className="mb-2 font-semibold">Rinseless Wash Shampoo</h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized lubricant that encapsulates dirt particles
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h4 className="mb-2 font-semibold">Pre-soak Spray</h4>
                    <p className="text-sm text-muted-foreground">
                      Quick Detailer or diluted rinseless wash for initial lubrication
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5 md:col-span-2">
                    <h4 className="mb-2 font-semibold">Purified Water</h4>
                    <p className="text-sm text-muted-foreground">
                      Using distilled or demineralized water eliminates the risk of hard water spots—common in San
                      Antonio&apos;s mineral-rich water supply
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Step-by-Step Process */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">The Step-by-Step Washing Process</h2>
                <p className="mb-6 text-muted-foreground">
                  The technical execution of this method is what sets it apart from a typical car wash in San Antonio:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      1
                    </span>
                    <div>
                      <h4 className="mb-1 font-semibold">Preparation</h4>
                      <p className="text-sm text-muted-foreground">
                        Fill the bucket with water and rinseless wash solution, then submerge all your microfiber towels
                        in the mixture until fully saturated.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      2
                    </span>
                    <div>
                      <h4 className="mb-1 font-semibold">Pre-treatment</h4>
                      <p className="text-sm text-muted-foreground">
                        Spray the panel with your pre-soak product to begin loosening surface contaminants before any
                        physical contact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      3
                    </span>
                    <div>
                      <h4 className="mb-1 font-semibold">The Safe Wipe</h4>
                      <p className="text-sm text-muted-foreground">
                        Take a soaking wet towel from the bucket—do not wring it out—and gently wipe the panel without
                        applying pressure. Let the solution do the work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      4
                    </span>
                    <div>
                      <h4 className="mb-1 font-semibold">The Discard</h4>
                      <p className="text-sm text-muted-foreground">
                        Once you&apos;ve cleaned a panel, discard the towel into a laundry bin. Never put a used towel
                        back into the clean solution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      5
                    </span>
                    <div>
                      <h4 className="mb-1 font-semibold">Immediate Drying</h4>
                      <p className="text-sm text-muted-foreground">
                        Use a clean, dry microfiber towel to buff the area to a shine immediately—critical in San
                        Antonio&apos;s heat to prevent water spotting.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Pros and Cons */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Pros and Cons</h2>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      Benefits
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        <strong>Water Conservation:</strong> Ideal during San Antonio water restrictions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        <strong>Mobility:</strong> No pressurized water source needed—perfect for apartments
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        <strong>Hot Weather Friendly:</strong> Works well in direct sunlight when done panel-by-panel
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                        <strong>Swirl-Free Results:</strong> Eliminates cross-contamination risk
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-yellow-600">Limitations</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-500" />
                        <strong>Not for Heavy Soil:</strong> Vehicles with thick mud or caked contamination need a
                        traditional{" "}
                        <Link
                          href="/articles/two-bucket-wash-method-san-antonio"
                          className="text-primary hover:underline"
                        >
                          two-bucket wash
                        </Link>{" "}
                        first
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-500" />
                        <strong>Towel Investment:</strong> Requires significantly more towels than traditional methods
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-500" />
                        <strong>Laundry Workload:</strong> More microfiber care and washing after each detail
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Perfect For */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Ideal Applications</h2>
                <p className="mb-6 text-muted-foreground">
                  The Garry Dean Method excels in specific scenarios that are common for San Antonio car owners:
                </p>

                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    Maintaining vehicles with{" "}
                    <Link href="/ceramic-coating-san-antonio" className="text-primary hover:underline">
                      professional ceramic coating
                    </Link>{" "}
                    where surface safety is paramount
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    Quick maintenance washes between full details
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    Apartment or condo living without hose access
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    Preserving results after{" "}
                    <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                      paint correction
                    </Link>
                  </li>
                </ul>
              </section>
            </ScrollAnimation>

            {/* External Links */}
            <ScrollAnimation>
              <section className="mt-16">
                <div className="rounded-2xl border border-border bg-muted/30 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Learn More</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    For additional information on rinseless washing techniques and product recommendations:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.detailingwiki.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Detailing Wiki
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="https://www.the-ida.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      IDA Standards
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* FAQ Section */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} className="rounded-2xl border border-border bg-card p-6" />
              </section>
            </ScrollAnimation>

            {/* CTA */}
            <ScrollAnimation>
              <section className="mt-16">
                <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center md:p-12">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Professional Washing Services</h2>
                  <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                    Whether your vehicle needs a Garry Dean rinseless wash or a full decontamination detail, One Detail
                    At A Time delivers IDA-certified results while supporting Junior Achievement of South Texas.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="gap-2" asChild>
                      <a href="tel:7262071007">
                        <Phone className="h-5 w-5" />
                        Call (726) 207-1007
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                      <Link href="/contact">
                        Schedule Service
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </ScrollAnimation>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="mb-12 text-center text-3xl font-bold">Related Articles</h2>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            {relatedArticles.map((article, index) => (
              <ScrollAnimation key={article.slug} delay={index * 100}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={`${article.title} - Auto detailing guide from One Detail At A Time San Antonio`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{article.description}</p>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
