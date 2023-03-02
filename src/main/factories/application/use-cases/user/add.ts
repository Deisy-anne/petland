import { AddUserUseCase } from '@/application/use-cases'
import { makeCryptographyGateway, makeUUIDGateway } from '../../../infra'
import { makeUserDatabaseRepository } from '../../../infra/repositories/database/user'

export const makeAddUserUseCase = (): AddUserUseCase => {
  return new AddUserUseCase(
    makeUserDatabaseRepository(),
    makeCryptographyGateway(),
    makeUUIDGateway()
  )
}
