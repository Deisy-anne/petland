import { IHttpServer } from '@/infra/http-server'
import { readdirSync } from 'fs'
import { join } from 'path'

export const setupRoutes = (http: IHttpServer): void => {
  readdirSync(join(__dirname, '../routes'))
    .filter(file => !file.endsWith('.map'))
    .map(async file => {
      (await import(`../routes/${file}`)).default(http)
    })
}
