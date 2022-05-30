
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

//bringin the parentheses before the curly brackets is a new feature in ES6 syntax that allows a function to
//return an object. No need to bring the return keyword
let tid = 1;
export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload: { 
        id: tid++,
        text, 
        isCompleted: false }
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