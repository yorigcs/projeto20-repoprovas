import dotenv from 'dotenv'
dotenv.config()

export const env = {
  port: process.env.PORT || 5000,
  jwt_secret: process.env.JWT_SECRET || 'secret',
  jwt_exp: process.env.JWT_EXP || '1d'
}
