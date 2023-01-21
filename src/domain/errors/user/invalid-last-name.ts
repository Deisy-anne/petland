import { CustomError } from '@/shared'

export const InvalidUserLastNameError = (lastName: string): CustomError => {
  return {
    name: 'InvalidUserLastNameError',
    message: `The last name ${lastName ?? ''} is invalid`,
    causes: [
      'The last name must be informed',
      'The last name must contain at least 2 characters',
      'The last name must contain a maximum of 200 characters'
    ]
  }
}
