import { MutationHook } from '@common/types/hooks'
import { getCheckoutId } from '@framework'
import { checkoutLineItemsAddMutation } from '@framework/mutations'

export const handler: MutationHook = {
  fetcherOptions: {
    query: checkoutLineItemsAddMutation
  },
  fetcher: async ({ fetch, options, input }) => {
    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
          variantId: input.variantId,
          quantity: 1
        }
      ]
    }

    const response = await fetch({
      ...options,
      variables
    })

    console.log(response)

    return response
  },
  useHook: ({ fetch }) => {
    return async (input: any) => {
      const response = await fetch(input)

      return { response }
    }
  }
}
