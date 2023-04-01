import { useMemo, useState } from 'react'
import { Product, ProductType } from '@common/types/product'
import { CardProduct } from '@components/product'
import { getConfig } from '@framework/api/config'
import type { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@framework/database/fetchers'
import { Container, Grid } from '@components/UI'
import s from './index.module.scss'
import classNames from 'classnames'
import BreadCrumb from '@components/UI/Breadcrumb/Breadcrumb'

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

const productTypes = [
  { name: 'xicara', key: 1 },
  { name: 'cumbuca', key: 2 },
  { name: 'prato', key: 3 },
  { name: 'copo', key: 4 },
  { name: 'travessa', key: 5 },
  { name: 'escultura', key: 6 },
  { name: 'vaso', key: 7 },
  { name: 'moringa', key: 8 },
  { name: 'travessuras', key: 9 },
  { name: 'pote', key: 10 },
  { name: 'cinzeiro', key: 11 },
  { name: 'decorativos', key: 12 }
]

const Products = ({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

  function handleFilter(type) {
    return () => {
      if (type === currentType) {
        return setTypeFilter(null)
      }

      setTypeFilter(type)
    }
  }

  const currentProducts = useMemo(() => {
    return getProductsByType(currentType, products)
  }, [currentType, products])

  const productFilterClassname = type =>
    classNames(s['product-filter'], { [s.selected]: type === currentType })

  return (
    <Container className={s.container}>
      <BreadCrumb />
      <div className={s['filters-container']}>
        {productTypes.map(type => (
          <div
            key={type.key}
            className={productFilterClassname(type.name)}
            onClick={handleFilter(type.name)}
          >
            {type.name}
          </div>
        ))}
      </div>
      <div className={s['products-container']}>
        <Grid cols={4}>
          {currentProducts.length === 0 && (
            // TODO: Componente: nenhum produto encontrado
            <div>Nenhum produto encontrado para este tipo!</div>
          )}
          {currentProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Grid>
      </div>
    </Container>
  )
}

export default Products
