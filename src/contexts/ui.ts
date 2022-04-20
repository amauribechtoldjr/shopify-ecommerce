import { createContext } from 'react'

const UIContext = createContext<{ [key: string]: string }>({
  uiState: 'defaultState'
})

export default UIContext
