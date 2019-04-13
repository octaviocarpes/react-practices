import React, { Component } from 'react'
import AddTodo from '../add-todo'
import Todo from '../todo'

class TodoList extends Component {
    render () {
        return (
            <div>
                <h1>React Todo List!</h1>
                <AddTodo></AddTodo>
                <div className="todos">
                </div>
            </div>
        )
    }
}

export default TodoList
