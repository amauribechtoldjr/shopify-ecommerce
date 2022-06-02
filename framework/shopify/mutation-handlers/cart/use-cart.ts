import useCart from '@common/hooks/cart/use-cart'

export default useCart

export const handler = {
  fetchOptions: {
    query: ''
  },
  fetcher() {
    return {
      data: 'Cart already!'
    }
  },
  useHook: ({ fetch }) => {
    const data = fetch()

    return { data }
  }
}
