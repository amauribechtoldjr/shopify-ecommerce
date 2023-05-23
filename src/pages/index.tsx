import { Card } from '@components/product'
import { getConfig } from '@framework/api/config'
import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@framework/database/fetchers'
import { Hero, Container, Grid, Separator, StepsHero } from '@components/UI'
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
        <Separator />
        <Container>
          <Grid cols={4}>
            {products.slice(0, 8).map(product => (
              <Card product={product} key={product.id}></Card>
            ))}
          </Grid>
        </Container>
        <Container>
          <StepsHero />
        </Container>
      </main>
    </div>
  )
}

export default Home
