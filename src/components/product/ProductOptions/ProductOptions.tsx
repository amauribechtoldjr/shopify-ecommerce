import './ProductOptions.module.scss'
import { FC, useState } from 'react'
import { ProductOption, ProductOptionValues } from '@common/types/product'

interface Props {
  option: ProductOption
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
    <div>
      <span>{option.displayName}</span>
      <div>
        {option.values.map(value => {
          return (
            <div
              key={value.label}
              // optionColor={value.hexColor}
              // selected={value.label === selectedValue?.label}
              onClick={handleSelectOption(value)}
            >
              {!value.hexColor && value.label.toUpperCase()}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductOptions
