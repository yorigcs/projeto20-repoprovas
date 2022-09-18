
export interface User {
  id: number
  email: string
  password: string
}

export type UserWithoutId = Omit<User, 'id'>
