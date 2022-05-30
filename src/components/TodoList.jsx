import React from 'react'
import TodoForm from './TodoForm'
import ListItem from './ListItem'
import { connect } from 'react-redux';
import styled from 'styled-components'


const ListWrapper = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
background-color: rgba(255, 255, 255, 0.4);
align-self: center;
// padding: 2%;
padding-top: 2em;
padding-bottom: 2em;
border-radius: 5px;
gap: 1em;

`

const ListCont = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 2em;

`

const TodoList = ({ allTodos }) => {
    console.log(allTodos)

    return (
        <ListCont>
            <TodoForm />
            {
                allTodos.length !== 0
                    ?
                    <ListWrapper>
                        {allTodos.map((todo) => (
                            <ListItem task={todo} key={todo.id} />
                        ))}
                    </ListWrapper>
                    :
                    <ListWrapper>
                     <p>No items to display</p>
                     </ListWrapper>
            
            }


        </ListCont>
    )
}



const mapStateToProps = (state) => ({
    allTodos: state.todos
})

export default connect(mapStateToProps)(TodoList);