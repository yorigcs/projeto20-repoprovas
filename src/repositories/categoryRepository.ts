import { prismaClient } from '../../prisma/prismaClient'
import { Category } from '../models/category'

export const findCategoryById = async (id: number): Promise<Category> => {
  const result = await prismaClient.category.findUnique({
    where: { id }
  })
  return result
}
