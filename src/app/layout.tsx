import type { Metadata } from 'next'
import { Roboto_Mono, Open_Sans } from 'next/font/google'
import { QueryProvider } from '@/@root'
import '@/@root/styles/theme.css'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Enduro 18',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${roboto_mono.className} ${open_sans.className} antialiased`}
    >
      <body className="text-on-background bg-background p-5">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
