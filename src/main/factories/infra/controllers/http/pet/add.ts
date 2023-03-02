import { AddPetHttpController } from '@/infra/controllers'
import { makeAddPetUseCase } from '@/main/factories/application/use-cases/pet/add'

export const makeAddPetHttpController = (): AddPetHttpController => {
  return new AddPetHttpController(makeAddPetUseCase())
}
