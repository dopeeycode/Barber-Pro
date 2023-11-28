import { CreateScheduleService } from '@/services/schedule/create-schedule-service'
import { Request, Response } from 'express'
import { z } from 'zod'

export class CreateScheduleController {
  async handle(request: Request, reply: Response) {
    const { user_id } = request
    const createScheduleBodySchema = z.object({
      haircut_id: z.string({ required_error: 'haircut_id is empty.' }),
      customer: z.string({ required_error: 'customer name is empty.' }),
    })
    const { customer, haircut_id } = createScheduleBodySchema.parse(
      request.body,
    )

    const createScheduleService = new CreateScheduleService()
    const schedule = await createScheduleService.execute({
      customer,
      haircut_id,
      user_id,
    })

    return reply.json(schedule)
  }
}
