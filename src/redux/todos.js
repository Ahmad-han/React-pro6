const initialState = {
    todos: [],
    loading: false
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {

        case "load/todos/start":
            return {
                ...state,
                loading: true
            }

        case "load/todos/fulfilled":
            return {
                ...state,
                loading: false,
                todos: action.payload
            }


        default:
            return state
    }
}