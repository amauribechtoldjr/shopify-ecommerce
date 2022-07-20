import { checkoutDetailFragment } from '../query-fragments'

const createCheckoutMutation = `
  mutation createCheckout($input: CheckoutCreateInput = {}) {
    checkoutCreate(input: $input) {
      checkoutUserErrors {
        field
        message
      }
      checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`

export default createCheckoutMutation
