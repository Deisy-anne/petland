import { CustomError } from '@/shared'

export const InvalidUserNameError = (name: string): CustomError => {
  return {
    name: 'InvalidUserNameError',
    message: `The name ${name ?? ''} is invalid`,
    causes: [
      'The name must be informed',
      'The name must contain at least 2 characters',
      'The name must contain a maximum of 200 characters'
    ]
  }
}
