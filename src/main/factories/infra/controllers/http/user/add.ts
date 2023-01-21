import { AddUserHttpController } from '@/infra/controllers'
import { makeAddUserUseCase } from '@/main/factories/application/use-cases/user/add'

export const makeAddUserHttpController = (): AddUserHttpController => {
  return new AddUserHttpController(makeAddUserUseCase())
}
