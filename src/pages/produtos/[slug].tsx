import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/database/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'
import { ImageSlider, ProductDetails } from '@components/product'

import s from './slug.module.scss'
// import useCart from '@framework/hooks/mutation-handlers/cart/use-cart'
import Head from 'next/head'
import { Container, Grid } from '@components/UI'

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
    <section className={s['product-details-box']}>
      <Head>
        <title>Travesssa - {product.name}</title>
      </Head>
      <Container className={s['product-details-container']}>
        <Grid cols={2}>
          <div>
            <ImageSlider images={product.images} />
          </div>
          <div>
            <ProductDetails product={product} />
          </div>
        </Grid>
      </Container>
    </section>
  )
}

export default ProductSlug
