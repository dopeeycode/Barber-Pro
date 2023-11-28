import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full h-screen flex items-center flex-col justify-center">
      <section className="flex flex-col items-center justify-center">
        <div className="mb-10">
          <Image
            src="/logo.svg"
            width={218}
            height={117}
            quality={100}
            alt=""
          />
        </div>
        {children}
      </section>
    </main>
  )
}
