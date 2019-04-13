import { ADD_TODO } from './action-types'

export const addTodo = (todo: String): Object => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}
