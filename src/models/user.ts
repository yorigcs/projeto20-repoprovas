
export interface User {
  id: number
  email: string
  password: string
}

export interface UserData {
  email: string
  password: string
  confirmPassword: string
}

export type UserWithoutId = Omit<User, 'id'>
