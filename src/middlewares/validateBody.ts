import joi from 'joi'
import { Response, Request, NextFunction } from 'express'

export const validateBody = (schema: joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body)
    if (error) {
      return res.status(422).json({ error: error.message })
    }
    next()
  }
}
