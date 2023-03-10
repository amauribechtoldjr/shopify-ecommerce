import { LineItem } from '@common/types/cart'
import { Minus, Plus, Trash } from '../../icons'
import Image from 'next/image'
import Link from 'next/link'
import ProductOptions from '../ProductOptions/ProductOptions'
import { useRemoveItem, useUpdateItem } from '@framework/hooks'

const CartProduct = ({
  item,
  currencyCode
}: {
  item?: LineItem
  currencyCode: string
}) => {
  const removeItem = useRemoveItem()

  // TODO: Verificar disponibilidade de quantidade e cor de items antes de adicionar
  const updateItem = useUpdateItem()

  const price = item.variant.price * item?.quantity || 0
  const { options } = item

  const handleRemoveItem = async () => {
    await removeItem({ id: item.id })
  }

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
              const value = option.values[0].label

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
          <button
            type="button"
            onClick={() =>
              updateItem({
                id: item.id,
                quantity: item.quantity - 1,
                variantId: item.variantId
              })
            }
          >
            <Minus />
          </button>
          <label>
            <input
              type="number"
              max={99}
              min={0}
              value={item.quantity}
              onChange={() => console.log('trocou')}
            />
          </label>
          <button
            type="button"
            onClick={() =>
              updateItem({
                id: item.id,
                quantity: item.quantity + 1,
                variantId: item.variantId
              })
            }
          >
            <Plus />
          </button>
        </div>
      </div>
      <div>
        <span>
          {price} {currencyCode}
        </span>
        <Trash onClick={handleRemoveItem} />
      </div>
    </li>
  )
}

export default CartProduct
