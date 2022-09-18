import { created, serverError, notFound } from '../helpers/service'
import { TestData } from '../models/tests'
import { ServiceResponse } from '../protocols/serviceResponse'
import { findCategoryById } from '../repositories/categoryRepository'
import { findTeachersDisciplineById } from '../repositories/teachersDisciplinesRepository'
import { createTest } from '../repositories/testRepository'

export const createTestService = async (testData: TestData): Promise<ServiceResponse> => {
  try {
    const category = await findCategoryById(parseInt(testData.category_id))
    if (!category) {
      return notFound(new Error('This category does not exist!'))
    }

    const teacherDiscipline = await findTeachersDisciplineById(parseInt(testData.teacher_discipline_id))
    if (!teacherDiscipline) {
      return notFound(new Error('This teacherDisciplineId does not exist!'))
    }
    const test = await createTest(Object.assign({}, testData, { category_id: parseInt(testData.category_id), teacher_discipline_id: parseInt(testData.teacher_discipline_id) }))
    return created(test)
  } catch (err) {
    console.log(err)
    return serverError()
  }
}
