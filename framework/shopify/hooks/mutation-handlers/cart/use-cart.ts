import useCart from '@common/hooks/cart/use-cart'
import { createCheckout, getCheckoutQuery } from '@framework'

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

    return checkout
  },
  useHook: ({ useData }) => {
    const data = useData()

    return { data }
  }
}
