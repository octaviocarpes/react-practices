import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_FILMS } from '../../../redux/actions/films.action'

const mapActionsToProps = dispatch => {
  return {
    getFilms: () => { dispatch(GET_FILMS()) }
  }
}

const mapStateToProps = state => {
  return {
    films: state.films
  }
}

class FlimsGrid extends Component {

  render () {
    const { films } = this.props
    return (
      <div className="films-grid">
        <h1>Films Grid</h1>
        <ul>
        {//films.map(film => 
          //(<li>{film.title}</li>)
        //)}
        }
        </ul>
      </div>
    )
  }

  componentDidMount () {
    this.props.getFilms()
  }
}

export default connect(mapStateToProps, mapActionsToProps)(FlimsGrid)
