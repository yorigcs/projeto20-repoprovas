import { ServiceResponse } from '../protocols/serviceResponse'

export const ok = (data: any): ServiceResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (): ServiceResponse => ({
  statusCode: 500,
  body: new Error('An internal server error occurred, try again later')
})
