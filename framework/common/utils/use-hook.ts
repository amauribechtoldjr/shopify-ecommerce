import { useApiProvider } from '@common'
import { ApiFetcher } from '@common/types/api'
import { ApiHooks, MutationHook } from '@common/types/hooks'
import useSWR from 'swr'

export const useHook = <T>(fn: (ApiHooks: ApiHooks) => T) => {
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

const useData = (hook: any, fetcher: ApiFetcher, ctx: any) => {
  const hookFetcher = async (query: string) => {
    return await hook.fetcher({
      fetch: fetcher,
      options: { query },
      input: {}
    })
  }

  const response = useSWR(
    hook.fetcherOptions.query,
    hookFetcher,
    ctx.swrOptions
  )
  return response
}

export const useSWRHook = (hook: any) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    useData(ctx: any) {
      const data = useData(hook, fetcher, ctx)

      return data
    }
  })
}
