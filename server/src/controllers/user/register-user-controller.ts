import { RegisterUserService } from '@/services/user/register-user-service'
import { Request, Response } from 'express'
import { z } from 'zod'

export class RegisterUserController {
  async handle(request: Request, reply: Response) {
    const registerUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z
        .string()
        .min(6, 'the password the most least be a 6 characters'),
    })
    const { name, email, password } = registerUserBodySchema.parse(request.body)
    const registerUserService = new RegisterUserService()

    const { user } = await registerUserService.execute({
      name,
      email,
      password,
    })

    return reply.json(user)
  }
}
