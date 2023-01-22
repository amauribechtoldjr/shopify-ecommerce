import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/database/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'
import { ProductDetails } from '@components/product'

import s from '../../styles/pages/products/slug.module.scss'
// import useCart from '@framework/hooks/mutation-handlers/cart/use-cart'
import Head from 'next/head'

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

const ProductDetailPage: PageProps<typeof getStaticProps> = ({ product }) => {
  return (
    <div className={s['product-container']}>
      <Head>
        <title>Travesssa - {product.name}</title>
      </Head>
      <div>
        {product.images.map(image => (
          <div key={image.url}>
            <img src={image.url} alt={image.alt} width={1050} height={1050} />
          </div>
        ))}
      </div>
      <div>
        <ProductDetails product={product} />
      </div>
    </div>
  )
}

export default ProductDetailPage
