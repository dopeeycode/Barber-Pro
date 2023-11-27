import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from '../../errors/user-already-exists-error'

interface RegisterUserServiceRequest {
  name: string
  email: string
  password: string
}

interface RegisterUserServiceResponse {
  user: Pick<User, 'name' | 'email' | 'id'>
}

export class RegisterUserService {
  async execute({
    name,
    email,
    password,
  }: RegisterUserServiceRequest): Promise<RegisterUserServiceResponse> {
    const userWithTheSameEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (userWithTheSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const passwordHash = await hash(password, 6)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        name: true,
        email: true,
        id: true,
      },
    })

    return {
      user,
    }
  }
}
