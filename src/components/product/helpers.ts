import { Product, ProductOptionValues } from '@common/types/product'

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
