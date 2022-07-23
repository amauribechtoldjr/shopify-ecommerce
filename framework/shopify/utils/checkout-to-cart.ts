import { normalizeCart } from '@framework/normalize'
import { Checkout, Maybe } from '@framework/types'

const checkoutToCart = function (checkout?: Maybe<Checkout>) {
  if (!checkout) {
    throw new Error('Missing checkout object!')
  }

  return normalizeCart(checkout)
}

export default checkoutToCart
