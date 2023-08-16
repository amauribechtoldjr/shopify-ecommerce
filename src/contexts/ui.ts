import { createContext } from 'react'

export interface StateModifiers {
  openSidebar: () => void
  closeSidebar: () => void
  openBurguerMenu: () => void
  closeBurguerMenu: () => void
}

export interface StateValues {
  isSidebarOpen: boolean
  isBurguerMenuOpen: boolean
}

export const UI_DEFAULT_STATE_MODIFIES = {
  openSidebar: () => null,
  closeSidebar: () => null,
  openBurguerMenu: () => null,
  closeBurguerMenu: () => null
}

export const UI_INITIAL_STATE = {
  isSidebarOpen: false,
  isBurguerMenuOpen: false
}

type State = StateValues & StateModifiers

const UIContext = createContext<State>({
  ...UI_DEFAULT_STATE_MODIFIES,
  ...UI_INITIAL_STATE
})

export default UIContext
