import { AuthenticationDecoratorHttpController } from '@/infra/controllers'
import { HttpController } from '@/infra/http-server'
import { makeJwtGateway } from '@/main/factories/infra/gateways'

export const makeAuthenticationDecoratorHttpController = (controller: HttpController): AuthenticationDecoratorHttpController => {
  const jwt = makeJwtGateway()
  return new AuthenticationDecoratorHttpController(controller, jwt.decrypt.bind(jwt))
}
