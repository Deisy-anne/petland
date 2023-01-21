import { CustomError } from '@/shared'

export const AuthenticationFailedError = (): CustomError => {
  return {
    name: 'AuthenticationFailedError',
    message: 'Authentication failed',
    causes: [
      'The email provided was not found',
      'The password provided is invalid'
    ]
  }
}
