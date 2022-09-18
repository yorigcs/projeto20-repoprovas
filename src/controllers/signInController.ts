import { Response, Request } from 'express'
import { signInService } from '../services/signInService'

export const signInController = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const resp = await signInService(req.body)
  if (resp.statusCode < 299) {
    return res.status(resp.statusCode).send(resp.body)
  } else {
    return res.status(resp.statusCode).json({ error: resp.body.message })
  }
}
