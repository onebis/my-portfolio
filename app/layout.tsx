import type { Metadata } from 'next'
import './globals.css'
import { Provider } from '@/app/_utils/provider'
import { inter, potta_one } from '@/public/font'

export const metadata: Metadata = {
  title: 'minoru horiuchi',
  description: "minoru's portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${potta_one.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
