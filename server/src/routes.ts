import { Router } from 'express'
import { AuthenticateUserController } from './controllers/user/authenticate-user-controller'
import { DetailsUserController } from './controllers/user/details-user-controller'
import { RegisterUserController } from './controllers/user/register-user-controller'
import { UpdateUserController } from './controllers/user/update-user-controller'
import { isAuthenticated } from './middlewares/is-authenticated'

export const router = Router()

router.post('/users', new RegisterUserController().handle)
router.post('/sessions', new AuthenticateUserController().handle)
router.get('/me', isAuthenticated, new DetailsUserController().handle)
router.put('/users', isAuthenticated, new UpdateUserController().handle)
