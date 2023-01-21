import { CustomError } from '@/shared'

export const PetGuardianNotFoundError = (): CustomError => {
  return {
    name: 'PetGuardianNotFoundError',
    message: 'The pet guardian was not found',
    causes: [
      'The pet guardian provided was not found '
    ]
  }
}
