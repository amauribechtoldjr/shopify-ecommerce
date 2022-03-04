interface FetchAPIParams {
  query: string
}

const fetchApi = async ({ query }: FetchAPIParams) => {
  const url = 'http://localhost:4000/graphql'

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ query })
  })

  const { data, errors } = await resp.json()

  if (errors) {
    throw new Error(errors[0].message ?? errors.message)
  }

  return { data }
}

export default fetchApi
