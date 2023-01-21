import { HttpServerExpress } from '@/infra/http-server'

export const makeHttpServerExpress = (): HttpServerExpress => {
  return HttpServerExpress.getInstance()
}
