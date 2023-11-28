import Link from 'next/link'

export default function FormRegister() {
  return (
    <>
      <form
        className="flex items-center justify-cente  w-[10rem] min-[416px]:w-[26rem] 
       flex-col gap-6"
      >
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Nome da barbearia"
          className="w-[17rem] min-[456px]:w-full h-11 px-4 bg-barber-400 rounded 
          outline-none placeholder:text-zinc-500 placeholder:text-sm"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email...."
          className="w-[17rem] min-[456px]:w-full h-11 px-4 bg-barber-400 rounded 
          outline-none placeholder:text-zinc-500 placeholder:text-sm"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="************"
          className="w-[17rem] min-[456px]:w-full h-11 px-4 bg-barber-400 
          rounded outline-none placeholder:text-zinc-500 placeholder:text-sm"
        />

        <button
          type="submit"
          className="w-[17rem] min-[456px]:w-full h-11 text-barber-900 font-bold 
          rounded bg-button-cta"
        >
          Cadastrar
        </button>
      </form>
      <span className="mt-3 text-sm sm:text-base text-center">
        Ja tenhho conta.{' '}
        <Link
          href="/login"
          className="underline underline-offset-2 transition-opacity 
            text-orange-900 hover:opacity-50"
        >
          Faça login.
        </Link>
      </span>
    </>
  )
}
