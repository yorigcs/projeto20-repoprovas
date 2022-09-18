import { Router } from 'express'
import { signUpSchema } from '../schemas/authSchemas'
import { validateBody } from '../middlewares/validateBody'
export default (router: Router): void => {
  router.post('/sign-up', validateBody(signUpSchema), (req, res) => res.send('ok'))
}
