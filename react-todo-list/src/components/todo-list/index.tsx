import React, { Component } from 'react'
import AddTodo from '../add-todo'
import Todo from '../todo'
import store from '../../store'

class TodoList extends Component {
    render () {
        return (
            <div>
                <h1>React Todo List!</h1>
                <AddTodo></AddTodo>
                <div className="todos">
                    {
                        store.getState().todos.map((todo: any) => {
                            <Todo title={todo.title}></Todo>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TodoList
