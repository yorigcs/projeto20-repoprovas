import supertest from 'supertest'
import app from '../src/configExpress/app'
import { signIn, signInCreateAccount } from './factories/signIn'

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
