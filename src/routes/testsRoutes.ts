import { Router } from 'express'
import { testSchema } from '../schemas/testsSchemas'
import { validateBody } from '../middlewares/validateBody'
import { validateToken } from '../middlewares/validateToken'
import { testsController } from '../controllers/testsController'
export default (router: Router): void => {
  router.post('/term', validateBody(testSchema), validateToken(), testsController)
}
