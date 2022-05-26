import React from 'react'
import TodoForm from './TodoForm'
import ListItem from './ListItem'
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

`

const ListCont = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 2em;

`

export default function TodoList({ todos = [{ text: 'jogging' }] }) {
    return (
        <ListCont>
            <TodoForm />
            <ListWrapper>
                {todos.map((todo, key) => (
                    <ListItem task={todo} key={key} />
                ))}
            </ListWrapper>

        </ListCont>
    )
}
