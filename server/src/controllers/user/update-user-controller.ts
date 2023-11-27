import { Request, Response } from 'express'
import { z } from 'zod'
import { UpdateUserService } from './../../services/user/update-user-service'

export class UpdateUserController {
  async handle(request: Request, reply: Response) {
    const { user_id } = request
    const updateUserBodySchema = z.object({
      name: z.string(),
      address: z.string({ required_error: 'Is Empty' }),
    })
    const { name, address } = updateUserBodySchema.parse(request.body)

    const updateUserService = new UpdateUserService()

    const user = await updateUserService.execute({
      name,
      address,
      user_id,
    })

    return reply.json(user)
  }
}
