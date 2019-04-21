import axios from 'axios'
const URL = 'https://swapi.co/api/films'

const getFilms = () => {
  return axios.get(URL, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })
}

export default {
  getFilms
}
