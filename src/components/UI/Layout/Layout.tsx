import { FC } from 'react'
import { Footer, Navbar } from '@components/UI'
import * as S from './styles'
import { useUI } from '@hooks'

const Layout: FC = ({ children }) => {
  const { openSidebar, closeSidebar } = useUI()

  return (
    <S.LayoutContainer>
      <Navbar />
      <button onClick={openSidebar}>Abrir sidebar</button>
      <button onClick={closeSidebar}>Fechar sidebar</button>
      <S.Main>{children}</S.Main>
      <Footer />
    </S.LayoutContainer>
  )
}

export default Layout
