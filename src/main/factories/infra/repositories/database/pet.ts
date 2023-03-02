import { PetDatabaseRepository } from '@/infra/repositories/database'
import { makePgPromiseAdapter } from '@/main/factories/infra/databases'

export const makePetRepositoryDatabase = (): PetDatabaseRepository => {
  return new PetDatabaseRepository(makePgPromiseAdapter())
}
