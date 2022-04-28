import { ApiConfig } from '@common/types/api'
import { Product } from '@common/types/product'
import getAllProductsPathsQuery from '@framework/queries/products/get-all-products-paths'
import { ProductConnection } from '@framework/types'

type ReturnType = {
  products: Pick<Product, 'slug'>[]
}

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductsPathsQuery,
    url: config.apiUrl
  })

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle
    }
  })

  return { products }
}

export default getAllProductsPaths
