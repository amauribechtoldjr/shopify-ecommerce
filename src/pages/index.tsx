import Head from 'next/head'

import { ProductCard } from '@components/product'
import { Container } from '@styles/pages/Home'
import { getConfig } from '@framework/api/config'

import { observer } from 'mobx-react'
import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/data/product/get-all-products'
import { Grid } from '@components/UI'

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
      <main>
        <Grid>
          {products.slice(0, 4).map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Grid>
      </main>
    </Container>
  )
}

export default observer(Home)
