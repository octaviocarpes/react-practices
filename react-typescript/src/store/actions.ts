const GET_POKEMONS = (): Object => {
    return {
        type: 'GET_POKEMONS'
    }
}

const SET_LOADER = (loading: Boolean): Object => {
    return {
        type: 'SET_LOADER',
        loading
    }
}

export default {
    GET_POKEMONS,
    SET_LOADER
}
