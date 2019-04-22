import * as express from 'express'
import { interfaces } from 'inversify'

export function indexRouter(context: interfaces.Context) {
  const router = express.Router()

  router.get('/health', (req: express.Request, res: express.Response) => res.sendStatus(200))

  return router
}
