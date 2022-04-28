import { FC, useReducer } from 'react'
import { UIContext } from '@contexts'
import { uiReducer } from '@hooks/useUI'
import { UI_INITIAL_STATE } from '@contexts/ui'

const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' })

  const uiState = {
    ...state,
    openSidebar,
    closeSidebar
  }

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>
}

export default UIProvider
