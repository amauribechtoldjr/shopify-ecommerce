import React, { useState } from 'react'
import { Product, ProductOptionValues } from '@common/types/product'
import { ProductOptions } from '@components/product'
import { getVariant, SelectedOptions } from '../helpers'
import { useAddItem } from '@framework/hooks'

type Props = {
  product: Product
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(null)
  const [isLoading, setLoading] = useState(false)
  const variant = getVariant(product, selectedOptions)
  const addItem = useAddItem()

  const handleAddOption = (option: ProductOptionValues, category) => {
    setSelectedOptions({
      ...selectedOptions,
      [category]: option
    })
  }

  const handleAddCart = async () => {
    try {
      const item = {
        variantId: variant?.id ?? product.variants[0].id,
        quantity: 1
      }
      setLoading(true)

      await addItem(item)

      setLoading(false)
    } catch {
      setLoading(false)
    }
  }

  return (
    <div>
      <div>
        <div>{product.name}</div>
        <div>
          {product.price.currencyCode}
          {product.price.value}
        </div>
      </div>
      <div>
        <div>{product.description}</div>
        <div>
          {product.options.map(option => {
            return (
              <ProductOptions
                key={option.id}
                option={option}
                onSelectOption={handleAddOption}
              />
            )
          })}
        </div>
      </div>
      <button onClick={handleAddCart}>Adicionar ao carrinho</button>
    </div>
  )
}

export default ProductDetails
