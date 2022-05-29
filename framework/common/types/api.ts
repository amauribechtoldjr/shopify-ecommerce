export type FetcherVariables = { [key: string]: string }

export type ApiFetcherOptions = {
  url: string
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
  apiUrl: string
  fetch: ApiFetcher
}

export interface ApiHooks {
  cart: {
    useAddItem: any
  }
}

export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFetcher
}
