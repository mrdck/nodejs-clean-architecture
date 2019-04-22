import * as request from 'supertest'
import { Application } from 'express'

import container, { APPLICATION_IDENTIFIER } from '../../src/app'

describe('Health endpoint',() => {
  it('should return HTTP 200 ', async () => {
    const app = container.get<Application>(APPLICATION_IDENTIFIER)
    const response = await request(app).get('/health')
    
    expect(response.status).toEqual(200)
  })
})
