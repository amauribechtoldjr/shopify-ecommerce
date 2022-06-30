import useCart from '@common/hooks/cart/use-cart'

export default useCart

export const handler = {
  fetchOptions: {
    query: 'query { hello }'
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    const data = await fetch({ ...options })

    return {
      data
    }
  },
  useHook: ({ useData }) => {
    const data = useData()

    return { data }
  }
}
