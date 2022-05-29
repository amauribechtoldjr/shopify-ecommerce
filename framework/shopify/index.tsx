import { ReactNode } from 'react'
import { getConfig } from './api/config'
import {
  useApiProvider as useCoreApiProvider,
  ApiProvider as CoreApiProvider
} from '@common'

export { default as fetchApi } from './fetch-api'

export * from './normalize'
export * from './queries'

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[]
}

const config = getConfig()

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return <CoreApiProvider config={config}>{children}</CoreApiProvider>
}

export const useApiProvider = () => useCoreApiProvider()
