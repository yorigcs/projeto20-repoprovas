import { Response, Request, NextFunction } from 'express'
import { decodeToken } from '../utils/jwtAdapter'

interface ReqToken extends Request {
  headers: {
    'x-acess-token': string
  }
}
export const validateToken = () => {
  return (req: ReqToken, res: Response, next: NextFunction) => {
    const token = req.headers['x-acess-token']?.replace('Bearer ', '')
    if (!token) {
      return res.status(403).json({ error: 'x-acess-token was not found!' })
    }
    const decoded = decodeToken(token)
    if (!decoded) {
      return res.status(401).json({ error: 'invalid token!' })
    }
    res.locals.userId = decoded.id
    next()
  }
}
