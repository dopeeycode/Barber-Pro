import { env } from '@/env'
import { prisma } from '@/lib/prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { InvalidCredentialsError } from '../../errors/invalid-credentials-error'

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

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '7d',
      },
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      subscriptions: user.subscriptions
        ? {
            id: user.subscriptions?.id,
            status: user.subscriptions?.status,
          }
        : null,
      token,
    }
  }
}
