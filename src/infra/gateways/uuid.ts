import { IUUIdGateway } from '@/domain/contracts/gateways'
import { randomUUID } from 'crypto'

export class UUIDGateway implements IUUIdGateway {
  generate (): string {
    return randomUUID()
  }
}
