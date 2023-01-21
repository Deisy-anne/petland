
export interface ICryptographyGateway {
  encrypt: (text: string) => Promise<string>
  compare: (text: string, hash: string) => Promise<boolean>
}
