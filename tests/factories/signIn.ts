import { UserWithoutId } from '../../src/models/user'
import { faker } from '@faker-js/faker'
import { encrypt } from '../../src/utils/bcryptAdapter'
import { createUser } from '../../src/repositories/userRepository'
export const signIn = (): UserWithoutId => (
  {
    email: faker.internet.email(),
    password: faker.random.alphaNumeric(15)
  }
)

export const signInCreateAccount = async (data: UserWithoutId): Promise<void> => {
  await createUser(Object.assign({}, data, { password: await encrypt(data.password, 12) }))
}
