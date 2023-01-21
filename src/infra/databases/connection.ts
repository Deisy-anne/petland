
export interface IConnection {
  connect: (url: string) => Promise<void>
  query: (sql: string, params?: any) => Promise<any>
  disconnect: () => Promise<void>
}
