import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Shield, Droplets, Sun, Clock } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { FAQAccordion } from "@/components/faq-accordion"
import { ArticleStructuredData } from "@/components/article-structured-data"

export const metadata: Metadata = {
  title: "Ceramic Coating Protection Guide | San Antonio TX | ODAAT1",
  description:
    "Complete guide to ceramic coating in San Antonio. Learn about nanotechnology protection, graphene coatings & PPF. 2-7 year UV defense. Call (726) 207-1007.",
  openGraph: {
    title: "Ceramic Coating Protection Guide | San Antonio TX",
    description: "Everything you need to know about ceramic coating protection for Texas heat.",
    url: "https://odaat1.com/articles/ceramic-coating-protection-guide-san-antonio",
    type: "article",
  },
  alternates: {
    canonical: "https://odaat1.com/articles/ceramic-coating-protection-guide-san-antonio",
  },
}

const faqItems = [
  {
    question: "How long does ceramic coating last in San Antonio's climate?",
    answer:
      "Professional ceramic coatings last 2-7 years depending on the product tier. In San Antonio's intense UV environment, we recommend our 5-year coating for optimal protection against sun damage, cedar pollen, and alkaline dust.",
  },
  {
    question: "What's the difference between ceramic coating and wax?",
    answer:
      "Wax provides 1-3 months of protection and sits on top of the paint. Ceramic coating chemically bonds to your clear coat at the molecular level, creating a permanent shield that lasts years and offers superior UV, chemical, and heat resistance.",
  },
  {
    question: "Can ceramic coating be applied over scratches?",
    answer:
      "No. Ceramic coating is transparent and will lock in any existing defects. That's why professional paint correction is essential before coating application. We always perform decontamination and correction first.",
  },
  {
    question: "Is ceramic coating worth the investment?",
    answer:
      "Absolutely. When you factor in reduced maintenance costs, preserved resale value, and protection from Texas sun damage that can cause thousands in paint repair, ceramic coating pays for itself many times over.",
  },
  {
    question: "How do I maintain a ceramic coated vehicle?",
    answer:
      "Maintenance is simple: regular washing with pH-neutral soap (no dish soap), avoiding automatic car washes with brushes, and an annual inspection/boost treatment. The hydrophobic properties make washing easier and faster.",
  },
]

const relatedArticles = [
  {
    slug: "professional-auto-detailing-guide-san-antonio",
    title: "Complete Detailing Guide",
    description: "All four stages of professional detailing",
  },
  {
    slug: "paint-correction-exterior-detailing-san-antonio",
    title: "Paint Correction Guide",
    description: "Essential prep before ceramic coating",
  },
  {
    slug: "paint-decontamination-guide-san-antonio",
    title: "Decontamination Guide",
    description: "Why proper surface prep matters",
  },
]

