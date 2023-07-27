import { ReactNode } from 'react'
import { Manrope, Unbounded, Nanum_Pen_Script } from 'next/font/google'
import localFont from 'next/font/local'
import NavigationMenu from '@/components/Navigation'
import '@/site/globals.css'
import { Metadata } from 'next'

// fonts config
const dirtyline = localFont({
  src: '../fonts/Dirtyline 36daysoftype 2022.woff2',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'sans-serif',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
  ],
  display: 'swap', // performance issue
  variable: '--ff-dirtyline',
})
const unbounded = Unbounded({
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'sans-serif',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
  ],
  subsets: ['latin'],
  display: 'swap', // performance issue
  variable: '--ff-unbounded',
})
const nanumPenScript = Nanum_Pen_Script({
  fallback: [
    'cursive'
  ],
  subsets: ['latin'],
  weight: '400',
  display: 'swap', // performance issue
  variable: '--ff-nanum',
})
const manropeit = localFont({
  src: '../fonts/Manrope.woff2',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'sans-serif',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
  ],

  style: 'italic',
  display: 'swap', // performance issue
  variable: '--ff-manrope-italic',
})
const manrope = Manrope({
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'sans-serif',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
  ],
  subsets: ['latin'],
  display: 'swap', // performance issue
  variable: '--ff-manrope',
})

type Props = {
  children: ReactNode
}

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

const RootLayout = ({ children }: Props) => {
  return (
    <html
      lang='en'
      className={`${dirtyline.variable} ${unbounded.variable} ${nanumPenScript.variable} ${manrope.variable} ${manropeit.variable}`}
    >
      <body>
        <header>
          <NavigationMenu />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
