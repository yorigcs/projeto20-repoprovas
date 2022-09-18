import { Response, Request } from 'express'
import { signUpService } from '../services/signUpService'

export const signUpController = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const resp = await signUpService(req.body)
  if (resp.statusCode < 299) {
    return res.status(resp.statusCode).send(resp.body)
  } else {
    return res.status(resp.statusCode).json({ error: resp.body.message })
  }
}
