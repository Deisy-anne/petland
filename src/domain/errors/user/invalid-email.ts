import { CustomError } from '@/shared'

export const InvalidUserEmailError = (email: string): CustomError => {
  return {
    name: 'InvalidUserEmailError',
    message: `The email "${email ?? ''}" is invalid`,
    causes: [
      'The email must be informed',
      'The email is invalid (example@domain.com)'
    ]
  }
}
