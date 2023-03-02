import { AddPetUseCase } from '@/application/use-cases'
import { badRequest, HttpController, HttpResponse, ok } from '@/infra/http-server'
import { CustomError } from '@/shared'

export class AddPetHttpController extends HttpController {
  constructor (private readonly addPetUseCase: AddPetUseCase) {
    super()
  }

  async perform ({ body: input }: AddPetHttpController.Input): Promise<AddPetHttpController.Output> {
    const result = await this.addPetUseCase.performe({
      ...input,
      birthDate: input.birthDate !== undefined ? new Date(input.birthDate) : undefined
    })
    if (result.isLeft()) return badRequest(result.value)
    return ok(result.value)
  }
}

export namespace AddPetHttpController {
  export type Input = {
    body: {
      name: string
      age: number
      userId: string
      weight: number
      birthDate: string
    }
  }

  export type Output = HttpResponse<CustomError[] | { id: string }>
}
