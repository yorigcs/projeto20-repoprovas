import { prismaClient } from '../../prisma/prismaClient'
import { TestWithoutId, Test } from '../models/tests'

export const createTest = async (testData: TestWithoutId): Promise<Test> => {
  const result = await prismaClient.test.create({ data: testData })
  return result
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getTestByTerms = async () => {
  const tests = await prismaClient.term.findMany({
    select: {
      id: true,
      number: true,
      discipline: {
        select: {
          id: true,
          name: true,
          TeacherDiscipline: {
            select: {
              teacher: true,
              Test: {
                select: {
                  id: true,
                  name: true,
                  pdf_url: true,
                  category_id: true
                }
              }

            }
          }
        }
      }

    }
  })
  return tests
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getTestByTeacher = async () => {
  const tests = await prismaClient.teacher.findMany({
    select: {
      id: true,
      name: true,
      TeacherDiscipline: {
        select: {
          discipline: {
            select: {
              id: true,
              name: true,
              term: {
                select: {
                  id: true,
                  number: true
                }
              }
            }
          },
          Test: {
            select: {
              id: true,
              name: true,
              pdf_url: true,
              category: true
            }
          }
        }
      }
    }
  })
  return tests
}
