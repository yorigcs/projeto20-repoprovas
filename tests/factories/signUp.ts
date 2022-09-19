import { faker } from '@faker-js/faker'
import { UserData, UserWithoutId, User } from '../../src/models/user'
import { createUser } from '../../src/repositories/userRepository'

export const signUp = (): UserData => {
  const password = faker.random.alphaNumeric(15)
  return {
    email: faker.internet.email(),
    password,
    confirmPassword: password
  }
}

export const signUpRegisterFakerUser = async (user: UserWithoutId): Promise<User> => {
  const result = await createUser(user)
  return result
}
