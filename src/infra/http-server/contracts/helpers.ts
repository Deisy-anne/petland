import { CustomError } from '@/shared'

export type HttpResponse<DataType = any> = {
  statusCode: number
  data: DataType
}

export const ok = <DataType = any> (data: DataType): HttpResponse<DataType> => ({
  statusCode: 200,
  data
})

export const badRequest = (errors: CustomError[]): HttpResponse<CustomError[]> => ({
  statusCode: 400,
  data: errors
})

export const unauthorized = (error?: CustomError): HttpResponse<CustomError> => ({
  statusCode: 401,
  data: error !== undefined
    ? error
    : {
        name: 'Unauthorized',
        message: 'Unauthorized user',
        causes: ['Authentication failed']
      }
})

export const forbidden = (): HttpResponse<CustomError> => ({
  statusCode: 403,
  data: {
    name: 'Forbidden',
    message: 'Forbidden access',
    causes: ['User does not have permission for this resource']
  }
})

export const serverError = (): HttpResponse<CustomError> => ({
  statusCode: 500,
  data: {
    name: 'ServerError',
    message: 'An internal error has occurred, please try again later',
    causes: ['Internal server error']
  }
})
