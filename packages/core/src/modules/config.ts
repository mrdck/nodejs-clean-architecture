import { ContainerModule } from 'inversify'

export const CONFIG_IDENTIFIER = 'config_identifier'

export interface Config {
  port: number
  postgresHost: string
  postgresDatabaseName: string
  postgresPassword: string
  postgresPort: number
  postgresUsername: string
}

export default new ContainerModule(bind => {
  bind<Config>(CONFIG_IDENTIFIER).toDynamicValue(() => {
    const env = process.env

    return {
      port: Number(env.PORT || 3000),
      postgresUsername: env['POSTGRES_USERNAME'],
      postgresPassword: env['POSTGRES_PASSWORD'],
      postgresHost: env['POSTGRES_CORE_HOST'],
      postgresDatabaseName: env['POSTGRES_CORE_DB_NAME'],
      postgresPort: parseInt(env['POSTGRES_CORE_PORT'], 10),
    }
  })
})
