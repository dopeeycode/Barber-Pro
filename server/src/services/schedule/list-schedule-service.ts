import { prisma } from '@/lib/prisma'

interface ListScheduleServiceRequest {
  user_id: string
}

export class ListScheduleService {
  async execute({ user_id }: ListScheduleServiceRequest) {
    const schedule = await prisma.service.findMany({
      where: {
        user_id,
      },
      select: {
        id: true,
        customer: true,
        haircut: true,
      },
    })

    return schedule
  }
}
