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
  Card,
  Details,
  ImageSlider,
  List,
  MoreProducts
} from '@features/products/components'
import { useEffect, useState } from 'react'

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

const ProductSlug: PageProps<typeof getStaticProps> = ({ product }) => {
  const [otherProducts, setOtherProducts] = useState([])

  useEffect(() => {
    loadOtherProducts()
  }, [])

  const loadOtherProducts = async () => {
    const config = getConfig()
    const products = await getAllProducts(config)

    const filteredProducts = products.filter(
      productItem =>
        productItem.type === product.type && productItem.id !== product.id
    )

    setOtherProducts(filteredProducts)
  }

  return (
    <div className={s.container}>
      <BreadCrumb />
      <Head>
        <title>Travesssa - {product.name}</title>
      </Head>
      <Container className={s['content']}>
        <div className={s['product-container']}>
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
