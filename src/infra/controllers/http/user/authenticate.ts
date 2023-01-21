import { AuthenticateUserUseCase } from '@/application/use-cases'
import { badRequest, HttpController, HttpResponse, ok } from '@/infra/http-server'
import { CustomError } from '@/shared'

export class AuthenticateHttpController extends HttpController {
  constructor (private readonly authenticateUser: AuthenticateUserUseCase) {
    super()
  }

  async perform ({ body }: AuthenticateHttpController.Input): Promise<AuthenticateHttpController.Output> {
    const result = await this.authenticateUser.performe(body)
    if (result.isLeft()) return badRequest([result.value])
    return ok(result.value)
  }
}

export namespace AuthenticateHttpController {
  export type Input = {
    body: AuthenticateUserUseCase.Input
  }

  export type Output = HttpResponse<CustomError[] | { token: string }>
}
