import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Barber PRO',
    default: 'Barber PRO',
  },
  description: 'Cadastre sua barbearia aqui !',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
