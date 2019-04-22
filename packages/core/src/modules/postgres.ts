import { ContainerModule, interfaces } from 'inversify'
import { Connection, createConnection } from 'typeorm'
import { Config, CONFIG_IDENTIFIER } from './config'
import { REGISTRABLE_ASYNC_MODULE, RegistrableAsyncModule } from '../utils/registrableAsyncModule'

export const POSTGRES_IDENTIFIER = 'POSTGRES_IDENTIFIER'

export default new ContainerModule(bind => {
  bind<RegistrableAsyncModule>(REGISTRABLE_ASYNC_MODULE).toDynamicValue(({ container }: interfaces.Context) => async () => {
    const config = container.get<Config>(CONFIG_IDENTIFIER)
    const db = await createConnection({
      type: 'postgres',
      host: config.postgresHost,
      port: config.postgresPort,
      username: config.postgresUsername,
      password: config.postgresPassword,
      database: config.postgresDatabaseName,
      dropSchema: false,
      synchronize: false,
    })

    container.bind<Connection>(POSTGRES_IDENTIFIER).toConstantValue(db)
  })
})
