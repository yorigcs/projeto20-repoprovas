import supertest from 'supertest'
import { prismaClient } from '../prisma/prismaClient'
import app from '../src/configExpress/app'
import { createBodyTest, createFakeToken } from './factories/tests'

beforeEach(async () => {
  await prismaClient.$executeRaw`TRUNCATE TABLE tests RESTART IDENTITY CASCADE`
})

afterAll(async () => {
  await prismaClient.$disconnect()
})

describe('POST -> create test route', () => {
  test('should returns status 422 if name is not provided', async () => {
    const body = createBodyTest()
    const { name, ...bodyWithoutName } = body

    const sut = await supertest(app).post('/api/test').send(bodyWithoutName)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if pdf_url is not provided', async () => {
    const body = createBodyTest()
    const { pdf_url: pdfURL, ...bodyWithoutPdfUrl } = body

    const sut = await supertest(app).post('/api/test').send(bodyWithoutPdfUrl)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if pdf_url is not a valid url', async () => {
    const body = createBodyTest()
    Object.assign(body, { pdf_url: 'invalid_url' })

    const sut = await supertest(app).post('/api/test').send(body)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if category_id is not provided', async () => {
    const body = createBodyTest()
    const { category_id: categoryId, ...bodyWithoutCategoriId } = body

    const sut = await supertest(app).post('/api/test').send(bodyWithoutCategoriId)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if teacher_discipline_id is not provided', async () => {
    const body = createBodyTest()
    const { teacher_discipline_id: teacherDisciplineId, ...bodyWithoutTeacherDisciplineId } = body

    const sut = await supertest(app).post('/api/test').send(bodyWithoutTeacherDisciplineId)
    expect(sut.status).toBe(422)
  })

  test('should returns status 403 if x-acess-token is not provided', async () => {
    const body = createBodyTest()

    const sut = await supertest(app).post('/api/test').send(body)
    expect(sut.status).toBe(403)
  })

  test('should returns status 401 if x-acess-token is invalid', async () => {
    const body = createBodyTest()

    const sut = await supertest(app).post('/api/test').send(body).set('x-acess-token', 'Bearer invalid_token')
    expect(sut.status).toBe(401)
  })

  test('should returns status 404 if x-acess-token is valid and category_id does not exist', async () => {
    const body = createBodyTest()
    const token = createFakeToken()

    const sut = await supertest(app).post('/api/test').send(Object.assign({}, body, { category_id: 99999 })).set('x-acess-token', `Bearer ${token}`)
    expect(sut.status).toBe(404)
  })

  test('should returns status 404 if x-acess-token is valid and teacher_discipline_id does not exist', async () => {
    const body = createBodyTest()
    const token = createFakeToken()

    const sut = await supertest(app).post('/api/test').send(Object.assign({}, body, { teacher_discipline_id: 99999 })).set('x-acess-token', `Bearer ${token}`)
    expect(sut.status).toBe(404)
  })

  test('should returns status 201 if x-acess-token and body is valid', async () => {
    const body = createBodyTest()
    const token = createFakeToken()

    const sut = await supertest(app).post('/api/test').send(body).set('x-acess-token', `Bearer ${token}`)
    expect(sut.status).toBe(201)
  })
})

describe('GET -> get tests by terms', () => {
  test('should returns status 403 if x-acess-token is not provided', async () => {
    const sut = await supertest(app).get('/api/tests/term')
    expect(sut.status).toBe(403)
  })

  test('should returns status 401 if x-acess-token is invalid', async () => {
    const sut = await supertest(app).get('/api/tests/term').set('x-acess-token', 'Bearer invalid_token')
    expect(sut.status).toBe(401)
  })

  test('should returns status 200 if x-acess-token and body is valid', async () => {
    const token = createFakeToken()

    const sut = await supertest(app).get('/api/tests/term').set('x-acess-token', `Bearer ${token}`)
    expect(sut.status).toBe(200)
  })
})

describe('GET -> get tests by teachers', () => {
  test('should returns status 403 if x-acess-token is not provided', async () => {
    const sut = await supertest(app).get('/api/tests/teacher')
    expect(sut.status).toBe(403)
  })

  test('should returns status 401 if x-acess-token is invalid', async () => {
    const sut = await supertest(app).get('/api/tests/teacher').set('x-acess-token', 'Bearer invalid_token')
    expect(sut.status).toBe(401)
  })

  test('should returns status 200 if x-acess-token and body is valid', async () => {
    const token = createFakeToken()

    const sut = await supertest(app).get('/api/tests/teacher').set('x-acess-token', `Bearer ${token}`)
    expect(sut.status).toBe(200)
  })
})
