import { handler as useAddItemHandler } from '@framework/hooks/mutation-handlers/cart/use-add-item'
import { handler as useCartHandler } from '@framework/hooks/mutation-handlers/cart/use-cart'

export const shopifyHooks = {
  cart: {
    useAddItem: useAddItemHandler,
    useCart: useCartHandler
  }
}

export { default as useAddItem } from './mutation-handlers/cart/use-add-item'
export { default as useCart } from './mutation-handlers/cart/use-cart'
