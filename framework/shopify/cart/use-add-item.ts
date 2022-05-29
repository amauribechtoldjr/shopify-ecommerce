import { MutationHook } from '@common/types/hooks'
import { getCheckoutId } from '@framework'

export const handler: MutationHook = {
  fetcherOptions: {
    query: 'query { hello }'
  },
  fetcher: ({ fetch, options, input }) => {
    console.log(getCheckoutId())
    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
          variantId: input.variantId,
          quantity: 1
        }
      ]
    }

    const response = fetch({
      ...options,
      variables
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
