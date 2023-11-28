import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
}

export default function RootLayoutRegister({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
