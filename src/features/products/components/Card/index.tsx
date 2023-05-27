import s from './index.module.scss'
import { Product } from '@common/types/product'
import Link from 'next/link'
import { FC, useCallback } from 'react'
import Heading from '@components/UI/Heading/Heading'
import { Ghost } from '@components/icons'
import { ROUTES } from '@components/UI/Navbar/Navbar'
import { ImageBox } from '@components/UI'

interface Props {
  product: Product
}

const Card: FC<Props> = ({ product }) => {
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
              <span className={s['product-collection']}>drop-01</span>
            </div>
            <span className={s['product-price']}>R$ {product.price.value}</span>
          </div>
          <button className={s['buy-button']}>
            <span>COMPRAR!</span>
            <Ghost classes={s['ghost-icon']} />
          </button>
        </div>
      </Link>
    </section>
  )
}

export default Card
