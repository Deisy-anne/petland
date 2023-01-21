
export interface IJwtGateway {
  encrypt: (input: IJwtGateway.EncryptInput) => string
  decrypt: (token: string) => any
}

export namespace IJwtGateway {
  export type EncryptInput = {
    data: any
    expirationInMs: number
  }
}
