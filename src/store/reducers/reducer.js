import { CREATE_TODO } from '../actions/action'

export const todos = (state = [], action) => {
    switch (action.type) {

        case CREATE_TODO: {
            const newTodo = action.payload
            console.log('reducer newTodo', newTodo);
            return [...state, newTodo]
        }
            
        default:
            return state;
            
        
    }
}