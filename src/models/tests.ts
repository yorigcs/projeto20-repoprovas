
export interface Test {
  id: number
  name: string
  pdf_url: string
  category_id: number
  teacher_discipline_id: number
}

export interface TestData {
  name: string
  pdf_url: string
  category_id: string
  teacher_discipline_id: string
}
export type TestWithoutId = Omit<Test, 'id'>
