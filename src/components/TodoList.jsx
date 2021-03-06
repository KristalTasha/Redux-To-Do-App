import React, {useEffect} from 'react'
import TodoForm from './TodoForm'
import ListItem from './ListItem'
import { fetchTodos } from '../store/thunk/thunk';
import { getTodosData, getTodosLoading, completedTodos, incompletedTodos } from '../store/selectors/selector';
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

const TodoList = ({ allTodos, getTodoItems, loader, compTodos, inCompTodos }) => {
    // console.log('the data', allTodos)
    console.log('loading state---', loader)
    useEffect(() => {
        getTodoItems()
        
    }, [])

    return (
        <ListCont>
            <TodoForm />


            {
              
              //you can add a spinner component from reactstrap here
              loader ? <ListWrapper>Loading...</ListWrapper> :

                allTodos.length !== 0
                    ?
                    <ListWrapper>
                        {/* {allTodos.map((todo) => (
                            <ListItem task={todo} key={todo.id} />
                        ))} */}
                        
                        <h4>Completed</h4>
                        {compTodos.map((todo) => (
                            <ListItem task={todo} key={todo.id} />
                        ))}

                        <h4>Pending</h4>
                        {inCompTodos.map((todo) => (  
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



//fetching todos from state
// const mapStateToProps = (state) => ({
//     allTodos: state.todos
// })

//fetching todos from thunk and axios
const mapDispatchToProps = (dispatch) => ({
    getTodoItems: () => dispatch(fetchTodos())
})

// const mapStateToProps = (state) => ({
//     allTodos: state.todos.data,
//     loader: state.todos.loading
// })

const mapStateToProps = (state) => ({
    allTodos: getTodosData(state),
    loader: getTodosLoading(state),
    compTodos: completedTodos(state),
    inCompTodos: incompletedTodos(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);