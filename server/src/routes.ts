import { Router } from 'express'

export const router = Router()

router.get('/', (request, reply) => {
  reply.json({ ok: true })
})
