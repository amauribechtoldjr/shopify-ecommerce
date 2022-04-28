import { ApiConfig } from '@common/types/api'
import { getProductQuery } from '@framework/queries'

const getProduct = async (config: ApiConfig): Promise<any> => {
  const { data } = await config.fetch({
    query: getProductQuery,
    url: config.apiUrl
  })

  console.log(JSON.stringify(data))

  return {
    product: {
      name: 'teste',
      slug: 'my-super-product'
    }
  }
}

export default getProduct
