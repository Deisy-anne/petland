import { User } from '@/domain/entities'

export interface ILoadUserByEmailRepository {
  loadByEmail: (email: string) => Promise<User | undefined>
}
