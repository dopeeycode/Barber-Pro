import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { ZodError } from 'zod'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use(
  /* eslint-disable @typescript-eslint/no-unused-vars */
  (err: Error, _request: Request, reply: Response, _next: NextFunction) => {
    if (err instanceof ZodError) {
      return reply.status(400).json({ error: err.format() })
    }

    if (err instanceof Error) {
      return reply.status(400).json({ error: err.message })
    }

    return reply
      .status(500)
      .json({ status: 'error', message: 'Internal server error.' })
  },
)

app.listen(3333, () =>
  console.log('🚀 HTTP Server running an http://localhost:3333'),
)
