import { Product } from '@common/types/product'
import { Button } from '@components/UI'
import React from 'react'
import { ProductOptions } from '@components/product'
import * as S from './styles'

type Props = {
  product: Product
}

const PageDetails: React.FC<Props> = ({ product }) => {
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
            return <ProductOptions key={option.id} option={option} />
          })}
        </div>
      </S.OptionsContainer>
      <Button onClick={() => alert('add to cart')}>
        Adicionar ao carrinho
      </Button>
    </S.Container>
  )
}

export default PageDetails
