import { prismaClient } from './prismaClient'

async function main (): Promise<void> {
  const numbers = [1, 2, 3, 4, 5, 6]
  for (const num of numbers) {
    await prismaClient.term.upsert({ where: { number: num }, update: {}, create: { number: num } })
  }

  const categories = ['Projeto', 'Prática', 'Recuperação']
  for (const categ of categories) {
    await prismaClient.category.upsert({ where: { name: categ }, update: {}, create: { name: categ } })
  }

  const teachers = ['Diego Pinho', 'Bruna Hamori']
  for (const teach of teachers) {
    await prismaClient.teacher.upsert({ where: { name: teach }, update: {}, create: { name: teach } })
  }

  const disciplines = [{ 1: 'HTML e CSS' }, { 2: 'JavaScript' }, { 3: 'React' }, { 1: 'Humildade' }, { 2: 'Planejamento' }, { 3: 'Autoconfiança' }]

  for (const discipli of disciplines) {
    await prismaClient.discipline.upsert({ where: { name: Object.values(discipli)[0] }, update: {}, create: { term_id: parseInt(Object.keys(discipli)[0]), name: Object.values(discipli)[0] } })
  }

  const teachersDisciplines = [{ 1: 1 }, { 1: 2 }, { 1: 3 }, { 2: 4 }, { 2: 5 }, { 2: 6 }]
  for (const teacheDiscipli of teachersDisciplines) {
    const result = await prismaClient.teacherDiscipline.findFirst({ where: { AND: [{ teacher_id: parseInt(Object.keys(teacheDiscipli)[0]) }, { discipline_id: Object.values(teacheDiscipli)[0] }] } })
    if (!result) {
      await prismaClient.teacherDiscipline.create({ data: { teacher_id: parseInt(Object.keys(teacheDiscipli)[0]), discipline_id: Object.values(teacheDiscipli)[0] } })
    }
  }
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prismaClient.$disconnect()
  })
