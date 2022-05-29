import { FC } from 'react'
import { Footer, Navbar } from '@components/UI'
import { LayoutContainer, Main } from './styles'
import { ApiProvider } from '@framework'

const Layout: FC = ({ children }) => {
  return (
    <ApiProvider>
      <LayoutContainer>
        <Navbar />
        <Main>{children}</Main>
      </LayoutContainer>
      <Footer />
    </ApiProvider>
  )
}

export default Layout
