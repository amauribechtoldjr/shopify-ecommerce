import { Product, ProductType } from '@common/types/product'
import { CardProduct } from '@components/product'
import { Container, Grid } from '@components/UI'
import { useMemo, useState } from 'react'
import Filters from '../Filters'
import ProductTypeNotFound from '../TypeNotFound'
import s from './index.module.scss'

interface ListProps {
  products: Product[]
}

const List = ({ products }: ListProps) => {
  const [currentType, setTypeFilter] = useState<ProductType | null>(null)

  const getProductsByType: (type: string, products: Product[]) => Product[] = (
    type,
    products
  ) => {
    return products.filter(product => {
      if (type === null) return true

      return product.type === type
    })
  }

  const handleUpdateFilterType = (type: ProductType | null) => {
    setTypeFilter(type)
  }

  const resetFilter = () => {
    setTypeFilter(null)
  }

  const currentProducts = useMemo(() => {
    return getProductsByType(currentType, products)
  }, [currentType, products])

  return (
    <Container>
      <Filters
        updateTypeFilter={handleUpdateFilterType}
        currentType={currentType}
      />
      <div className={s['products-container']}>
        {currentProducts.length === 0 && (
          <ProductTypeNotFound onClick={resetFilter} />
        )}
        {currentProducts?.length > 0 ? (
          <Grid cols={4}>
            {currentProducts.map(product => (
              <CardProduct key={product.id} product={product} />
            ))}
          </Grid>
        ) : null}
      </div>
    </Container>
  )
}

export default List
