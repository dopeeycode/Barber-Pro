import { BePremiumError } from '@/errors/be-premium-error'
import { prisma } from '@/lib/prisma'
import { Haircut } from '@prisma/client'

interface CreateHaircutServiceRequest {
  user_id: string
  name: string
  price: number
}

export class CreateHaircutService {
  async execute({
    name,
    price,
    user_id,
  }: CreateHaircutServiceRequest): Promise<Haircut> {
    const haircutQuantityAnUser = await prisma.haircut.count({
      where: {
        user_id,
      },
    })
    const user = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    })

    if (
      haircutQuantityAnUser >= 3 &&
      user?.subscriptions?.status !== 'active'
    ) {
      throw new BePremiumError(
        'you have exceeded the limit. go premium for unlimited models',
      )
    }

    const haircut = await prisma.haircut.create({
      data: {
        name,
        price,
        user_id,
      },
    })

    return haircut
  }
}
