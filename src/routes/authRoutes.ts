import { Router } from 'express'
import { signUpSchema } from '../schemas/authSchemas'
import { validateBody } from '../middlewares/validateBody'
import { signUpController } from '../controllers/signUpController'
export default (router: Router): void => {
  router.post('/sign-up', validateBody(signUpSchema), signUpController)
}
