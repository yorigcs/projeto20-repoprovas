import { Router } from 'express'
import { testSchema } from '../schemas/testsSchemas'
import { validateBody } from '../middlewares/validateBody'
import { validateToken } from '../middlewares/validateToken'
import { createTestController } from '../controllers/createTestController'
import { getTestByTermController, getTestByTeacherController } from '../controllers/getTestsController'

export default (router: Router): void => {
  router.post('/test', validateBody(testSchema), validateToken(), createTestController)
  router.get('/tests/term', validateToken(), getTestByTermController)
  router.get('/tests/teacher', validateToken(), getTestByTeacherController)
}
