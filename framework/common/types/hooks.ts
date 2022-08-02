import { SWRResponse } from 'swr'
import { ApiFetcher, ApiFetcherOptions } from './api'

export type HookFetcherContext<Input, Output> = {
  input?: Input
  fetch: ApiFetcher<Output>
  options: ApiFetcherOptions
}

export type MutationHookContext<Input, Output> = {
  fetch: (input: Input) => Promise<Output>
}

export type SWRHookContext<Input, Output> = {
  fetch: (input: Input) => Promise<Output>
}

export type HookFetcherOptions = {
  query: string
}

export type HookFetcherFn<Input, Output, Data> = (
  context: HookFetcherContext<Input, Output>
) => Promise<Data>

export type HookGenericDescriptor = {
  fetcherInput: object
  fetcherOutput: object
  data: object
}

export type MutationHook<
  H extends HookGenericDescriptor = HookGenericDescriptor
> = {
  fetcherOptions: HookFetcherOptions
  fetcher: HookFetcherFn<H['fetcherInput'], H['fetcherOutput'], H['data']>
  useHook(
    context: MutationHookContext<H['fetcherInput'], H['data']>
  ): () => (input: H['fetcherInput']) => Promise<H['data']>
}

export type UseDataContext = {
  swrOptions: any
}

export type UseData<Data> = (context: UseDataContext) => Data

export type SWRHook<H extends HookGenericDescriptor = HookGenericDescriptor> = {
  fetcherOptions: HookFetcherOptions
  fetcher: HookFetcherFn<H['fetcherInput'], H['fetcherOutput'], H['data']>
  useHook(context: {
    useData: UseData<SWRResponse<H['data']>>
  }): () => SWRResponse<H['data']>
}

export type Hook = MutationHook | SWRHook

export interface ApiHooks {
  cart: {
    useAddItem: MutationHook
    useCart: any
  }
}
