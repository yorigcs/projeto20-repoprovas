import Joi from 'joi'

export const testSchema = Joi.object({
  name: Joi.string().required(),
  pdf_url: Joi.string().uri().required(),
  category_id: Joi.number().min(1).required(),
  teacher_discipline_id: Joi.number().min(1).required()
})
