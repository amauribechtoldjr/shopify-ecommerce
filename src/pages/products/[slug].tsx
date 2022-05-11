import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'

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
  return <div>{JSON.stringify(product, null, 2)}</div>
}

export default ProductDetailPage
