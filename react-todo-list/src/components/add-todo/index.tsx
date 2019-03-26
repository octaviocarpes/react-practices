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
      </div>
    )
  }


  _handleKeyPress = (input: any): void => {
    console.log(input.target.value)
    if (input.key === 'Enter') {
      console.log('Enter')
      store.dispatch(actions.ADD_TODO(this.state.todo))
    }

    this.setState({ todo: input.target.value })
  }
}

export default AddTodo
