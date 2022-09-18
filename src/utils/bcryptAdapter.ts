import bcrypt from 'bcrypt'

export const encrypt = async (value: string, salt: number): Promise<string> => {
  const hashedValue = await bcrypt.hash(value, salt)
  return hashedValue
}

export const decrypt = async (value: string, valueToCompare: string): Promise<boolean> => {
  const isValid = await bcrypt.compare(value, valueToCompare)
  return isValid
}
