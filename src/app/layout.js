import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sentinel Engenharia | Conformidade Regulatória — Grande Natal/RN',
  description: 'Inspeções NR-13, adequação NR-12, projetos AVCB, PMOC e laudo de playground em Natal, Parnamirim e Grande Natal. Fale com um engenheiro especialista.',
  keywords: 'NR-13 Natal, NR-12 Natal, inspeção vaso de pressão Natal, laudo playground Parnamirim, PMOC Grande Natal, conformidade regulatória RN, engenheiro mecânico Natal, AVCB Natal',
  metadataBase: new URL('https://www.sentinelengenharia.com.br'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sentinel Engenharia | Conformidade Regulatória — Grande Natal/RN',
    description: 'Inspeções NR-13, adequação NR-12, projetos AVCB, PMOC e laudo de playground em Natal, Parnamirim e Grande Natal.',
    url: 'https://www.sentinelengenharia.com.br',
    siteName: 'Sentinel Engenharia',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q4TCKK8Y33" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q4TCKK8Y33');
        `}</Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
