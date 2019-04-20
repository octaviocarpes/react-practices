import { combineReducers } from 'redux'
import actionTypes from '../actions/action.types'
// import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/action.types.js'

const initialState = {
  todos: []
}

const todoApp = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.ADD_TODO:
      return {
        todos: [ ...state.todos, { completed: false, text: action.payload } ]
      }
    
    default: return state
  }

}

export default combineReducers({
  todos: todoApp
})
