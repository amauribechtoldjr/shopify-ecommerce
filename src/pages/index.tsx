import { CardProduct } from '@components/product'
import { getConfig } from '@framework/api/config'
import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@framework/database/fetchers'
import { Grid, Hero, Container } from '@components/UI'
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
        <Container className={s['hero-container']}>
          <Hero />
        </Container>
        <Container>
          <Grid cols={2}>
            <div>teste 1</div>
            <div>teste 2</div>
            <div>teste 3</div>
            <div>teste 4</div>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default Home
