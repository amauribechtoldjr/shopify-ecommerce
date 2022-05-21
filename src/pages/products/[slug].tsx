import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'
import { ProductImagesCarousel, ProductPageDetails } from '@components/product'

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
      <S.ImagesContainer>
        <ProductImagesCarousel>
          {product.images.map(image => (
            <S.ImageContainer key={image.url}>
              <S.StyledImage
                src={image.url}
                alt={image.alt}
                width={1050}
                height={1050}
                quality="85"
              />
            </S.ImageContainer>
          ))}
        </ProductImagesCarousel>
      </S.ImagesContainer>
      <S.DetailsContainer>
        <ProductPageDetails product={product} />
      </S.DetailsContainer>
    </S.Container>
  )
}

export default ProductDetailPage
