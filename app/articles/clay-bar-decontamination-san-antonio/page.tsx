import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Clock, Calendar, MapPin, Award, CheckCircle2, ExternalLink, Sparkles } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { FAQAccordion } from "@/components/faq-accordion"
import { ArticleStructuredData } from "@/components/article-structured-data"

export const metadata: Metadata = {
  title: "Clay Bar Treatment Guide | San Antonio TX | ODAAT1",
  description:
    "Learn why clay bar decontamination is essential before paint correction or ceramic coating. Expert guide from San Antonio's IDA-certified detailers. Call (726) 207-1007.",
  openGraph: {
    title: "Clay Bar Treatment Guide | San Antonio Auto Detailing",
    description: "Why claying is the essential bridge between washing and paint correction.",
    url: "https://odaat1.com/articles/clay-bar-decontamination-san-antonio",
    type: "article",
  },
  alternates: {
    canonical: "https://odaat1.com/articles/clay-bar-decontamination-san-antonio",
  },
}

const faqs = [
  {
    question: "What does a clay bar actually do?",
    answer:
      "A clay bar is a putty-like resin that performs mechanical decontamination. When glided over the paint with specialized lubricant, it 'grabs' and extracts embedded contaminants from the microscopic pores of your clear coat—contaminants that regular washing cannot remove.",
  },
  {
    question: "How often should I clay my car?",
    answer:
      "For most San Antonio vehicles, claying 1-2 times per year is sufficient. However, if you frequently drive on highways like I-10 or park near construction zones, you may need more frequent treatments. The 'plastic bag test' can help you determine if claying is needed.",
  },
  {
    question: "Will clay bar treatment scratch my paint?",
    answer:
      "Clay bars are slightly abrasive and can cause 'marring'—very shallow surface marks. This is why professional claying is always followed by at least a light polish to refine the finish. When done correctly, the benefits far outweigh this minor side effect.",
  },
  {
    question: "What's the difference between clay bar grades?",
    answer:
      "Clay comes in fine, medium, and heavy grades. Fine clay is for well-maintained vehicles needing light decontamination. Medium is the most common for regular use. Heavy grade is reserved for neglected paint with severe contamination—but increases marring risk.",
  },
]

const relatedArticles = [
  {
    slug: "iron-fallout-removal-san-antonio",
    title: "Iron Fallout Removal",
    description: "Chemical decontamination before claying",
    image: "/iron-fallout-san-antonio-guide-hero.jpg",
  },
  {
    slug: "paint-correction-exterior-detailing-san-antonio",
    title: "Paint Correction Guide",
    description: "The next step after decontamination",
    image: "/paint-correction-san-antonio-guide-hero.jpg",
  },
  {
    slug: "ceramic-coating-protection-guide-san-antonio",
    title: "Ceramic Coating Guide",
    description: "Protection after correction",
    image: "/ceramic-coating-san-antonio-guide-hero.jpg",
  },
]

