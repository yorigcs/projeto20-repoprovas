import { Response, Request } from 'express'
import { getTestByTermService, getTestByTeacherService } from '../services/getTestsService'

export const getTestByTermController = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const resp = await getTestByTermService()
  if (resp.statusCode < 299) {
    return res.status(resp.statusCode).send(resp.body)
  } else {
    return res.status(resp.statusCode).json({ error: resp.body.message })
  }
}

export const getTestByTeacherController = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  const resp = await getTestByTeacherService()
  if (resp.statusCode < 299) {
    return res.status(resp.statusCode).send(resp.body)
  } else {
    return res.status(resp.statusCode).json({ error: resp.body.message })
  }
}
