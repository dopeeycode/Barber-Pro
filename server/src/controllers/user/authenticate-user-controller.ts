import { AuthenticateUserService } from '@/services/user/authenticate-user-service'
import { Request, Response } from 'express'
import { z } from 'zod'

export class AuthenticateUserController {
  async handle(request: Request, reply: Response) {
    const authenticateUserBodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    })
    const { email, password } = authenticateUserBodySchema.parse(request.body)
    const authenticateUserService = new AuthenticateUserService()

    const user = await authenticateUserService.execute({
      email,
      password,
    })

    return reply.json({
      user,
    })
  }
}
