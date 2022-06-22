import { createSelector } from "reselect"

export const getTodosData = (state) => {
    return state.todos.data
}

export const getTodosLoading = ( state) => {
    return state.todos.loading
}


export const completedTodos = createSelector(
    getTodosData,
    (todos) => todos.filter(todo => todo.isCompleted)
)


export const incompletedTodos = createSelector(
    getTodosData,
    (todos) => todos.filter(todo => !todo.isCompleted)
)
