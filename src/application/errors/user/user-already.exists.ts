import { CustomError } from '@/shared'

export const UserAlreadyExists = (): CustomError => {
  return {
    name: 'UserAlreadyExists',
    message: 'The user already exists',
    causes: [
      'The user provided was not found '
    ]
  }
}
