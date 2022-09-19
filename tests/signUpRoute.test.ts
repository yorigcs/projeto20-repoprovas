import supertest from 'supertest'
import app from '../src/configExpress/app'
import { createUser } from '../src/repositories/userRepository'
import { signUp } from './factories/signUp'

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
    await createUser(bodyWithoutConfirmPassword)
    const sut = await supertest(app).post('/api/sign-up').send(body)
    expect(sut.status).toBe(409)
  })

  test('should returns status 201 if created sucessfully', async () => {
    const body = signUp()
    const sut = await supertest(app).post('/api/sign-up').send(body)
    expect(sut.status).toBe(201)
  })
})
