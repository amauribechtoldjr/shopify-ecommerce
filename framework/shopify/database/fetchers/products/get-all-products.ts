import { normalizeProduct, getAllProductsQuery } from '@framework'
import { ProductConnection } from '@framework/types'

import { Product } from '@common/types/product'
import { ApiConfig } from '@common/types/api'

type ProductsFetchResult = { products: ProductConnection }

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ProductsFetchResult>({
    query: getAllProductsQuery
  })

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product)
    }) ?? []

  return products
}

export default getAllProducts
