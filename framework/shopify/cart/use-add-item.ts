import { MutationHook } from '@common/types/hooks'

export const handler: MutationHook = {
  fetcher: ({ fetch, input }) => {
    const response = fetch({
      url: 'http://localhost:4000/graphql',
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
