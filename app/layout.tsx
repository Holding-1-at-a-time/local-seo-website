import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "One Detail At A Time | Premium Car Detailing in San Antonio, TX",
  description:
    "IDA-certified auto detailing studio in San Antonio, TX. Expert interior cleaning, paint correction, ceramic coating, and hand wash services. Located at 11692 Bricken Circle, San Antonio, TX 78233.",
  keywords: [
    "car detailing san antonio",
    "auto detailing san antonio tx",
    "ceramic coating san antonio",
    "paint correction san antonio",
    "interior detailing san antonio",
    "professional car wash san antonio",
  ],
  generator: "v0.app",
  openGraph: {
    title: "One Detail At A Time | Premium Car Detailing in San Antonio, TX",
    description:
      "IDA-certified auto detailing studio in San Antonio, TX. Expert interior cleaning, paint correction, ceramic coating services.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "One Detail At A Time",
              image: "https://onedetailatatime.com/logo.png",
              description:
                "One Detail At A Time offers exceptional vehicle care at our professional detailing studio. Our IDA-certified specialist provides advanced services, including thorough interior cleaning, meticulous paint correction, and protective ceramic coating.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "11692 Bricken Circle",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                postalCode: "78233",
                addressCountry: "US",
              },
              telephone: "+17262071007",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "07:00",
                  closes: "22:00",
                },
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.6084",
                longitude: "-98.3808",
              },
              areaServed: {
                "@type": "City",
                name: "San Antonio",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
