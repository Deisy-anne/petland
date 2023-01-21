
export interface ICheckUserByEmailRepository {
  checkByEmail: (email: string) => Promise<boolean>
}
