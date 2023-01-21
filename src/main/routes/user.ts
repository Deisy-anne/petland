import { IHttpServer } from '@/infra/http-server'
import { makeAddUserHttpController, makeAuthenticateHttpController } from '../factories/infra/controllers/http/user'

export default (http: IHttpServer): void => {
  http.on({ method: 'post', url: '/users', controller: makeAddUserHttpController() })
  http.on({ method: 'post', url: '/users/login', controller: makeAuthenticateHttpController() })
}
