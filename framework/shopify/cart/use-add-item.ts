export const handler = {
  fetcher: (input: any) => {
    return JSON.stringify(input) + '_modified'
  },
  useHook: ({ fetch }: any) => {
    return (input: any) => {
      const response = fetch(input)

      return { response }
    }
  }
}
