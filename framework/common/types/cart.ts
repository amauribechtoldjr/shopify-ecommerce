interface Discount {
  value: number
}

export interface Cart {
  id: string
  createdAt: string
  currency: {
    code: string
  }
  taxesIncluded: boolean
  // discounts excluded
  lineItemsSubTotalPrie: number
  // discounts included
  totalPrice: number
  lineItems: any[]
  discounts: Discount[]
}
