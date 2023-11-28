import { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
  title: {
    template: '%s | BarberPro',
    default: 'BarberPro',
  },
  description: 'Cadastre sua barbearia aqui !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={spaceGrotesk.variable} lang="en">
      <body className="bg-barber-900 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
