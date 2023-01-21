import { CustomError } from '@/shared'

export const InvalidPetWeightError = (weight: number): CustomError => {
  return {
    name: 'InvalidPetWeightError',
    message: `The weight ${weight ?? ''} is valid`,
    causes: [
      'The weight must be a positive number'
    ]
  }
}
