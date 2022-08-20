import { useUpdateItem } from '@common/hooks'
import { UseUpdateItem } from '@common/hooks/cart/use-update-item'
import { Cart } from '@common/types/cart'
import { MutationHook } from '@common/types/hooks'
import { checkoutLineItemUpdateMutation } from '@framework/database/mutations'
import { CheckoutLineItemsUpdatePayload } from '@framework/types'
import { checkoutToCart, getCheckoutId } from '@framework/utils'
import useCart from './use-cart'

export type UpdateItemDescriptor = {
  fetcherInput: {
    id: string
    quantity: number
    variantId: string
  }
  fetcherOutput: {
    checkoutLineItemsUpdate: CheckoutLineItemsUpdatePayload
  }
  data: Cart
}

export const handler: MutationHook<UpdateItemDescriptor> = {
  fetcherOptions: {
    query: checkoutLineItemUpdateMutation
  },
  async fetcher({ input, options, fetch }) {
    const { data } = await fetch({
      ...options,
      variables: {
        checkoutId: getCheckoutId(),
        lineItems: [
          {
            id: input.id,
            quantity: input.quantity,
            variantId: input.variantId
          }
        ]
      }
    })

    const cart = checkoutToCart(data.checkoutLineItemsUpdate.checkout)

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

export default useUpdateItem as UseUpdateItem<typeof handler>
