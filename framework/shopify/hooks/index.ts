import { handler as useAddItem } from '@framework/hooks/mutation-handlers/cart/use-add-item'
import { handler as useCart } from '@framework/hooks/mutation-handlers/cart/use-cart'

export const shopifyHooks = {
  cart: {
    useAddItem,
    useCart
  }
}

export { default as useAddItem } from './mutation-handlers/cart/use-add-item'
export { default as useCart } from './mutation-handlers/cart/use-add-item'
