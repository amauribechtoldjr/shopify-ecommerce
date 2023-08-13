import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/database/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'

import s from './slug.module.scss'
import Head from 'next/head'
import { Container, BreadCrumb } from '@components/UI'
import { Details, ImageSlider } from '@features/products/components'

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
  return (
    <Container className={s.container}>
      <BreadCrumb />
      <Head>
        <title>Travesssa - {product.name}</title>
      </Head>
      <Container className={s['content-height']}>
        <div className={s['product-container']}>
          <div>
            <ImageSlider images={product.images} />
          </div>
          <div>
            <Details product={product} />
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default ProductSlug
