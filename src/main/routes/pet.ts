import { IHttpServer } from '@/infra/http-server'
import { makeAddPetHttpController } from '../factories/infra/controllers/http/pet'

export default (http: IHttpServer): void => {
  http.on({ method: 'post', url: '/pet', controller: makeAddPetHttpController() })
}
