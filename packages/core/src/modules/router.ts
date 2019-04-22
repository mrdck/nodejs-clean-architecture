import { IRouter } from 'express'
import { ContainerModule } from 'inversify'

import { indexRouter } from '../routes/indexRouter'

export const ROUTER_IDENTIFIER = 'router_identifier'

export default new ContainerModule(bind => {
  bind<IRouter<any>>(ROUTER_IDENTIFIER).toDynamicValue(indexRouter)
})
