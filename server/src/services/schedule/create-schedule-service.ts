import { prisma } from '@/lib/prisma'

interface CreateScheduleServiceRequest {
  user_id: string
  haircut_id: string
  customer: string
}

export class CreateScheduleService {
  async execute({
    customer,
    user_id,
    haircut_id,
  }: CreateScheduleServiceRequest) {
    const schedule = await prisma.service.create({
      data: {
        customer,
        haircut_id,
        user_id,
      },
    })

    return schedule
  }
}
