import { CustomError } from '@/shared'

export const InvalidUserPasswordError = (): CustomError => {
  return {
    name: 'InvalidUserPasswordError',
    message: 'The password is invalid',
    causes: [
      'The password must be informed',
      'The password must contain at least 10 characters',
      'The password must contain at least 2 numbers',
      'The password must contain at least 1 special character'
    ]
  }
}
