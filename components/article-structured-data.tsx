interface ArticleStructuredDataProps {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  image: string
  imageAlt: string
}

export function ArticleStructuredData({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  imageAlt,
}: ArticleStructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: {
      "@type": "ImageObject",
      url: image,
      caption: imageAlt,
    },
    author: {
      "@type": "Person",
      name: "One Detail At A Time",
      url: "https://odaat1.com",
    },
    publisher: {
      "@type": "LocalBusiness",
      name: "One Detail At A Time",
      logo: {
        "@type": "ImageObject",
        url: "https://odaat1.com/logo.png",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "11692 Bricken Circle",
        addressLocality: "San Antonio",
        addressRegion: "TX",
        postalCode: "78233",
        addressCountry: "US",
      },
      telephone: "(726) 207-1007",
      priceRange: "$$",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 29.5657,
        longitude: -98.3847,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "One Detail At A Time",
    description:
      "Professional IDA-certified auto detailing studio in San Antonio, TX specializing in ceramic coating, paint correction, and interior deep cleaning.",
    url: "https://odaat1.com",
    telephone: "(726) 207-1007",
    email: "estimates@odaat1.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "11692 Bricken Circle",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      postalCode: "78233",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.5657,
      longitude: -98.3847,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "San Antonio",
      "@id": "https://en.wikipedia.org/wiki/San_Antonio",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: ["https://www.facebook.com/onedetailatatime", "https://www.instagram.com/onedetailatatime"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
    </>
  )
}
