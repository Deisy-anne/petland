import { IAddPetRepository } from '@/domain/contracts/repositories'
import { Pet } from '@/domain/entities'
import { IConnection } from '@/infra/databases/connection'

export class PetDatabaseRepository implements IAddPetRepository {
  constructor (
    private readonly connection: IConnection
  ) {}

  async add ({ id, name, age, userId, weight, birthDate }: Pet): Promise<void> {
    const sql = 'insert into pet (id, name, age, user_id, weight, birth_date) values ($1, $2, $3, $4, $5, $6)'
    await this.connection.query(sql, [id, name, age, userId, weight, birthDate])
  }
}
