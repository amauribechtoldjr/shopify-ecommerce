import { useContext } from 'react'
import { UIContext } from '@contexts'
import { StateValues } from '@contexts/ui'

type Action = {
  type: 'OPEN_SIDEBAR' | 'CLOSE_SIDEBAR'
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
  }
}

const useUI = () => {
  const context = useContext(UIContext)

  return context
}

export default useUI
