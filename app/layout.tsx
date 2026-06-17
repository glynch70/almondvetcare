import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Almond Vet Care | Independent Vets in Perth, Scotland",
  description:
    "Independent veterinary clinic in Perth, Scotland putting animal welfare first. Compassionate care for your pets. Opening Spring 2026.",
  generator: "v0.app",
  icons: {
    icon: "/images/almond-circle-logo.png",
    apple: "/images/almond-circle-logo.png",
  },
  openGraph: {
    title: "Almond Vet Care | Independent Vets in Perth, Scotland",
    description:
      "Independent veterinary clinic in Perth, Scotland putting animal welfare first. Compassionate care for your pets. Opening Spring 2026.",
    url: "https://almondvetcare.org",
    siteName: "Almond Vet Care",
    images: [
      {
        url: "https://almondvetcare.org/images/almond-circle-logo.png",
        width: 1200,
        height: 630,
        alt: "Almond Vet Care Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almond Vet Care | Independent Vets in Perth, Scotland",
    description: "Independent veterinary clinic in Perth, Scotland putting animal welfare first. Opening Spring 2026.",
    images: ["https://almondvetcare.org/images/almond-circle-logo.png"],
  },
  keywords: [
    "veterinary clinic Perth",
    "vet Perth Scotland",
    "pet care Perth",
    "animal clinic Perth",
    "independent vet Perth",
    "dog vet Perth",
    "cat vet Perth",
  ],
  authors: [{ name: "Almond Vet Care" }],
  creator: "Almond Vet Care",
  publisher: "Almond Vet Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              name: "Almond Vet Care",
              description: "Independent veterinary clinic in Perth, Scotland putting animal welfare first",
              url: "https://almondvetcare.org",
              logo: "https://almondvetcare.org/images/almond-circle-logo.png",
              image: "https://almondvetcare.org/images/almond-circle-logo.png",
              telephone: "+441738234811",
              email: "reception@almondvetcare.org",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lawgrove Place, Inveralmond Industrial Estate",
                addressLocality: "Perth",
                postalCode: "PH1 3XQ",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 56.420861,
                longitude: -3.468833,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                description: "Opening Spring 2026",
              },
              priceRange: "££",
              founder: [
                {
                  "@type": "Person",
                  name: "Katie Jones",
                  jobTitle: "Veterinary Surgeon & Co-Founder",
                },
                {
                  "@type": "Person",
                  name: "Lisa Elgie",
                  jobTitle: "Veterinary Surgeon & Co-Founder",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
