import { BePremiumError } from '@/errors/be-premium-error'
import { prisma } from '@/lib/prisma'
import { Haircut } from '@prisma/client'

interface UpdateHaircutServiceRequest {
  haircut_id: string
  user_id: string
  name: string
  price: number
  status: boolean | string
}

export class UpdateHaircutService {
  async execute({
    name,
    price,
    status = true,
    haircut_id,
    user_id,
  }: UpdateHaircutServiceRequest): Promise<Haircut> {
    const user = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    })

    if (user?.subscriptions?.status !== 'active') {
      throw new BePremiumError('you need be premium to use this functionality.')
    }

    const haircut = await prisma.haircut.update({
      where: {
        id: haircut_id,
      },
      data: {
        name,
        price,
        status: status === 'true' ? true : false,
      },
    })

    return haircut
  }
}
