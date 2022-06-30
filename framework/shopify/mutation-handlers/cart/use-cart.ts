import useCart from '@common/hooks/cart/use-cart'
import { createCheckout } from '@framework'

export default useCart

export const handler = {
  fetchOptions: {
    query: 'query { hello }'
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    let checkout: any

    if (checkoutId) {
      const { data } = await fetch({ ...options })

      checkout = data.node
    }

    if (!checkoutId) {
      checkout = await createCheckout(fetch)
    }

    return checkout
  },
  useHook: ({ useData }) => {
    const data = useData()

    return { data }
  }
}
