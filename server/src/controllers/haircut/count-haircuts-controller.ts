import { CountHaircutsService } from '@/services/haircut/count-haircuts-service'
import { Request, Response } from 'express'

export class CountHaircutsController {
  async handle(request: Request, reply: Response) {
    const { user_id } = request

    const countHaircutService = new CountHaircutsService()
    const countHaircuts = await countHaircutService.execute({ user_id })

    return reply.json(countHaircuts)
  }
}
