import { FC, useReducer, useMemo } from 'react'
import { UIContext } from '@contexts'
import { uiReducer } from '@hooks/useUI'
import { UI_INITIAL_STATE } from '@contexts/ui'

const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' })

  const value = useMemo(() => {
    return { ...state, openSidebar, closeSidebar }
  }, [state.isSidebarOpen])

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export default UIProvider
