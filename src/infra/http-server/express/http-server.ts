import { IHttpServer } from '../contracts'

import express, { Express } from 'express'
import { setupExpressMiddleware } from './middleware'

export class HttpServerExpress implements IHttpServer {
  private static instance: HttpServerExpress | undefined
  private readonly app: Express

  private constructor () {
    this.app = express()
    setupExpressMiddleware(this.app)
  }

  static getInstance (): HttpServerExpress {
    if (HttpServerExpress.instance === undefined) {
      HttpServerExpress.instance = new HttpServerExpress()
    }
    return HttpServerExpress.instance
  }

  on ({ method, url, controller }: IHttpServer.OnInput): void {
    this.app[method](url, (request, response) => {
      const { body, params, query, headers } = request
      const authorization = headers.authorization !== undefined ? headers.authorization.replace('Bearer ', '') : undefined
      void controller.handle({
        body,
        params,
        query,
        headers: {
          ...headers,
          authorization
        }
      })
        .then(({ statusCode, data }) => {
          response.status(statusCode)
          data !== undefined ? response.json(data) : response.end
        })
    })
  }

  listen (port: number, callback?: (() => void) | undefined): void {
    this.app.listen(port, callback)
  }
}
