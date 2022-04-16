import Link from 'next/link'
import { FC } from 'react'

import * as S from './styles'

const Navbar: FC = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarContent>
        <h1>Travesssa</h1>
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
      </S.NavbarContent>
    </S.NavbarContainer>
  )
}

export default Navbar
