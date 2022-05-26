import { Product, ProductOptionValues } from '@common/types/product'

export interface SelectedOptions {
  color: ProductOptionValues
  size: ProductOptionValues
}

export function getVariant(product: Product, selectedOptions: SelectedOptions) {
  if (!selectedOptions) return null

  const variant = product.variants.find(variant => {
    const isMatchingOption = variant.options.every(variantOption => {
      const optionName = variantOption.displayName.toLowerCase()

      if (optionName in selectedOptions) {
        if (
          selectedOptions[optionName].label === variantOption.values[0].label
        ) {
          return true
        }
      }

      return false
    })

    return isMatchingOption
  })

  return variant
}
