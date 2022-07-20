import { useApiProvider } from '@common'
import { ApiFetcher } from '@common/types/api'
import { ApiHooks, MutationHook } from '@common/types/hooks'
import useSWR from 'swr'

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

const useData = (hook: any, fetcher: ApiFetcher) => {
  const hookFetcher = async (query: string) => {
    return await hook.fetcher({
      fetch: fetcher,
      options: { query },
      input: {}
    })
  }

  const response = useSWR(hook.fetchOptions.query, hookFetcher, {
    revalidateOnMount: true,
    revalidateOnFocus: true
  })

  return response
}

export const useSWRHook = (hook: any) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    useData() {
      const data = useData(hook, fetcher)

      return data
    }
  })
}
