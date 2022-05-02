export type FetcherVariables = { [key: string]: string }

export type ApiFetcherOptions = {
  url: string
  query: string
  variables?: FetcherVariables
}

export type ApiFetcherResults<T> = {
  data: T
}

export interface ApiConfig {
  apiUrl: string
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>
}
