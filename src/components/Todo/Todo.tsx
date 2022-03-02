export interface TodoInterface {
  id: string
  description: string
  name: string
}

const Todo: React.FC<TodoInterface> = (todo: TodoInterface) => {
  return (
    <div>
      <h1>{todo.description}</h1>
      <span>{todo.description}</span>
    </div>
  )
}

export default Todo
