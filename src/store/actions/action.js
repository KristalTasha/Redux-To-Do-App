export const CREATE_TODO = 'CREATE_TODO';

//bringin the parentheses before the curly brackets is a new feature in ES6 syntax that allows a function to
//return an object. No need to bring the return keyword
export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload: { text, isCompleted: false }
})