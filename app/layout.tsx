import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AlderigeCreative - Agência de Marketing e Desenvolvimento Digital",
  description:
    "Agência especializada em marketing digital, desenvolvimento de jogos, apps e sites profissionais. Transformamos suas ideias em soluções digitais de alto impacto com ROI comprovado.",
  keywords: [
    "marketing digital",
    "desenvolvimento de jogos",
    "apps",
    "sites profissionais",
    "agência digital",
    "desenvolvimento web",
    "mobile apps",
    "consultoria tecnológica",
    "SEO",
    "redes sociais",
  ],
  authors: [{ name: "Gabriel Alderige", url: "https://alderigecreative.com" }],
  creator: "AlderigeCreative",
  publisher: "AlderigeCreative",
  metadataBase: new URL("https://alderigecreative.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AlderigeCreative - Agência de Marketing e Desenvolvimento Digital",
    description:
      "Transformamos suas ideias em soluções digitais de alto impacto. Marketing, desenvolvimento de jogos, apps e sites que convertem.",
    type: "website",
    locale: "pt_BR",
    siteName: "AlderigeCreative",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlderigeCreative - Agência Digital",
    description: "Marketing digital e desenvolvimento de soluções tecnológicas de alto impacto.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "v0.app",
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
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
