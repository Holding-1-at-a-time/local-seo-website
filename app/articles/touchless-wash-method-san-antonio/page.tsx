import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Clock, Calendar, MapPin, Award, CheckCircle2, ExternalLink } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { FAQAccordion } from "@/components/faq-accordion"
import { ArticleStructuredData } from "@/components/article-structured-data"

export const metadata: Metadata = {
  title: "Touchless Wash Method Guide | San Antonio TX | ODAAT1",
  description:
    "Learn how touchless car washing protects your paint from swirl marks. Expert guide from San Antonio's IDA-certified detailers. Call (726) 207-1007.",
  openGraph: {
    title: "Touchless Wash Method Guide | San Antonio Auto Detailing",
    description: "Discover how chemical washing protects your paint while delivering exceptional results.",
    url: "https://odaat1.com/articles/touchless-wash-method-san-antonio",
    type: "article",
    images: [
      {
        url: "https://odaat1.com/touchless-wash-san-antonio-guide-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Professional touchless car wash being performed at One Detail At A Time auto detailing studio in San Antonio Texas",
      },
    ],
  },
  alternates: {
    canonical: "https://odaat1.com/articles/touchless-wash-method-san-antonio",
  },
}

const faqs = [
  {
    question: "What is a touchless car wash?",
    answer:
      "A touchless wash relies entirely on chemical interaction and pressurized water rather than physical agitation to remove dirt. Specialized cleaning agents loosen contaminants on a molecular level, which are then safely rinsed away without any physical contact with your paint.",
  },
  {
    question: "Can touchless washing remove all dirt from my car?",
    answer:
      "Touchless methods excel at removing loose dirt, dust, and light contamination. However, stubborn 'traffic film'—that fine greyish layer from daily driving—may require mechanical washing for complete removal. Professional detailers often use touchless as a pre-wash stage.",
  },
  {
    question: "Is touchless washing safe for ceramic coatings?",
    answer:
      "Yes, touchless washing is ideal for maintaining ceramic-coated vehicles. The lack of physical contact prevents potential marring, and pH-neutral products won't degrade your coating. It's actually one of the recommended maintenance methods for protected surfaces.",
  },
  {
    question: "How does touchless washing compare to automatic car washes?",
    answer:
      "While automatic car washes advertise 'touchless' options, they often use aggressive, highly alkaline chemicals that can strip wax or damage sensitive trims. Professional touchless washing uses pH-balanced products applied with proper dwell times for safe, effective cleaning.",
  },
]

const relatedArticles = [
  {
    slug: "two-bucket-wash-method-san-antonio",
    title: "The Two-Bucket Wash Method",
    description: "The gold standard for safe mechanical washing",
    image: "/two-bucket-wash-san-antonio-guide-hero.jpg",
  },
  {
    slug: "rinseless-waterless-washing-san-antonio",
    title: "Rinseless & Waterless Washing",
    description: "Eco-friendly alternatives for water conservation",
    image: "/rinseless-wash-san-antonio-guide-hero.jpg",
  },
  {
    slug: "decontamination-guide-san-antonio",
    title: "Complete Decontamination Guide",
    description: "The essential steps before protection",
    image: "/decontamination-san-antonio-guide-hero.jpg",
  },
]

