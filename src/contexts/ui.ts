import { createContext } from 'react'

export interface StateModifiers {
  openSidebar: () => void
  closeSidebar: () => void
}

export interface StateValues {
  isSidebarOpen: boolean
}

const DEFAULT_STATE_MODIFIES = {
  openSidebar: () => null,
  closeSidebar: () => null
}

const INITIAL_STATE = {
  isSidebarOpen: false
}

type State = StateValues & StateModifiers

const UIContext = createContext<State>({
  ...DEFAULT_STATE_MODIFIES,
  ...INITIAL_STATE
})

export default UIContext
