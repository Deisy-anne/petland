import { UserRepositoryDatabase } from '@/infra/repositories/database'
import { makePgPromiseAdapter } from '@/main/factories/infra/databases'

export const makeUserRepositoryDatabase = (): UserRepositoryDatabase => {
  return new UserRepositoryDatabase(makePgPromiseAdapter())
}
