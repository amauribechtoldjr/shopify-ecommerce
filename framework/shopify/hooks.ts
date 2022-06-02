import { handler as useAddItem } from './mutation-handlers/cart/use-add-item'
import { handler as useCart } from './mutation-handlers/cart/use-cart'

export const shopifyHooks = {
  cart: {
    useAddItem,
    useCart
  }
}
