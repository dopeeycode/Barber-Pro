import { FinishScheduleService } from '@/services/schedule/finish-schedule-service'
import { Request, Response } from 'express'
import { z } from 'zod'

export class FinishScheduleController {
  async handle(request: Request, reply: Response) {
    const { user_id } = request
    const finishScheduleBodySchema = z.object({
      schedule_id: z.string(),
    })
    const { schedule_id } = finishScheduleBodySchema.parse(request.query)

    const finishScheduleService = new FinishScheduleService()
    const schedule = await finishScheduleService.execute({
      user_id,
      schedule_id,
    })

    return reply.json(schedule)
  }
}
