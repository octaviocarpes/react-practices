import React, { Component } from 'react'

class Todo extends Component {
  render () {
    return (
      <h4>{ this.props.text }</h4>
    )
  }
}

export default Todo
