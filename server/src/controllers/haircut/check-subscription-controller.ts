import { CheckSubscriptionService } from '@/services/haircut/check-subscription-service'
import { Request, Response } from 'express'

export class CheckSubscriptionController {
  async handle(request: Request, reply: Response) {
    const { user_id } = request

    const checkSubscriptionService = new CheckSubscriptionService()
    const subscription = await checkSubscriptionService.execute({ user_id })

    return reply.json(subscription)
  }
}
