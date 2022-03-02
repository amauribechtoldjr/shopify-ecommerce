export interface TodoI {
  id?: string
  description: string
  name: string
}

interface TodoParams {
  todo: TodoI
}

const Todo: React.FC<TodoParams> = ({ todo }) => {
  return (
    <div>
      <h1>{todo.description}</h1>
      <span>{todo.name}</span>
    </div>
  )
}

export default Todo
