import { todos } from "../reducers/reducer";

export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';



//bringin the parentheses before the curly brackets is a new feature in ES6 syntax that allows a function to
//return an object. No need to bring the return keyword

//creating todo manually using react
// let tid = 1;
// export const createTodo = (text) => ({
//     type: CREATE_TODO,
//     payload: { 
//         id: tid++,
//         text, 
//         isCompleted: false }
// })

//creating todo with axios and thunk

// let tid = state.length + 1
export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload: { 
        text 
    }
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})

export const completeTodo = (todoId) => ({
    type: COMPLETE_TODO,
    payload: {
        id: todoId
    }
})

export const FETCH_TODOS = 'FETCH_TODOS';
export const getTodos = (data) => ({
    type: FETCH_TODOS,
    payload: { data }
})

export const TODOS_LOADING = 'TODOS_LOADING'

export const loadingTodos = () => ({
    type: TODOS_LOADING
})

export const TODOS_SUCCESS = 'TODOS_SUCCESS'

// export const loadSuccess = (todos) => ({
//     type: TODOS_SUCCESS,
//     payload: { todos }
// })

export const loadSuccess = (todos) => ({
    type: TODOS_SUCCESS
})

export const TODOS_FAILURE = 'TODOS_FAILURE'

export const loadFailure = (todos) => ({
    type: TODOS_FAILURE
})