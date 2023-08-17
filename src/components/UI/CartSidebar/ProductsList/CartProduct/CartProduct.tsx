import { LineItem } from '@common/types/cart'
import { Loading, Minus, Plus, Trash } from '../../../../icons'
import Link from 'next/link'
import { useRemoveItem, useUpdateItem } from '@framework/hooks'
import ImageBox from '@components/UI/ImageBox/ImageBox'
import s from './CartProduct.module.scss'
import Heading from '@components/UI/Heading/Heading'
import { useState } from 'react'
import { Options } from '@features/products/components'

const CartProduct = ({
  item,
  currencyCode
}: {
  item?: LineItem
  currencyCode: string
}) => {
  const [updateItemLoading, setLoading] = useState(false)
  const removeItem = useRemoveItem()
  const updateItem = useUpdateItem()

  const price = item.variant.price * item?.quantity || 0
  const { options } = item

  const handleRemoveItem = async () => {
    await removeItem({ id: item.id })
  }

  const handleUpdateItem = (type: string) => async () => {
    setLoading(true)

    let quantity = item.quantity + 1
    if (type === 'remove') quantity = item.quantity - 1

    await updateItem({
      id: item.id,
      quantity,
      variantId: item.variantId
    })

    setLoading(false)
  }

  return (
    <li className={s['product-container']}>
      <div className={s['image-container']}>
        <ImageBox
          alt={item.variant.image.alt}
          src={item.variant.image.url}
          classes={s['image-container__img']}
        />
      </div>
      <div className={s['product-options-container']}>
        <div className={s['product-title']}>
          <Link href={`/`}>
            <span>{item.name}</span>
          </Link>
        </div>
        <div className={s.options}>
          {options &&
            options.length > 0 &&
            options.map(option => {
              const value = option.values[0].label

              return <Options key={option.id + value} option={option} />
            })}
        </div>
        <div className={s['add-remove-container']}>
          {!updateItemLoading && (
            <>
              <button
                type="button"
                onClick={handleUpdateItem('remove')}
                disabled={item?.quantity === 1}
                className={s['update-button']}
              >
                <Minus />
              </button>
              <Heading as="h5" className={s['quantity-label']}>
                {item.quantity}
              </Heading>
              <button
                type="button"
                onClick={handleUpdateItem('add')}
                className={s['update-button']}
              >
                <Plus />
              </button>
            </>
          )}
          {updateItemLoading && (
            <div className={s['loading-container']}>
              <Loading fill="#000" classes={s['loading-icon']} />
            </div>
          )}
        </div>
      </div>
      <div className={s['price-delete-container']}>
        <span>
          {currencyCode} {price}
        </span>
        <Trash onClick={handleRemoveItem} className={s['trash-icon']} />
      </div>
    </li>
  )
}

export default CartProduct
