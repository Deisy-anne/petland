import { IUUIdGateway } from '@/domain/contracts/gateways/uuid'
import { ICheckUserByIdRepository } from '@/domain/contracts/repositories/user'
import { Pet } from '@/domain/entities/pet'
import { CustomError, Either, IUseCase, left, right } from '@/shared'
import { PetUserNotFoundError } from '@/application/errors/pet/user-not-found'
import { IAddPetRepository } from '@/domain/contracts'

export class AddPetUseCase implements IUseCase {
  constructor (
    private readonly petRepository: IAddPetRepository,
    private readonly userRepository: ICheckUserByIdRepository,
    private readonly uuidGateway: IUUIdGateway
  ) {}

  async performe (input: AddPetUseCase.Input): Promise <AddPetUseCase.Output> {
    const existingUser = await this.userRepository.checkById(input.userId)
    if (!existingUser) return left([PetUserNotFoundError()])
    const id = this.uuidGateway.generate()
    const petOrErrors = Pet.create({ ...input, id })
    if (petOrErrors.isLeft()) return left(petOrErrors.value)
    await this.petRepository.add(petOrErrors.value)
    return right({ id })
  }
}

export namespace AddPetUseCase {
  export type Input = Omit <Pet.Input, 'id'>

  export type Output = Either<CustomError[], { id: string }>
}
