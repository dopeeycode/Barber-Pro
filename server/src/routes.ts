import { Router } from 'express'
import { CreateHaircutController } from './controllers/haircut/create-haircut-controller'
import { ListHaircutController } from './controllers/haircut/list-haircut-controller'
import { UpdateHaircutController } from './controllers/haircut/update-haircut-controller'
import { AuthenticateUserController } from './controllers/user/authenticate-user-controller'
import { DetailsUserController } from './controllers/user/details-user-controller'
import { RegisterUserController } from './controllers/user/register-user-controller'
import { UpdateUserController } from './controllers/user/update-user-controller'
import { isAuthenticated } from './middlewares/is-authenticated'

export const router = Router()

// Routes User
router.post('/users', new RegisterUserController().handle)
router.post('/sessions', new AuthenticateUserController().handle)
router.get('/me', isAuthenticated, new DetailsUserController().handle)
router.put('/users', isAuthenticated, new UpdateUserController().handle)

// Routes Haircut
router.post('/haircut', isAuthenticated, new CreateHaircutController().hanlde)
router.get('/haircuts', isAuthenticated, new ListHaircutController().handle)
router.put('/haircut', isAuthenticated, new UpdateHaircutController().handle)
