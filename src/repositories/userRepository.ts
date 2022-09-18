import { prismaClient } from '../../prisma/prismaClient'
import { UserWithoutId, User } from '../models/user'

export const createUser = async (userData: UserWithoutId): Promise<User> => {
  const user = await prismaClient.user.create({ data: userData })
  return user
}

export const findUserByEmail = async (email: string): Promise<User> => {
  const user = await prismaClient.user.findUnique({ where: { email } })
  return user
}
