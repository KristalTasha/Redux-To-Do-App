import axios from 'axios';
import { getTodos, createTodo, deleteTodo, completeTodo, loadingTodos, loadSuccess, loadFailure } from '../actions/action';



export const fetchTodos = () => async (dispatch, getState) => {
    try {

        // fetching todos from a json placeholder url
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users')

        dispatch(loadingTodos())

        //fetching from locahlost
        const response = await axios.get('http://localhost:7070/todos')
        //console.log('the response', response)
        // dispatch({ type: FETCH_TODOS, payload: response.data });
        dispatch(getTodos(response.data));

        //
        dispatch(loadSuccess())
        //console.log('this is the state', getState());

    } catch (error) {
        dispatch(loadFailure());
        console.log(error)
    }

}

export const addNewTodo = (text) => async (dispatch) => {
    try{
        const response = await axios.post('http://localhost:7070/addTodos', {
            text
        })
       const { data } = response;
        //console.log('the post response', response)

        dispatch(createTodo(data));
        
    } catch (error){
        console.log('post error---', error)
    }
   
}

export const removeTodo = (id) => async (dispatch) => {
    try{
        const response = await axios.delete(`http://localhost:7070/deleteTodo/${id}`)


        //console.log('id', id)
        dispatch(deleteTodo(id));

    } catch(error){
        console.log('delete error---', error)
    }
}

export const updateTodo = (id) => async (dispatch) => {
    try{
        const response = await axios.put(`http://localhost:7070/updateTodo/${id}`)

        const { data } = response;

        dispatch(completeTodo(id))

    } catch(error){
        console.log('update error---', error)
    }
}