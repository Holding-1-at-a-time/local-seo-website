import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Clock, Calendar, MapPin, Award, CheckCircle2, ExternalLink, Shield } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { FAQAccordion } from "@/components/faq-accordion"
import { ArticleStructuredData } from "@/components/article-structured-data"

export const metadata: Metadata = {
  title: "Two-Bucket Wash Method Guide | San Antonio TX | ODAAT1",
  description:
    "Master the two-bucket wash method—the gold standard for swirl-free car washing. Expert guide from San Antonio's IDA-certified detailers. Call (726) 207-1007.",
  openGraph: {
    title: "Two-Bucket Wash Method Guide | San Antonio Auto Detailing",
    description: "Learn why professional detailers trust the 2BM for safe, swirl-free vehicle washing.",
    url: "https://odaat1.com/articles/two-bucket-wash-method-san-antonio",
    type: "article",
  },
  alternates: {
    canonical: "https://odaat1.com/articles/two-bucket-wash-method-san-antonio",
  },
}

const faqs = [
  {
    question: "What is the Two-Bucket Wash Method?",
    answer:
      "The Two-Bucket Method (2BM) uses one bucket with soapy water and a second bucket with clean rinse water. After washing each section, you rinse your mitt in the clean water before returning to the soap bucket. This prevents reintroducing dirt to the vehicle's surface.",
  },
  {
    question: "Why do I need grit guards in my buckets?",
    answer:
      "Grit guards are specialized inserts that trap heavy particles at the bottom of each bucket. When you agitate your mitt against the guard, dirt falls below the grate, ensuring your wash tool stays clean and safe for use on your vehicle's delicate clear coat.",
  },
  {
    question: "Is the one-bucket method really that bad?",
    answer:
      "Yes. The one-bucket method is the most common but least recommended way to wash a car. It involves a single bucket where the dirty sponge is rinsed and reused, inevitably resulting in a tool full of dust and grit being rubbed over the paint, causing swirl marks.",
  },
  {
    question: "When should I use the Three-Bucket Method instead?",
    answer:
      "The 3BM adds a third bucket dedicated strictly to wheels and tires. This prevents highly abrasive brake dust from contaminating your main wash tools. It's recommended when your wheels are particularly dirty or if you want maximum paint safety.",
  },
]

const relatedArticles = [
  {
    slug: "garry-dean-wash-method-san-antonio",
    title: "The Garry Dean Wash Method",
    description: "Water-efficient luxury washing technique",
    image: "/garry-dean-wash-san-antonio-guide-hero.jpg",
  },
  {
    slug: "touchless-wash-method-san-antonio",
    title: "Touchless Wash Method",
    description: "Chemical washing for maximum paint safety",
    image: "/touchless-wash-san-antonio-guide-hero.jpg",
  },
  {
    slug: "ceramic-coating-protection-guide-san-antonio",
    title: "Ceramic Coating Guide",
    description: "Long-term protection for your investment",
    image: "/ceramic-coating-san-antonio-guide-hero.jpg",
  },
]

