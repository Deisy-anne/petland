import { UserAlreadyExists } from '@/application/errors/user/user-already.exists'
import { IUUIdGateway } from '@/domain/contracts/gateways'
import { ICryptographyGateway } from '@/domain/contracts/gateways/cryptography'
import { IAddUserRepository } from '@/domain/contracts/repositories/user/add'
import { ICheckUserByEmailRepository } from '@/domain/contracts/repositories/user/check-by-email'
import { ILoadUserByEmailRepository } from '@/domain/contracts/repositories/user/load-by-email'
import { PasswordUtils, User } from '@/domain/entities'
import { InvalidUserPasswordError } from '@/domain/errors'
import { CustomError, Either, IUseCase, left, right } from '@/shared'

export class AddUserUseCase implements IUseCase {
  constructor (
    private readonly userRepository: IAddUserRepository & ILoadUserByEmailRepository & ICheckUserByEmailRepository,
    private readonly cryptographyGateway: ICryptographyGateway,
    private readonly uuidGateway: IUUIdGateway
  ) {}

  async performe (input: AddUserUseCase.Input): Promise <AddUserUseCase.Output> {
    const existingUser = await this.userRepository.checkByEmail(input.email)
    if (existingUser) return left([UserAlreadyExists()])
    const id = this.uuidGateway.generate()
    if (!PasswordUtils.isValid(input.password)) return left([InvalidUserPasswordError()])
    const userOrErrors = User.create({ ...input, id })
    if (userOrErrors.isLeft()) return left(userOrErrors.value)
    const encryptedPassword = await this.cryptographyGateway.encrypt(input.password)
    const userWithEncryptedPassword = userOrErrors.value.setPassword(encryptedPassword)
    await this.userRepository.add(userWithEncryptedPassword)
    return right({ id })
  }
}

export namespace AddUserUseCase {
  export type Input = Omit <User.Input, 'id'>

  export type Output = Either<CustomError[], { id: string }>
}
