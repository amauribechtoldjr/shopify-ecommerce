import { ReactNode } from 'react'
import { getConfig } from './api/config'
import {
  useApiProvider as useCoreApiProvider,
  ApiProvider as CoreApiProvider
} from '@common'

import { shopifyHooks } from './hooks'

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[]
}

const config = getConfig()

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return (
    <CoreApiProvider config={{ ...config }} hooks={shopifyHooks}>
      {children}
    </CoreApiProvider>
  )
}

export const useApiProvider = () => useCoreApiProvider()
