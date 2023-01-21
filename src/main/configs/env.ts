
export const env = {
  portaApi: Number(process.env.PORT_API ?? 5050),
  databaseUrl: process.env.DATABASE_URL ?? '',
  jwtSecret: process.env.JWT_SECRET ?? ''
}
