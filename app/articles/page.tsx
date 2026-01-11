import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Calendar, Clock } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Auto Detailing Articles & Guides | San Antonio TX | ODAAT1",
  description:
    "Expert auto detailing guides covering ceramic coating, paint correction, interior cleaning & more. Learn from San Antonio's IDA-certified professionals. Call (726) 207-1007.",
  openGraph: {
    title: "Auto Detailing Articles & Guides | San Antonio TX",
    description: "Expert auto detailing guides from San Antonio's IDA-certified professionals.",
    url: "https://odaat1.com/articles",
    type: "website",
  },
  alternates: {
    canonical: "https://odaat1.com/articles",
  },
}

const articles = [
  {
    slug: "professional-auto-detailing-guide-san-antonio",
    title: "Complete Guide to Professional Auto Detailing",
    description:
      "Master the four stages of professional detailing: washing, correction, protection, and interior care.",
    image: "/professional-auto-detailing-san-antonio-ceramic-co.jpg",
    category: "Comprehensive Guide",
    readTime: "12 min read",
    date: "2024-01-15",
  },
  {
    slug: "ceramic-coating-protection-guide-san-antonio",
    title: "Ceramic Coating: The Ultimate Protection Guide",
    description:
      "Everything you need to know about nanotechnology coatings and long-term paint protection in Texas heat.",
    image: "/ceramic-coating-application-san-antonio-texas.jpg",
    category: "Protection",
    readTime: "10 min read",
    date: "2024-01-12",
  },
  {
    slug: "paint-correction-exterior-detailing-san-antonio",
    title: "The Science of Paint Correction",
    description: "Understanding correction tiers, polishing techniques, and how to restore your vehicle's finish.",
    image: "/paint-correction-polishing-san-antonio-auto-detail.jpg",
    category: "Paint Care",
    readTime: "11 min read",
    date: "2024-01-10",
  },
  {
    slug: "exterior-car-detailing-guide-san-antonio",
    title: "Exterior Detailing: Vehicle Conservation",
    description:
      "Comprehensive exterior care including washing, decontamination, and protection for South Texas climate.",
    image: "/exterior-car-detailing-wash-san-antonio-texas.jpg",
    category: "Exterior Care",
    readTime: "9 min read",
    date: "2024-01-08",
  },
  {
    slug: "car-interior-cleaning-guide-san-antonio",
    title: "Interior Cleaning: Health & Preservation",
    description: "Professional interior detailing techniques for hygiene, odor removal, and material preservation.",
    image: "/car-interior-cleaning-steam-san-antonio-detailing.jpg",
    category: "Interior Care",
    readTime: "10 min read",
    date: "2024-01-05",
  },
  {
    slug: "paint-decontamination-guide-san-antonio",
    title: "Paint Decontamination: The Essential Foundation",
    description: "Why iron removal and clay bar treatment are critical before any protection or correction work.",
    image: "/clay-bar-paint-decontamination-san-antonio-auto.jpg",
    category: "Preparation",
    readTime: "8 min read",
    date: "2024-01-03",
  },
]

export default function ArticlesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Auto Detailing Articles & Guides",
    description: "Expert auto detailing guides from San Antonio's IDA-certified professionals.",
    url: "https://odaat1.com/articles",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://odaat1.com/articles/${article.slug}`,
        name: article.title,
      })),
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <BreadcrumbNav items={[{ label: "Articles" }]} />
            <ScrollAnimation>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Expert Detailing
                <span className="block text-primary">Knowledge Hub</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
                Professional insights from San Antonio's IDA-certified auto detailing studio. Learn the techniques and
                science behind preserving your vehicle's beauty and value.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="mb-12">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                Featured Guide
              </span>
              <h2 className="text-3xl font-bold md:text-4xl">Start Your Journey Here</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <Link
              href={`/articles/${articles[0].slug}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:shadow-2xl"
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <Image
                    src={articles[0].image || "/placeholder.svg"}
                    alt="Professional auto detailer applying ceramic coating to vehicle hood at One Detail At A Time studio in San Antonio Texas"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {articles[0].category}
                  </span>
                  <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-primary md:text-3xl">
                    {articles[0].title}
                  </h3>
                  <p className="mb-6 text-muted-foreground">{articles[0].description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {articles[0].readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(articles[0].date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">All Guides</h2>
              <p className="mt-2 text-muted-foreground">Deep-dive into specific topics and techniques</p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map((article, index) => (
              <ScrollAnimation key={article.slug} delay={index * 100}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={`${article.title} - Professional auto detailing guide from One Detail At A Time in San Antonio TX`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-muted-foreground">{article.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready for Professional Results?</h2>
              <p className="mb-8 text-muted-foreground">
                Transform your vehicle with IDA-certified expertise. 10% of every service supports Junior Achievement of
                South Texas.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="tel:7262071007" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call (726) 207-1007
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact" className="gap-2">
                    Schedule Service
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
