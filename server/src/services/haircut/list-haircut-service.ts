import { prisma } from '@/lib/prisma'
import { Haircut } from '@prisma/client'

interface ListHaircutServiceRequest {
  user_id: string
  status: boolean | string
}

export class ListHaircutService {
  async execute({
    user_id,
    status,
  }: ListHaircutServiceRequest): Promise<Haircut[]> {
    const haircuts = prisma.haircut.findMany({
      where: {
        user_id,
        status: status === 'true' ? true : false,
      },
    })

    return haircuts
  }
}
