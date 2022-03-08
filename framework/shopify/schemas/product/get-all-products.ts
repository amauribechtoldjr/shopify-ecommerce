import getAllProductsQuery from '@shopify/queries/get-all-products'
import fetchApi from '@shopify/fetch-api'
import { ProductConnection } from '@shopify/schemas/shopify'
import { normalizeProduct } from '@shopify/normalize'

import { Product } from '@common/types/product'

type ProductsFetchResult = { products: ProductConnection }

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ProductsFetchResult>({
    query: getAllProductsQuery
  })

  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product)
    }) ?? []

  return products
}

export default getAllProducts
