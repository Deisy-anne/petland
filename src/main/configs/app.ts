import { makeHttpServerExpress } from '../factories/infra/http-server/express'
import { env } from './env'
import { setupRoutes } from './routes'

export const app = (): void => {
  const app = makeHttpServerExpress()
  setupRoutes(app)
  app.listen(env.portaApi, () => console.log('Server running'))
}
