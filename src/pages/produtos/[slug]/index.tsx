import { getConfig } from '@framework/api/config'
import {
  getAllProducts,
  getAllProductsPaths,
  getProduct
} from '@framework/database/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'

import s from './slug.module.scss'
import Head from 'next/head'
import { Container, BreadCrumb } from '@components/UI'
import {
  Details,
  ImageSlider,
  MoreProducts
} from '@features/products/components'
import { useCallback, useEffect, useState } from 'react'
import { Product } from '@common/types/product'

type Props = {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig()

  const { products } = await getAllProductsPaths(config)

  return {
    paths: products.map(product => ({ params: { slug: product.slug } })),
    fallback: false
  }
}

export const getStaticProps = async ({
  params
}: GetStaticPropsContext<Props>) => {
  const config = getConfig()

  const { product } = await getProduct({
    config,
    variables: { slug: params?.slug }
  })

  return {
    props: {
      product
    }
  }
}

function searchSameTypeProducts(product: Product, products: Product[]) {
  return products.filter(
    productItem =>
      productItem.type === product.type && productItem.id !== product.id
  )
}

function addOtherProducts(
  products: Product[],
  filteredProducts: Product[],
  product: Product,
  quantity = 6
) {
  if (filteredProducts.length < quantity) {
    products.forEach(productItem => {
      if (filteredProducts.length < quantity && productItem.id !== product.id) {
        filteredProducts.push(productItem)
      }
    })
  }

  return filteredProducts
}

const ProductSlug: PageProps<typeof getStaticProps> = ({ product }) => {
  const [otherProducts, setOtherProducts] = useState([])

  const loadOtherProducts = useCallback(async () => {
    const config = getConfig()
    const products = await getAllProducts(config)

    const sameTypeProducts = searchSameTypeProducts(product, products)
    const finalList = addOtherProducts(products, sameTypeProducts, product, 8)
    setOtherProducts(finalList)
  }, [product])

  useEffect(() => {
    loadOtherProducts()
  }, [loadOtherProducts])

  return (
    <div className={s.container}>
      <BreadCrumb />
      <Head>
        <title>Travesssa - {product.name}</title>
      </Head>
      <Container className={s['content']}>
        <div className={s['container__product']}>
          <div>
            <ImageSlider images={product.images} />
          </div>
          <div>
            <Details product={product} />
          </div>
        </div>
        <MoreProducts products={otherProducts} />
      </Container>
    </div>
  )
}

export default ProductSlug
