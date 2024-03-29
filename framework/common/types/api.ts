import { ApiHooks } from './hooks'

export type FetcherVariables = { [key: string]: string | any }

export type ApiFetcherOptions = {
  query: string
  variables?: FetcherVariables
}

export type ApiFetcherResults<T> = {
  data: T
}

export type ApiFetcher<T = any> = (
  options: ApiFetcherOptions
) => Promise<ApiFetcherResults<T>>

export interface ApiConfig {
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>
  checkoutCookieKey: string
}

export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFetcher
  checkoutCookieKey: string
}
