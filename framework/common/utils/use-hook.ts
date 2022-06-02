import { useApiProvider } from '@common'
import { ApiHooks, MutationHook } from '@common/types/hooks'

export const useHook = (fn: (ApiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider()

  return fn(hooks)
}

export const useMutationHook = (hook: MutationHook) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    fetch: (input: any) =>
      hook.fetcher({
        input,
        fetch: fetcher,
        options: hook.fetcherOptions
      })
  })
}
