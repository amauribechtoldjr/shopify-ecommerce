import Todo, { TodoI } from '../Todo/Todo'

import { observer } from 'mobx-react'
import todoStore from '../../stores/todo'
import { TodoListContainer } from './styles'

export interface TodoList {
  isGreen?: boolean
}

const TodoList: React.FC<TodoList> = ({ isGreen = false }) => {
  return (
    <TodoListContainer isGreen={isGreen}>
      {todoStore.todos.map((todo: TodoI) => {
        return (
          <div key={todo.id}>
            <Todo todo={todo} />
          </div>
        )
      })}
    </TodoListContainer>
  )
}

export default observer(TodoList)
