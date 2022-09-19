import { prismaClient } from '../prisma/prismaClient'

global.beforeEach(async () => {
  await prismaClient.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY;`
  await prismaClient.$executeRaw`TRUNCATE TABLE "tests" RESTART IDENTITY`
}, 60000)

global.afterAll(async () => {
  await prismaClient.$disconnect()
})
