import { prisma } from '@/lib/prisma'

interface DetailsHaircutServiceRequest {
  haircut_id: string
}

export class DetailsHaircutService {
  async execute({ haircut_id }: DetailsHaircutServiceRequest) {
    const haircut = await prisma.haircut.findFirst({
      where: {
        id: haircut_id,
      },
    })

    if (!haircut) {
      throw new Error('haircut not find.')
    }

    return haircut
  }
}
