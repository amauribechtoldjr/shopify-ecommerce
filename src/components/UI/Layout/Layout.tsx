import { FC } from 'react'
import { Footer, Navbar } from '@components/UI'
import { LayoutContainer, Main } from './styles'

const Layout: FC = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Navbar />
        <Main>{children}</Main>
      </LayoutContainer>
      <Footer />
    </>
  )
}

export default Layout
