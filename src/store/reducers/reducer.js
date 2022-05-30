import { CREATE_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions/action'

export const todos = (state = [], action) => {
    switch (action.type) {

        case CREATE_TODO: {
            const newTodo = action.payload
            console.log('reducer newTodo', newTodo);
            return [...state, newTodo]
        }

        case DELETE_TODO: {
            const todoId = action.payload
            console.log('todoId', todoId)

            //using filter
            //  const others =  state.filter(item => item.id !== todoId);
            //  return [...others]

            //using splice
            state.splice(state.findIndex(item => item.id === todoId), 1)
            console.log('todos')
            return [...state]
            
        }

        case COMPLETE_TODO: {
            const todoId = action.payload.id
            const finished =  state.filter(item => item.id === todoId);
            const fin = finished[0]
           // fin.isCompleted === true ? fin.isCompleted = false : fin.isCompleted = true
            fin.isCompleted = !fin.isCompleted;
            console.log('done', fin)
            return [...state];

        }

        default:
            return state;


    }
}

// export const remaningTodos = (todos, action) => {
//     switch (action.type) {

//         case DELETE_TODO: {
//             const todoId = action.payload
//             console.log('todoId', todoId)
//            const others =  todos.filter(item => item.id !== todoId);
//            return [...others]
                
//                 // let pos = todos.indexOf(item)
//                 // return todos.splice(pos, 1)
            

//             // todos.splice(todos.findIndex(item => item.id === todoId), 1)
//             // console.log('todos')
//             // return todos;

//         }

//         default:
//             return todos;
//     }
// }