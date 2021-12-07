import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { usersReducer } from "./usersReducer";


export const rootReducer = combineReducers({
    users: usersReducer,
    todos: todosReducer,
})

export type RootState =  ReturnType<typeof rootReducer>