export default function TwoBucketWashArticle() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleStructuredData
        title="The Two-Bucket Wash Method: The Professional Standard"
        description="Master the two-bucket wash method—the gold standard for swirl-free car washing in San Antonio."
        url="https://odaat1.com/articles/two-bucket-wash-method-san-antonio"
        datePublished="2024-01-05"
        dateModified="2024-01-05"
        image="https://odaat1.com/two-bucket-wash-san-antonio-guide-hero.jpg"
        imageAlt="Two-bucket wash method setup with grit guards at One Detail At A Time professional auto detailing studio in San Antonio Texas"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <BreadcrumbNav items={[{ label: "Articles", href: "/articles" }, { label: "Two-Bucket Wash Method" }]} />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <ScrollAnimation>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <Shield className="h-3.5 w-3.5" />
                    Professional Standard
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />9 min read
                  </span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  The Two-Bucket
                  <span className="mt-2 block text-primary">Wash Method</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                  The gold standard for safe, swirl-free vehicle washing. Learn why IDA-certified professionals trust
                  the 2BM for protecting your vehicle&apos;s finish in San Antonio&apos;s demanding climate.
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
                    Jan 5, 2024
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
                  src="/two-bucket-wash-san-antonio-guide-hero.jpg"
                  alt="Professional two-bucket wash method setup with grit guards and premium wash mitt at One Detail At A Time auto detailing studio in San Antonio Texas"
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
                If you&apos;re looking for the absolute best auto detailing in San Antonio, understanding that your
                vehicle&apos;s journey toward a showroom finish begins with a clinically safe wash is essential. The
                Two-Bucket Method (2BM) is considered the most vital technique for vehicle preservation—a sophisticated
                form of conservation intended to reverse and prevent wear and tear on your car&apos;s surface while
                maintaining its long-term value.
              </p>
            </ScrollAnimation>

            {/* Section: Technical Foundation */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">The Technical Foundation</h2>
                <p className="mb-6 text-muted-foreground">
                  The Two-Bucket Method revolves around a simple but highly effective cycle of decontamination. The
                  setup requires:
                </p>

                <div className="my-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
                    <h3 className="mb-3 font-semibold text-primary">Wash Bucket</h3>
                    <p className="text-sm text-muted-foreground">
                      Filled with high-lubricity, pH-neutral car shampoo solution for cleaning
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="mb-3 font-semibold">Rinse Bucket</h3>
                    <p className="text-sm text-muted-foreground">
                      Filled with clean, fresh water for rinsing your wash mitt between panels
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
                  <h3 className="mb-4 text-xl font-semibold">The Wash Cycle</h3>
                  <ol className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        1
                      </span>
                      Submerge your soft washmitt into the soap bucket
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        2
                      </span>
                      Clean a panel of the vehicle with gentle, straight-line motions
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        3
                      </span>
                      <strong>Crucially:</strong> Rinse the dirty mitt in the clean water bucket
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        4
                      </span>
                      Return to the soap bucket and repeat
                    </li>
                  </ol>
                  <p className="mt-4 text-sm text-muted-foreground">
                    This cycle ensures dirt and grit particles removed from the paint are released into the rinse water
                    rather than being reintroduced to the soap—preventing you from washing with increasingly
                    contaminated water.
                  </p>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Swirl Prevention */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Swirl Mark Prevention & Grit Guards</h2>
                <p className="mb-6 text-muted-foreground">
                  The primary goal of the Two-Bucket Method is to minimize the risk of creating{" "}
                  <strong>swirl marks</strong>— fine hairline scratches that rob your paint of gloss and depth. In San
                  Antonio&apos;s dry and breezy spring months, abrasive street dust and cedar pollen gather on vehicle
                  surfaces; if dragged across the paintwork using improper techniques, they act like mild sandpaper.
                </p>

                <div className="my-8 rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                    <Shield className="h-5 w-5 text-primary" />
                    Grit Guard Technology
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    To enhance the safety of this method, professional detailers use <strong>grit guards</strong> at the
                    bottom of each bucket. These specialized inserts feature a raised grate pattern that:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      Traps heavy particles at the bottom of the container
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      Allows you to agitate your mitt against the grate to release dirt
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      Keeps contaminants below the water line, away from your clean mitt
                    </li>
                  </ul>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Method Comparison */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">2BM vs. Other Washing Methods</h2>
                <p className="mb-6 text-muted-foreground">
                  Understanding where the Two-Bucket Method fits within the larger landscape of{" "}
                  <Link href="/san-antonio-exterior-hand-wash-sealant" className="text-primary hover:underline">
                    luxury hand washes
                  </Link>{" "}
                  helps you see why it&apos;s the professional standard for{" "}
                  <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                    paint correction preparation
                  </Link>
                  .
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                    <h4 className="mb-2 font-semibold text-red-600">One-Bucket Method (Not Recommended)</h4>
                    <p className="text-sm text-muted-foreground">
                      The most common but least safe approach. A single bucket where the dirty sponge is rinsed and
                      reused inevitably results in a tool full of dust and grit being rubbed over the paint.
                    </p>
                  </div>

                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <h4 className="mb-2 font-semibold text-primary">Two-Bucket Method (2BM) - Recommended</h4>
                    <p className="text-sm text-muted-foreground">
                      The professional standard. Separate wash and rinse buckets with grit guards ensure your mitt stays
                      clean throughout the entire wash process.
                    </p>
                  </div>

                  <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                    <h4 className="mb-2 font-semibold text-green-600">Three-Bucket Method (3BM) - Maximum Safety</h4>
                    <p className="text-sm text-muted-foreground">
                      Adds a third dedicated bucket for wheels and tires. Prevents highly abrasive brake dust— common on
                      I-10 and Loop 1604—from cross-contaminating body panel wash tools.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-5">
                    <h4 className="mb-2 font-semibold">Garry Dean Method</h4>
                    <p className="text-sm text-muted-foreground">
                      A hybrid of waterless and rinseless washing using many pre-soaked towels. Highly efficient in
                      areas with water restrictions, but 2BM remains preferred for heavily contaminated vehicles.{" "}
                      <Link
                        href="/articles/garry-dean-wash-method-san-antonio"
                        className="text-primary hover:underline"
                      >
                        Learn more →
                      </Link>
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Professional Integration */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Integration into Professional Detailing</h2>
                <p className="mb-6 text-muted-foreground">
                  A truly spotless result requires the Two-Bucket Method as part of a multi-stage decontamination
                  sequence:
                </p>

                <div className="relative my-8 overflow-hidden rounded-2xl">
                  <Image
                    src="/professional-wash-sequence-san-antonio-detailing.jpg"
                    alt="Professional multi-stage wash sequence with snowfoam pre-wash at One Detail At A Time auto detailing studio in San Antonio Texas"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>

                <ol className="space-y-4">
                  <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold">Pre-Wash (Touchless)</h4>
                      <p className="text-sm text-muted-foreground">
                        Snowfoam lance applies a pre-wash that loosens dirt chemically before any physical contact
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">Two-Bucket Wash (Mechanical)</h4>
                      <p className="text-sm text-muted-foreground">
                        Safe mechanical cleaning using the 2BM technique with grit guards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold">Thorough Rinse</h4>
                      <p className="text-sm text-muted-foreground">
                        Remove soap residue and loosened dirt with pressurized water
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold">Safe Drying</h4>
                      <p className="text-sm text-muted-foreground">
                        High-pile microfiber drying towel or air blower to prevent water spots
                      </p>
                    </div>
                  </li>
                </ol>

                <p className="mt-6 text-muted-foreground">
                  This careful preparation is the only way to ensure a pure surface for the application of{" "}
                  <Link href="/ceramic-coating-san-antonio" className="text-primary hover:underline">
                    high-end ceramic coatings
                  </Link>{" "}
                  that San Antonio car owners seek.
                </p>
              </section>
            </ScrollAnimation>

            {/* External Links */}
            <ScrollAnimation>
              <section className="mt-16">
                <div className="rounded-2xl border border-border bg-muted/30 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Industry Standards</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Learn more about professional washing standards from industry authorities:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.the-ida.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      International Detailing Association
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
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Experience Professional Washing</h2>
                  <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                    At One Detail At A Time, every wash begins with IDA-certified techniques that protect your
                    investment. 10% of all profits support Junior Achievement of South Texas.
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