export default function CeramicCoatingGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleStructuredData
        title="Ceramic Coating: The Ultimate Protection Guide for San Antonio"
        description="Complete guide to ceramic coating technology, application process, and long-term protection for vehicles in Texas heat."
        url="https://odaat1.com/articles/ceramic-coating-protection-guide-san-antonio"
        datePublished="2024-01-12"
        dateModified="2024-01-12"
        image="https://odaat1.com/ceramic-coating-application-san-antonio-texas.jpg"
        imageAlt="Professional applying ceramic coating to vehicle hood at One Detail At A Time studio in San Antonio Texas"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/ceramic-coating-nanotechnology-protection-san-anton.jpg"
            alt="Professional ceramic coating application with nanotechnology protection at One Detail At A Time auto detailing studio in San Antonio Texas"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            <BreadcrumbNav
              items={[{ label: "Articles", href: "/articles" }, { label: "Ceramic Coating Protection Guide" }]}
            />
            <ScrollAnimation>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Protection Technology
              </span>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Ceramic Coating: The Ultimate Protection for Texas Heat
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
                Discover how nanotechnology creates an invisible shield that defends your vehicle against San Antonio's
                extreme UV, acid rain, and environmental contaminants for years.
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

      {/* Benefits Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="mb-12 text-center text-3xl font-bold">Why Ceramic Coating in San Antonio?</h2>
          </ScrollAnimation>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sun, title: "UV Protection", desc: "Blocks 99% of harmful rays that cause oxidation and fading" },
              { icon: Droplets, title: "Hydrophobic", desc: "Water beads and rolls off, taking contaminants with it" },
              {
                icon: Shield,
                title: "Chemical Resist",
                desc: "Defends against bird droppings, tree sap, and acid rain",
              },
              { icon: Clock, title: "2-7 Year Life", desc: "Long-term protection that outlasts wax by 10-20x" },
            ].map((benefit, index) => (
              <ScrollAnimation key={benefit.title} delay={index * 100}>
                <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-lg">
                  <benefit.icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 font-bold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollAnimation>
            <p className="lead text-xl text-muted-foreground">
              In San Antonio's brutal climate—where summer temperatures regularly exceed 100°F and UV intensity rivals
              the harshest desert environments—traditional wax simply cannot provide adequate protection. Your vehicle
              needs something stronger, something that bonds at the molecular level to create an impenetrable shield.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <p className="mt-6 text-muted-foreground">
              At <strong>One Detail at a Time</strong>, located at 11692 Bricken Circle (78233), I specialize in
              professional{" "}
              <Link href="/ceramic-coating-san-antonio" className="font-medium text-primary hover:underline">
                ceramic coating installation
              </Link>{" "}
              using IDA-certified techniques that ensure maximum durability and protection for South Texas conditions.
            </p>
          </ScrollAnimation>

          {/* Understanding Ceramic Coating */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Understanding Ceramic Coating Technology</h2>
              <p className="mt-4 text-muted-foreground">
                Ceramic coating, also known as nano-ceramic coating, is a liquid polymer containing silicon dioxide
                (SiO₂) that chemically bonds to your vehicle's factory clear coat. Unlike wax or sealants that sit on
                top of the paint, ceramic coating becomes a permanent part of your paint system.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left">
            <div className="relative my-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/ceramic-coating-application-san-antonio-texas.jpg"
                alt="IDA-certified technician applying ceramic coating with precision at One Detail At A Time professional auto detailing studio in San Antonio Texas"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <h3 className="mt-8 text-2xl font-semibold">How Nanotechnology Works</h3>
            <p className="mt-4 text-muted-foreground">
              The nano-particles in ceramic coating are incredibly small—measured in nanometers (one billionth of a
              meter). This allows them to fill microscopic pores in your clear coat, creating an ultra-smooth,
              hydrophobic surface that repels water, dirt, and contaminants. The result is a surface so slick that
              contamination cannot bond to it.
            </p>
          </ScrollAnimation>

          {/* Protection Tiers */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Protection Tier Comparison</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="my-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold">Traditional Wax</h4>
                <p className="mb-4 text-2xl font-bold text-muted-foreground">1-3 Months</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Warm, natural glow</li>
                  <li>• Minimal UV protection</li>
                  <li>• Frequent reapplication</li>
                  <li>• Melts in Texas heat</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h4 className="mb-2 font-bold">Synthetic Sealant</h4>
                <p className="mb-4 text-2xl font-bold text-muted-foreground">4-9 Months</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Better UV resistance</li>
                  <li>• Moderate hydrophobicity</li>
                  <li>• Semi-annual application</li>
                  <li>• Degrades with heat</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/50 bg-primary/5 p-6">
                <h4 className="mb-2 font-bold text-primary">Ceramic Coating</h4>
                <p className="mb-4 text-2xl font-bold text-primary">2-7 Years</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Superior UV blocking</li>
                  <li>• Extreme hydrophobicity</li>
                  <li>• Chemical resistance</li>
                  <li>• Heat stable to 1500°F</li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          {/* Graphene Coating */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Graphene: The Next Generation</h2>
              <p className="mt-4 text-muted-foreground">
                Graphene-infused ceramic coatings represent the cutting edge of paint protection technology. Graphene—a
                single layer of carbon atoms arranged in a hexagonal lattice—offers properties that make it ideal for
                San Antonio's extreme conditions.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <h4 className="mb-4 font-bold">Graphene Advantages for Texas Heat</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>Superior Heat Dissipation:</strong> Graphene conducts heat away from the surface, preventing
                  water spotting when washing in direct sunlight
                </li>
                <li>
                  <strong>Anti-Static Properties:</strong> Reduces dust attraction—critical during San Antonio's dusty
                  spring months
                </li>
                <li>
                  <strong>Self-Healing Potential:</strong> Some formulations exhibit minor scratch healing when exposed
                  to heat or warm water
                </li>
                <li>
                  <strong>Extended Durability:</strong> The carbon structure provides additional resistance to UV
                  degradation
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Application Process */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">The Professional Application Process</h2>
              <p className="mt-4 text-muted-foreground">
                Proper ceramic coating installation is a multi-day process that requires controlled conditions and
                meticulous attention to detail. This is why professional application is essential—DIY kits cannot
                replicate the durability of professional-grade coatings.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 space-y-4">
              {[
                {
                  step: "01",
                  title: "Decontamination",
                  desc: "Chemical and mechanical removal of all bonded contaminants via iron remover and clay bar treatment",
                },
                {
                  step: "02",
                  title: "Paint Correction",
                  desc: "Multi-stage polishing to remove swirls, scratches, and oxidation before coating",
                },
                {
                  step: "03",
                  title: "Surface Prep",
                  desc: "IPA wipe to remove all oils and residues, revealing pristine paint surface",
                },
                {
                  step: "04",
                  title: "Coating Application",
                  desc: "Panel-by-panel application with precise leveling and curing times",
                },
                {
                  step: "05",
                  title: "Infrared Curing",
                  desc: "Controlled heat curing to ensure maximum hardness and durability",
                },
              ].map((item, index) => (
                <ScrollAnimation key={item.step} delay={index * 50}>
                  <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="my-8 rounded-lg border border-border bg-muted/50 p-6">
              <p className="text-sm text-muted-foreground">
                <strong>Industry Standard:</strong> According to the{" "}
                <a
                  href="https://www.the-ida.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  International Detailing Association
                </a>
                , proper paint correction before ceramic coating is mandatory—not optional. Applying coating over
                defects will permanently seal in swirl marks and scratches, making them impossible to remove without
                stripping the coating entirely.
              </p>
            </div>
          </ScrollAnimation>

          {/* Paint Protection Film */}
          <ScrollAnimation>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Paint Protection Film (PPF)</h2>
              <p className="mt-4 text-muted-foreground">
                For maximum physical protection against rock chips on high-traffic corridors like I-10 and Loop 1604,
                Paint Protection Film provides an additional layer of defense that ceramic coating alone cannot match.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="relative my-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src="/paint-protection-film-ppf-installation-san-antonio.jpg"
                alt="Paint protection film PPF installation on vehicle front end at One Detail At A Time professional auto detailing in San Antonio Texas"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation>
            <div className="my-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 md:p-12">
              <h2 className="mb-4 text-2xl font-bold">Protect Your Investment</h2>
              <p className="mb-6 text-muted-foreground">
                Every ceramic coating installation supports Junior Achievement of South Texas with our 10% donation
                commitment. Protect your vehicle while investing in our community's future leaders.
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
    </main>
  )
}
