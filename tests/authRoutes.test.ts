import supertest from 'supertest'
import { prismaClient } from '../prisma/prismaClient'
import app from '../src/configExpress/app'
import { signIn, signInCreateAccount } from './factories/signIn'
import { signUp, signUpRegisterFakerUser } from './factories/signUp'

beforeEach(async () => {
  await prismaClient.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`
})

afterAll(async () => {
  await prismaClient.$disconnect()
})

describe('POST -> SignUp route', () => {
  test('should returns status 422 if email is not provided', async () => {
    const body = signUp()
    const { email, ...bodyWithoutEmail } = body

    const sut = await supertest(app).post('/api/sign-up').send(bodyWithoutEmail)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if an invalid email is provided', async () => {
    const body = signUp()
    const bodyWithWrongEmail = Object.assign(body, { email: 'invalidEmail' })

    const sut = await supertest(app).post('/api/sign-up').send(bodyWithWrongEmail)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if password is not provided', async () => {
    const body = signUp()
    const { password, ...bodyWithoutPassword } = body

    const sut = await supertest(app).post('/api/sign-up').send(bodyWithoutPassword)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if confirmPassword is not provided', async () => {
    const body = signUp()
    const { confirmPassword, ...bodyWithoutConfirmPassword } = body
    const sut = await supertest(app).post('/api/sign-up').send(bodyWithoutConfirmPassword)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if password is diferent of confirmPassword', async () => {
    const body = signUp()
    const bodyWithWrongPassword = Object.assign(body, { confirmPassword: 'any_password' })
    const sut = await supertest(app).post('/api/sign-up').send(bodyWithWrongPassword)
    expect(sut.status).toBe(422)
  })

  test('should returns status 409 if has conflict', async () => {
    const body = signUp()
    const { confirmPassword, ...bodyWithoutConfirmPassword } = body
    await signUpRegisterFakerUser(bodyWithoutConfirmPassword)
    const sut = await supertest(app).post('/api/sign-up').send(body)
    expect(sut.status).toBe(409)
  })

  test('should returns status 201 if created sucessfully', async () => {
    const body = signUp()
    const sut = await supertest(app).post('/api/sign-up').send(body)
    expect(sut.status).toBe(201)
  })
})

describe('POST -> SignIn route', () => {
  test('should returns status 422 if email is not provided', async () => {
    const body = signIn()
    const { email, ...bodyWithoutEmail } = body

    const sut = await supertest(app).post('/api/sign-in').send(bodyWithoutEmail)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if an invalid email is provided', async () => {
    const body = signIn()
    const bodyWithWrongEmail = Object.assign(body, { email: 'invalidEmail' })

    const sut = await supertest(app).post('/api/sign-in').send(bodyWithWrongEmail)
    expect(sut.status).toBe(422)
  })

  test('should returns status 422 if password is not provided', async () => {
    const body = signIn()
    const { password, ...bodyWithoutPassword } = body

    const sut = await supertest(app).post('/api/sign-in').send(bodyWithoutPassword)
    expect(sut.status).toBe(422)
  })

  test('should returns status 404 if password is wrong', async () => {
    const body = signIn()
    await signInCreateAccount(body)

    const sut = await supertest(app).post('/api/sign-in')
      .send(Object.assign({}, body, { password: 'any_password' }))
    expect(sut.status).toBe(404)
  })

  test('should returns status 404 if there is no account with this email', async () => {
    const body = signIn()
    const sut = await supertest(app).post('/api/sign-in').send(body)
    expect(sut.status).toBe(404)
  })

  test('should returns status 200 if credentials are correct', async () => {
    const body = signIn()
    await signInCreateAccount(body)

    const sut = await supertest(app).post('/api/sign-in').send(body)
    expect(sut.status).toBe(200)
  })
})
