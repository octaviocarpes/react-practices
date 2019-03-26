const ADD_TODO = (title: String): Object => {
    return {
        type: 'ADD_TODO',
        payload: title
    }
}

const FINISH_TODO = (index: Number): Object => {
    return {
        type: 'FINISH_TODO',
        index
    }
}

const REMOVE_TODO = (index: Number) => {
    return {
        type: 'REMOVE_TODO',
        index
    }
}

export default {
    ADD_TODO,
    REMOVE_TODO,
    FINISH_TODO
}
