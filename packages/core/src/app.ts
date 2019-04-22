import 'reflect-metadata'
import { Container } from 'inversify'

import application from './modules/application'
import router from './modules/router'

export * from './modules/application'

const container = new Container({ defaultScope: 'Singleton' })

container.load(application)
container.load(router)

export default container
