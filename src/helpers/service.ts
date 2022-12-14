import { ServiceResponse } from '../protocols/serviceResponse'

export const ok = (data: any): ServiceResponse => ({
  statusCode: 200,
  body: data
})

export const created = (data: any): ServiceResponse => ({
  statusCode: 201,
  body: data
})

export const notFound = (data: any): ServiceResponse => ({
  statusCode: 404,
  body: data
})

export const conflict = (data: any): ServiceResponse => ({
  statusCode: 409,
  body: data
})
export const serverError = (): ServiceResponse => ({
  statusCode: 500,
  body: new Error('An internal server error occurred, try again later')
})
