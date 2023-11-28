import { prisma } from '@/lib/prisma'

interface FinishScheduleServiceRequest {
  user_id: string
  schedule_id: string
}

export class FinishScheduleService {
  async execute({ user_id, schedule_id }: FinishScheduleServiceRequest) {
    try {
      const belongsToUser = await prisma.service.findFirst({
        where: {
          id: schedule_id,
          user_id,
        },
      })

      if (!belongsToUser) {
        throw new Error('Not authorized.')
      }

      await prisma.service.delete({
        where: {
          id: schedule_id,
        },
      })

      return { message: 'Finish the schedule' }
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  }
}
