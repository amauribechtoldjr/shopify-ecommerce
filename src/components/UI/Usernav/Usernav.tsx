import './Usernav.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import Cart from '@components/icons/Cart'
import User from '@components/icons/User'
import { useCart } from '@framework/hooks'
import { LineItem } from '@common/types/cart'

const Usernav: FC = () => {
  const { data } = useCart()

  const itemsCount = data?.lineItems.reduce(
    (count: number, item: LineItem) => count + item.quantity,
    0
  )

  return (
    <div>
      <div>
        <li>
          <Link href="/cart">{data?.id}</Link>
        </li>
      </div>
      <div>
        <li>
          <Link href="/">
            <User />
          </Link>
        </li>
      </div>
      <div>
        <li>
          <Link href="/cart">
            <Cart />
            <div>
              <div>{itemsCount}</div>
            </div>
          </Link>
        </li>
      </div>
    </div>
  )
}

export default Usernav
