import * as express from 'express'
import * as http from 'http'

import { registerAsyncModules } from '../src/utils/registrableAsyncModule'

import container, { APPLICATION_IDENTIFIER, CONFIG_IDENTIFIER, Config } from '../src/main'

registerAsyncModules(container).then(() => {
  const app = container.get<express.Application>(APPLICATION_IDENTIFIER)
  const config = container.get<Config>(CONFIG_IDENTIFIER)
  const server = http.createServer(app)

  server.listen(config.port)
})
