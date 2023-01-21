import { forbidden, HttpController, HttpResponse } from '@/infra/http-server'
import { CustomError } from '@/shared'

export class AuthenticationDecoratorHttpController extends HttpController {
  constructor (
    private readonly decorated: HttpController,
    private readonly authorize: AuthenticationDecoratorHttpController.Authorization
  ) {
    super()
  }

  async perform (input: AuthenticationDecoratorHttpController.Input): Promise<AuthenticationDecoratorHttpController.Output> {
    if (input?.headers?.authorization === undefined || input?.headers?.authorization === null) return forbidden()
    try {
      const { authorization } = input.headers
      const data = await this.authorize(authorization)
      const result = await this.decorated.handle({
        ...input,
        authorizationData: data
      })
      return result
    } catch {
      return forbidden()
    }
  }
}

export namespace AuthenticationDecoratorHttpController {
  export type Authorization = (token: string) => any

  export type Input = {
    body?: any
    query?: any
    params?: any
    headers?: { authorization: string }
  }

  export type Output = HttpResponse<CustomError | any>
}
