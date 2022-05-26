import { FC, useState } from 'react'
import {
  Product,
  ProductOption,
  ProductOptionValues
} from '@common/types/product'
import * as S from './styles'

interface Props {
  option: ProductOption
  product: Product
  onSelectOption?: (option: ProductOptionValues, category: string) => void
}

const ProductOptions: FC<Props> = ({ option, onSelectOption }) => {
  const [selectedValue, setSelectedValue] = useState<ProductOptionValues>(null)

  const handleSelectOption = (value: ProductOptionValues) => {
    return () => {
      if (value !== selectedValue) {
        setSelectedValue(value)

        if (onSelectOption) {
          onSelectOption(value, option.displayName.toLowerCase())
        }
      }
    }
  }

  return (
    <S.OptionContanier>
      <span>{option.displayName}</span>
      <S.OptionItems>
        {option.values.map(value => {
          return (
            <S.OptionLabel
              key={value.label}
              optionColor={value.hexColor}
              selected={value.label === selectedValue?.label}
              onClick={handleSelectOption(value)}
            >
              {!value.hexColor && value.label.toUpperCase()}
            </S.OptionLabel>
          )
        })}
      </S.OptionItems>
    </S.OptionContanier>
  )
}

export default ProductOptions
