import { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
