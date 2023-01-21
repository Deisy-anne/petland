import { CustomError } from '@/shared'

export const InvalidPetBirthDateError = (birthDate: Date): CustomError => {
  return {
    name: 'InvalidPetBirthDateError',
    message: `The birth date ${birthDate ?? ''} is invalid`,
    causes: [
      'The birth date must be a date format'
    ]
  }
}
