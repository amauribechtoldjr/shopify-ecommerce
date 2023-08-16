import { Product } from '@common/types/product'
import { Container, Heading } from '@components/UI'
import Card from '../Card'
import * as s from './index.module.scss'

interface MoreProductsProps {
  products: Product[]
}

function MoreProducts({ products }: MoreProductsProps) {
  return (
    <Container className={s['container']}>
      <Heading as="h3">+ Travesssuras</Heading>
      {products?.length > 0 ? (
        <div className={s['container__grid']}>
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : null}
    </Container>
  )
}

export default MoreProducts
