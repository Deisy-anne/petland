import { AuthenticateUserUseCase } from '@/application/use-cases'
import { makeCryptographyGateway, makeJwtGateway } from '../../../infra'
import { makeUserDatabaseRepository } from '../../../infra/repositories/database/user'

export const makeAuthenticateUserUseCase = (): AuthenticateUserUseCase => {
  return new AuthenticateUserUseCase(
    makeUserDatabaseRepository(),
    makeCryptographyGateway(),
    makeJwtGateway()
  )
}
