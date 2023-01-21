import pgp, { IDatabase } from 'pg-promise'
import { IConnection } from './connection'

export class PgPromiseAdapter implements IConnection {
  static connection: IDatabase<{}> | undefined

  async connect (url: string): Promise<void> {
    PgPromiseAdapter.connection = pgp()(url)
  }

  async query (sql: string, params?: any): Promise<any> {
    if (PgPromiseAdapter.connection === undefined) throw new Error('Connection was not found')
    const results = await PgPromiseAdapter.connection.query(sql, params)
    if (results === undefined || results.length === 0) return undefined
    return results
  }

  async disconnect (): Promise<void> {
    if (PgPromiseAdapter.connection === undefined) throw new Error('Connection was not found')
    await PgPromiseAdapter.connection.$pool.end()
    PgPromiseAdapter.connection = undefined
  }
}
