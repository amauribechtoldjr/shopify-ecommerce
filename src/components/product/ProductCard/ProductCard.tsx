import { Product } from '@common/types/product'
import Link from 'next/link'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>{product.name}</Link>
    </div>
  )
}

export default ProductCard
