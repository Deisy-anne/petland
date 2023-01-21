import './configs/module-alias'
import { app } from './configs/app'
import { env } from './configs/env'
import { makePgPromiseAdapter } from './factories/infra'

void makePgPromiseAdapter()
  .connect(env.databaseUrl)
  .then(() => app())
