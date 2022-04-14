import Head from 'next/head'

import { ProductCard } from '@components/product'
import { Container } from '@styles/pages/Home'
import { getConfig } from '@framework/api/config'

import { observer } from 'mobx-react'
import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/data/product/get-all-products'

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

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        {products.slice(0, 3).map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </main>
    </Container>
  )
}

export default observer(Home)
