import { ADD_TODO } from '../actions/action-types'

const initialState = {
  todos: []
}

export const addTodoReducer = (state = initialState, action: any) => {
  if (action.type == ADD_TODO) {
    return {
      todos: [ ...action ]
    }
  }
}
