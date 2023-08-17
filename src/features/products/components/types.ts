export type OrderDirections = 'asc' | 'desc'
export type OrderType = 'name' | 'price'

export interface OrderOptions {
  title: string
  type: OrderType
}
