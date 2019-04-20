import React, { Component } from 'react'
import { addTodo } from '../../redux/actions'
import { connect } from 'react-redux'

const mapActionsToProps = dispatch => {
  return {
    addTodo: todo => { dispatch(addTodo(todo)) }
  }
}

class AddTodo extends Component {

  constructor (props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  _handleTyping = (input) => {
    this.setState({
      todo: input.target.value
    })
  }

  _addTodo = () => {
    const todo = this.state.todo
    this.props.addTodo(todo)
  }

  render () {
    return (
      <div>
        <div>
          <input type="text" placeholder="Type you todo here!" onChange={this._handleTyping}/>
          <button onClick={this._addTodo}>Add</button>
        </div>
        <h3>{ this.state.todo }</h3>
      </div>
    )
  }
}

export default connect(null, mapActionsToProps)(AddTodo)
