import { Router } from 'express'
import { AuthenticateUserController } from './controllers/user/authenticate-user-controller'
import { RegisterUserController } from './controllers/user/register-user-controller'

export const router = Router()

router.post('/users', new RegisterUserController().handle)
router.post('/sessions', new AuthenticateUserController().handle)
