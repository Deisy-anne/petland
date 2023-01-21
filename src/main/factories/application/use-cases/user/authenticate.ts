import { AuthenticateUserUseCase } from '@/application/use-cases'
import { makeCryptographyGateway, makeJwtGateway } from '../../../infra'
import { makeUserRepositoryDatabase } from '../../../infra/repositories/database/user'

export const makeAuthenticateUserUseCase = (): AuthenticateUserUseCase => {
  return new AuthenticateUserUseCase(
    makeUserRepositoryDatabase(),
    makeCryptographyGateway(),
    makeJwtGateway()
  )
}
