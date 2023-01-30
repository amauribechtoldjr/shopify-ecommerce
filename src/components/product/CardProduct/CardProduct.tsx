import s from './CardProduct.module.scss'
import { Product } from '@common/types/product'
import Link from 'next/link'
import Image from 'next/image'
import { FC, useCallback } from 'react'

interface Props {
  product: Product
}

const PLACEHOLDER_IMAGE = '/product-placeholder.svg'

const ProductCard: FC<Props> = ({ product }) => {
  const renderProductImage = useCallback(() => {
    if (product.images) {
      return (
        <Image
          src={product.images[0].url ?? PLACEHOLDER_IMAGE}
          alt={product.name}
          width={250}
          height={250}
          quality="85"
          layout="responsive"
        />
      )
    }
  }, [product.name, product.images])

  return (
    <section className={s['card-product-box']}>
      <Link href={`/products/${product.slug}`}>
        <div>
          {renderProductImage()}
          <div>
            <div className={s['product-title']}>{product.name}</div>
            <div>R$ {product.price.value}</div>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default ProductCard
