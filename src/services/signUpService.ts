import { conflict, created, serverError } from '../helpers/service'
import { UserData } from '../models/user'
import { ServiceResponse } from '../protocols/serviceResponse'
import { createUser, findUserByEmail } from '../repositories/userRepository'
import { encrypt } from '../utils/bcryptAdapter'

export const signUpService = async (userData: UserData): Promise<ServiceResponse> => {
  try {
    const salt = 12
    const hashedPassword = await encrypt(userData.password, salt)
    Object.assign(userData, { password: hashedPassword })

    const user = await findUserByEmail(userData.email)
    if (user) {
      return conflict(new Error('This user is already registered'))
    }
    delete userData.confirmPassword

    const regiterUser = await createUser(userData)
    return created(regiterUser)
  } catch (err) {
    console.log(err)
    return serverError()
  }
}
