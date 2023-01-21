export interface IUseCase {
  performe: (input: any) => Promise<any> | any
}
