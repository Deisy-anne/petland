import { CustomError } from '@/shared'

export const PetUserNotFoundError = (): CustomError => {
  return {
    name: 'PetUserNotFoundError',
    message: 'The pet user was not found',
    causes: [
      'The pet user provided was not found '
    ]
  }
}
