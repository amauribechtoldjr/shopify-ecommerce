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
}

export interface ApiHooks {
  cart: {
    useAddItem: any
    useCart: any
  }
}

export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFetcher
}
