import { FC } from 'react'
import { Footer } from '@components/UI'
import * as S from './styles'

const Layout: FC = ({ children }) => {
  return (
    <S.LayoutContainer>
      <S.Main>{children}</S.Main>
      <Footer />
    </S.LayoutContainer>
  )
}

export default Layout
