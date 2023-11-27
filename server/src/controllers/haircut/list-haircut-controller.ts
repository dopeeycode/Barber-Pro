import { Request, Response } from 'express'
import { z } from 'zod'
import { ListHaircutService } from './../../services/haircut/list-haircut-service'

export class ListHaircutController {
  async handle(request: Request, reply: Response) {
    const { user_id } = request
    const listHaircutBodySchema = z.object({ status: z.string() })

    const { status } = listHaircutBodySchema.parse(request.query)

    const listHaircutService = new ListHaircutService()
    const haircut = await listHaircutService.execute({
      status,
      user_id,
    })

    return reply.json(haircut)
  }
}
