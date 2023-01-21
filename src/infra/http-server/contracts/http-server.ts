import { HttpController } from './controller'

export interface IHttpServer {
  on: (input: IHttpServer.OnInput) => void
  listen: (port: number, callback?: () => void) => void

}

export namespace IHttpServer {
  export type AllowedMethods = 'get' | 'post' | 'put' | 'delete'
  export type OnInput = {
    method: AllowedMethods
    url: string
    controller: HttpController

  }
}
