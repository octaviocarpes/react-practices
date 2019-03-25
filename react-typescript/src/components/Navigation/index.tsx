import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

class Navigation extends Component {
    render () {
        return (
            <div className="navigation">
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/pokemons">Pokémons</NavLink>
            </div>
        )
    }
}

export default Navigation
