import { IUUIdGateway } from '@/domain/contracts/gateways/uuid'
import { ICheckUserByIdRepository } from '@/domain/contracts/repositories/user'
import { IAddPetRepository } from '@/domain/contracts/repositories/pet/add'
import { Pet } from '@/domain/entities/pet'
import { CustomError, Either, IUseCase, left, right } from '@/shared'
import { PetGuardianNotFoundError } from '@/application/errors/pet/guardian-not-found'

export class AddPetUseCase implements IUseCase {
  constructor (
    private readonly petRepository: IAddPetRepository,
    private readonly petGuardianRepository: ICheckUserByIdRepository,
    private readonly uuidGateway: IUUIdGateway
  ) {}

  async performe (input: AddPetUseCase.Input): Promise <AddPetUseCase.Output> {
    const existingUser = await this.petGuardianRepository.checkById(input.guardianId)
    if (!existingUser) return left([PetGuardianNotFoundError()])
    const id = this.uuidGateway.generate()
    const petOrErrors = Pet.create({ ...input, id, birthDate: new Date() })
    if (petOrErrors.isLeft()) return left(petOrErrors.value)
    return right({ id })
  }
}

export namespace AddPetUseCase {
  export type Input = Omit <Pet.Input, 'id'>

  export type Output = Either<CustomError[], { id: string }>
}
