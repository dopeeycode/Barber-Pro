import { prisma } from '@/lib/prisma'

interface UpdateUserServiceRequest {
  user_id: string
  name: string
  address: string
}

export class UpdateUserService {
  async execute({ name, address, user_id }: UpdateUserServiceRequest) {
    try {
      const userAlreadyExists = await prisma.user.findFirst({
        where: {
          id: user_id,
        },
      })

      if (!userAlreadyExists) {
        throw new Error('An error unexpected, looks this user not exists')
      }

      const userUpdated = await prisma.user.update({
        where: {
          id: user_id,
        },
        data: {
          name,
          address,
        },
        select: {
          name: true,
          email: true,
          address: true,
        },
      })

      return userUpdated
    } catch (error) {
      console.log(error)
      throw new Error('Erro an update the user')
    }
  }
}
