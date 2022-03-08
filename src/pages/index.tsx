import Head from 'next/head'

import { Container } from '@styles/pages/Home'

import { observer } from 'mobx-react'
import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@shopify/data/product/get-all-products'

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const handleNewTodo = () => {
    console.log('adicionou novo todo')
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>{JSON.stringify(products)}</main>
    </Container>
  )
}

export default observer(Home)
