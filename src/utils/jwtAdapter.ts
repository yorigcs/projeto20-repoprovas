import jwt from 'jsonwebtoken'
import { env } from '../env'
import { User } from '../models/user'

interface Payload {
  id: string
  email: string
  iat: number
  exp: number
}

export const createToken = (data: User): string => {
  return jwt.sign(data, env.jwt_secret, { expiresIn: env.jwt_exp })
}

export const decodeToken = (token: string): Payload => {
  try {
    const decoded = jwt.verify(token, env.jwt_secret) as Payload
    return decoded
  } catch (err) {
    return null
  }
}
