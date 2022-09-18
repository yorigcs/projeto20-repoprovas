import { created, serverError } from '../helpers/service'
import { TestWithoutId } from '../models/tests'
import { ServiceResponse } from '../protocols/serviceResponse'

export const testsService = async (testData: TestWithoutId): Promise<ServiceResponse> => {
  try {
    return created(testData)
  } catch (err) {
    console.log(err)
    return serverError()
  }
}
