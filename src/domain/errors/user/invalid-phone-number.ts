import { CustomError } from '@/shared'

export const InvalidUserPhoneNumberError = (phoneNumber: number): CustomError => {
  return {
    name: 'InvalidUserPhoneNumberError',
    message: `The phone number ${phoneNumber ?? ''} is invalid`,
    causes: [
      'The phone number must be informed (12 1212 1212)'
    ]
  }
}
