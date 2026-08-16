import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { CookieBanner } from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://carroattrezzireggioemiliapro.it'),
  title: {
    template: '%s | Carroattrezzi Reggio Emilia Pro',
    default: 'Carroattrezzi a Reggio Emilia 24H | Soccorso Stradale',
  },
  description: 'Carroattrezzi a Reggio Emilia attivo 24 ore su 24 per traino auto, recupero veicoli e soccorso stradale rapido.',
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Carroattrezzi a Reggio Emilia 24H | Soccorso Stradale',
    description: 'Soccorso stradale, traino e recupero veicoli a Reggio Emilia e provincia.',
    url: 'https://carroattrezzireggioemiliapro.it',
    siteName: 'Carroattrezzi Reggio Emilia Pro',
    locale: 'it_IT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/sitemap.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}<CookieBanner /></body>
    </html>
  )
}
