import { CustomError } from '@/shared'

export const InvalidPetAgeError = (age: number): CustomError => {
  return {
    name: 'InvalidPetAgeError',
    message: `The age ${age ?? ''} is valid`,
    causes: [
      'The age must be informed',
      'The age must be a positive number'
    ]
  }
}
