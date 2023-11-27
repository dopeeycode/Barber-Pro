import { Request, Response } from 'express'
import { DetailsUserService } from './../../services/user/details-user-service'

export class DetailsUserController {
  async handle(request: Request, reply: Response) {
    const { user_id } = request
    const detailsUserService = new DetailsUserService()

    const user = await detailsUserService.execute({
      user_id,
    })

    return reply.json(user)
  }
}
