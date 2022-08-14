import React, { useState } from 'react'
import { Product, ProductOptionValues } from '@common/types/product'
import { Button } from '@components/UI'
import { ProductOptions } from '@components/product'
import * as S from './styles'
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
    <S.Container>
      <S.TitlePriceContainer>
        <S.Title>{product.name}</S.Title>
        <S.Price>
          {product.price.currencyCode}
          {product.price.value}
        </S.Price>
      </S.TitlePriceContainer>
      <S.OptionsContainer>
        <S.Description>{product.description}</S.Description>
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
      </S.OptionsContainer>
      <Button onClick={handleAddCart} isLoading={isLoading}>
        Adicionar ao carrinho
      </Button>
    </S.Container>
  )
}

export default ProductDetails
