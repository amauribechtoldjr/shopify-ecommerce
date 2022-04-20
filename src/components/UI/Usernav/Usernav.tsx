import { FC } from 'react'
import Link from 'next/link'
import * as S from './styles'
import Cart from '@components/icons/Cart'
import User from '@components/icons/User'

const Usernav: FC = () => {
  return (
    <S.UsernavContainer>
      <S.UsernavUL>
        <li>
          <Link href="/">
            <User />
          </Link>
        </li>
      </S.UsernavUL>
      <S.UsernavUL>
        <li>
          <Link href="/cart">
            <Cart />
          </Link>
        </li>
      </S.UsernavUL>
    </S.UsernavContainer>
  )
}

export default Usernav
