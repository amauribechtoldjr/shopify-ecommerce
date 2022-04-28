import { ApiConfig } from '@common/types/api'

const getProduct = async (config: ApiConfig): Promise<any> => {
  return {
    product: {
      name: 'teste',
      slug: 'my-super-product'
    }
  }
}

export default getProduct
