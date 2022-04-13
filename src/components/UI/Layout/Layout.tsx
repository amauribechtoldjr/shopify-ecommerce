import { FC } from 'react'
import * as S from './styles'

const Layout: FC = ({ children }) => {
  return <S.LayoutContainer>{children}</S.LayoutContainer>
}

export default Layout
