import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'
import * as S from '@styles/pages/products/slug'
import { ProductImagesCarousel, ProductPageDetails } from '@components/product'

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
      <S.ImagesContainer>
        <ProductImagesCarousel images={product.images} />
      </S.ImagesContainer>
      <S.DetailsContainer>
        <ProductPageDetails product={product} />
      </S.DetailsContainer>
    </S.Container>
  )
}

export default ProductDetailPage
