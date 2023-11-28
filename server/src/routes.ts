import { Router } from 'express'
import { CheckSubscriptionController } from './controllers/haircut/check-subscription-controller'
import { CountHaircutsController } from './controllers/haircut/count-haircuts-controller'
import { CreateHaircutController } from './controllers/haircut/create-haircut-controller'
import { DetailsHaircutController } from './controllers/haircut/details-haircut-controller'
import { ListHaircutController } from './controllers/haircut/list-haircut-controller'
import { UpdateHaircutController } from './controllers/haircut/update-haircut-controller'
import { CreateScheduleController } from './controllers/schedule/create-schedule-service'
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
router.get(
  '/haircut/check',
  isAuthenticated,
  new CheckSubscriptionController().handle,
)
router.get(
  '/haircut/count',
  isAuthenticated,
  new CountHaircutsController().handle,
)
router.get(
  '/haircut/detail',
  isAuthenticated,
  new DetailsHaircutController().handle,
)

// Routes Schedule / Serviços

router.post('/schedule', isAuthenticated, new CreateScheduleController().handle)
