import { Response, Request } from 'express'
import { createTestService } from '../services/createTestService'

export const createTestController = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const resp = await createTestService(req.body)
  if (resp.statusCode < 299) {
    return res.status(resp.statusCode).send(resp.body)
  } else {
    return res.status(resp.statusCode).json({ error: resp.body.message })
  }
}
