import { useApiProvider } from '@common'
import { ApiFetcher } from '@common/types/api'
import { ApiHooks, MutationHook } from '@common/types/hooks'
import { useState } from 'react'

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

const useSWRData = (hook: any, fetcher: ApiFetcher) => {
  const [data, setData] = useState(null)

  const hookFetcher = async () => {
    return await hook.fetcher({
      fetch: fetcher,
      options: hook.fetchOptions,
      input: {}
    })
  }

  if (!data) {
    hookFetcher().then(data => {
      setData({ data })
    })
  }

  return data
}

export const useSWRHook = (hook: any) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    useData() {
      const data = useSWRData(hook, fetcher)

      return data
    }
  })
}
