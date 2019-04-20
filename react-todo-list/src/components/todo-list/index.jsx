import React from 'react'
import Todo from '../todo'
import AddTodo from '../add-todo'
import { connect } from 'react-redux'

const ConnectedTodoList = ({todos}) => {
  return (
    <div>
      <AddTodo></AddTodo>
      <ul>
        {todos.todos.map(element =>
          (<li><Todo text={element.text}></Todo></li>)
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const TodoList = connect(mapStateToProps)(ConnectedTodoList)

export default TodoList
