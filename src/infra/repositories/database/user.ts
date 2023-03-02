import { IAddUserRepository, ICheckUserByEmailRepository, ICheckUserByIdRepository, ILoadUserByEmailRepository } from '@/domain/contracts/repositories'
import { User } from '@/domain/entities'
import { IConnection } from '@/infra/databases/connection'

export class UserDatabaseRepository implements
IAddUserRepository,
ICheckUserByEmailRepository,
ICheckUserByIdRepository,
ILoadUserByEmailRepository {
  constructor (private readonly connection: IConnection) {}

  async add ({ id, name, lastName, birthDate, phoneNumber, email, password }: User): Promise<void> {
    const sql = 'insert into users (id, name, last_name, birth_date, phone_number, email, password) values ($1, $2, $3, $4, $5, $6, $7)'
    await this.connection.query(sql, [id, name, lastName, birthDate, phoneNumber, email, password])
  }

  async checkByEmail (email: string): Promise<boolean> {
    const sql = 'select 1 from users where email = $1'
    const result = await this.connection.query(sql, [email])
    if (result === undefined) return false
    return true
  }

  async checkById (id: string): Promise<boolean> {
    const sql = 'select 1 from users where id = $1'
    const result = await this.connection.query(sql, [id])
    if (result === undefined) return false
    return true
  }

  async loadByEmail (input: string): Promise<User | undefined> {
    const selectSql = 'select * from users where email = $1'
    const result = await this.connection.query(selectSql, [input])
    if (result === undefined) return undefined
    const { id, name, last_name, birth_date, phone_number, email, password } = result[0]
    const userOrErrors = User.create({ id, name, lastName: last_name, birthDate: new Date(birth_date), phoneNumber: phone_number, email, password })
    if (userOrErrors.isLeft()) throw new Error('Invalid user on database')
    return userOrErrors.value
  }
}
