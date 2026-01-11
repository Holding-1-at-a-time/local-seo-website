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
  title: "Professional Auto Detailing Guide | San Antonio TX | ODAAT1",
  description:
    "Complete guide to professional auto detailing in San Antonio. Learn the 4 stages: washing, paint correction, protection & interior care. IDA-certified expertise. Call (726) 207-1007.",
  openGraph: {
    title: "Professional Auto Detailing Guide | San Antonio TX",
    description: "Complete guide to professional auto detailing from San Antonio's IDA-certified experts.",
    url: "https://odaat1.com/articles/professional-auto-detailing-guide-san-antonio",
    type: "article",
    images: [
      {
        url: "/images/auto-detailing-guide-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Professional auto detailer performing paint correction at One Detail At A Time studio in San Antonio Texas",
      },
    ],
  },
  alternates: {
    canonical: "https://odaat1.com/articles/professional-auto-detailing-guide-san-antonio",
  },
}

const faqItems = [
  {
    question: "How long does a full professional detail take in San Antonio?",
    answer:
      "A comprehensive detail typically takes 4-8 hours for standard correction, while showroom-quality restoration can require 25-60 hours. At One Detail At A Time, we never rush the process—your vehicle receives the exact attention it needs for perfect results.",
  },
  {
    question: "What's the difference between a car wash and professional detailing?",
    answer:
      "A car wash removes surface dirt, while professional detailing is a multi-stage conservation process that includes decontamination, paint correction, protection application, and interior remediation. It's designed to reverse wear and preserve your vehicle's long-term value.",
  },
  {
    question: "How often should I get my car professionally detailed in Texas?",
    answer:
      "In San Antonio's harsh climate with intense UV, cedar pollen, and alkaline dust, we recommend professional detailing every 3-6 months for maintenance, with ceramic coating reapplication every 2-5 years depending on the product used.",
  },
  {
    question: "Is ceramic coating worth it in San Antonio's heat?",
    answer:
      "Absolutely. Ceramic coating provides 2-7 years of protection against UV damage, chemical etching from bird droppings, and the extreme heat that can fade and oxidize unprotected paint. It's one of the best investments for vehicle preservation in South Texas.",
  },
  {
    question: "What is IDA certification and why does it matter?",
    answer:
      "IDA (International Detailing Association) certification validates that a detailer has demonstrated knowledge of proper techniques, chemical safety, and ethical business practices. It ensures you're working with a trained professional, not someone who might damage your vehicle.",
  },
]

const relatedArticles = [
  {
    slug: "paint-correction-exterior-detailing-san-antonio",
    title: "The Science of Paint Correction",
    description: "Deep dive into correction techniques and levels",
  },
  {
    slug: "car-interior-cleaning-guide-san-antonio",
    title: "Interior Cleaning Guide",
    description: "Professional interior preservation methods",
  },
  {
    slug: "paint-decontamination-guide-san-antonio",
    title: "Paint Decontamination Essentials",
    description: "Why proper prep is critical for protection",
  },
]