export default function TouchlessWashArticle() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleStructuredData
        title="The Touchless Wash Method: A Complete Guide for San Antonio Car Owners"
        description="Learn how touchless car washing protects your paint from swirl marks while delivering exceptional results. Expert guide from San Antonio's IDA-certified detailers."
        url="https://odaat1.com/articles/touchless-wash-method-san-antonio"
        datePublished="2024-01-08"
        dateModified="2024-01-08"
        image="https://odaat1.com/touchless-wash-san-antonio-guide-hero.jpg"
        imageAlt="Professional touchless car wash using foam cannon at One Detail At A Time auto detailing studio in San Antonio Texas"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <BreadcrumbNav items={[{ label: "Articles", href: "/articles" }, { label: "Touchless Wash Method" }]} />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <ScrollAnimation>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Washing Techniques
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />8 min read
                  </span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  The Touchless Wash Method
                  <span className="mt-2 block text-primary">Explained</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                  Discover how chemical washing technology protects your vehicle&apos;s clear coat from swirl marks
                  while delivering exceptional cleaning results—especially important in San Antonio&apos;s harsh
                  climate.
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
                    Jan 8, 2024
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
                  src="/touchless-wash-san-antonio-guide-hero.jpg"
                  alt="Professional touchless car wash using foam cannon and pressure washer at One Detail At A Time auto detailing studio in San Antonio Texas"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
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
                  When researching the best professional car detailing in San Antonio, understanding various washing
                  methods is essential for protecting your vehicle&apos;s clear coat and preserving its resale value.
                  The touchless wash method represents a fundamental shift in how we approach vehicle
                  cleaning—prioritizing surface science over mechanical scrubbing.
                </p>
              </div>
            </ScrollAnimation>

            {/* Section: What is Touchless Washing */}
            <ScrollAnimation delay={100}>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">What is Touchless Washing?</h2>
                <p className="mb-6 text-muted-foreground">
                  A touchless wash is a cleaning method that relies entirely on <strong>chemical interaction</strong>{" "}
                  and
                  <strong> pressurized water</strong> rather than physical agitation to remove dirt. In the world of
                  professional auto detailing, this is often referred to as &quot;chemical washing&quot; because the
                  cleaning agents do the work of loosening contaminants on a molecular level.
                </p>

                <div className="my-8 rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
                  <h3 className="mb-4 text-xl font-semibold">How It Works</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <strong className="text-foreground">Chemical Application:</strong>
                        <span className="text-muted-foreground">
                          {" "}
                          Specialized cleaning solutions (snowfoam or traffic film removers) are applied to the surface
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <strong className="text-foreground">Dwell Time:</strong>
                        <span className="text-muted-foreground">
                          {" "}
                          The product is allowed to &quot;dwell&quot; and weaken the bonds of grease and grime
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <strong className="text-foreground">Pressure Rinse:</strong>
                        <span className="text-muted-foreground">
                          {" "}
                          High-pressure water safely transports loosened contaminants away from the paint
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground">
                  The primary advantage of this method is the <strong>elimination of mechanical friction</strong>. By
                  avoiding physical contact with the paint, the risk of inducing swirl marks, scratches, or
                  micro-marring is significantly reduced—a critical consideration for San Antonio vehicles constantly
                  exposed to abrasive dust and road debris.
                </p>
              </section>
            </ScrollAnimation>

            {/* Section: Touchless vs Mechanical */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Touchless vs. Mechanical Washing</h2>
                <p className="mb-6 text-muted-foreground">
                  To achieve spotless results without surface damage, it&apos;s important to understand how touchless
                  methods compare to traditional mechanical approaches like the{" "}
                  <Link href="/san-antonio-exterior-hand-wash-sealant" className="text-primary hover:underline">
                    luxury hand wash
                  </Link>
                  .
                </p>

                <div className="my-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="mb-4 text-xl font-semibold text-primary">Touchless Washing</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                        Zero mechanical friction
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                        No risk of swirl marks from tools
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                        Ideal for maintained vehicles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
                        May struggle with heavy traffic film
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="mb-4 text-xl font-semibold">Mechanical Washing</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                        Removes stubborn contamination
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                        Complete dirt removal
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
                        Requires proper technique
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-yellow-500" />
                        Risk of damage if tools aren&apos;t clean
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  Many industry professionals note that while touchless methods remove a large portion of surface dust,
                  they often struggle with &quot;traffic film&quot;—that fine, greyish layer of bonded contaminants that
                  accumulates from daily driving on highways like I-10 and Loop 1604.
                </p>
              </section>
            </ScrollAnimation>

            {/* Section: Professional Application */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Touchless Methods in Professional Detailing</h2>
                <p className="mb-6 text-muted-foreground">
                  In a professional setting, touchless methods are most frequently used as a{" "}
                  <strong>pre-wash stage</strong> rather than a standalone cleaning solution. This hybrid approach
                  combines the safety of touchless with the effectiveness of mechanical cleaning.
                </p>

                <div className="relative my-8 overflow-hidden rounded-2xl">
                  <Image
                    src="/snowfoam-application-san-antonio-detailing.jpg"
                    alt="Snowfoam pre-wash application covering vehicle in thick foam at professional auto detailing studio in San Antonio Texas"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mb-4 text-xl font-semibold">The Professional Pre-Wash Sequence</h3>
                <ol className="mb-6 space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      1
                    </span>
                    <div>
                      <strong className="text-foreground">Snowfoam Application</strong>
                      <p className="text-muted-foreground">
                        A snowfoam lance covers the vehicle in a thick blanket of foam that loosens general road grime
                        without touching the paint.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      2
                    </span>
                    <div>
                      <strong className="text-foreground">Chemical Decontamination</strong>
                      <p className="text-muted-foreground">
                        Products like iron fallout removers are applied touchlessly to dissolve jagged metallic
                        particles (brake dust) bonded to the clear coat.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      3
                    </span>
                    <div>
                      <strong className="text-foreground">Pressure Rinse</strong>
                      <p className="text-muted-foreground">
                        High-pressure rinsing transports the loosened dirt safely to the ground before any mechanical
                        contact begins.
                      </p>
                    </div>
                  </li>
                </ol>

                <p className="text-muted-foreground">
                  This pre-wash process is essential preparation for services like{" "}
                  <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                    paint correction
                  </Link>{" "}
                  and{" "}
                  <Link href="/ceramic-coating-san-antonio" className="text-primary hover:underline">
                    professional ceramic coating
                  </Link>
                  , ensuring the surface is as clean as possible before any physical contact.
                </p>
              </section>
            </ScrollAnimation>

            {/* Section: San Antonio Recommendations */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Best Practices for San Antonio Vehicles</h2>
                <p className="mb-6 text-muted-foreground">
                  For the intense climate of South Texas, the most recommended approach for vehicle preservation is a
                  <strong> hybrid strategy</strong>. Our local conditions—extreme heat, alkaline dust, and cedar
                  pollen—require a methodical approach to washing.
                </p>

                <div className="my-8 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8">
                  <h3 className="mb-4 text-xl font-semibold">Recommended Hybrid Approach</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary">1.</span>
                      Touchless pre-cleaning with snowfoam and chemical decontamination
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary">2.</span>
                      Two-Bucket Method (2BM) with pH-neutral shampoo for mechanical cleaning
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary">3.</span>
                      Grit guards in both buckets to trap abrasive particles
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary">4.</span>
                      Fresh washmitt for each panel when needed
                    </li>
                  </ol>
                </div>

                <p className="text-muted-foreground">
                  Learn more about this complete approach in our guide to the{" "}
                  <Link href="/articles/two-bucket-wash-method-san-antonio" className="text-primary hover:underline">
                    Two-Bucket Wash Method
                  </Link>
                  .
                </p>
              </section>
            </ScrollAnimation>

            {/* External Authority Link */}
            <ScrollAnimation>
              <section className="mt-16">
                <div className="rounded-2xl border border-border bg-muted/30 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Industry Resources</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    For more technical information on washing methods and industry standards, consult these
                    authoritative sources:
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

            {/* FAQ Section */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} className="rounded-2xl border border-border bg-card p-6" />
              </section>
            </ScrollAnimation>

            {/* CTA Box */}
            <ScrollAnimation>
              <section className="mt-16">
                <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center md:p-12">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Experience Professional Care</h2>
                  <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                    At One Detail At A Time, we use the right washing method for your vehicle&apos;s specific condition.
                    Every service supports Junior Achievement of South Texas—10% of profits go directly to our
                    community&apos;s future leaders.
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
