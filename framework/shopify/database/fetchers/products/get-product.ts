import { ApiConfig, FetcherVariables } from '@common/types/api'
import { normalizeProduct } from '@framework/normalize'
import { getProductQuery } from '@framework/database/queries'
import { Product as ShopifyProduct } from '@framework/types'
import { Product } from '@common/types/product'

type FetchType = {
  productByHandle: ShopifyProduct
}

type ReturnType = {
  product: Product | null
}

const getProduct = async (options: {
  config: ApiConfig
  variables?: FetcherVariables
}): Promise<ReturnType> => {
  const { config, variables } = options
  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    variables
  })

  const { productByHandle } = data

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null
  }
}

export default getProduct
