import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Clock, Calendar, MapPin, Award, CheckCircle2, ExternalLink, Leaf } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { FAQAccordion } from "@/components/faq-accordion"
import { ArticleStructuredData } from "@/components/article-structured-data"

export const metadata: Metadata = {
  title: "Rinseless & Waterless Washing Guide | San Antonio TX | ODAAT1",
  description:
    "Discover eco-friendly rinseless and waterless car washing techniques ideal for San Antonio's water conservation needs. Call (726) 207-1007.",
  openGraph: {
    title: "Rinseless & Waterless Washing Guide | San Antonio Auto Detailing",
    description: "Eco-friendly washing techniques ideal for water conservation and mobile detailing.",
    url: "https://odaat1.com/articles/rinseless-waterless-washing-san-antonio",
    type: "article",
  },
  alternates: {
    canonical: "https://odaat1.com/articles/rinseless-waterless-washing-san-antonio",
  },
}

const faqs = [
  {
    question: "What is the difference between rinseless and waterless washing?",
    answer:
      "Rinseless washing uses a small amount of water mixed with a specialized solution—you wash and dry without a final rinse. Waterless washing uses no water at all, relying on high-lubricity spray products that encapsulate dirt for safe removal with microfiber towels.",
  },
  {
    question: "Are these methods safe for my paint?",
    answer:
      "Yes, when performed correctly with quality products and proper technique. The key is using premium long-fiber microfiber towels, never applying pressure, and ensuring the vehicle isn't heavily soiled. For caked mud or heavy contamination, a traditional wash is recommended first.",
  },
  {
    question: "Can I use waterless wash on a ceramic-coated car?",
    answer:
      "Absolutely. In fact, many waterless products are specifically formulated for coated vehicles, leaving no residue that could interfere with the coating's hydrophobic properties. It's one of the safest maintenance methods for ceramic coatings.",
  },
  {
    question: "How much water does rinseless washing save?",
    answer:
      "A traditional wash uses 50-100 gallons of water. Rinseless washing uses only 1-2 gallons for the entire vehicle. This makes it ideal during San Antonio water restrictions and significantly reduces environmental impact.",
  },
]

const relatedArticles = [
  {
    slug: "garry-dean-wash-method-san-antonio",
    title: "The Garry Dean Wash Method",
    description: "The ultimate rinseless technique",
    image: "/garry-dean-wash-san-antonio-guide-hero.jpg",
  },
  {
    slug: "two-bucket-wash-method-san-antonio",
    title: "Two-Bucket Wash Method",
    description: "Traditional gold standard washing",
    image: "/two-bucket-wash-san-antonio-guide-hero.jpg",
  },
  {
    slug: "ceramic-coating-protection-guide-san-antonio",
    title: "Ceramic Coating Guide",
    description: "Long-term paint protection",
    image: "/ceramic-coating-san-antonio-guide-hero.jpg",
  },
]

