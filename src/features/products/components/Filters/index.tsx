import { ProductType } from '@common/types/product'
import classNames from 'classnames'
import s from './index.module.scss'

interface ProductTypes {
  name: ProductType
  key: number
}

const productTypes: ProductTypes[] = [
  { name: 'xicara', key: 1 },
  { name: 'cumbuca', key: 2 },
  { name: 'prato', key: 3 },
  { name: 'copo', key: 4 },
  { name: 'travessa', key: 5 },
  { name: 'escultura', key: 6 },
  { name: 'vaso', key: 7 },
  { name: 'moringa', key: 8 },
  { name: 'travessuras', key: 9 },
  { name: 'pote', key: 10 },
  { name: 'cinzeiro', key: 11 },
  { name: 'decorativos', key: 12 }
]

interface FiltersProps {
  updateTypeFilter: (type: string) => void
  currentType: string
}

const Filters = ({ updateTypeFilter, currentType }: FiltersProps) => {
  function handleFilter(type) {
    return () => {
      if (type === currentType) {
        return updateTypeFilter(null)
      }

      updateTypeFilter(type)
    }
  }

  const productFilterClassname = type =>
    classNames(s['product-filter'], { [s.selected]: type === currentType })

  return (
    <div className={s['filters-container']}>
      {productTypes.map(type => (
        <div
          key={type.key}
          className={productFilterClassname(type.name)}
          onClick={handleFilter(type.name)}
        >
          {type.name}
        </div>
      ))}
    </div>
  )
}

export default Filters
