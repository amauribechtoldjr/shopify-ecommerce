import { makeAutoObservable } from 'mobx'
import { TodoI } from '../components/Todo/Todo'

class TodoStore {
  todos: TodoI[] = []
  newTodo: TodoI

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
