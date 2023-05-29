import './globals.css'
import { ReactNode } from 'react'
import { Manrope, Unbounded } from 'next/font/google'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, createTranslator } from 'next-intl'
import NavigationMenu from '@/components/Navigation'

// fonts
const dirtyline = localFont({
  src: '../../fonts/Dirtyline 36daysoftype 2022.woff2',
  display: 'swap',
  variable: '--ff-dirtyline',
})
const unbounded = Unbounded({ subsets: ['latin'], variable: '--ff-unbounded' })
const manrope = Manrope({ subsets: ['latin'], variable: '--ff-manrope' })

// typescript
type Props = {
  children: ReactNode
  params: { locale: string }
}

// multilanguage
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return {
    title: t('Metadata.title'),
    description: t('Metadata.description'),
  }
}

// main
export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  // let currentLocale = locale === 'en'

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
          <main className='pb-24'>
            {/* {currentLocale ? <p>potatoes</p> : <p>batata</p>} */}
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
