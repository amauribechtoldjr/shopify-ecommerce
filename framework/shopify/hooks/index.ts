import { handler as AddItemHandler } from '@framework/hooks/mutation-handlers/cart/use-add-item'
import { handler as CartHandler } from '@framework/hooks/mutation-handlers/cart/use-cart'
import { handler as RemoveItemHandler } from '@framework/hooks/mutation-handlers/cart/use-remove-item'

export const shopifyHooks = {
  cart: {
    useAddItem: AddItemHandler,
    useCart: CartHandler,
    useRemoveItem: RemoveItemHandler
  }
}

export { default as useAddItem } from './mutation-handlers/cart/use-add-item'
export { default as useCart } from './mutation-handlers/cart/use-cart'
export { default as useRemoveItem } from './mutation-handlers/cart/use-remove-item'
