import { ProductCard } from '@components/product'
import { Container } from '@styles/pages/Home'
import { getConfig } from '@framework/api/config'

import { observer } from 'mobx-react'
import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/fetchers/products/get-all-products'
import { Grid, Hero } from '@components/UI'

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
        <Hero
          headline="Hero component"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        />
      </main>
    </Container>
  )
}

export default observer(Home)
