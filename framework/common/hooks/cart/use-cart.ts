import { useHook, useSWRHook } from '@common/utils/use-hook'

const useCart = () => {
  const hook = useHook(hooks => hooks.cart.useCart)

  return useSWRHook({ ...hook })
}

export default useCart
