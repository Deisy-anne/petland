import { AddUserUseCase } from '@/application/use-cases'
import { makeCryptographyGateway, makeUUIDGateway } from '../../../infra'
import { makeUserRepositoryDatabase } from '../../../infra/repositories/database/user'

export const makeAddUserUseCase = (): AddUserUseCase => {
  return new AddUserUseCase(
    makeUserRepositoryDatabase(),
    makeCryptographyGateway(),
    makeUUIDGateway()
  )
}
