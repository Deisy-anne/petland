import { PgPromiseAdapter } from '@/infra/databases/pg-promise'

export const makePgPromiseAdapter = (): PgPromiseAdapter => {
  return new PgPromiseAdapter()
}
