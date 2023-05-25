import { ProductType } from '@common/types/product'
import { Dropdown, Heading } from '@components/UI'
import { getFirstLetterUppercase } from 'src/utils'
import s from './index.module.scss'

interface ProductTypes {
  name: ProductType | 'todos'
  key: number
}

const productTypes: ProductTypes[] = [
  { name: 'todos', key: 1 },
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
  const handleFilter = (type: string) => {
    if (type === currentType || type === 'todos') {
      return updateTypeFilter(null)
    }

    updateTypeFilter(type)
  }

  return (
    <div className={s.container}>
      <Heading as="h5" className={s['filter-text']}>
        Filtro:
      </Heading>
      <Dropdown
        menu={productTypes}
        triggerText={
          currentType ? getFirstLetterUppercase(currentType) : 'Todos'
        }
        onSelect={handleFilter}
      />
    </div>
  )
}

export default Filters
