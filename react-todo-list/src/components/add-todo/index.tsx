import React, { Component } from 'react'

class AddTodo extends Component<{}, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  render() {
    return (
      <div className="container">
        <div className="add-todo">
          <input
            value={this.state.todo}
            type="text"
            placeholder="Add a Todo to your list!"
            onChange={this._handleKeyPress}
          />
          <button onClick={this.addTodo}>Add!</button>
        </div>
        <h2>{this.state.todo}</h2>
      </div>
    )
  }


  _handleKeyPress = (input: any): void => {
    this.setState({ todo: input.target.value })
  }

  addTodo = () => {
    
  }
}

export default AddTodo
