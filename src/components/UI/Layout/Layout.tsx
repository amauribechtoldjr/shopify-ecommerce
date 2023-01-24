import './Layout.module.scss'
import { FC } from 'react'
import { Footer, Navbar } from '@components/UI'
import { ApiProvider } from '@framework/provider'

const Layout: FC = ({ children }) => {
  return (
    <ApiProvider>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
      {/* <Footer /> */}
    </ApiProvider>
  )
}

export default Layout
