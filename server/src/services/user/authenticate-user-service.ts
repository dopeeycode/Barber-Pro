import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'

interface AuthenticateUserServiceRequest {
  email: string
  password: string
}

export class AuthenticateUserService {
  async execute({ email, password }: AuthenticateUserServiceRequest) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
      include: {
        subscriptions: true,
      },
    })

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const passwordMatches = await compare(password, user.password)

    if (!passwordMatches) {
      throw new InvalidCredentialsError()
    }

    return user
  }
}
