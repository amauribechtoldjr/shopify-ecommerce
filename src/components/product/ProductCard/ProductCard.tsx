import { Product } from '@common/types/product'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'
import { FC, useCallback } from 'react'

interface Props {
  product: Product
}

const PLACEHOLDER_IMAGE = '/product-placeholder.svg'

const ProductCard: FC<Props> = ({ product }) => {
  const renderProductImages = useCallback(() => {
    if (product.images) {
      return (
        <Image
          src={product.images[0].url ?? PLACEHOLDER_IMAGE}
          alt={product.name}
          width={540}
          height={540}
          quality="85"
          layout="responsive"
        />
      )
    }
  }, [product.images])

  return (
    <>
      <Link href={`/products/${product.slug}`}>
        <S.ProductCardContainer>
          <S.TitleContainer>
            <h1>{product.name}</h1>
            <S.Price>R$ {product.price.value}</S.Price>
          </S.TitleContainer>
          {renderProductImages()}
        </S.ProductCardContainer>
      </Link>
    </>
  )
}

export default ProductCard
