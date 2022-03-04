import getAllProductsQuery from '../../queries/get-all-products'
import fetchApi from '../../fetch-api'

const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi({ query: getAllProductsQuery })

  return products.data
}

export default getAllProducts
