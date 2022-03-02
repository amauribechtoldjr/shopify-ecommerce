import Head from 'next/head'

import TesteSVG from '../assets/teste.svg'
import TodoList from '../components/TodoList/TodoList'
import { Container } from '../styles/pages/Home'

import { observer } from 'mobx-react'
import todoStore from '../stores/todo'

const Home: React.FC = () => {
  const handleNewTodo = () => {
    todoStore.newTodo = {
      description: 'DESCRIÇÃO',
      id: 'teste',
      name: 'teste'
    }

    todoStore.addTodo()
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <TesteSVG />
        <h1>Hello world</h1>
        <button onClick={handleNewTodo}>ADICIONAR NOVO TODO</button>
        <TodoList />
        <TodoList isGreen />
      </main>
    </Container>
  )
}

export default observer(Home)
