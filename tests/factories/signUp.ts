import { faker } from '@faker-js/faker'
import { UserData } from '../../src/models/user'

export const signUp = (): UserData => {
  const password = faker.random.alphaNumeric(15)
  return {
    email: faker.internet.email(),
    password,
    confirmPassword: password
  }
}
