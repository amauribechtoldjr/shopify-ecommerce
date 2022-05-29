import { MutationHook } from '@common/types/hooks'

export const handler: MutationHook = {
  fetcher: ({ fetch, input }) => {
    const response = fetch({
      query: 'query { hello }'
    })

    return response
  },
  useHook: ({ fetch }) => {
    return async (input: any) => {
      const response = await fetch(input)

      return { response }
    }
  }
}
