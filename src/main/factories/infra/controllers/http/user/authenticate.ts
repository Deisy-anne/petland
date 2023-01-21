import { AuthenticateHttpController } from '@/infra/controllers'
import { makeAuthenticateUserUseCase } from '@/main/factories/application/use-cases/user/authenticate'

export const makeAuthenticateHttpController = (): AuthenticateHttpController => {
  return new AuthenticateHttpController(makeAuthenticateUserUseCase())
}
