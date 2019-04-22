const path = require('path')

const env = process.env

module.exports = {
  'type': 'postgres',
  'host': env['POSTGRES_CORE_HOST'],
  'port': env['POSTGRES_CORE_PORT'],
  'username': env['POSTGRES_USERNAME'],
  'password': env['POSTGRES_PASSWORD'],
  'database': env['POSTGRES_CORE_DB_NAME'],
  'migrations': ['src/migrations/*.ts'],
  'cli': {
    'migrationsDir':'src/migrations'
  }
}
