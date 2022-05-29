import React, { useState } from 'react'
import { Product, ProductOptionValues } from '@common/types/product'
import { Button } from '@components/UI'
import { ProductOptions } from '@components/product'
import * as S from './styles'
import { getVariant, SelectedOptions } from '../helpers'
import { useUI } from '@hooks'

type Props = {
  product: Product
}

const PageDetails: React.FC<Props> = ({ product }) => {
  const provider = useUI()
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(null)
  const variant = getVariant(product, selectedOptions)

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

      console.log(item)
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
