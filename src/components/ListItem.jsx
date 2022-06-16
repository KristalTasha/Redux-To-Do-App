import  React from 'react'
// import { deleteTodo, completeTodo } from '../store/actions/action';
import { connect } from 'react-redux';
import { removeTodo, updateTodo } from '../store/thunk/thunk';
// import { bindActionCreators } from 'redux';
import '../styles/ListItem.css';
import styled, { css } from 'styled-components';


const Item = styled.div`
display: flex;
width: 85%;
height: 2em;
align-items: center;
gap: 1em;
justify-content: space-between;
border-bottom: solid 1px grey;
border-left: solid 1px grey;
border-bottom-left-radius: 5px;
padding: 3px;
padding-left: 10px;
// background-color: rgba(255, 255, 255, 0.6)

`

const TaskText = styled.p`

`

const Button = styled.button`
border: none;
padding: 8px;
cursor: pointer;
border-radius: 4px;
font-size: 0.6em;
color: white;

${props => props.status && css`
    background-color: green;

`}

${props => props.delete && css`
    background-color: crimson;
    
`}

`

const BtnCont = styled.div`
display: flex;
gap: 0.5em;

`



const ListItem = ({ task, delTodo, doneTodo, allTodos }) => {
  

    return (
        <Item>
            <TaskText>{task.text}</TaskText>
            <BtnCont>
                { task.isCompleted === false ?
                    <Button status onClick={() => { doneTodo(task.id); allTodos()}}>Pending</Button>
                    :
                    <Button status onClick={() => { doneTodo(task.id); allTodos()}}>Completed</Button>
                }

                <Button delete onClick={() => { delTodo(task.id); console.log('delTodo run') }}>Delete</Button>
            </BtnCont>

        </Item>
    )
}


const mapStateToProps = (state) => ({
    allTodos: () => state.todos.data
})

//original delete function
const mapDispatchToProps = (dispatch) => ({
    
    // delTodo: id => dispatch(deleteTodo(id)),
    delTodo: id => dispatch(removeTodo(id)),
    doneTodo: (todoId) => dispatch(updateTodo(todoId))
    
})

//including thunk
// const mapDispatchToProps = (dispatch) => ({
    
//     delTodo: () => dispatch(fetchTodos()),
//     doneTodo: (todoId) => dispatch(completeTodo(todoId))
    
// })
    
  

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);