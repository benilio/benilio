import './globals.css'
import { ReactNode } from 'react'
import { Manrope, Unbounded } from 'next/font/google'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, createTranslator } from 'next-intl'
import NavigationMenu from '@/components/Navigation'
import { Metadata } from 'next'

// fonts
const dirtyline = localFont({
  src: '../../fonts/Dirtyline 36daysoftype 2022.woff2',
  display: 'block', // default swap
  variable: '--ff-dirtyline',
})

const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'block', // default swap
  variable: '--ff-unbounded',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'block', // default swap
  variable: '--ff-manrope',
})

// typescript
type Props = {
  children: ReactNode
  params: { locale: string }
}

// multi language metadata
// export async function generateMetadata({
//   params: { locale },
// }: {
//   params: any
//   locale: string
// }) {
//   const messages = (await import(`../../../messages/${locale}.json`)).default
//   const t = createTranslator({ locale, messages })

//   return {
//     title: t('Metadata.title'),
//     description: t('Metadata.description'),
//   }
// }

// ReactDOM.preconnect(href: 'https://fonts.gstatic.com', options?: { crossOrigin?: string })

export const metadata: Metadata = {
  title: {
    template: '%s | Benilio',
    default: 'Benilio',
  },
  description: '...',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.svg',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'pt' }]
// }

// main
const LocaleLayout = async ({ children, params: { locale } }: Props) => {
  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body
        className={`${dirtyline.variable} ${unbounded.variable} ${manrope.variable}`}
      >
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <header className='sticky top-0 bg-gray-700/60 z-10 backdrop-blur-lg'>
            <NavigationMenu />
          </header>
          <main className='pb-24'>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
