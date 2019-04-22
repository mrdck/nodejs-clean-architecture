import 'reflect-metadata'
import { Container } from 'inversify'

import application from './modules/application'
import router from './modules/router'
import config from './modules/config'
import postgres from './modules/postgres'

export * from './modules/application'
export * from './modules/config'
export * from './modules/postgres'

const container = new Container({ defaultScope: 'Singleton' })

container.load(config)
container.load(postgres)
container.load(application)
container.load(router)

export default container
