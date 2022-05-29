import React, { useState } from 'react'
import { Product, ProductOptionValues } from '@common/types/product'
import { Button } from '@components/UI'
import { ProductOptions } from '@components/product'
import * as S from './styles'
import { getVariant, SelectedOptions } from '../helpers'
import { useAddItem } from '@common/cart'

type Props = {
  product: Product
}

const PageDetails: React.FC<Props> = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(null)
  const variant = getVariant(product, selectedOptions)
  const addItem = useAddItem()

  const handleAddOption = (option: ProductOptionValues, category) => {
    setSelectedOptions({
      ...selectedOptions,
      [category]: option
    })
  }

  const handleAddCart = () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: variant?.id,
        variantOptions: variant?.options
      }

      const response = addItem(item)
      console.log(response)
    } catch {}
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
                product={product}
                onSelectOption={handleAddOption}
              />
            )
          })}
        </div>
      </S.OptionsContainer>
      <Button onClick={handleAddCart}>Adicionar ao carrinho</Button>
    </S.Container>
  )
}

export default PageDetails
