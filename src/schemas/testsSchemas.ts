import Joi from 'joi'

export const testSchema = Joi.object({
  name: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  categoryId: Joi.number().min(1).required(),
  teacherDisciplineId: Joi.number().min(1).required()
})
