import { notFound, ok, serverError } from '../helpers/service'
import { UserWithoutId } from '../models/user'
import { ServiceResponse } from '../protocols/serviceResponse'
import { findUserByEmail } from '../repositories/userRepository'
import { decrypt } from '../utils/bcryptAdapter'

export const signInService = async (userData: UserWithoutId): Promise<ServiceResponse> => {
  try {
    const user = await findUserByEmail(userData.email)
    if (!user) {
      return notFound(new Error('Email or password is wrong'))
    }
    const isValidPassword = await decrypt(userData.password, user.password)
    if (!isValidPassword) {
      return notFound(new Error('Email or password is wrong'))
    }

    return ok('ok')
  } catch (err) {
    console.log(err)
    return serverError()
  }
}
