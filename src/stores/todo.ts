import { makeAutoObservable } from 'mobx'
import { TodoInterface } from '../components/Todo/Todo'

class TodoStore {
  todos: TodoInterface[] = []
  newTodo: TodoInterface

  constructor() {
    makeAutoObservable(this)
  }

  addTodo() {
    this.todos = [...this.todos, this.newTodo]
    this.newTodo = null
  }
}

const todoStore = new TodoStore()
export default todoStore
