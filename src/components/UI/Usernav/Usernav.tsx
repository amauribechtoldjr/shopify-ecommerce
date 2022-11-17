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
          <Link href="/cart">
            <a>{data?.id}</a>
          </Link>
        </li>
      </div>
      <div>
        <li>
          <Link href="/">
            <a>
              <User />
            </a>
          </Link>
        </li>
      </div>
      <div>
        <li>
          <Link href="/cart">
            <a>
              <Cart />
              <div>
                <div>{itemsCount}</div>
              </div>
            </a>
          </Link>
        </li>
      </div>
    </div>
  )
}

export default Usernav
