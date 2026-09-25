import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Scalable Network Organizations | Powerhouse",
  description:
    "SNOs are how open ecosystems beat Big Tech. They channel funding and revenue back to contributors, protect the commons, and scale operations while the community sets the rules.",
  verification: {
    google: "zzg8CJK4RMQk4hc6oan09EPwcewZzwsHQhU3Gs_4W7k",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="65aa09dc-5160-42fd-ad03-5552b7c15fb3"
        />
      </body>
    </html>
  )
}
