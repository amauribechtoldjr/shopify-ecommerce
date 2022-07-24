import { MutationHook } from '@common/types/hooks'
import { checkoutToCart, getCheckoutId } from '@framework/utils'
import { checkoutLineItemsAddMutation } from '@framework/database/mutations'
import { Cart } from '@common/types/cart'
import { CheckoutLineItemsAddPayload } from '@framework/types'
import { useAddItem } from '@common/hooks'
import { UseAddItem } from '@common/hooks/cart/use-add-item'

export type AddItemHookDescriptor = {
  fetcherInput: {
    variantId: string
    quantity: number
  }
  fetcherOutput: {
    checkoutLineItemsAdd: CheckoutLineItemsAddPayload
  }
  data: Cart
}

export const handler: MutationHook<AddItemHookDescriptor> = {
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

    const { data } = await fetch({
      ...options,
      variables
    })

    const cart = checkoutToCart(data.checkoutLineItemsAdd.checkout)

    return cart
  },
  useHook:
    ({ fetch }) =>
    () => {
      return async input => {
        const response = await fetch(input)

        return response
      }
    }
}

export default useAddItem as UseAddItem<typeof handler>
