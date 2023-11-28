import { prisma } from '@/lib/prisma'

interface CountHaircutsServiceRequest {
  user_id: string
}

export class CountHaircutsService {
  async execute({ user_id }: CountHaircutsServiceRequest) {
    const countHaircut = await prisma.haircut.count({
      where: {
        user_id,
      },
    })

    return countHaircut
  }
}
