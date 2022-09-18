import { getConfig } from '@framework/api/config'
import { getAllProductsPaths, getProduct } from '@framework/database/fetchers'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'
import { ProductImagesCarousel, ProductDetails } from '@components/product'

import * as S from '@styles/pages/products/slug'
import useCart from '@framework/hooks/mutation-handlers/cart/use-cart'
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
    <S.Container>
      <Head>
        <title>Travesssa - {product.name}</title>
      </Head>
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
        <ProductDetails product={product} />
      </S.DetailsContainer>
    </S.Container>
  )
}

export default ProductDetailPage
