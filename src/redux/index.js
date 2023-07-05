import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { usersReducer } from "./users";
import { todosReducer } from "./todos";



const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    users: usersReducer,
    todos: todosReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger))