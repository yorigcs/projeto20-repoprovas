import { prismaClient } from '../../prisma/prismaClient'
import { TestWithoutId, Test } from '../models/tests'

export const createTest = async (testData: TestWithoutId): Promise<Test> => {
  const result = await prismaClient.test.create({ data: testData })
  return result
}
