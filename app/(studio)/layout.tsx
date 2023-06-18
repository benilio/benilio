import '@/site/globals.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
