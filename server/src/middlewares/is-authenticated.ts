import { env } from '@/env'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface isAuthenticatedPayLoad {
  sub: string
}

export function isAuthenticated(
  request: Request,
  reply: Response,
  next: NextFunction,
) {
  const authTokenRequest = request.headers.authorization

  if (!authTokenRequest) {
    return reply.status(401).end()
  }

  const [, token] = authTokenRequest.split(' ')

  try {
    const { sub } = verify(token, env.JWT_SECRET) as isAuthenticatedPayLoad

    request.user_id = sub

    return next()
  } catch (error) {
    return reply.status(401).end()
  }
}
