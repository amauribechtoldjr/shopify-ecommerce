import Link from 'next/link'
import { FC } from 'react'
import { Usernav } from '@components/UI'

import * as S from './styles'

const Navbar: FC = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarContent>
        <S.LinksContainer>
          <Link href="/">
            <h1>TRAVESSSA</h1>
          </Link>
          <S.NavContainer>
            <Link href="/products">
              <S.NavLink>Produtos</S.NavLink>
            </Link>
            <Link href="/products">
              <S.NavLink>Sobre</S.NavLink>
            </Link>
            <Link href="/products">
              <S.NavLink>Coleções</S.NavLink>
            </Link>
            <Link href="/products">
              <S.NavLink>Travesssuras</S.NavLink>
            </Link>
          </S.NavContainer>
        </S.LinksContainer>
        <S.UsernavContainer>
          <Usernav />
        </S.UsernavContainer>
      </S.NavbarContent>
    </S.NavbarContainer>
  )
}

export default Navbar
