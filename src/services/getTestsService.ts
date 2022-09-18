import { ok, serverError } from '../helpers/service'
import { ServiceResponse } from '../protocols/serviceResponse'
import { getTestByTerms } from '../repositories/testRepository'

export const getTestByTermService = async (): Promise<ServiceResponse> => {
  try {
    const test = await getTestByTerms()
    return ok(test)
  } catch (err) {
    console.log(err)
    return serverError()
  }
}
