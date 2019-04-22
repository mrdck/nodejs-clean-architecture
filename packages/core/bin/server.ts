import * as express from 'express'
import * as http from 'http'

import container, { APPLICATION_IDENTIFIER } from '../src/app'

const app = container.get<express.Application>(APPLICATION_IDENTIFIER)
const server = http.createServer(app)

server.listen(3000)
