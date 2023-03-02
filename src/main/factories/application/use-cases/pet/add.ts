import { AddPetUseCase } from '@/application/use-cases'
import { makeUUIDGateway } from '@/main/factories/infra'
import { makeUserDatabaseRepository } from '@/main/factories/infra/repositories'
import { makePetRepositoryDatabase } from '@/main/factories/infra/repositories/database/pet'

export const makeAddPetUseCase = (): AddPetUseCase => {
  return new AddPetUseCase(
    makePetRepositoryDatabase(),
    makeUserDatabaseRepository(),
    makeUUIDGateway()
  )
}