export default function RinselessWaterlessArticle() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleStructuredData
        title="Rinseless & Waterless Washing: Eco-Friendly Car Care"
        description="Discover eco-friendly rinseless and waterless car washing techniques ideal for San Antonio's water conservation needs."
        url="https://odaat1.com/articles/rinseless-waterless-washing-san-antonio"
        datePublished="2024-01-04"
        dateModified="2024-01-04"
        image="https://odaat1.com/rinseless-wash-san-antonio-guide-hero.jpg"
        imageAlt="Eco-friendly rinseless car wash being performed at One Detail At A Time professional auto detailing studio in San Antonio Texas"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <BreadcrumbNav
            items={[{ label: "Articles", href: "/articles" }, { label: "Rinseless & Waterless Washing" }]}
          />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <ScrollAnimation>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-600">
                    <Leaf className="h-3.5 w-3.5" />
                    Eco-Friendly
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    10 min read
                  </span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Rinseless & Waterless
                  <span className="mt-2 block text-primary">Washing Guide</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                  Eco-conscious car care solutions perfect for San Antonio&apos;s water conservation needs. Learn
                  advanced techniques that protect your paint while preserving our Texas resources.
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
                    Jan 4, 2024
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
                  src="/rinseless-wash-san-antonio-guide-hero.jpg"
                  alt="Eco-friendly rinseless car washing technique being performed at One Detail At A Time professional auto detailing studio in San Antonio Texas"
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
              <p className="text-xl text-muted-foreground">
                As an IDA-certified detailer in San Antonio, I understand that maintaining a vehicle in our unique
                climate requires more than just a standard hose-down. Whether you&apos;re looking for{" "}
                <Link href="/san-antonio-exterior-hand-wash-sealant" className="text-primary hover:underline">
                  luxury hand wash services
                </Link>{" "}
                or need to maintain your{" "}
                <Link href="/ceramic-coating-san-antonio" className="text-primary hover:underline">
                  ceramic coating
                </Link>
                , understanding advanced washing methods like rinseless and waterless techniques is essential for
                protecting your investment.
              </p>
            </ScrollAnimation>

            {/* Section: Rinseless Washing */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">The Role of Rinseless Washing</h2>
                <p className="mb-6 text-muted-foreground">
                  A rinseless wash is a specialized technique that allows for cleaning a vehicle without the need for a
                  final rinse—particularly beneficial in regions facing water restrictions or for detailers operating in
                  a mobile capacity.
                </p>

                <div className="my-8 rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h3 className="mb-4 text-xl font-semibold">Process & Technical Efficiency</h3>
                  <p className="mb-4 text-muted-foreground">
                    The method typically involves using two buckets: one for the rinseless wash product (diluted at a
                    ratio of 1:200 to 1:250) and one for clean rinse water. The vehicle is cleaned one panel at a time,
                    followed immediately by drying with a clean microfiber towel.
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl bg-green-500/5 p-4">
                      <h4 className="mb-2 font-semibold text-green-600">Benefits</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                          Uses only 1-2 gallons vs. 50-100 for traditional
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                          Prevents chemical runoff into city drains
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                          Saves significant time—no rinsing stages
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-xl bg-yellow-500/5 p-4">
                      <h4 className="mb-2 font-semibold text-yellow-600">Limitations</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500" />
                          Best for moderately contaminated surfaces
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500" />
                          Not suitable for heavy mud or caked grime
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500" />
                          Increases swirl risk if used improperly
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Garry Dean Method */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">The Garry Dean Method: A Hybrid Approach</h2>
                <p className="mb-6 text-muted-foreground">
                  The{" "}
                  <Link href="/articles/garry-dean-wash-method-san-antonio" className="text-primary hover:underline">
                    Garry Dean Method
                  </Link>{" "}
                  bridges the gap between waterless and rinseless washing while maximizing paint safety.
                </p>

                <div className="my-8 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8">
                  <h3 className="mb-4 text-xl font-semibold">Towel-Based System</h3>
                  <p className="mb-4 text-muted-foreground">
                    This process utilizes a bucket filled with 20-60 pre-soaked microfiber towels. Each towel is used
                    only once per panel and then discarded, ensuring dirt is never reintroduced to the clean solution.
                  </p>
                  <p className="text-muted-foreground">
                    Because this method eliminates cross-contamination risk, it&apos;s highly effective at minimizing
                    swirls—making it ideal for maintaining high-clarity finishes and{" "}
                    <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                      paint correction
                    </Link>{" "}
                    results.
                  </p>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Waterless Washing */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Waterless Washing: Maximum Convenience</h2>
                <p className="mb-6 text-muted-foreground">
                  Waterless car detailing is a technique where no water is used to clean the surface, relying instead on
                  high-lubricity spray products designed specifically for safe dirt removal.
                </p>

                <div className="my-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h4 className="mb-3 font-semibold">How It Works</h4>
                    <p className="text-sm text-muted-foreground">
                      Waterless products contain high lubricating agents and cleaning surfactants that encapsulate dirt
                      particles, allowing them to be wiped away safely with microfiber. Some formulas leave protective
                      residue while others are residue-free for ceramic-coated vehicles.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h4 className="mb-3 font-semibold">Best Applications</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        Parking lots and garages without water
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        Car shows where water is prohibited
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        Quick touch-ups between full details
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                  <h4 className="mb-2 font-semibold text-yellow-600">Critical Safety Note</h4>
                  <p className="text-sm text-muted-foreground">
                    The primary risk of waterless washing is that all contamination is &quot;rubbed around&quot; by the
                    towel during the initial wipe. To prevent damage, always use premium long-fiber microfiber towels
                    and <strong>never apply pressure</strong> while wiping.
                  </p>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Context Within Traditional Methods */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Context Within Traditional Washing</h2>
                <p className="mb-6 text-muted-foreground">
                  While rinseless and waterless methods offer efficiency, they&apos;re part of a broader spectrum that
                  includes the{" "}
                  <Link href="/articles/two-bucket-wash-method-san-antonio" className="text-primary hover:underline">
                    Two-Bucket Method (2BM)
                  </Link>{" "}
                  and Three-Bucket Method (3BM).
                </p>

                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <strong className="text-foreground">Safety Standards:</strong> Traditional methods with grit
                      guards remain the gold standard for heavily soiled vehicles or as foundation for Level 3 paint
                      correction
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <strong className="text-foreground">Pre-Wash Synergy:</strong> Professional detailers often use
                      snowfoam pre-wash to loosen contaminants before any physical contact
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <strong className="text-foreground">Hydrophobicity Science:</strong> These methods respect your
                      protective layer (LSP)—whether carnauba wax, silica sealant, or graphene coating—preserving
                      beading and sheeting effects
                    </div>
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
                    For additional information on eco-friendly detailing techniques:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.the-ida.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      IDA Standards
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="https://www.detailingwiki.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      Detailing Wiki
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* FAQ */}
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
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Eco-Conscious Detailing</h2>
                  <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                    At One Detail At A Time, we select the right method for your vehicle while conserving resources.
                    Every service supports Junior Achievement of South Texas—10% of profits go to our community.
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
