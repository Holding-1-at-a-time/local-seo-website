import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://odaat1.com"

  const routes = [
    "",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/san-antonio-auto-detailing",
    "/san-antonio-ceramic-coating",
    "/san-antonio-interior-deep-cleaning",
    "/san-antonio-exterior-hand-wash-sealant",
    "/san-antonio-paint-correction",
    "/san-antonio-engine-detailing",
    "/san-antonio-full-body-wash",
    "/san-antonio-headlight-polishing",
    "/san-antonio-paint-repair",
    "/san-antonio-seat-shampooing",
    "/ceramic-coating-san-antonio",
    "/interior-detailing-san-antonio",
    "/san-antonio-car-detailing-services",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
}
