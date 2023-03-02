import { UserDatabaseRepository } from '@/infra/repositories/database'
import { makePgPromiseAdapter } from '@/main/factories/infra/databases'

export const makeUserDatabaseRepository = (): UserDatabaseRepository => {
  return new UserDatabaseRepository(makePgPromiseAdapter())
}
