import { ProductOption, ProductVariant } from '@common/types/product'

interface Discount {
  value: number
}

export interface LineItem {
  id: string
  variantId: string
  productId: string
  name: string
  path: string
  quantity: number
  discounts: Discount[]
  options?: ProductOption[]
  variant: Partial<ProductVariant>
}

export interface Cart {
  id: string
  createdAt: string
  completedAt: string
  currency: {
    code: string
  }
  taxesIncluded: boolean
  // discounts excluded
  lineItemsSubTotalPrie: number
  // discounts included
  totalPrice: number
  lineItems: LineItem[]
  discounts: Discount[]
}
