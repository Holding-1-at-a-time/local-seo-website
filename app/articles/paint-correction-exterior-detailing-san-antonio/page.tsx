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
  title: "Paint Correction Guide | San Antonio TX | ODAAT1",
  description:
    "Expert paint correction guide: swirl removal, scratch repair & oxidation restoration. Learn correction tiers for San Antonio vehicles. Call (726) 207-1007.",
  openGraph: {
    title: "Paint Correction & Exterior Detailing | San Antonio TX",
    description: "Expert paint correction restores your vehicle's finish in San Antonio.",
    url: "https://odaat1.com/articles/paint-correction-exterior-detailing-san-antonio",
    type: "article",
  },
  alternates: {
    canonical: "https://odaat1.com/articles/paint-correction-exterior-detailing-san-antonio",
  },
}

const faqItems = [
  {
    question: "What causes swirl marks on my paint?",
    answer:
      "Swirl marks are caused by improper washing techniques, automatic car washes with abrasive brushes, dirty towels, and even wind-blown dust during drying. In San Antonio's dusty environment, swirls accumulate faster than in other climates.",
  },
  {
    question: "Can all scratches be removed with paint correction?",
    answer:
      "Paint correction can remove scratches that are in the clear coat layer. If a scratch has penetrated to the base coat or primer (often appears white), it requires touch-up paint rather than correction. We assess every vehicle before quoting to set proper expectations.",
  },
  {
    question: "How long does paint correction last?",
    answer:
      "The correction itself is permanent—the defects are physically removed. However, without protection, new defects will accumulate. That's why we always recommend ceramic coating after correction to protect your investment for years.",
  },
  {
    question: "What's the difference between DA and rotary polishers?",
    answer:
      "Dual Action (DA) polishers use a random orbit motion that's safer for beginners and finishing work. Rotary polishers provide more cutting power for severe defects but require expert skill to avoid burning through clear coat.",
  },
  {
    question: "How much clear coat is removed during correction?",
    answer:
      "Professional correction removes 1-3 microns of clear coat per pass (clear coat is typically 40-60 microns). We use paint depth gauges to ensure we never compromise your paint's integrity. Multiple full corrections are possible on most vehicles.",
  },
]

const relatedArticles = [
  {
    slug: "professional-auto-detailing-guide-san-antonio",
    title: "Complete Detailing Guide",
    description: "All four stages of professional detailing",
  },
  {
    slug: "ceramic-coating-protection-guide-san-antonio",
    title: "Ceramic Coating Guide",
    description: "Protect your corrected paint for years",
  },
  {
    slug: "paint-decontamination-guide-san-antonio",
    title: "Decontamination Guide",
    description: "Essential prep before correction",
  },
]

