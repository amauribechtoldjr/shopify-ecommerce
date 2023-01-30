import { CardProduct } from '@components/product'
import { getConfig } from '@framework/api/config'
import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@framework/database/fetchers'
import { Grid, Hero } from '@components/UI'
import Head from 'next/head'
import s from './index.module.scss'

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
    <div>
      <Head>
        <title>Travesssa</title>
      </Head>
      <main>
        <div className={s['main-container']}>Site disponível em breve!</div>
      </main>
    </div>
  )
}

export default Home
