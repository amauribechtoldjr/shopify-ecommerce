import { MutationHook } from '@common/types/hooks'
import { useHook, useMutationHook } from '@common/utils/use-hook'

export type UseRemoveItem<H extends MutationHook = MutationHook> = ReturnType<
  H['useHook']
>

const useRemoveItem: UseRemoveItem = () => {
  const hook = useHook(hooks => hooks.cart.useRemoveItem)

  return useMutationHook({ ...hook })()
}

export default useRemoveItem
