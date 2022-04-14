import { Product } from '@common/types/product'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div>
      {product.name} - <span>{product.id}</span>
    </div>
  )
}

export default ProductCard
