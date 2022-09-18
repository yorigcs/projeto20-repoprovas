import { Router } from 'express'
import { signInSchema, signUpSchema } from '../schemas/authSchemas'
import { validateBody } from '../middlewares/validateBody'
import { signUpController } from '../controllers/signUpController'
import { signInController } from '../controllers/signInController'
export default (router: Router): void => {
  router.post('/sign-up', validateBody(signUpSchema), signUpController)
  router.post('/sign-in', validateBody(signInSchema), signInController)
}
