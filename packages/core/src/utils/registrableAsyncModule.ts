import { interfaces } from 'inversify'

export const REGISTRABLE_ASYNC_MODULE = 'registrable_async_module'

export type RegistrableAsyncModule = () => PromiseLike<any>

export async function registerAsyncModules(container: interfaces.Container): Promise<interfaces.Container> {
  if (container.isBound(REGISTRABLE_ASYNC_MODULE)) {
    await Promise.all(container.getAll<RegistrableAsyncModule>(REGISTRABLE_ASYNC_MODULE).map(f => f()))
  }

  return container
}
