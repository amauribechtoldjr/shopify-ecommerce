import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'
import * as S from '@styles/pages/products/slug'

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
    <S.Container>
      <h2>{product.id}</h2>
      <h2>{product.name}</h2>
      <span>{product.price.currencyCode}</span>
      <span>{product.price.value}</span>

      <div>
        {product.options.map(option => {
          return (
            <div key={option.id}>
              <span>Name: {option.displayName}</span>
              <div>
                {option.values.map(value => (
                  <span key={value.label}>{value.label}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </S.Container>
  )
}

export default ProductDetailPage
