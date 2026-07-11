import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata = {
  title: "Almond Vet Care | Independent Vets in Perth, Scotland",
  description:
    "Independent veterinary clinic in Perth, Scotland putting animal welfare first. Open now.",
  icons: {
    icon: "/images/almond-circle-logo.png",
    apple: "/images/almond-circle-logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
