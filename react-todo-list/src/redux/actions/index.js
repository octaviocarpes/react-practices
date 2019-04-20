import ActionTypes from './action.types'

export function addTodo (todo) {
  return {
    type: ActionTypes.ADD_TODO,
    payload: todo
  }
}

export function deleteTodo (index) {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: index
  }
}

export function toggleTodo (index) {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: index
  }
}
