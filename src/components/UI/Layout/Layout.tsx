import './Layout.module.scss'
import { FC } from 'react'
import { CartSidebar, Footer, Navbar } from '@components/UI'
import { ApiProvider } from '@framework/provider'
import { useUI } from '@hooks'

const Layout: FC = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI()

  return (
    <ApiProvider>
      <Navbar />
      <CartSidebar isOpen={isSidebarOpen} onClose={() => closeSidebar()} />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </ApiProvider>
  )
}

export default Layout