export default function PaintCorrectionArticlePage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleStructuredData
        title="The Science of Paint Correction in San Antonio Exterior Detailing"
        description="Understanding paint correction tiers, polishing techniques, and how professional detailing restores your vehicle's finish."
        url="https://odaat1.com/articles/paint-correction-exterior-detailing-san-antonio"
        datePublished="2024-01-10"
        dateModified="2024-01-10"
        image="https://odaat1.com/paint-correction-polishing-san-antonio-auto-detail.jpg"
        imageAlt="IDA-certified detailer performing multi-stage paint correction with dual action polisher at One Detail At A Time in San Antonio Texas"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/paint-correction-before-after-san-antonio-auto-deta.jpg"
            alt="Before and after paint correction showing swirl mark removal at One Detail At A Time professional auto detailing in San Antonio Texas"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            <BreadcrumbNav items={[{ label: "Articles", href: "/articles" }, { label: "Paint Correction Guide" }]} />
            <ScrollAnimation>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Paint Care
              </span>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                The Science of Paint Correction in San Antonio
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
                Understanding how professional paint correction fits within comprehensive exterior detailing is vital
                for long-term asset preservation.
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
              For vehicle owners seeking high-quality auto detailing in San Antonio, TX, understanding the role of paint
              correction within the broader scope of exterior detailing is vital for long-term asset preservation.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <p className="mt-6 text-muted-foreground">
              At <strong>One Detail at a Time</strong>, located at 11692 Bricken Circle (78233), I apply my IDA
              certification and extensive experience to ensure every vehicle is treated as a conservation project
              intended to maintain its value and reliability. Since starting this journey in 2019 while experiencing
              homelessness, my mission has been to provide exceptional results while investing 10% of all revenue into
              Junior Achievement of South Texas.
            </p>
          </ScrollAnimation>

          {/* Decontamination Section */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">The Foundation: Decontamination Before Correction</h2>
              <p className="mt-4 text-muted-foreground">
                Professional{" "}
                <Link href="/san-antonio-paint-correction" className="font-medium text-primary hover:underline">
                  paint correction in San Antonio
                </Link>{" "}
                cannot begin until the surface is clinically clean. This is the single most important step that
                separates professional results from amateur attempts.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left">
            <div className="relative my-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/paint-correction-polishing-san-antonio-auto-detail.jpg"
                alt="Professional detailer using dual action polisher for swirl mark removal at One Detail At A Time studio in San Antonio Texas"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 space-y-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="font-semibold">Chemical Decontamination</h4>
                <p className="text-sm text-muted-foreground">
                  Fallout removers dissolve iron particles—primarily brake dust—that have bonded to the clear coat. In
                  San Antonio's high-traffic environment, vehicles accumulate significant metallic contamination.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="font-semibold">Mechanical Decontamination</h4>
                <p className="text-sm text-muted-foreground">
                  Clay bar treatment pulls out remaining impurities, such as tree sap and industrial fallout, leaving
                  the paint as smooth as glass.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="font-semibold">Surface Prep</h4>
                <p className="text-sm text-muted-foreground">
                  An Isopropyl Alcohol (IPA) panel wipe removes all oily residue, revealing the true state of the paint
                  for assessment.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Defining Paint Correction */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Defining Paint Correction</h2>
              <p className="mt-4 text-muted-foreground">
                Paint correction is the specialized process of removing defects from a car's clear coat, such as swirl
                marks, scratches, and oxidation. Unlike a standard{" "}
                <Link
                  href="/san-antonio-exterior-hand-wash-sealant"
                  className="font-medium text-primary hover:underline"
                >
                  wash and sealant service
                </Link>
                , correction is a labor-intensive technical field focused on surface science and polymer chemistry.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <p className="text-sm text-muted-foreground">
                <strong>Common Mistake:</strong> Many vehicle owners attempt DIY polishing without understanding paint
                thickness or proper technique. Clear coat is only 1.5-2.5 mils thick—about the width of a human hair.
                Aggressive polishing without a paint depth gauge can cause "burn through," permanently damaging your
                vehicle's finish. Trust{" "}
                <a
                  href="https://www.the-ida.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  IDA-certified professionals
                </a>{" "}
                who use proper measurement tools and techniques.
              </p>
            </div>
          </ScrollAnimation>

          {/* Correction Tiers */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">The Tiers of Correction in San Antonio</h2>
              <p className="mt-4 text-muted-foreground">
                Because San Antonio's intense UV radiation acts as a catalyst for oxidation, professional shops
                typically offer tiered services based on the percentage of defect removal required.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="my-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold text-primary">Level 1: Enhancement</h4>
                <p className="mb-2 text-2xl font-bold">75-80%</p>
                <p className="mb-4 text-sm text-muted-foreground">Defect Removal</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Single-stage polish</li>
                  <li>• 4-8 hours labor</li>
                  <li>• Daily drivers</li>
                  <li>• Gloss restoration</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/50 bg-primary/5 p-6">
                <h4 className="mb-2 font-bold text-primary">Level 2: Standard</h4>
                <p className="mb-2 text-2xl font-bold">85-90%</p>
                <p className="mb-4 text-sm text-muted-foreground">Defect Removal</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Two-step process</li>
                  <li>• 8-15 hours labor</li>
                  <li>• Moderate defects</li>
                  <li>• Water etching</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold text-primary">Level 3: Showroom</h4>
                <p className="mb-2 text-2xl font-bold">95%+</p>
                <p className="mb-4 text-sm text-muted-foreground">Defect Removal</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Multi-stage restoration</li>
                  <li>• 25-60 hours labor</li>
                  <li>• Concours quality</li>
                  <li>• Mirror finish</li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          {/* Tools Section */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Precision Tools: DA and Rotary Polishers</h2>
              <p className="mt-4 text-muted-foreground">
                The process utilizes two primary types of machinery, each with specific applications and safety
                considerations.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="relative my-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/dual-action-rotary-polisher-paint-correction-san-a.jpg"
                alt="Professional dual action and rotary polisher equipment for paint correction at One Detail At A Time auto detailing in San Antonio Texas"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold">Dual Action (DA) Polisher</h4>
                <p className="text-sm text-muted-foreground">
                  The industry standard for finishing and safety. The random orbit motion generates less heat and
                  minimizes the risk of paint burns, making it ideal for beginners and finishing work.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold">Rotary Polisher</h4>
                <p className="text-sm text-muted-foreground">
                  Provides higher cutting speed for heavy correction of deep scratches or severe oxidation. Requires
                  expert skill to avoid burning through clear coat on edges and body lines.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Protection Section */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">The Role of Surface Protection</h2>
              <p className="mt-4 text-muted-foreground">
                Once the paint has been corrected to a flawless state, it must be shielded from San Antonio's extreme
                environment. Our{" "}
                <Link href="/ceramic-coating-san-antonio" className="font-medium text-primary hover:underline">
                  ceramic coating service
                </Link>{" "}
                utilizes nanotechnology-based coatings (SiO₂) that create a rigid, hydrophobic barrier defending the
                paint for 2 to 7 years.
              </p>
            </div>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation>
            <div className="my-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 md:p-12">
              <h2 className="mb-4 text-2xl font-bold">Partnership in Community-Building</h2>
              <p className="mb-6 text-muted-foreground">
                At One Detail at a Time, I believe that high-end detailing is not just about aesthetics—it's a
                partnership in community-building. By choosing a certified local detailer, you're ensuring your vehicle
                reflects perfection while supporting the future generation through Junior Achievement of South Texas.
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
                    Request Free Estimate
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
