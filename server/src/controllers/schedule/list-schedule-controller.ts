import { ListScheduleService } from '@/services/schedule/list-schedule-service'
import { Request, Response } from 'express'

export class ListScheduleController {
  async handle(request: Request, reply: Response) {
    const { user_id } = request

    const listScheduleService = new ListScheduleService()
    const schedule = await listScheduleService.execute({
      user_id,
    })

    return reply.json(schedule)
  }
}
