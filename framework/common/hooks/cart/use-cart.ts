import { useApiProvider } from '@common'
import { SWRHook } from '@common/types/hooks'
import { useHook, useSWRHook } from '@common/utils/use-hook'
import Cookies from 'js-cookie'

export type UseCart<H extends SWRHook = SWRHook> = ReturnType<H['useHook']>

const useCart = () => {
  const hook = useHook(hooks => hooks.cart.useCart)
  const { checkoutCookieKey } = useApiProvider()

  const fetcherWrapper: typeof hook.fetcher = context => {
    context.input.checkoutId = Cookies.get(checkoutCookieKey)

    return hook.fetcher(context)
  }

  return useSWRHook({ ...hook, fetcher: fetcherWrapper })()
}

export default useCart
