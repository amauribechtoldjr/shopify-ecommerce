import { FC } from 'react'
import { Footer, Navbar } from '@components/UI'
import { LayoutContainer, Main } from './styles'

const Layout: FC = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