export default function AutoDetailingGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleStructuredData
        title="Complete Guide to Professional Auto Detailing in San Antonio"
        description="Comprehensive guide covering the four stages of professional auto detailing: safe washing, paint correction, surface protection, and interior care."
        url="https://odaat1.com/articles/professional-auto-detailing-guide-san-antonio"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
        image="https://odaat1.com/images/auto-detailing-guide-hero.jpg"
        imageAlt="Professional auto detailer performing machine paint correction on vehicle hood at One Detail At A Time studio in San Antonio Texas"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/professional-auto-detailing-studio-san-antonio-tex.jpg"
            alt="Professional auto detailer performing machine paint correction on vehicle hood at One Detail At A Time studio in San Antonio Texas"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            <BreadcrumbNav
              items={[{ label: "Articles", href: "/articles" }, { label: "Professional Auto Detailing Guide" }]}
            />
            <ScrollAnimation>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Comprehensive Guide
              </span>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Your Complete Guide to Professional Auto Detailing in San Antonio
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
                Discover the sophisticated processes behind vehicle conservation and why professional detailing is
                essential for protecting your investment in South Texas.
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
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground">
                When searching for the best auto detailing in San Antonio, TX, understanding that professional detailing
                transcends a quick car wash is essential. It represents a sophisticated approach to vehicle
                conservation—one designed to reverse environmental damage and maintain long-term value and reliability.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <p className="mt-6 text-muted-foreground">
              At <strong>One Detail at a Time</strong>, located at 11692 Bricken Circle (78233), I combine IDA-certified
              expertise with a precision-driven philosophy that began when I opened my studio in 2019. By choosing a
              professional San Antonio car detailer, you're investing in advanced surface science that shields your
              vehicle from extreme heat and the unique environmental contaminants of South Texas.
            </p>
          </ScrollAnimation>

          {/* Stage 1 */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Stage 1: Safe Washing and Surface Decontamination</h2>
              <p className="mt-4 text-muted-foreground">
                The foundation of any high-quality detail begins with removing surface dirt and bonded contaminants
                without causing damage. This isn't your typical drive-through car wash—it's a methodical process that
                prepares the paint for restoration.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100} direction="left">
            <div className="relative my-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/two-bucket-wash-method-professional-auto-detailing.jpg"
                alt="Professional detailer using two bucket wash method with grit guards at One Detail At A Time in San Antonio Texas"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <h3 className="mt-8 text-2xl font-semibold">The Two-Bucket Method</h3>
            <p className="mt-4 text-muted-foreground">
              To minimize the risk of creating swirl marks and surface imperfections, professionals employ a two-bucket
              system: one bucket contains soap solution, while the second holds clean rinse water. This simple yet
              effective technique ensures that only clean tools touch your paintwork, preventing contamination from
              being dragged across delicate clear coat surfaces.
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <h3 className="mt-8 text-2xl font-semibold">Chemical Decontamination</h3>
            <p className="mt-4 text-muted-foreground">
              Specialized fallout removers dissolve jagged iron particles—primarily brake dust—that have bonded to paint
              and wheels. In San Antonio, where high-traffic corridors like I-10 generate significant brake dust
              accumulation, this step is non-negotiable for achieving a truly clean surface.
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <h3 className="mt-8 text-2xl font-semibold">Mechanical Decontamination</h3>
            <p className="mt-4 text-muted-foreground">
              A clay bar or clay mitt glides over the paint surface using generous amounts of lubricant to grab embedded
              industrial fallout, tree sap, and road tar that regular washing cannot remove. This process leaves the
              paint smooth as glass—a crucial preparation step before any{" "}
              <Link href="/san-antonio-paint-correction" className="font-medium text-primary hover:underline">
                paint correction
              </Link>{" "}
              work begins.
            </p>
          </ScrollAnimation>

          {/* Stage 2 */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Stage 2: Precision Paint Correction</h2>
              <p className="mt-4 text-muted-foreground">
                <Link href="/san-antonio-paint-correction" className="font-medium text-primary hover:underline">
                  Paint correction in San Antonio
                </Link>{" "}
                is a tiered technical process used to remove oxidation, scratches, and holograms from the clear coat.
                This isn't a one-size-fits-all service—different vehicles require different levels of intervention.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="relative my-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/paint-correction-polishing-machine-san-antonio-aut.jpg"
                alt="IDA-certified detailer using dual action polisher for paint correction on black vehicle at San Antonio detailing studio"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold text-primary">Level 1: Enhancement</h4>
                <p className="text-sm text-muted-foreground">
                  75-80% defect removal. 4-8 hours. Perfect for well-maintained daily drivers.
                </p>
              </div>
              <div className="rounded-lg border border-primary/50 bg-primary/5 p-6">
                <h4 className="mb-2 font-bold text-primary">Level 2: Standard</h4>
                <p className="text-sm text-muted-foreground">
                  85-90% clarity. 8-15 hours. Addresses moderate swirls and water etching.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold text-primary">Level 3: Showroom</h4>
                <p className="text-sm text-muted-foreground">
                  95%+ restoration. 25-60 hours. Concours-level mirror finish.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <p className="text-sm text-muted-foreground">
                <strong>Pro Tip:</strong> Many detailers will recommend skipping decontamination, but this is a critical
                mistake. Without proper clay bar treatment, the machine polisher will pick up embedded contaminants and
                drag them across your paint, creating new scratches. Always ensure your detailer follows the proper
                sequence outlined by the{" "}
                <a
                  href="https://www.the-ida.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  International Detailing Association
                </a>
                .
              </p>
            </div>
          </ScrollAnimation>

          {/* Stage 3 */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Stage 3: Advanced Surface Protection</h2>
              <p className="mt-4 text-muted-foreground">
                In our climate, protection is a technical necessity to block 99% of harmful UV rays and resist
                environmental hazards like cedar pollen, alkaline dust, and acid rain.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <h3 className="mt-8 text-2xl font-semibold">Ceramic and Graphene Coatings</h3>
            <p className="mt-4 text-muted-foreground">
              Our{" "}
              <Link href="/ceramic-coating-san-antonio" className="font-medium text-primary hover:underline">
                professional ceramic coating in San Antonio
              </Link>{" "}
              utilizes nanotechnology to create a rigid, glass-like layer (SiO₂) that defends against acid rain and bird
              droppings for 2–7 years. Graphene coatings offer superior heat dissipation—a critical benefit in
              100-degree Texas heat.
            </p>
          </ScrollAnimation>

          {/* Stage 4 */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Stage 4: Specialized Interior Remediation</h2>
              <p className="mt-4 text-muted-foreground">
                <Link href="/interior-detailing-san-antonio" className="font-medium text-primary hover:underline">
                  Professional interior cleaning in San Antonio
                </Link>{" "}
                must address high cabin temperatures that "bake in" odors and bacteria. Steam sterilization, hot-water
                extraction, and ozone treatment create a healthy driving environment.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left">
            <div className="relative my-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/interior-car-detailing-steam-cleaning-san-antonio-.jpg"
                alt="Professional steam sterilization and interior deep cleaning of vehicle cabin at One Detail At A Time studio in San Antonio"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation>
            <div className="my-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 md:p-12">
              <h2 className="mb-4 text-2xl font-bold">Supporting San Antonio's Future</h2>
              <p className="mb-6 text-muted-foreground">
                One Detail at a Time is more than just a car detailing service—it's a business with a purpose. I'm
                dedicated to investing in our community's future by donating 10% of all revenue to Junior Achievement of
                South Texas.
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
                    Get Free Estimate
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

      {/* Related Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="mb-8 text-center text-3xl font-bold">Explore Our Services</h2>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                href: "/ceramic-coating-san-antonio",
                title: "Ceramic Coating",
                desc: "2-7 year nanotechnology protection",
              },
              {
                href: "/san-antonio-paint-correction",
                title: "Paint Correction",
                desc: "Swirl & scratch removal",
              },
              {
                href: "/interior-detailing-san-antonio",
                title: "Interior Detailing",
                desc: "Deep cleaning & sanitization",
              },
              {
                href: "/san-antonio-exterior-hand-wash-sealant",
                title: "Hand Wash & Sealant",
                desc: "Premium exterior care",
              },
            ].map((service, index) => (
              <ScrollAnimation key={service.href} delay={index * 100}>
                <Link
                  href={service.href}
                  className="group block rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
                >
                  <h3 className="mb-2 font-semibold transition-colors group-hover:text-primary">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
