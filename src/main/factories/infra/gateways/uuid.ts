import { UUIDGateway } from '@/infra/gateways'

export const makeUUIDGateway = (): UUIDGateway => {
  return new UUIDGateway()
}
