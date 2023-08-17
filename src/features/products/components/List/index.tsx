import { Product, ProductType } from '@common/types/product'
import { Container } from '@components/UI'
import { useMemo, useState } from 'react'
import Card from '../Card'
import Filters from '../Filters'
import ProductTypeNotFound from '../TypeNotFound'
import s from './index.module.scss'
import { OrderDirections, OrderType } from '../types'
import Order from '../Order'
import { getProductsByOrder, getProductsByType } from '@features/products/utils'

export interface ListProps {
  products: Product[]
}

const List = ({ products }: ListProps) => {
  const [currentType, setTypeFilter] = useState<ProductType | null>(null)
  const [orderType, setOrderType] = useState<OrderType | null>(null)
  const [orderDirection, setOrderDirection] = useState<OrderDirections | null>(
    null
  )

  const handleUpdateFilterType = (type: ProductType | null) => {
    setTypeFilter(type)
  }

  const resetFilter = () => {
    setTypeFilter(null)
  }

  const execOrder = (type: OrderType, direction: OrderDirections) => {
    setOrderDirection(direction)
    setOrderType(type)
  }

  const currentProducts = useMemo(() => {
    const productsByType = getProductsByType(currentType, products)
    return getProductsByOrder(orderType, orderDirection, productsByType)
  }, [currentType, products, orderType, orderDirection])

  return (
    <Container>
      <Filters
        updateTypeFilter={handleUpdateFilterType}
        currentType={currentType}
      />
      <Order
        execOrdering={execOrder}
        options={[
          { title: 'Nome', type: 'name' },
          { title: 'Preço', type: 'price' }
        ]}
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
