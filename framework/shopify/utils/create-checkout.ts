import { ApiFetcher } from '@common/types/api'
import { createCheckoutMutation } from '@framework/mutations'
import { Checkout, CheckoutCreatePayload, Maybe } from '@framework/types'

const createCheckout = async (
  fetch: ApiFetcher<{ checkoutCreate: CheckoutCreatePayload }>
): Promise<Maybe<Checkout>> => {
  const { data } = await fetch({
    query: createCheckoutMutation
  })

  const { checkout } = data.checkoutCreate

  const checkoutId = checkout?.id

  return checkout
}

export default createCheckout
