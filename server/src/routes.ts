import { Router } from 'express'
import { RegisterUserController } from './controllers/user/register-user-controller'

export const router = Router()

router.post('/users', new RegisterUserController().handle)
