import { ok, serverError } from '../helpers/service'
import { UserWithoutId } from '../models/user'
import { ServiceResponse } from '../protocols/serviceResponse'
import { encrypt } from '../utils/bcryptAdapter'

export const signUpService = async (userData: UserWithoutId): Promise<ServiceResponse> => {
  try {
    const salt = 12
    const hashedPassword = await encrypt(userData.password, salt)
    Object.assign(userData, { password: hashedPassword })

    return ok(userData)
  } catch (err) {
    return serverError()
  }
}
