import * as express from 'express'
import { ContainerModule, interfaces } from 'inversify'

import { ROUTER_IDENTIFIER } from './router'

export const APPLICATION_IDENTIFIER = 'application_identifier'

export default new ContainerModule(bind => {
  bind<express.Application>(APPLICATION_IDENTIFIER).toDynamicValue(({ container }: interfaces.Context) => {
    const app = express()

    container.getAll<express.IRouter<any>>(ROUTER_IDENTIFIER).forEach(router => app.use(router))

    return app
  })
})
