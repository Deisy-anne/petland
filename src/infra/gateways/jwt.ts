import { IJwtGateway } from '@/domain/contracts/gateways'

import jwt from 'jsonwebtoken'

export class JwtGateway implements IJwtGateway {
  constructor (private readonly secret: string) {}

  encrypt (input: IJwtGateway.EncryptInput): string {
    const expirationInSeconds = input.expirationInMs / 100
    return jwt.sign(input.data, this.secret, { expiresIn: expirationInSeconds })
  }

  decrypt (token: string): any {
    return jwt.verify(token, this.secret)
  }
}
