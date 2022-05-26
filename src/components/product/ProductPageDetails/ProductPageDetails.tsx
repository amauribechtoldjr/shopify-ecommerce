import { Product } from '@common/types/product'
import { Button } from '@components/UI'
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
      <Button onClick={() => alert('add to cart')}>
        Adicionar ao carrinho
      </Button>
    </S.Container>
  )
}

export default ProductPageDetails
