import { AuthenticationFailedError } from '@/application/errors/user/authentication-failed'
import { ICryptographyGateway } from '@/domain/contracts/gateways/cryptography'
import { IJwtGateway } from '@/domain/contracts/gateways/jwt'
import { ILoadUserByEmailRepository } from '@/domain/contracts/repositories/user/load-by-email'
import { CustomError, Either, IUseCase, left, right } from '@/shared'

export class AuthenticateUserUseCase implements IUseCase {
  constructor (
    private readonly userRepository: ILoadUserByEmailRepository,
    private readonly cryptographyGateway: ICryptographyGateway,
    private readonly jwtGateway: IJwtGateway
  ) {}

  async performe ({ email, password }: AuthenticateUserUseCase.Input): Promise<AuthenticateUserUseCase.Output> {
    const user = await this.userRepository.loadByEmail(email)
    if (user === undefined) return left(AuthenticationFailedError())
    const isValidPassword = await this.cryptographyGateway.compare(password, user.password)
    if (!isValidPassword) return left(AuthenticationFailedError())
    const token = this.jwtGateway.encrypt({
      data: { id: user.id },
      expirationInMs: 28800000
    })
    return right({ token })
  }
}

export namespace AuthenticateUserUseCase {
  export type Input = {
    email: string
    password: string
  }

  export type Output = Either<CustomError, { token: string }>
}
