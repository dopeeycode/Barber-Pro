import { ReactNode, createContext, useContext, useState } from 'react'

interface SubscriptionProps {
  id: string
  status: string
}

interface UserProps {
  id: string
  name: string
  address: string | null
  token: string
  subscriptions: SubscriptionProps | null
}

interface AuthContextData {
  user: UserProps
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  async function signIn(email: string, password: string) {
    console.log({ email, password })
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const { isAuthenticated, signIn, user } = useContext(AuthContext)

  return {
    isAuthenticated,
    signIn,
    user,
  }
}
