import { User } from '@/domain/entities'

export interface IAddUserRepository {
  add: (user: User) => Promise <void>

}
