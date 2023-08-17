import { Product, ProductOptionValues } from '@common/types/product'
import { OrderDirections, OrderType } from '../components/types'

export interface SelectedOptions {
  color: ProductOptionValues
  size: ProductOptionValues
}

export const getVariant = (
  product: Product,
  selectedOptions: SelectedOptions
) => {
  if (!selectedOptions) return null

  return product.variants.find(variant => {
    const isMatchingOption = variant.options.every(variantOption => {
      const optionName = variantOption.displayName.toLowerCase()

      return (
        optionName in selectedOptions &&
        selectedOptions[optionName].label === variantOption.values[0].label
      )
    })

    return isMatchingOption
  })
}

export const getProductsByType: (
  type: string,
  products: Product[]
) => Product[] = (type, products) => {
  return products.filter(product => {
    if (type === null) return true

    return product.type === type
  })
}

export const getProductsByOrder = (
  orderType: OrderType,
  direction: OrderDirections,
  products: Product[]
) => {
  if (orderType === null || direction === null) return products

  const sortedProducts = products.sort((a, b) => {
    if (orderType === 'name') {
      if (direction === 'asc') {
        return a.name.localeCompare(b.name)
      }

      return b.name.localeCompare(a.name)
    }

    if (orderType === 'price') {
      if (direction === 'asc') {
        return a.price.value - b.price.value
      }

      return b.price.value - a.price.value
    }

    return 0
  })

  return sortedProducts
}
