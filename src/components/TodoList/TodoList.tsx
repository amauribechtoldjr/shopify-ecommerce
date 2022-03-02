import Todo, { TodoInterface } from '../Todo/Todo'

import { observer } from 'mobx-react'
import todoStore from '../../stores/todo'

const TodoList: React.FC = () => {
  return (
    <div>
      {todoStore.todos.map((todo: TodoInterface) => {
        return (
          <div key={todo.id}>
            <Todo id="211321" name={todo.name} description={todo.description} />
          </div>
        )
      })}
    </div>
  )
}

export default observer(TodoList)
