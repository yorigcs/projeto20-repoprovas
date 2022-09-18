import { created, serverError, notFound } from '../helpers/service'
import { TestWithoutId } from '../models/tests'
import { ServiceResponse } from '../protocols/serviceResponse'
import { findCategoryById } from '../repositories/categoryRepository'
import { findTeachersDisciplineById } from '../repositories/teachersDisciplinesRepository'

export const testsService = async (testData: TestWithoutId): Promise<ServiceResponse> => {
  try {
    const category = await findCategoryById(parseInt(testData.category_id))
    if (!category) {
      return notFound(new Error('This category does not exist!'))
    }

    const teacherDiscipline = await findTeachersDisciplineById(parseInt(testData.teacher_discipline_id))
    if (!teacherDiscipline) {
      return notFound(new Error('This teacherDisciplineId does not exist!'))
    }
    return created(testData)
  } catch (err) {
    console.log(err)
    return serverError()
  }
}
