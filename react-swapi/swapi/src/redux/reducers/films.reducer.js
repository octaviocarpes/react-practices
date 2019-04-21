import FilmsService from '../../services/films.service'
import filmTypes from '../actions/action-types/films.types'

const initialState = {
  films: []
}

const getFilmsReducer = async (state = initialState, action) => {
  if (action.type === filmTypes.GET_FILMS) {
    const { data } = await FilmsService.getFilms()
    const films = data.results
    console.log(films)
    return {
      films: [ ...films ]
    }
  } else return state
}

export default {
  getFilmsReducer
}
