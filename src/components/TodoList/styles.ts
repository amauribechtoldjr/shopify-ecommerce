import styled from 'styled-components'
import { TodoList } from './TodoList'

export const TodoListContainer = styled.div<TodoList>`
  background-color: ${props => (props.isGreen ? 'red' : '#ddffaa')};
`
