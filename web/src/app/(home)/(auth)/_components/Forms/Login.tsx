'use client'

import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

export default function FormLogin() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    await signIn(email, password)
  }

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="flex items-center justify-cente  w-[10rem] min-[416px]:w-[26rem]  flex-col gap-6"
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email...."
          className="w-[17rem] min-[456px]:w-full h-11 px-4 bg-barber-400 rounded 
              outline-none placeholder:text-zinc-500 placeholder:text-sm"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="************"
          className="w-[17rem] min-[456px]:w-full h-11 px-4 bg-barber-400 
          rounded outline-none placeholder:text-zinc-500 placeholder:text-sm"
        />

        <button
          type="submit"
          className="w-[17rem] min-[456px]:w-full h-11 text-barber-900 font-bold 
          rounded bg-button-cta"
        >
          Acessar
        </button>
      </form>
      <span className="mt-3 text-sm sm:text-base text-center">
        Quero cadastrar minha barbearia{' '}
        <Link
          href="/register"
          className="underline underline-offset-2 transition-opacity 
            text-orange-900 hover:opacity-50"
        >
          Clique aqui.
        </Link>
      </span>
    </>
  )
}
