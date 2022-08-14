import { handler as AddItemHandler } from '@framework/hooks/mutation-handlers/cart/use-add-item'
import { handler as CartHandler } from '@framework/hooks/mutation-handlers/cart/use-cart'
import { handler as RemoveItemHandler } from '@framework/hooks/mutation-handlers/cart/use-remove-item'
import { handler as UpdateItemHandler } from '@framework/hooks/mutation-handlers/cart/use-update-item'

export const shopifyHooks = {
  cart: {
    useAddItem: AddItemHandler,
    useCart: CartHandler,
    useRemoveItem: RemoveItemHandler,
    useUpdateItem: UpdateItemHandler
  }
}

export { default as useAddItem } from './mutation-handlers/cart/use-add-item'
export { default as useCart } from './mutation-handlers/cart/use-cart'
export { default as useRemoveItem } from './mutation-handlers/cart/use-remove-item'
export { default as useUpdateItem } from './mutation-handlers/cart/use-update-item'
