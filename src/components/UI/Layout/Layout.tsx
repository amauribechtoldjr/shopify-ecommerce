import { FC, useEffect } from 'react'
import { Footer, Navbar } from '@components/UI'
import * as S from './styles'

const Layout: FC = ({ children }) => {
  return (
    <S.LayoutContainer>
      <Navbar />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.LayoutContainer>
  )
}

export default Layout
