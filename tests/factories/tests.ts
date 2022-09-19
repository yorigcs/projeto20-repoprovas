
import { TestData } from '../../src/models/tests'
import { faker } from '@faker-js/faker'
import { createToken } from '../../src/utils/jwtAdapter'

export const createBodyTest = (): TestData => (
  {
    name: faker.name.fullName(),
    pdf_url: faker.internet.url(),
    category_id: faker.datatype.number({ min: 1, max: 3 }).toString(),
    teacher_discipline_id: faker.datatype.number({ min: 1, max: 6 }).toString()
  }
)

export const createFakeToken = (): string => {
  const token = createToken({ id: faker.datatype.number({ min: 1, max: 3 }), email: faker.internet.email(), password: faker.internet.password() })
  return token
}
