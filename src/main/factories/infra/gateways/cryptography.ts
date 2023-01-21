import { CryptographyGateway } from '@/infra/gateways'

export const makeCryptographyGateway = (): CryptographyGateway => {
  return new CryptographyGateway()
}
