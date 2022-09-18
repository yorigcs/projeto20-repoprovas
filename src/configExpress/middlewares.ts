import { Express } from 'express'
import { bodyParser, cors, contentType } from './middlewaresConfig'
export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
