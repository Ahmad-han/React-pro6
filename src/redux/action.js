export const loadUsers = () => {
    return (dispatch) => {
        dispatch({type: "load/users/start"})

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: "load/users/fulfilled",
                payload: data
            })
        })
    }
}

export const loadTodos = (id) => {
    return (dispatch) => {
        dispatch({type: "load/todos/start"})

        fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: "load/todos/fulfilled",
                payload: data
            })
        })
    }
}