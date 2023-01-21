import { ICryptographyGateway } from '@/domain/contracts/gateways'

import bcrypt from 'bcrypt'

export class CryptographyGateway implements ICryptographyGateway {
  async encrypt (text: string): Promise<string> {
    return await bcrypt.hash(text, 12)
  }

  async compare (text: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(text, hash)
  }
}
