import { FC } from 'react'
import Link from 'next/link'
import * as S from './styles'
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
    <S.UsernavContainer>
      <S.UsernavUL>
        <li>
          <Link href="/cart">
            <a>{data?.id}</a>
          </Link>
        </li>
      </S.UsernavUL>
      <S.UsernavUL>
        <li>
          <Link href="/">
            <a>
              <User />
            </a>
          </Link>
        </li>
      </S.UsernavUL>
      <S.UsernavUL>
        <li>
          <Link href="/cart">
            <a>
              <Cart />
              <S.CartItemsQuantityContainer>
                <S.CartItemsQuantityText>{itemsCount}</S.CartItemsQuantityText>
              </S.CartItemsQuantityContainer>
            </a>
          </Link>
        </li>
      </S.UsernavUL>
    </S.UsernavContainer>
  )
}

export default Usernav
