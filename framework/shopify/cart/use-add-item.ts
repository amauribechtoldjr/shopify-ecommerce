// import { useAddItem } from '@common/cart'

export const handler = {
  fetcher: () => {
    console.log('fetch data')
  },
  useHook: () => {
    return (input: any) => {
      return { output: JSON.stringify(input) + 'modified' }
    }
  }
}
