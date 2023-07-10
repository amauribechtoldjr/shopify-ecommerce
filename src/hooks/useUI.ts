import { useContext } from 'react'
import { UIContext } from '@contexts'
import { StateValues } from '@contexts/ui'

type Action = {
  type:
    | 'OPEN_SIDEBAR'
    | 'CLOSE_SIDEBAR'
    | 'OPEN_BURGUER_MENU'
    | 'CLOSE_BURGUER_MENU'
}

export function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        isSidebarOpen: true
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        isSidebarOpen: false
      }
    }
    case 'OPEN_BURGUER_MENU': {
      return {
        ...state,
        isBurguerMenuOpen: true
      }
    }
    case 'CLOSE_BURGUER_MENU': {
      return {
        ...state,
        isBurguerMenuOpen: false
      }
    }
  }
}

const useUI = () => {
  const context = useContext(UIContext)

  return context
}

export default useUI
