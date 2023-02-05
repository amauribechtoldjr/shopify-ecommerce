import s from './ProductOptions.module.scss'
import { CSSProperties, FC, memo, useState } from 'react'
import { ProductOption, ProductOptionValues } from '@common/types/product'
import { AiOutlineCheck } from 'react-icons/ai'
import classNames from 'classnames'

interface Props {
  option: ProductOption
  onSelectOption?: (option: ProductOptionValues, category: string) => void
}

interface ColorOption extends ProductOptionValues {
  selected: boolean
  styles: CSSProperties
  handleSelectOption: (value: ProductOptionValues) => void
}

function calcHexColor(color: string): boolean {
  const rgb = parseInt(color.substring(1), 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = (rgb >> 0) & 0xff

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return luma > 40
}

const ColorOption: FC<ColorOption> = ({
  label,
  hexColor,
  handleSelectOption,
  styles,
  selected
}) => {
  const isDark = calcHexColor(hexColor)

  const activeIconClassNames = classNames(
    s['selected-icon'],
    { [s['black-option']]: isDark },
    { [s['white-option']]: !isDark }
  )

  return (
    <div
      onClick={() => handleSelectOption({ label, hexColor })}
      className={s['color-option']}
      style={styles}
    >
      {selected ? (
        <AiOutlineCheck
          width={16}
          height={16}
          className={activeIconClassNames}
        />
      ) : null}
    </div>
  )
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
    <div className={s['color-option-box']}>
      {option.values.map(value => {
        return (
          <ColorOption
            key={option.id + value.hexColor}
            handleSelectOption={handleSelectOption(value)}
            styles={{ backgroundColor: value.hexColor }}
            selected={value.label === selectedValue?.label}
            {...value}
          />
        )
      })}
    </div>
  )
}

export default memo(ProductOptions)
