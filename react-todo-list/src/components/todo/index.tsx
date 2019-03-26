import React from 'react'

const Todo = (props: any) => {
  return (
    <div className="todo">
      <h4>{props.title}</h4>
      <button>Done!</button>
    </div>
  )
}

export default Todo
