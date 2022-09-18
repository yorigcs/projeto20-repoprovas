import { Response, Request } from 'express'
import { testsService } from '../services/testsService'

export const testsController = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const resp = await testsService(req.body)
  if (resp.statusCode < 299) {
    return res.status(resp.statusCode).send(resp.body)
  } else {
    return res.status(resp.statusCode).json({ error: resp.body.message })
  }
}
