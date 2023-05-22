import { getConfig } from '@framework/api/config'
import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@framework/database/fetchers'
import { Container, BreadCrumb } from '@components/UI'
import s from './index.module.scss'
import { List } from 'src/features/products'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

const Products = ({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container className={s.container}>
      <BreadCrumb />
      <List products={products} />
    </Container>
  )
}

export default Products
