import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/database/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'
import { ProductDetails } from '@components/product'

import s from './slug.module.scss'
// import useCart from '@framework/hooks/mutation-handlers/cart/use-cart'
import Head from 'next/head'
import { Container, Grid, ImageBox } from '@components/UI'

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

// {product.images.map(image => (
//   <div key={image.url}>
//     <img src={image.url} alt={image.alt} width={1050} height={1050} />
//   </div>
// ))}

const ProductSlug: PageProps<typeof getStaticProps> = ({ product }) => {
  return (
    <section className={s['product-details-box']}>
      <Head>
        <title>Travesssa - {product.name}</title>
      </Head>
      <Container>
        <Grid cols={2}>
          <div>
            <ImageBox
              src={product?.images[0]?.url}
              alt={product?.images[0]?.alt}
            />
          </div>
          <div>
            <ProductDetails product={product} />
          </div>
        </Grid>
        <Grid cols={3} extraClasses={s['product-images-box']}>
          {product.images.map(image => (
            <div key={image.url} className={s['product-images-slug-box']}>
              <ImageBox src={image.url} alt={image.alt} />
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default ProductSlug
