import { AddUserUseCase } from '@/application/use-cases'
import { badRequest, HttpController, HttpResponse, ok } from '@/infra/http-server'
import { CustomError } from '@/shared'

export class AddUserHttpController extends HttpController {
  constructor (private readonly addUserUseCase: AddUserUseCase) {
    super()
  }

  async perform ({ body }: AddUserHttpController.Input): Promise<AddUserHttpController.Output> {
    const result = await this.addUserUseCase.performe({
      ...body,
      birthDate: new Date(body.birthDate)
    })
    if (result.isLeft()) return badRequest(result.value)
    return ok(result.value)
  }
}

export namespace AddUserHttpController {
  export type Input = {
    body: AddUserUseCase.Input
  }

  export type Output = HttpResponse<CustomError | any>
}
