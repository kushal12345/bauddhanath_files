import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bauddhanath Security Services - Professional Security Services",
  description:
    "Trusted security guard company providing comprehensive protection and surveillance solutions for your peace of mind.",
  icons: {
    icon: [
      {
        url: "/chest.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/chest.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/chest.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/chest.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
