import { Router } from 'express'
import { testSchema } from '../schemas/testsSchemas'
import { validateBody } from '../middlewares/validateBody'
import { validateToken } from '../middlewares/validateToken'
import { createTestController } from '../controllers/createTestController'
export default (router: Router): void => {
  router.post('/test', validateBody(testSchema), validateToken(), createTestController)
}
