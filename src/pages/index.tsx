import Head from 'next/head'

// import TesteSVG from '../assets/teste.svg'
// import TodoList from '../components/TodoList/TodoList'
import { Container } from '../styles/pages/Home'

import { observer } from 'mobx-react'
import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '../../framework/shopify/schemas/product/get-all-products'
// import todoStore from '../stores/todo'

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const handleNewTodo = () => {
    console.log('adicionou novo todo')
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        {/* <TesteSVG />
        <h1>Hello world</h1>
        <button onClick={handleNewTodo}>ADICIONAR NOVO TODO</button>
        <TodoList />
        <TodoList isGreen /> */}
        {JSON.stringify(products)}
      </main>
    </Container>
  )
}

export default observer(Home)
