import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Luís Viegas',
    default: 'Luís Viegas - Software designer, founder, and amateur astronaut',
  },
  description:
    "I'm Luís Viegas, a Full-Stack Developer and Machine Learning enthusiast based in Porto, Portugal. Currently leading AI initiatives at CoolLink S.A., where I design AI solutions for financial institutions. With a Master's in Software Engineering from University of Porto, I specialize in bridging advanced machine learning with scalable web applications.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
