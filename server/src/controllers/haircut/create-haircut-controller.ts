import { Request, Response } from 'express'
import { z } from 'zod'
import { CreateHaircutService } from './../../services/haircut/create-haircurt-service'

export class CreateHaircutController {
  async hanlde(request: Request, reply: Response) {
    const { user_id } = request
    const createHaircutBodySchema = z.object({
      name: z.string(),
      price: z.number(),
    })
    const { name, price } = createHaircutBodySchema.parse(request.body)

    const createHaircutService = new CreateHaircutService()
    const haircut = await createHaircutService.execute({
      name,
      price,
      user_id,
    })

    return reply.status(201).json(haircut)
  }
}
