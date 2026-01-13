import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Calendar, Clock, BookOpen, Award, Heart } from "lucide-react"
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
    image: "/professional-auto-detailing-san-antonio-hero.jpg",
    category: "Comprehensive Guide",
    readTime: "12 min read",
    date: "2024-01-15",
    featured: true,
  },
  {
    slug: "ceramic-coating-protection-guide-san-antonio",
    title: "Ceramic Coating: The Ultimate Protection Guide",
    description:
      "Everything you need to know about nanotechnology coatings and long-term paint protection in Texas heat.",
    image: "/ceramic-coating-san-antonio-guide-hero.jpg",
    category: "Protection",
    readTime: "10 min read",
    date: "2024-01-12",
  },
  {
    slug: "paint-correction-exterior-detailing-san-antonio",
    title: "The Science of Paint Correction",
    description: "Understanding correction tiers, polishing techniques, and how to restore your vehicle's finish.",
    image: "/paint-correction-san-antonio-guide-hero.jpg",
    category: "Paint Care",
    readTime: "11 min read",
    date: "2024-01-10",
  },
  {
    slug: "touchless-wash-method-san-antonio",
    title: "The Touchless Wash Method Explained",
    description: "Discover how chemical washing protects your paint while delivering exceptional results.",
    image: "/touchless-wash-san-antonio-guide-hero.jpg",
    category: "Washing",
    readTime: "8 min read",
    date: "2024-01-08",
  },
  {
    slug: "garry-dean-wash-method-san-antonio",
    title: "The Garry Dean Wash Method",
    description: "A water-efficient luxury wash technique perfect for San Antonio's eco-conscious car owners.",
    image: "/garry-dean-wash-san-antonio-guide-hero.jpg",
    category: "Washing",
    readTime: "9 min read",
    date: "2024-01-06",
  },
  {
    slug: "two-bucket-wash-method-san-antonio",
    title: "The Two-Bucket Wash Method: Gold Standard",
    description: "Learn why professional detailers trust the 2BM for safe, swirl-free vehicle washing.",
    image: "/two-bucket-wash-san-antonio-guide-hero.jpg",
    category: "Washing",
    readTime: "9 min read",
    date: "2024-01-05",
  },
  {
    slug: "rinseless-waterless-washing-san-antonio",
    title: "Rinseless & Waterless Washing Guide",
    description: "Eco-friendly washing techniques ideal for water conservation and mobile detailing.",
    image: "/rinseless-wash-san-antonio-guide-hero.jpg",
    category: "Eco-Friendly",
    readTime: "10 min read",
    date: "2024-01-04",
  },
  {
    slug: "clay-bar-decontamination-san-antonio",
    title: "Clay Bar Treatment: Mechanical Decontamination",
    description: "Why claying is the essential bridge between washing and paint correction.",
    image: "/clay-bar-san-antonio-guide-hero.jpg",
    category: "Decontamination",
    readTime: "8 min read",
    date: "2024-01-03",
  },
  {
    slug: "decontamination-guide-san-antonio",
    title: "Complete Decontamination Guide",
    description: "The technical foundation for ceramic coating and paint correction preparation.",
    image: "/decontamination-san-antonio-guide-hero.jpg",
    category: "Decontamination",
    readTime: "11 min read",
    date: "2024-01-02",
  },
  {
    slug: "iron-fallout-removal-san-antonio",
    title: "Iron Fallout Removal: Chemical Decontamination",
    description: "Understanding the science behind removing embedded metallic particles from your paint.",
    image: "/iron-fallout-san-antonio-guide-hero.jpg",
    category: "Decontamination",
    readTime: "9 min read",
    date: "2024-01-01",
  },
  {
    slug: "tar-glue-removal-san-antonio",
    title: "Tar & Glue Removal Guide",
    description: "Professional techniques for removing road tar and adhesive residue safely.",
    image: "/tar-glue-removal-san-antonio-guide-hero.jpg",
    category: "Decontamination",
    readTime: "8 min read",
    date: "2023-12-30",
  },
]

export default function ArticlesPage() {
  const featuredArticle = articles.find((a) => a.featured) || articles[0]
  const otherArticles = articles.filter((a) => a.slug !== featuredArticle.slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Auto Detailing Articles & Guides | One Detail At A Time",
    description: "Expert auto detailing guides from San Antonio's IDA-certified professionals.",
    url: "https://odaat1.com/articles",
    publisher: {
      "@type": "LocalBusiness",
      name: "One Detail At A Time",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11692 Bricken Circle",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78233",
        addressCountry: "US",
      },
    },
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
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/50 to-background py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <BreadcrumbNav items={[{ label: "Articles" }]} />

            <ScrollAnimation>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                IDA-Certified Professional Insights
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Expert Detailing
                <span className="mt-2 block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Knowledge Hub
                </span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
                Professional insights from San Antonio&apos;s premier auto detailing studio. Learn the techniques,
                science, and best practices behind preserving your vehicle&apos;s beauty and value.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="gap-2 text-lg" asChild>
                  <a href="tel:7262071007">
                    <Phone className="h-5 w-5" />
                    Call (726) 207-1007
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-lg bg-transparent" asChild>
                  <Link href="/contact">
                    Get Free Estimate
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            {/* Stats */}
            <ScrollAnimation delay={400}>
              <div className="mt-16 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary md:text-4xl">{articles.length}</div>
                  <div className="text-sm text-muted-foreground">Expert Guides</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary md:text-4xl">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary md:text-4xl">10%</div>
                  <div className="text-sm text-muted-foreground">To Charity</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="mb-12 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">Featured Guide</span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <Link
              href={`/articles/${featuredArticle.slug}`}
              className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:border-primary hover:shadow-2xl"
            >
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[500px]">
                  <Image
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt="Professional IDA-certified auto detailer applying ceramic coating protection at One Detail At A Time studio in San Antonio Texas"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <span className="mb-4 inline-block w-fit rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                    {featuredArticle.category}
                  </span>
                  <h2 className="mb-6 text-3xl font-bold leading-tight transition-colors group-hover:text-primary md:text-4xl lg:text-5xl">
                    {featuredArticle.title}
                  </h2>
                  <p className="mb-8 text-lg text-muted-foreground">{featuredArticle.description}</p>
                  <div className="mb-8 flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredArticle.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-primary">
                    Read Full Guide
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Category Filter - Visual Only */}
      <section className="border-y border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["All", "Washing", "Decontamination", "Protection", "Paint Care", "Eco-Friendly"].map((cat) => (
                <span
                  key={cat}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    cat === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">All Guides & Articles</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Deep-dive into specific topics, techniques, and best practices
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherArticles.map((article, index) => (
              <ScrollAnimation key={article.slug} delay={index * 75}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={`${article.title} - Professional auto detailing guide from One Detail At A Time in San Antonio Texas`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold leading-snug transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mb-5 flex-1 text-sm text-muted-foreground">{article.description}</p>
                    <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
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
      <section className="border-t border-border bg-gradient-to-b from-muted/50 to-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-10 text-center shadow-lg md:p-16">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Heart className="h-4 w-4" />
                10% of Profits to Junior Achievement of South Texas
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">Ready for Professional Results?</h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
                Transform your vehicle with IDA-certified expertise at our private San Antonio studio. Every service
                supports our community&apos;s future leaders.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="gap-2 text-lg" asChild>
                  <a href="tel:7262071007">
                    <Phone className="h-5 w-5" />
                    Call (726) 207-1007
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-lg bg-transparent" asChild>
                  <Link href="/contact">
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
