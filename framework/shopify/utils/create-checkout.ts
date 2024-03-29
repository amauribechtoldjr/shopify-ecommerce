import { ApiFetcher } from '@common/types/api'
import {
  SHOPIFY_CHECKOUT_ID_COOKIE,
  SHOPIFY_CHECKOUT_URL_COOKIE_NAME,
  SHOPIFY_COOKIE_EXPIRE
} from '@framework/const'
import { createCheckoutMutation } from '@framework/database/mutations'
import { Checkout, CheckoutCreatePayload, Maybe } from '@framework/types'
import Cookies from 'js-cookie'

const createCheckout = async (
  fetch: ApiFetcher<{ checkoutCreate: CheckoutCreatePayload }>
): Promise<Maybe<Checkout>> => {
  const { data } = await fetch({
    query: createCheckoutMutation
  })

  const { checkout } = data.checkoutCreate
  const checkoutId = checkout?.id

  if (checkoutId) {
    const options = {
      expires: SHOPIFY_COOKIE_EXPIRE
    }

    Cookies.set(SHOPIFY_CHECKOUT_ID_COOKIE, checkoutId, options)
    Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE_NAME, checkout?.webUrl, options)
  }

  return checkout
}

export default createCheckout
