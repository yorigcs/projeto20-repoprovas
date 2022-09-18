import Joi from 'joi'

export const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref('password')
})

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})
