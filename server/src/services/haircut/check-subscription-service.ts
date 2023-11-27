import { prisma } from '@/lib/prisma'

interface CheckSubscriptionServiceRequest {
  user_id: string
}

export class CheckSubscriptionService {
  async execute({ user_id }: CheckSubscriptionServiceRequest) {
    const status = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        subscriptions: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    })

    return status
  }
}
