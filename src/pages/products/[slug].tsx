import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { PageProps } from 'src/types/pages'

type Props = {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'cool-hat' } },
      { params: { slug: 'lightweight-jacket' } },
      { params: { slug: 't-shirt' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async ({
  params
}: GetStaticPropsContext<Props>) => {
  return {
    props: {
      product: {
        slug: params.slug
      }
    }
  }
}

const ProductDetailPage: PageProps<typeof getStaticProps> = ({ product }) => {
  return <div>{product.slug}</div>
}

export default ProductDetailPage
