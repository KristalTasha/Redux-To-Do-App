import React, {useState} from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../store/actions/action';
import TodoFormStyle from '../styles/TodoForm.module.css'



const TodoForm = ({allTodos, addTodo}) => {
    const [inputVal, setInput ] = useState('')

  return (
    <form 
    onSubmit={(e) => e.preventDefault()}
    className={TodoFormStyle.todo_form}>
        <input type='text' className={TodoFormStyle.todo_input} value={inputVal} onChange={(e) => setInput(e.target.value)} />
        <button className={TodoFormStyle.submit}
        onClick={() => { addTodo(inputVal); setInput('')}}>Add Task</button>
    </form>
  )
}



const mapStateToProps = (state) => ({
    allTodos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: text => dispatch(createTodo(text))
})

//connect 'connects' the store to the component TodoForm
//connect accepts 2 arguments; what will fetch the data from the store and what will dispatch actions to the reducer
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);