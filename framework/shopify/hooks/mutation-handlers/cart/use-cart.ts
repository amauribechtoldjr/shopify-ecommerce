import { useCart } from '@common/hooks'
import { getCheckoutQuery } from '@framework'
import { useMemo } from 'react'
import { Cart } from '@common/types/cart'
import { createCheckout, checkoutToCart } from '@framework/utils'
import { SWRHook } from '@common/types/hooks'
import { Checkout } from '@framework/types'
import { UseCart } from '@common/hooks/cart/use-cart'

export type UseCartHookDescriptor = {
  fetcherInput: {
    checkoutId: string
  }
  fetcherOutput: {
    node: Checkout
  }
  data: Cart
}

export const handler: SWRHook<UseCartHookDescriptor> = {
  fetcherOptions: {
    query: getCheckoutQuery
  },
  async fetcher({ fetch, options, input: { checkoutId } }) {
    let checkout: Checkout

    if (checkoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId
        }
      })

      checkout = data.node
    }

    if (!checkoutId) {
      checkout = await createCheckout(fetch as any)
    }

    const cart = checkoutToCart(checkout)

    return cart
  },
  useHook:
    ({ useData }) =>
    () => {
      const data = useData({
        swrOptions: {
          revalidateOnFocus: false
        }
      })

      return useMemo(() => data, [data])
    }
}

export default useCart as UseCart<typeof handler>
