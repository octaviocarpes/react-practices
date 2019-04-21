import filmsReducer from './films.reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  films: filmsReducer.getFilmsReducer
})

