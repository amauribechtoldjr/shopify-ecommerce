import './CardProduct.module.scss'
import { Product } from '@common/types/product'
import Link from 'next/link'
import Image from 'next/image'
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
  }, [product.name, product.images])

  return (
    <>
      <Link href={`/products/${product.slug}`}>
        <div>
          {renderProductImages()}
          <div>
            <div>{product.name}</div>
            <div>R$ {product.price.value}</div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
