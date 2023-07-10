import './Layout.module.scss'
import { FC } from 'react'
import { CartSidebar, Footer, Navbar, NavbarMenu } from '@components/UI'
import { ApiProvider } from '@framework/provider'

const Layout: FC = ({ children }) => {
  return (
    <ApiProvider>
      <CartSidebar />
      <NavbarMenu />
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </ApiProvider>
  )
}

export default Layout
