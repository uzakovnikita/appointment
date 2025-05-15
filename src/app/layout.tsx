import type { Metadata } from 'next'
import { Roboto_Mono, Open_Sans } from 'next/font/google'
import { QueryProvider } from '@/@root'
import '@/@root/styles/theme.css'
import { Header } from '@shared'
import { Footer } from '@/@shared/ui/Footer'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
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
      className={`${open_sans.variable} ${open_sans.className} ${roboto_mono.variable} antialiased`}
    >
      <body className="text-on-background bg-background flex min-h-screen flex-col p-2">
        <div className="mb-10">
          <Header />
        </div>
        <main className="mb-10 grow-1">
          <QueryProvider>{children}</QueryProvider>
        </main>

        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  )
}
