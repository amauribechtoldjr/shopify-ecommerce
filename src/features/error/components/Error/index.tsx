import { useRouter } from 'next/router'
import PageNotFound from './PageNotFound'
import ProductNotFound from './ProductNotFound'

function Error() {
  const router = useRouter()

  if (router.asPath.includes('/produtos/')) {
    return <ProductNotFound />
  }

  return <PageNotFound />
}

export default Error
