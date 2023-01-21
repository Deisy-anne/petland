import { CustomError } from '@/shared'

export const InvalidUserBirthDateError = (birthDate: Date): CustomError => {
  return {
    name: 'InvalidUserBirthDateError',
    message: `The birth date ${birthDate ?? ''} is invalid`,
    causes: [
      'The birth date must be informed',
      'The birth date must be a date format'
    ]
  }
}
