import { UpdateHaircutService } from '@/services/haircut/update-haircut-service'
import { Request, Response } from 'express'
import { z } from 'zod'

export class UpdateHaircutController {
  async handle(request: Request, reply: Response) {
    const { user_id } = request
    const updateHaircutBodySchema = z.object({
      name: z.string(),
      haircut_id: z.string(),
      status: z.boolean(),
      price: z.number(),
    })
    const { name, price, status, haircut_id } = updateHaircutBodySchema.parse(
      request.body,
    )

    const updateHaircutService = new UpdateHaircutService()

    const haircut = await updateHaircutService.execute({
      haircut_id,
      name,
      price,
      status,
      user_id,
    })

    return reply.json(haircut)
  }
}
