import React, { Component } from 'react'
import store from '../../store'
import actions from '../../store/actions'

class AddTodo extends Component<{}, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  render() {
    return (
      <div className="add-todo">
        <input
          value={this.state.todo}
          type="text"
          placeholder="Add a Todo to your list!"
          onChange={this._handleKeyPress}
        />
        <button onClick={this.addTodo}>Add!</button>
      </div>
    )
  }


  _handleKeyPress = (input: any): void => {
    this.setState({ todo: input.target.value })
  }

  addTodo = () => {
    store.dispatch(actions.ADD_TODO(this.state.todo))
  }
}

export default AddTodo
