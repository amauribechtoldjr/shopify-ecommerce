import { useCart } from '@common/hooks'
import { getCheckoutQuery } from '@framework'
import { useMemo } from 'react'
import { createCheckout, checkoutToCart } from '@framework/utils'

export default useCart

export const handler = {
  fetchOptions: {
    query: getCheckoutQuery
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    let checkout

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
      checkout = await createCheckout(fetch)
    }

    const cart = checkoutToCart(checkout)

    return cart
  },
  useHook: ({ useData }) => {
    const data = useData({
      swrOptions: {
        revalidateOnFocus: false
      }
    })

    useMemo(() => data, [data])

    return { data }
  }
}
