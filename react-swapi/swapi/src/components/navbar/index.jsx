import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if (name === 'home') this.props.history.push('/')
    else this.props.history.push(`${name}`) 
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          name='films'
          active={activeItem === 'films'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          name='people' 
          active={activeItem === 'people'} 
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          name='planets' 
          active={activeItem === 'planets'} 
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          name='starships' 
          active={activeItem === 'starships'} 
          onClick={this.handleItemClick}
        >
        </Menu.Item>

      </Menu>
    )
  }
}

export default withRouter(Navbar)
