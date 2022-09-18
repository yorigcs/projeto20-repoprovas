import { prismaClient } from '../../prisma/prismaClient'
import { TeacherDiscipline } from '../models/teacherDiscipline'

export const findTeachersDisciplineById = async (id: number): Promise<TeacherDiscipline> => {
  const result = await prismaClient.teacherDiscipline.findUnique({
    where: { id }
  })
  return result
}
