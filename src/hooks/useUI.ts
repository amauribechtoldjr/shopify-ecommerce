import { useContext } from 'react'
import { UIContext } from '@contexts'

const useUI = () => {
  const context = useContext(UIContext)

  return context
}

export default useUI
