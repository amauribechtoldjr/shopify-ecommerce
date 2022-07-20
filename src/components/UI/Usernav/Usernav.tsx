import { FC } from 'react'
import Link from 'next/link'
import * as S from './styles'
import Cart from '@components/icons/Cart'
import User from '@components/icons/User'
import useCart from '@framework/hooks/mutation-handlers/cart/use-cart'

const Usernav: FC = () => {
  const { data } = useCart()
  console.log(data)
  return (
    <S.UsernavContainer>
      <S.UsernavUL>
        <li>
          <Link href="/">
            <a>{data?.data?.id}</a>
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
            </a>
          </Link>
        </li>
      </S.UsernavUL>
    </S.UsernavContainer>
  )
}

export default Usernav
