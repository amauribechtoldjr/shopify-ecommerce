import { FC } from 'react'
import { UIContext } from '@contexts'

const UIProvider: FC = ({ children }) => {
  return (
    <UIContext.Provider value={{ uiState: 'someState' }}>
      {children}
    </UIContext.Provider>
  )
}

export default UIProvider
