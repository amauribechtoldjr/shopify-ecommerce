import { useRemoveItem } from '@common/hooks'
import { UseRemoveItem } from '@common/hooks/cart/use-remove-item'
import { Cart } from '@common/types/cart'
import { MutationHook } from '@common/types/hooks'
import { checkoutLineItemRemoveMutation } from '@framework/database/mutations'
import { CheckoutLineItemsRemovePayload } from '@framework/types'
import { checkoutToCart, getCheckoutId } from '@framework/utils'
import useCart from './use-cart'

export type RemoveItemDescriptor = {
  fetcherInput: {
    id: string
  }
  fetcherOutput: {
    checkoutLineItemsRemove: CheckoutLineItemsRemovePayload
  }
  data: Cart
}

export const handler: MutationHook<RemoveItemDescriptor> = {
  fetcherOptions: {
    query: checkoutLineItemRemoveMutation
  },
  async fetcher({ input: { id }, options, fetch }) {
    const { data } = await fetch({
      ...options,
      variables: {
        checkoutId: getCheckoutId(),
        lineItemIds: [id]
      }
    })
    const cart = checkoutToCart(data.checkoutLineItemsRemove.checkout)
    return cart
  },
  useHook:
    ({ fetch }) =>
    () => {
      const { mutate: updateCart } = useCart()

      return async input => {
        const data = await fetch(input)

        updateCart(data, false)

        return data
      }
    }
}

export default useRemoveItem as UseRemoveItem<typeof handler>
