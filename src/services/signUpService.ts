import { ok, serverError } from '../helpers/service'
import { UserWithoutId } from '../models/user'
import { ServiceResponse } from '../protocols/serviceResponse'

export const signUpService = async (userData: UserWithoutId): Promise<ServiceResponse> => {
  try {
    return ok(userData)
  } catch (err) {
    return serverError()
  }
}
