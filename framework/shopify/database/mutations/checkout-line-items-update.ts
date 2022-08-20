import { checkoutDetailFragment } from '../query-fragments'

const checkoutLineItemUpdateMutation = `
  mutation(
    $checkoutId: ID!,
    $lineItems: [CheckoutLineItemUpdateInput!]!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
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
export default checkoutLineItemUpdateMutation
