import actions from './actions'

const initialState = {
    todos: []
}

const todoApp = (state = initialState, action: any): Object => {
    switch (action.type) {
        case actions.ADD_TODO: 
            return buildAddTodo(state, action)
        
        case actions.FINISH_TODO:
            return buildFinishTodo(state, action)

        case actions.REMOVE_TODO:
            return buildRemoveTodo(state, action)

        default: return state
    }
}

const buildAddTodo = (state: any, action: any): Object => {
    console.log('build todo')
    return { 
      todos: [ 
          ...state.todos,
          {
              title: action.payload,
              finished: false
          }
      ]
    }
}

const buildFinishTodo = (state: any, action: any): Object => {
    state.todos[ action.index ].finished = true
    return {
        todos: [ ...state.todos ]
    }
}

const buildRemoveTodo = (state: any, action: any): Object => {
    return {
        todos: [ ...state.todos.splice(action.index, 1) ]
    }
}

export default todoApp
