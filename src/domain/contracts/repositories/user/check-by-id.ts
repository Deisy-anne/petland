
export interface ICheckUserByIdRepository {
  checkById: (id: string) => Promise <boolean>
}
