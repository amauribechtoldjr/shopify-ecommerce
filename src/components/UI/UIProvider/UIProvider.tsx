import { FC } from 'react'
import { UIContext } from '@contexts'

const UIProvider: FC = ({ children }) => {
  const openSidebar = () => {
    console.log('opened')
  }

  const closeSidebar = () => {
    console.log('closed')
  }

  const uiState = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: false
  }

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>
}

export default UIProvider
