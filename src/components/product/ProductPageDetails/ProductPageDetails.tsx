import { Product } from '@common/types/product'
import React from 'react'
import * as S from './styles'

type Props = {
  product: Product
}

const ProductPageDetails: React.FC<Props> = ({ product }) => {
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
        <span>Descrição: </span>
        <span>Qtd disponível:</span>
        <span>Tamanhos:</span>
        <span>Cores:</span>
      </S.OptionsContainer>
    </S.Container>
  )
}

export default ProductPageDetails
