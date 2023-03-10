import s from './CardProduct.module.scss'
import { Product } from '@common/types/product'
import Link from 'next/link'
import Image from 'next/image'
import { FC, useCallback } from 'react'
import Heading from '@components/UI/Heading/Heading'
import { Ghost } from '@components/icons'
import { useRouter } from 'next/router'
import { ROUTES } from '@components/UI/Navbar/Navbar'
import { ImageBox } from '@components/UI'

interface Props {
  product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
  const router = useRouter()

  const renderProductImage = useCallback(() => {
    if (product.images) {
      return (
        <ImageBox
          src={product.images[0].url}
          alt={product.name}
          classes={s['card-product-image-effect']}
        />
      )
    }
  }, [product.name, product.images])

  const handleCollectionClick = collection => e => {
    e.preventDefault()
    router.push(`/collections/${collection}`)
  }

  const handleBuyButton = e => {
    e.preventDefault()
  }

  return (
    <section className={s['card-product-box']}>
      <Link href={`${ROUTES.PRODUCTS}/${product.slug}`}>
        <div className={s['card-box']}>
          <div className={s['product-img-box']}>{renderProductImage()}</div>
          <div className={s['product-text-box']}>
            <div className={s['product-title-box']}>
              <Heading as="h6" inline className={s['product-title']}>
                {product.name}
              </Heading>
              <span
                className={s['product-collection']}
                onClick={handleCollectionClick(product.name)}
              >
                drop-01
              </span>
            </div>
            <span className={s['product-price']}>R$ {product.price.value}</span>
          </div>
          {/** TODO: adicionar item ao carrinho aqui também */}
          <div className={s['buy-button']} onClick={handleBuyButton}>
            <span>QUERO!</span>
            <Ghost classes={s['ghost-icon']} />
          </div>
        </div>
      </Link>
    </section>
  )
}

export default ProductCard
