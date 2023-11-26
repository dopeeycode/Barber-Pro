import { AuthenticateUserService } from '@/services/user/authenticate-user-service'
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import { z } from 'zod'
import { env } from './../../env'

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

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '7d',
      },
    )

    const { name, email: userEmail, address, subscriptions } = user

    return reply.json({
      name,
      userEmail,
      address,
      subscriptions,
      token,
    })
  }
}
