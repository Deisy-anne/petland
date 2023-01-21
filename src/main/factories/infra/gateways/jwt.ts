import { JwtGateway } from '@/infra/gateways'
import { env } from '@/main/configs/env'

export const makeJwtGateway = (): JwtGateway => {
  return new JwtGateway(env.jwtSecret)
}
