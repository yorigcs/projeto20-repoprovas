import { created, serverError, notFound } from '../helpers/service'
import { TestWithoutId } from '../models/tests'
import { ServiceResponse } from '../protocols/serviceResponse'
import { findCategoryById } from '../repositories/categoryRepository'

export const testsService = async (testData: TestWithoutId): Promise<ServiceResponse> => {
  try {
    const category = await findCategoryById(parseInt(testData.category_id))
    if (!category) {
      return notFound(new Error('This category does not exist!'))
    }
    return created(testData)
  } catch (err) {
    console.log(err)
    return serverError()
  }
}
