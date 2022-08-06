import { LineItem } from '@common/types/cart'
import { Minus, Plus, Trash } from '../../icons'
import Image from 'next/image'
import Link from 'next/link'
import ProductOptions from '../ProductOptions/ProductOptions'

const CartItem = ({
  item,
  currencyCode
}: {
  item?: LineItem
  currencyCode: string
}) => {
  const price = item.variant.price * item.quantity || 0
  const { options } = item

  return (
    <li>
      <div>
        <Image
          onClick={() => console.log('imagem')}
          width={150}
          height={150}
          src={item.variant.image.url}
          unoptimized
        />
      </div>
      <div>
        <Link href={`/`}>
          <span>{item.name}</span>
        </Link>
        <div>
          {options &&
            options.length > 0 &&
            options.map(option => {
              const value = option.values[0]

              return (
                <ProductOptions
                  key={option.id + value}
                  option={option}
                  onSelectOption={() => console.log('clicou')}
                />
              )
            })}
        </div>
        <div>
          <button type="button" onClick={() => console.log('menos')}>
            <Minus />
          </button>
          <label>
            <input type="number" max={99} min={0} value={item.quantity} />
          </label>
          <button type="button" onClick={() => console.log('mais')}>
            <Plus />
          </button>
        </div>
      </div>
      <div>
        <span>
          {price} {currencyCode}
        </span>
        <Trash />
      </div>
    </li>
  )
}

export default CartItem
