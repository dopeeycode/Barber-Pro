import { prisma } from '@/lib/prisma'

interface DetailsUserServiceRequest {
  user_id: string
}

export class DetailsUserService {
  async execute({ user_id }: DetailsUserServiceRequest) {
    const user = prisma.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        address: true,
        subscriptions: {
          select: {
            id: true,
            priceId: true,
            status: true,
          },
        },
      },
    })

    return user
  }
}
