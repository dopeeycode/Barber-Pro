import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Barber PRO',
    default: 'Barber PRO',
  },
  description: 'Cadastre sua barbearia aqui !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={poppins.variable} lang="en">
      <body className="bg-barber-900 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}