export default function ClayBarArticle() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleStructuredData
        title="Clay Bar Treatment: Mechanical Decontamination for San Antonio Vehicles"
        description="Learn why clay bar decontamination is essential before paint correction or ceramic coating."
        url="https://odaat1.com/articles/clay-bar-decontamination-san-antonio"
        datePublished="2024-01-03"
        dateModified="2024-01-03"
        image="https://odaat1.com/clay-bar-san-antonio-guide-hero.jpg"
        imageAlt="Professional clay bar treatment being performed on vehicle at One Detail At A Time auto detailing studio in San Antonio Texas"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <BreadcrumbNav items={[{ label: "Articles", href: "/articles" }, { label: "Clay Bar Decontamination" }]} />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <ScrollAnimation>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    Decontamination
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />8 min read
                  </span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Clay Bar Treatment
                  <span className="mt-2 block text-primary">Explained</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                  The essential bridge between washing and paint correction. Discover why professional claying is the
                  key to achieving a glass-smooth finish on your San Antonio vehicle.
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
                    Jan 3, 2024
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
                  src="/clay-bar-san-antonio-guide-hero.jpg"
                  alt="Professional clay bar decontamination treatment being performed on vehicle paint at One Detail At A Time auto detailing studio in San Antonio Texas"
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
                If you&apos;re searching for the best auto detailing in San Antonio, you need to understand that the
                difference between a &quot;wash&quot; and a &quot;detail&quot; often comes down to a critical process
                called claying. In the context of a professional automotive detailing guide, claying is defined as the
                use of a putty-like resin to perform mechanical decontamination—pulling away bonded surface impurities
                that regular washing simply cannot shift.
              </p>
            </ScrollAnimation>

            {/* Section: Role of Claying */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">The Role of Claying in Mechanical Decontamination</h2>
                <p className="mb-6 text-muted-foreground">
                  Decontamination is the bridge between cleaning a vehicle and restoring its surface. While{" "}
                  <Link href="/articles/iron-fallout-removal-san-antonio" className="text-primary hover:underline">
                    chemical decontamination
                  </Link>{" "}
                  uses liquids to dissolve specific pollutants, claying is the primary form of{" "}
                  <strong>mechanical decontamination</strong>.
                </p>

                <div className="my-8 rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h3 className="mb-4 text-xl font-semibold">How Clay Bar Works</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The clay is glided over the surface using a specialized clay lubricant to minimize friction. The
                      material &quot;grabs&quot; embedded contaminants and extracts them from the microscopic
                      &quot;hills and valleys&quot; of the clear coat.
                    </p>
                    <div className="rounded-xl bg-muted/50 p-4">
                      <h4 className="mb-2 font-semibold text-foreground">Contaminants Removed:</h4>
                      <ul className="grid gap-2 md:grid-cols-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Industrial fallout
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Brake dust particles
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Tree sap residue
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Road grime & tar
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Mineral deposits
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Overspray
                        </li>
                      </ul>
                    </div>
                    <p>
                      <strong className="text-foreground">The Result:</strong> After a proper clay bar treatment, the
                      paintwork should feel as smooth as glass.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Technical Necessity */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Why Claying is a Technical Necessity</h2>
                <p className="mb-6 text-muted-foreground">
                  Skipping this stage before performing{" "}
                  <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                    paint correction
                  </Link>{" "}
                  is a major mistake that compromises the entire project.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                    <h4 className="mb-2 font-semibold text-red-600">Surface Safety Risk</h4>
                    <p className="text-sm text-muted-foreground">
                      If a detailer attempts to use a machine polisher on a surface that hasn&apos;t been clayed, the
                      abrasive pad will pick up the jagged embedded particles and drag them across the paint—creating
                      deeper scratches and swirls than the ones being removed.
                    </p>
                  </div>

                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <h4 className="mb-2 font-semibold text-primary">Bonding for Protection</h4>
                    <p className="text-sm text-muted-foreground">
                      Modern surface protection like silica sealants or{" "}
                      <Link href="/ceramic-coating-san-antonio" className="text-primary hover:underline">
                        ceramic coatings
                      </Link>{" "}
                      is designed to bond directly to a clinically clean clear coat. Contaminants act as a barrier,
                      causing the protection to fail prematurely.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-5">
                    <h4 className="mb-2 font-semibold">Visual Clarity</h4>
                    <p className="text-sm text-muted-foreground">
                      Claying removes surface oxidation and hazing, which immediately enhances the refractive index of
                      the paint—leading to increased gloss and depth of color.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Professional Process */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">The Professional Process & Evolution</h2>
                <p className="mb-6 text-muted-foreground">
                  The original polymer detailing clay was invented by Tadao Kodate to remove contaminants without harsh
                  chemicals or aggressive sanding. Today, the industry has evolved to include various tools and
                  techniques.
                </p>

                <div className="my-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h4 className="mb-3 font-semibold">Grades of Clay</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-green-500" />
                        <strong>Fine:</strong> Well-maintained vehicles, light contamination
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-yellow-500" />
                        <strong>Medium:</strong> Most common, regular decontamination
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-red-500" />
                        <strong>Heavy:</strong> Neglected paint, severe contamination
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h4 className="mb-3 font-semibold">Modern Tools</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        Traditional clay bars (most precise)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        Clay mitts (faster, reusable)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        Clay sponges (efficient for large vehicles)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                  <h4 className="mb-2 font-semibold text-yellow-600">Understanding Marring</h4>
                  <p className="text-sm text-muted-foreground">
                    It&apos;s important to know that claying is slightly abrasive and can cause &quot;marring&quot;—very
                    shallow surface marks. Because of this, professional claying must always be followed by at least a
                    light polish or paint correction to refine the finish.
                  </p>
                </div>
              </section>
            </ScrollAnimation>

            {/* Section: Asset Preservation */}
            <ScrollAnimation>
              <section className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Investing in Asset Preservation</h2>
                <p className="mb-6 text-muted-foreground">
                  A professionally clayed and maintained vehicle is more than just a pretty ride—it&apos;s a protected
                  capital asset. Documenting these high-level auto detailing services through CARFAX integration can
                  tangibly boost your vehicle&apos;s resale value by proving it has been maintained to a showroom
                  standard.
                </p>

                <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 md:p-8">
                  <h3 className="mb-4 text-xl font-semibold">The Complete Decontamination Sequence</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        1
                      </span>
                      <Link
                        href="/articles/two-bucket-wash-method-san-antonio"
                        className="text-primary hover:underline"
                      >
                        Two-Bucket Wash
                      </Link>{" "}
                      to remove loose contamination
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        2
                      </span>
                      <Link href="/articles/iron-fallout-removal-san-antonio" className="text-primary hover:underline">
                        Iron fallout removal
                      </Link>{" "}
                      (chemical decontamination)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        3
                      </span>
                      <strong>Clay bar treatment</strong> (mechanical decontamination)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        4
                      </span>
                      <Link href="/san-antonio-paint-correction" className="text-primary hover:underline">
                        Paint correction
                      </Link>{" "}
                      to refine and restore
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        5
                      </span>
                      <Link href="/ceramic-coating-san-antonio" className="text-primary hover:underline">
                        Ceramic coating
                      </Link>{" "}
                      for long-term protection
                    </li>
                  </ol>
                </div>
              </section>
            </ScrollAnimation>

            {/* External Links */}
            <ScrollAnimation>
              <section className="mt-16">
                <div className="rounded-2xl border border-border bg-muted/30 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Industry Resources</h3>
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
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Experience Professional Decontamination</h2>
                  <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                    At One Detail At A Time, we treat your vehicle as a unique project—ensuring nothing goes untouched.
                    10% of profits support Junior Achievement of South Texas.
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
