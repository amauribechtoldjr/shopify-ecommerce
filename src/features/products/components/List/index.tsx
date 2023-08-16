import { Product, ProductType } from '@common/types/product'
import { Container } from '@components/UI'
import { useMemo, useState } from 'react'
import Card from '../Card'
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
          <div className={s['grid-container']}>
            {currentProducts.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        ) : null}
      </div>
    </Container>
  )
}

export default List
