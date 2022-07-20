import { checkoutDetailFragment } from '../../query-fragments'

const getCheckoutQuery = `
  query($checkoutId: ID!){
    node(id: $checkoutId) {
      ... on Checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`

export default getCheckoutQuery
