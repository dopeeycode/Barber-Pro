import { Request, Response } from 'express'
import { z } from 'zod'
import { DetailsHaircutService } from './../../services/haircut/details-haircut-service'

export class DetailsHaircutController {
  async handle(request: Request, reply: Response) {
    const detailsHaircutQueryShema = z.object({
      haircut_id: z.string({ required_error: 'haircut_id is empty in query' }),
    })
    const { haircut_id } = detailsHaircutQueryShema.parse(request.query)

    try {
      const detailsHaircutService = new DetailsHaircutService()
      const haircut = await detailsHaircutService.execute({ haircut_id })

      return reply.json(haircut)
    } catch (error) {
      if (error instanceof Error) {
        return reply
          .status(400)
          .json({ message: 'Error.', issues: error.message })
      }
    }

    return reply.status(500).json({ message: 'INTERNAL SERVER ERROR' })
  }
}
