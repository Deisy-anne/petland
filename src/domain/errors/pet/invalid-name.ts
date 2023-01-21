import { CustomError } from '@/shared'

export const InvalidPetNameError = (name: string): CustomError => {
  return {
    name: 'InvalidPetNameError',
    message: `The name ${name ?? ''} is invalid`,
    causes: [
      'The name must be informed',
      'The name must contain at least 2 characters',
      'The name must contain a maximum of 200 characters'
    ]
  }
}
