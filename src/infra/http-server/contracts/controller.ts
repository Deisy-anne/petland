import { HttpResponse, serverError } from './helpers'

export abstract class HttpController {
  abstract perform (input: any): Promise<HttpResponse>

  async handle (input: any): Promise<HttpResponse> {
    try {
      return await this.perform(input)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
