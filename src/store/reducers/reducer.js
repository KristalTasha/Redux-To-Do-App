import {
    CREATE_TODO, DELETE_TODO, COMPLETE_TODO, FETCH_TODOS,
    TODOS_LOADING, TODOS_SUCCESS, TODOS_FAILURE
} from '../actions/action'


// const initialState = { data: [], loading: false}

export const todos = (state = { data: [], loading: false, errorMsg: null }, action) => {
    switch (action.type) {

        case CREATE_TODO: {
            console.log('action createTodo', action)
            return {
                ...state,
                data: [...state.data, action.payload.text]
            }

            // [...state, action.payload.text]
            // const newTodo = action.payload
            // console.log('reducer newTodo', newTodo);
            // return [...state, newTodo]
        }

        case DELETE_TODO: {
            const todoId = action.payload
            console.log('todoId', todoId)

            //using updated state
            let theRest = state.data
            console.log('the rest', theRest)
            theRest.splice(theRest.findIndex(item => item.id === todoId), 1)
            return {
                ...state,
                data: [...theRest]
            }

            //using filter
            //  const others =  state.filter(item => item.id !== todoId);
            //  return [...others]

            //using splice
            // state.splice(state.findIndex(item => item.id === todoId), 1)
            // console.log('todos')
            // return [...state]



        }

        case COMPLETE_TODO: {
            const todoId = action.payload.id
            // const finished = state.filter(item => item.id === todoId);
            // const fin = finished[0]
            // // fin.isCompleted === true ? fin.isCompleted = false : fin.isCompleted = true
            // fin.isCompleted = !fin.isCompleted;
            // console.log('done', fin)
            // return [...state];

            const finished = state.data.filter(item => item.id === todoId)
            const fin = finished[0]
            fin.isCompleted = !fin.isCompleted;
            return {
                ...state
            }

        }

        // case FETCH_TODOS: {
        //     // console.log('the data', action.payload.data);

        //     return {
        //         ...state,
        //         loading: false,
        //         data: action.payload.data
        //     }

        //     // return action.payload.data;
        // }


        
        case TODOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload.data
            }
            
        }

        case TODOS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }


        case TODOS_FAILURE: {
            return {
                ...state,
                loading: false,
                errorMsg: action.payload.errorMsg
            }
        }

        default:
            return state;


    }
}


// export const loading = (isLoading = false, action) => {
//     switch(action.type){
//         case TODOS_LOADING: {
//             return isLoading = true;
//         }

//         case TODOS_SUCCESS: {
//             return  isLoading = false
//                 //data: action.payload.todos
//             //};
//         }

//         case TODOS_FAILURE: {
//             return isLoading = false;
//         }

//         default:
//             return isLoading
//     }
// }
